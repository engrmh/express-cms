exports.userPath = {
  "/users": {
    get: {
      summary: "Get All Users",
      tags: ["Users"],
      responses: {
        200: {
          description: "Users Data",
        },
        500: {
          description: "Server Error",
        },
      },
    },
    put: {
      summary: "Update User",
      tags: ["Users"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["name", "username", "email", "password", "phone"],
              properties: {
                name: {
                  type: "string",
                  example: "John Doe",
                },
                username: {
                  type: "string",
                  example: "JohnDoe",
                },
                email: {
                  type: "string",
                  example: "sample@domain.com",
                },
                phone: {
                  type: "string",
                  example: "09119111234",
                },
                password: {
                  type: "string",
                  example: "12345678",
                },
              },
            },
          },
        },
      },
      responses: {
        201: {
          description: "User Updated Successfully",
        },
        500: {
          description: "Server Error",
        },
      },
    },
  },
  "/users/{id}": {
    delete: {
      summary: "Delete User",
      tags: ["Users"],
      parameters: [
        {
          in: "path",
          name: "id",
          schema: {
            type: "string",
          },
        },
      ],
      responses: {
        200: {
          description: "User Removed Successfully",
        },
        404: {
          description: "User Not Found!!",
        },
        409: {
          description: "User ID Not Valid!!",
        },
        500: {
          description: "Server Error",
        },
      },
    },
  },
  "/users/role": {
    put: {
      summary: "Change User Role",
      tags: ["Users"],
      parameters: [
        {
          in: "path",
          name: "id",
          schema: {
            type: "string",
          },
        },
      ],
      responses: {
        200: {
          description: "User Role Updated Successfully",
        },
        404: {
          description: "User Not Found!!",
        },
        409: {
          description: "User ID Not Valid!!",
        },
        500: {
          description: "Server Error",
        },
      },
    },
  },
  "/users/ban/{id}": {
    post: {
      summary: "Ban A User",
      tags: ["Users"],
      parameters: [
        {
          in: "path",
          name: "id",
          schema: {
            type: "string",
          },
        },
      ],
      responses: {
        200: {
          description: "User Baned Successfully",
        },
        404: {
          description: "User Not Found!!",
        },
        409: {
          description: "User ID Not Valid!!",
        },
        500: {
          description: "Server Error",
        },
      },
    },
  },
};
