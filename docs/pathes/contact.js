exports.contactPath = {
  "/contact": {
    post: {
      summary: "Add Contact",
      tags: ["Contacts"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["name", "email", "phone", "body"],
              properties: {
                name: {
                  type: "string",
                  example: "User Name",
                },
                email: {
                  type: "string",
                  example: "example@domain.com",
                },
                phone: {
                  type: "string",
                  example: "09123456789",
                },
                body: {
                  type: "string",
                  example: "Hi",
                },
              },
            },
          },
        },
      },
      responses: {
        201: {
          description: "Message added successfully",
        },
        500: {
          description: "Server Error",
        },
      },
    },
    get: {
      summary: "Get All Contacts",
      tags: ["Contacts"],
      responses: {
        201: {
          description: "Contacts Created Successfully",
        },
        500: {
          description: "Server Error",
        },
      },
    },
  },
  "/contact/{id}": {
    delete: {
      summary: "Delete a conatct",
      tags: ["Contacts"],
      parameters: [
        {
          in: "path",
          name: "id",
          schema: {
            type: "number",
          },
        },
      ],
    },
  },
  "/contact/answer/{id}": {
    post: {
      summary: "Answer to a conatct",
      tags: ["Contacts"],
      parameters: [
        {
          in: "path",
          name: "id",
          schema: {
            type: "number",
          },
        },
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["email", "body"],
              properties: {
                email: {
                  type: "string",
                  example: "example@domain.com",
                },
                body: {
                  type: "string",
                  example: "Hi",
                },
              },
            },
          },
        },
      },
    },
  },
};
