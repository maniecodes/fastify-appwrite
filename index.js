"use strict";

const fp = require("fastify-plugin");
const { getUsers, postUsers } = require("./lib/services/user");
const Client = require("./lib/client");
const Users = require("./lib/services/users");

const getUserOpts = {
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          id: { type: "string" },
          name: { type: "string" },
        },
      },
    },
  },
  handler: (req, reply) => {
    reply.send("decorated");
  },
};

function plugin(fastify, opts, done) {
  const client = new Client();
  const user = new Users(client);
  try {
    fastify.decorate("client", client);
    fastify.decorate("user", user);
    fastify.decorate("getUser", getUsers);
    fastify.decorate("postUser", postUsers);

    done();
  } catch (error) {
    done(error);
  }
}

module.exports = fp(plugin, { fastify: "^3.0.0" });
