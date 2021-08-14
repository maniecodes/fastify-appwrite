"use strict";

const fp = require("fastify-plugin");
const Client = require("./lib/client");
const Users = require("./lib/services/users");
const Account = require("./lib/services/account");
const Database = require("./lib/services/database");
const Teams = require("./lib/services/teams");

function plugin(fastify, opts, done) {
  const client = new Client();
  const user = new Users(client);
  const account = new Account(client);
  const database = new Database(client);
  const teams = new Teams(client);

  try {
    fastify.decorate("client", client);
    fastify.decorate("user", user);
    fastify.decorate("account", account);
    fastify.decorate("database", database);
    fastify.decorate("teams", teams);

    done();
  } catch (error) {
    done(error);
  }
}

module.exports = fp(plugin, { fastify: "^3.0.0" });
