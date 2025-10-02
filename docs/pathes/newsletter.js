exports.newsletterPath = {
  "/newsletter": {
    post: {
      summary: "Add to newsletter",
      tags: ["Newsletter"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["email"],
              properties: {
                email: {
                  type: "string",
                  example: "example@domain.com",
                },
              },
            },
          },
        },
      },
      responses: {
        201: {
          description: "Added to newsletter successfully",
        },
        500: {
          description: "Server Error",
        },
      },
    },
    get: {
      summary: "Get All Newsletter",
      tags: ["Newsletter"],
      responses: {
        201: {
          description: "Newsletter",
        },
        500: {
          description: "Server Error",
        },
      },
    },
  },
};
