exports.categoryPath = {
  "/category": {
    post: {
      summary: "Create Category",
      tags: ["Category"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["title", "href"],
              properties: {
                title: {
                  type: "string",
                  example: "بکند",
                },
                href: {
                  type: "string",
                  example: "backend",
                },
              },
            },
          },
        },
      },
      responses: {
        201: {
          description: "Category Created Successfully",
        },
        500: {
          description: "Server Error",
        },
      },
    },
    get: {
      summary: "Get All Category",
      tags: ["Category"],
      responses: {
        200: {
          description: "All Category",
        },
        500: {
          description: "Server Error",
        },
      },
    },
  },
  "/category/{id}": {
    put: {
      summary: "Update Category",
      tags: ["Category"],
      parameters: [
        {
          in: "path",
          name: "id",
          schema: {
            type: "string",
          },
        },
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["title", "href"],
              properties: {
                title: {
                  type: "string",
                  example: "بکند",
                },
                href: {
                  type: "string",
                  example: "backend",
                },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: "Updated Successfully",
        },
        404: {
          description: "Category Not Found!!",
        },
        409: {
          description: "Category ID Not Valid!!",
        },
        500: {
          description: "Server Error",
        },
      },
    },
    delete: {
      summary: "Update Category",
      tags: ["Category"],
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
          description: "Deleted Successfully",
        },
        404: {
          description: "Category Not Found!!",
        },
        409: {
          description: "Category ID Not Valid!!",
        },
        500: {
          description: "Server Error",
        },
      },
    },
  },
};
