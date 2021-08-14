"use strict";

const fp = require("fastify-plugin");
const Client = require("./lib/client");
const Account = require("./lib/services/account");
const Users = require("./lib/services/users");

function plugin(fastify, opts, done) {
  const client = new Client();
  const user = new Users(client);
  const account = new Account(client);
  try {
    fastify.decorate("client", client);
    fastify.decorate("user", user);
    fastify.decorate("account", account);

    done();
  } catch (error) {
    done(error);
  }
}

module.exports = fp(plugin, { fastify: "^3.0.0" });
