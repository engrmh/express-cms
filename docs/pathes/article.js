exports.articlePath = {
  "/articles": {
    get: {
      summary: "Get all articles",
      tags: ["Articles"],
      responses: {
        200: {
          description: "Articles fetched successfully",
        },
        401: { description: "Unauthorized" },
        500: { description: "Internal server error" },
      },
    },
    post: {
      summary: "Add new article",
      tags: ["Articles"],
      requestBody: {
        required: true,
        content: {
          "multipart/form-data": {
            schema: {
              type: "object",
              required: [
                "title",
                "description",
                "body",
                "cover",
                "href",
                "categoryId",
              ],
              properties: {
                title: { type: "string" },
                description: { type: "string" },
                body: { type: "string" },
                cover: {
                  type: "string",
                  format: "binary",
                  description: "Upload cover image",
                },
                href: { type: "string" },
                categoryId: { type: "string" },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: "Articles added successfully",
        },
        401: { description: "Unauthorized" },
        500: { description: "Internal server error" },
      },
    },
  },
  "/articles/{id}": {
    put: {
      summary: "Update article",
      tags: ["Articles"],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: { type: "string" },
        },
      ],
      requestBody: {
        required: true,
        content: {
          "multipart/form-data": {
            schema: {
              type: "object",
              required: [
                "title",
                "description",
                "body",
                "cover",
                "href",
                "categoryId",
                "publish",
              ],
              properties: {
                title: { type: "string" },
                description: { type: "string" },
                body: { type: "string" },
                cover: {
                  type: "string",
                  format: "binary",
                  description: "Upload cover image",
                },
                href: { type: "string" },
                categoryId: { type: "string" },
                publish: {
                  type: "boolean",
                },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: "Articles added successfully",
        },
        401: { description: "Unauthorized" },
        500: { description: "Internal server error" },
      },
    },
    delete: {
      summary: "Delete article",
      tags: ["Articles"],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: { type: "string" },
        },
      ],
      responses: {
        200: {
          description: "Articles deleted successfully",
        },
        500: { description: "Internal server error" },
      },
    },
  },
  "/articles/{href}": {
    get: {
      summary: "Get a article",
      tags: ["Articles"],
      parameters: [
        {
          name: "href",
          in: "path",
          required: true,
          schema: { type: "string" },
        },
      ],
      responses: {
        200: {
          description: "Articles Got successfully",
        },
        500: { description: "Internal server error" },
      },
    },
  },
  "/articles/draft": {
    post: {
      summary: "Add new  draft article",
      tags: ["Articles"],
      requestBody: {
        required: true,
        content: {
          "multipart/form-data": {
            schema: {
              type: "object",
              required: [
                "title",
                "description",
                "body",
                "cover",
                "href",
                "categoryId",
              ],
              properties: {
                title: { type: "string" },
                description: { type: "string" },
                body: { type: "string" },
                cover: {
                  type: "string",
                  format: "binary",
                  description: "Upload cover image",
                },
                href: { type: "string" },
                categoryId: { type: "string" },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: "Articles drafted successfully",
        },
        401: { description: "Unauthorized" },
        500: { description: "Internal server error" },
      },
    },
  },
};
