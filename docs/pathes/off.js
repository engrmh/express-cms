exports.offPath = {
  "/offs": {
    get: {
      summary: "Get All Offs",
      tags: ["Offs"],
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
      tags: ["Offs"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: [""],
              properties: {},
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
  "offs/setAll": {
    post: {
      summary: "Set Discount To all Courses",
      tags: ["Offs"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["discount"],
              properties: {
                discount: {
                  type: "string",
                  example: "20",
                },
              },
            },
          },
        },
      },
      response: {
        200: {
          description: "Discount Seted On All Courses",
        },
        500: {
          description: "Server Error",
        },
      },
    },
  },
  "/offs/{code}": {
    post: {
      summary: "Get A code",
      tags: ["Offs"],
      parameters: [
        {
          in: "path",
          name: "code",
          schema: {
            type: "string",
          },
        },
      ],
      responses: {
        200: {
          description: "",
        },
        400: {
          description: "Code not valid!!",
        },
        500: {
          description: "Server Error",
        },
      },
    },
  },
  "/offs/{id}": {
    delete: {
      summary: "Delete a Code",
      tags: ["Offs"],
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
          description: "Code deleted successfully",
        },
        400: {
          description: "Code not valid!!",
        },
        500: {
          description: "Server Error",
        },
      },
    },
  },
};
