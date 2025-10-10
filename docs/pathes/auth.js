exports.authPath = {
  "/auth/register": {
    post: {
      summary: "Register",
      tags: ["Auth"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: [
                "name",
                "username",
                "email",
                "password",
                "phone",
                "confirmPassword",
              ],
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
                confirmPassword: {
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
          description: "User Registerd Successfully",
        },
        409: {
          description: "Username or email is duplicated | Phone Banned",
        },
        422: {
          description: "Register validator error",
        },
        500: {
          description: "Server Error",
        },
      },
    },
  },
  "/auth/login": {
    post: {
      summary: "Login",
      tags: ["Auth"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["identifier", "password"],
              properties: {
                identifier: {
                  type: "string",
                  example: "engrmh24",
                },
                password: {
                  type: "string",
                  example: "123456789",
                },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: "User Loged in Successfully",
        },
        401: {
          description: "Data Not valid",
        },
        401: {
          description: "User Not Found",
        },
        500: {
          description: "Server Error",
        },
      },
    },
  },
  "/auth/getMe": {
    get: {
      summary: "Get User",
      tags: ["Auth"],
      //   requestBody: {
      //     required: true,
      //     content: {
      //       "application/json": {
      //         schema: {
      //           type: "object",
      //           required: ["identifier", "password"],
      //           properties: {
      //             identifier: {
      //               type: "string",
      //               example: "09119111234",
      //             },
      //             password: {
      //               type: "string",
      //               example: "12345678",
      //             },
      //           },
      //         },
      //       },
      //     },
      //   },
      responses: {
        200: {
          description: "",
        },
        401: {
          description: "Data Not valid",
        },
        500: {
          description: "Server Error",
        },
      },
    },
  },
};
