const { test } = require("tap");

test("testing client", async (t) => {
  t.plan(1);

  const app = require("fastify")();

  app.register(require(".."));

  await app.ready();

  console.log(app.hasDecorator("client"));

  t.same(app.client, {
    endpoint: "https://appwrite.io/v1",
    headers: {
      "content-type": "",
      "x-sdk-version": "appwrite:nodejs:2.4.0",
      "X-Appwrite-Response-Format": "0.9.0",
    },
    selfSigned: false,
  });
});

test("testing user already exist", async (t) => {
  let res = null;
  t.plan(1);

  const app = require("fastify")();

  app.register(require(".."));

  await app.ready();

  app.client
    .setEndpoint("http://localhost:4003/v1")
    .setProject("611274fe2b683")
    .setKey(
      "85dfd135face9124586ac3ece5b5ed6452f304f95a0f24e3022a57d0818d4ae5c171dd85e367ab32c606344b2b927e31cf596b59d069ae9b34120c36642d7a0df6730e3b82638d7967586ee2a8ed59f9db67dc4ec3e64d3067f6e9000799275f3bdbdb65d5bf0b54ddd31facaeb77bea62d0a5974a647587bbcc785e7f81935f"
    );

  res = await app.user.create("nuth@gmail.com", "Zamanie93", "manasseh");

  t.same(res.status, 409);
});

test("Create a new user", async (t) => {
  let res = null;
  t.plan(1);

  const app = require("fastify")();

  app.register(require(".."));

  await app.ready();

  app.client
    .setEndpoint("http://localhost:4003/v1")
    .setProject("611274fe2b683")
    .setKey(
      "85dfd135face9124586ac3ece5b5ed6452f304f95a0f24e3022a57d0818d4ae5c171dd85e367ab32c606344b2b927e31cf596b59d069ae9b34120c36642d7a0df6730e3b82638d7967586ee2a8ed59f9db67dc4ec3e64d3067f6e9000799275f3bdbdb65d5bf0b54ddd31facaeb77bea62d0a5974a647587bbcc785e7f81935f"
    );

  res = await app.user.create("nutdh@gmail.com", "Zamanie93", "manasseh");

  t.same(res.status, 201);
});

test("Get a user", async (t) => {
  let res = null;
  t.plan(1);

  const app = require("fastify")();

  app.register(require(".."));

  await app.ready();

  app.client
    .setEndpoint("http://localhost:4003/v1")
    .setProject("611274fe2b683")
    .setKey(
      "85dfd135face9124586ac3ece5b5ed6452f304f95a0f24e3022a57d0818d4ae5c171dd85e367ab32c606344b2b927e31cf596b59d069ae9b34120c36642d7a0df6730e3b82638d7967586ee2a8ed59f9db67dc4ec3e64d3067f6e9000799275f3bdbdb65d5bf0b54ddd31facaeb77bea62d0a5974a647587bbcc785e7f81935f"
    );

  res = await app.user.get("611430663d26c");
  console.log(res);

  t.same(res.status, 200);
});

test("Delete a user", async (t) => {
  let res = null;
  t.plan(1);

  const app = require("fastify")();

  app.register(require(".."));

  await app.ready();

  app.client
    .setEndpoint("http://localhost:4003/v1")
    .setProject("611274fe2b683")
    .setKey(
      "85dfd135face9124586ac3ece5b5ed6452f304f95a0f24e3022a57d0818d4ae5c171dd85e367ab32c606344b2b927e31cf596b59d069ae9b34120c36642d7a0df6730e3b82638d7967586ee2a8ed59f9db67dc4ec3e64d3067f6e9000799275f3bdbdb65d5bf0b54ddd31facaeb77bea62d0a5974a647587bbcc785e7f81935f"
    );

  res = await app.user.delete("611430e8c762e");
  console.log(res);

  t.same(res.status, 204);
});

test("Get User Logs", async (t) => {
  let res = null;
  t.plan(1);

  const app = require("fastify")();

  app.register(require(".."));

  await app.ready();

  app.client
    .setEndpoint("http://localhost:4003/v1")
    .setProject("611274fe2b683")
    .setKey(
      "85dfd135face9124586ac3ece5b5ed6452f304f95a0f24e3022a57d0818d4ae5c171dd85e367ab32c606344b2b927e31cf596b59d069ae9b34120c36642d7a0df6730e3b82638d7967586ee2a8ed59f9db67dc4ec3e64d3067f6e9000799275f3bdbdb65d5bf0b54ddd31facaeb77bea62d0a5974a647587bbcc785e7f81935f"
    );

  res = await app.user.getLogs("611430663d26c");
  console.log(res);

  t.same(res.status, 200);
});

test("Get User Prefs", async (t) => {
  let res = null;
  t.plan(1);

  const app = require("fastify")();

  app.register(require(".."));

  await app.ready();

  app.client
    .setEndpoint("http://localhost:4003/v1")
    .setProject("611274fe2b683")
    .setKey(
      "85dfd135face9124586ac3ece5b5ed6452f304f95a0f24e3022a57d0818d4ae5c171dd85e367ab32c606344b2b927e31cf596b59d069ae9b34120c36642d7a0df6730e3b82638d7967586ee2a8ed59f9db67dc4ec3e64d3067f6e9000799275f3bdbdb65d5bf0b54ddd31facaeb77bea62d0a5974a647587bbcc785e7f81935f"
    );

  res = await app.user.getPrefs("611430663d26c");
  console.log(res);

  t.same(res.status, 200);
});

test("Update User Prefs", async (t) => {
  let res = null;
  t.plan(1);

  const app = require("fastify")();

  app.register(require(".."));

  await app.ready();

  app.client
    .setEndpoint("http://localhost:4003/v1")
    .setProject("611274fe2b683")
    .setKey(
      "85dfd135face9124586ac3ece5b5ed6452f304f95a0f24e3022a57d0818d4ae5c171dd85e367ab32c606344b2b927e31cf596b59d069ae9b34120c36642d7a0df6730e3b82638d7967586ee2a8ed59f9db67dc4ec3e64d3067f6e9000799275f3bdbdb65d5bf0b54ddd31facaeb77bea62d0a5974a647587bbcc785e7f81935f"
    );

  res = await app.user.getPrefs("611430663d26c");
  console.log(res);

  t.same(res.status, 200);
});

test("Get user session", async (t) => {
  let res = null;
  t.plan(1);

  const app = require("fastify")();

  app.register(require(".."));

  await app.ready();

  app.client
    .setEndpoint("http://localhost:4003/v1")
    .setProject("611274fe2b683")
    .setKey(
      "85dfd135face9124586ac3ece5b5ed6452f304f95a0f24e3022a57d0818d4ae5c171dd85e367ab32c606344b2b927e31cf596b59d069ae9b34120c36642d7a0df6730e3b82638d7967586ee2a8ed59f9db67dc4ec3e64d3067f6e9000799275f3bdbdb65d5bf0b54ddd31facaeb77bea62d0a5974a647587bbcc785e7f81935f"
    );

  res = await app.user.getSessions("611430663d26c");
  console.log(res);

  t.same(res.status, 200);
});

test("Delete user session", async (t) => {
  let res = null;
  t.plan(1);

  const app = require("fastify")();

  app.register(require(".."));

  await app.ready();

  app.client
    .setEndpoint("http://localhost:4003/v1")
    .setProject("611274fe2b683")
    .setKey(
      "85dfd135face9124586ac3ece5b5ed6452f304f95a0f24e3022a57d0818d4ae5c171dd85e367ab32c606344b2b927e31cf596b59d069ae9b34120c36642d7a0df6730e3b82638d7967586ee2a8ed59f9db67dc4ec3e64d3067f6e9000799275f3bdbdb65d5bf0b54ddd31facaeb77bea62d0a5974a647587bbcc785e7f81935f"
    );

  res = await app.user.getSessions("611430663d26c");
  console.log(res);

  t.same(res.status, 200);
});

test("Update user status", async (t) => {
  let res = null;
  t.plan(1);

  const app = require("fastify")();

  app.register(require(".."));

  await app.ready();

  app.client
    .setEndpoint("http://localhost:4003/v1")
    .setProject("611274fe2b683")
    .setKey(
      "85dfd135face9124586ac3ece5b5ed6452f304f95a0f24e3022a57d0818d4ae5c171dd85e367ab32c606344b2b927e31cf596b59d069ae9b34120c36642d7a0df6730e3b82638d7967586ee2a8ed59f9db67dc4ec3e64d3067f6e9000799275f3bdbdb65d5bf0b54ddd31facaeb77bea62d0a5974a647587bbcc785e7f81935f"
    );

  res = await app.user.updateStatus("611430663d26c", 1);
  console.log(res);

  t.same(res.status, 200);
});

test("Update user verification", async (t) => {
  let res = null;
  t.plan(1);

  const app = require("fastify")();

  app.register(require(".."));

  await app.ready();

  app.client
    .setEndpoint("http://localhost:4003/v1")
    .setProject("611274fe2b683")
    .setKey(
      "85dfd135face9124586ac3ece5b5ed6452f304f95a0f24e3022a57d0818d4ae5c171dd85e367ab32c606344b2b927e31cf596b59d069ae9b34120c36642d7a0df6730e3b82638d7967586ee2a8ed59f9db67dc4ec3e64d3067f6e9000799275f3bdbdb65d5bf0b54ddd31facaeb77bea62d0a5974a647587bbcc785e7f81935f"
    );

  res = await app.user.updateVerification("611430663d26c", false);
  console.log(res);

  t.same(res.status, 200);
});
