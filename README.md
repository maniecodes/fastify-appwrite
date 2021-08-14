# Fastify Plugin for Appwrite

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)

Supports Fastify versions `3.x`

**This SDK is compatible with Appwrite server version 0.9.x.**

> This is the Fastify Plugin for integrating with Appwrite from your Fastify server-side code.

Appwrite is an open-source backend as a service server that abstract and simplify complex and repetitive development tasks behind a very simple to use REST API. Appwrite aims to help you develop your apps faster and in a more secure way. Use the Node.js SDK to integrate your app with the Appwrite server to easily start interacting with all of Appwrite backend APIs and tools. For full API documentation and tutorials go to [https://appwrite.io/docs](https://appwrite.io/docs)

![Appwrite](https://appwrite.io/images/github.png)

## Installation

To install via [NPM](https://www.npmjs.com/):

```bash
npm install fastify-appwrite --save
```

## Usage

Require `fastify-appwrite` and register.

```js
const fastify = require("fastify")();

fastify.register(require("fastify-appwrite"), {
  // put your options here
});

const start = async () => {
  await fastify.ready();

  try {
    await fastify.listen(3000);
    await fastify.client
      .setEndpoint("https://[HOSTNAME_OR_IP]/v1") // Your API Endpoint
      .setProject("5df5acd0d48c2") // Your project ID
      .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key
      .setSelfSigned(); // Use only on dev mode with a self-signed SSL cert
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();
```

### Make Your First Request

Once your fastify plugin is set, create any of the Appwrite service objects and choose any request to send. Full documentation for any service method you would like to use can be found in the [API References](https://appwrite.io/docs) section.

```js
// User Schema
const User = {
  type: "object",
  properties: {
    $id: { tpye: "string" },
    name: { type: "string" },
    registration: { type: "number" },
    status: { type: "number" },
    email: { type: "string" },
    emailVerification: { type: "boolean" },
  },
};

// Create a user Schema
const postUserOpts = {
  schema: {
    body: {
      type: "object",
      required: ["email", "password"],
      properties: {
        email: { type: "string" },
        password: { type: "string" },
        name: { type: "string" },
      },
    },
    response: {
      201: User,
    },
  },
};

// Get all users Schema
const getUsersOpts = {
  schema: {
    response: {
      200: {
        type: "array",
        items: User,
      },
    },
  },
};

async function userRoutes(fastify, opts) {
  fastify.post("/users", postUserOpts, async (req, reply) => {
    const { email, password, name } = req.body;
    const result = await fastify.user.create(email, password, name);
    if (result.status != 201) {
      return reply.code(result.status).send(result.data);
    }
    reply.code(result.status).send(result.response);
  });

  fastify.get("/users", getUsersOpts, async (req, reply) => {
    const result = await fastify.user.list();
    reply.code(result.status).send(result.response.users);
  });
}

module.exports = userRoutes;
```

### Error Handling

The Appwrite Fastify plugin raises `AppwriteException` object with `message`, `code` and `response` properties. You can handle any errors by catching `AppwriteException` and present the `message` to the user or handle it yourself based on the provided error information. Below is an example.

```js
try {
  let res = await fastify.users.create("email@example.com", "password");
} catch (e) {
  console.log(e.message);
}
```

## License

Licensed under [MIT](./LICENSE).<br/>
