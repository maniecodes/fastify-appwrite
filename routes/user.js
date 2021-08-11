const { getUsers } = require("../services/user");

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
  handler: getUsers,
};


module.exports = { getUserOpts };


