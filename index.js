"use strict";

const fp = require("fastify-plugin");
const { getUsers } = require("./services/user");

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
  try {
    fastify.decorate("getUser", getUsers);

    // what is returned is the handler

    fastify.decorate("postUser", () => {
      return "decorated";
    });

    done();
  } catch (error) {
    done(error);
  }
}

module.exports = fp(plugin, { fastify: "^3.0.0" });
