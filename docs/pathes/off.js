exports.offPath = {
  "/off": {
    get: {
      summary: "Get All Offs",
      tags: ["Off"],
      responses: {
        200: {
          description: "All offs",
        },
        500: {
          description: "Server Error",
        },
      },
    },
    post: {
      summary: "Add New Off",
      tags: ["Off"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: "",
            },
          },
        },
      },
      responses: {
        201: {
          description: "Added Successfully",
        },
        500: {
          description: "Server Error",
        },
      },
    },
  },
};
