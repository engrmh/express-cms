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
              required: ["code", "percent", "course", "max"],
              properties: {
                code: {
                  type: "string",
                  example: " off200t",
                },
                percent: {
                  type: "number",
                  example: "40",
                },
                course: {
                  type: "string",
                  example: "courseID",
                },
                max: {
                  type: "string",
                  example: "4",
                },
              },
            },
          },
        },
      },
      responses: {
        201: {
          description: "Success",
        },
        400: {
          description: "Bad Request",
        },
        404: {
          description: "Not Found",
        },
        409: {
          description: "Conflict",
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
      responses: {
        200: {
          description: "Success",
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
          in: "query",
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
          in: "query",
          name: "id",
          schema: {
            type: "string",
          },
        },
      ],
      responses: {
        200: {
          description: "Off deleted successfully",
        },
        400: {
          description: "Off not valid!!",
        },
        404: {
          description: "Not Found",
        },
        500: {
          description: "Server Error",
        },
      },
    },
  },
};
