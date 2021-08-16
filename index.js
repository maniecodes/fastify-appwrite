"use strict";

const fp = require("fastify-plugin");
const Client = require("./lib/client");
const Users = require("./lib/services/users");
const Account = require("./lib/services/account");
const Database = require("./lib/services/database");
const Teams = require("./lib/services/teams");
const Storage = require("./lib/services/storage");
const Functions = require("./lib/services/storage");
const Health = require("./lib/services/health");
const Avatars = require("./lib/services/avatars");

function plugin(fastify, opts, done) {
  const client = new Client();
  const user = new Users(client);
  const account = new Account(client);
  const database = new Database(client);
  const teams = new Teams(client);
  const storage = new Storage(client);
  const functions = new Functions(client);
  const health = new Health(client);
  const avatars = new Avatars(client);

  const appwrite = {
    client: client,
    user: user,
    account: account,
    database: database,
    teams: teams,
    storage: storage,
    functions: functions,
    health: health,
    avatars: avatars,
  };

  try {
    fastify.decorate("appwrite", appwrite);

    done();
  } catch (error) {
    done(error);
  }
}

module.exports = fp(plugin, { fastify: "^3.0.0" });
