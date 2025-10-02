exports.notificationPath = {
  "/notification": {
    post: {
      summary: "Add notification",
      tags: ["Notifications"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["message", "admin"],
              properties: {
                message: {
                  type: "string",
                  example: "Hi",
                },
                admin: {
                  type: "string",
                  example: "adminID",
                },
              },
            },
          },
        },
      },
      responses: {
        201: {
          description: "Added notification successfully",
        },
        500: {
          description: "Server Error",
        },
      },
    },
    get: {
      summary: "Get All Notification",
      tags: ["Notifications"],
      responses: {
        201: {
          description: "Notifications",
        },
        500: {
          description: "Server Error",
        },
      },
    },
  },
  "/notification/admin": {
    get: {
      summary: "Get All Addmin Notification",
      tags: ["Notifications"],
      responses: {
        201: {
          description: "Notifications",
        },
        500: {
          description: "Server Error",
        },
      },
    },
  },
  "/notification/{id}/seen": {
    put: {
      summary: "Seen a notification",
      tags: ["Notifications"],
      parameters: [
        {
          in: "path",
          name: "id",
          schema: {
            type: "number",
          },
        },
      ],
      responses: {
        200: {
          description: "Notification marked as seen successfully",
        },
        400: {
          description: "Notifications ID is invalid",
        },
        400: {
          description: "Notifications not found",
        },
        500: {
          description: "Server Error",
        },
      },
    },
  },
  "/notification/{id}/remove": {
    delete: {
      summary: "Delete a notification",
      tags: ["Notifications"],
      parameters: [
        {
          in: "path",
          name: "id",
          schema: {
            type: "number",
          },
        },
      ],
      responses: {
        200: {
          description: "Notification deleted successfully",
        },
        400: {
          description: "Notifications ID is invalid",
        },
        400: {
          description: "Notifications not found",
        },
        500: {
          description: "Server Error",
        },
      },
    },
  },
};
