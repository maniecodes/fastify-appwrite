"use strict";

const fp = require("fastify-plugin");
const Client = require("./lib/client");
const Users = require("./lib/services/users");

function plugin(fastify, opts, done) {
  const client = new Client();
  const user = new Users(client);
  try {
    fastify.decorate("client", client);
    fastify.decorate("user", user);

    done();
  } catch (error) {
    done(error);
  }
}

module.exports = fp(plugin, { fastify: "^3.0.0" });
