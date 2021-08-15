"use strict";

const fp = require("fastify-plugin");
const Client = require("./lib/client");
const Users = require("./lib/services/users");
const Account = require("./lib/services/account");
const Database = require("./lib/services/database");
const Teams = require("./lib/services/teams");
const Storage = require("./lib/services/storage");
const Functions = require("./lib/services/storage");

function plugin(fastify, opts, done) {
  const client = new Client();
  const user = new Users(client);
  const account = new Account(client);
  const database = new Database(client);
  const teams = new Teams(client);
  const storage = new Storage(client);
  const functions = new Functions(client);

  try {
    fastify.decorate("client", client);
    fastify.decorate("user", user);
    fastify.decorate("account", account);
    fastify.decorate("database", database);
    fastify.decorate("teams", teams);
    fastify.decorate("storage", storage);
    fastify.decorate("functions", functions);

    done();
  } catch (error) {
    done(error);
  }
}

module.exports = fp(plugin, { fastify: "^3.0.0" });
