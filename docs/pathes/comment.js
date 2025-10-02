exports.commentPath = {
  "/comment": {
    post: {
      summary: "Add Comment",
      tags: ["Comments"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["body", "courseHref", "score"],
              properties: {
                body: {
                  type: "string",
                  example: "User Message",
                },
                courseHref: {
                  type: "string",
                  example: "node",
                },
                score: {
                  type: "number",
                  example: 5,
                },
              },
            },
          },
        },
      },
      responses: {
        201: {
          description: "Comment Created Successfully",
        },
        500: {
          description: "Server Error",
        },
      },
    },
    get: {
      summary: "Get All Comment",
      tags: ["Comments"],
      responses: {
        201: {
          description: "Comments",
        },
        500: {
          description: "Server Error",
        },
      },
    },
  },
  "/comment/{id}": {
    delete: {
      summary: "Delete a comment",
      tags: ["Comments"],
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
  "/comment/{id}/accept": {
    put: {
      summary: "Accept a comment",
      tags: ["Comments"],
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
  "/comment/{id}/reject": {
    put: {
      summary: "Reject a comment",
      tags: ["Comments"],
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
  "/comment/{id}/answer": {
    post: {
      summary: "Answer to a comment",
      tags: ["Comments"],
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
              required: ["body"],
              properties: {
                body: {
                  type: "string",
                  example: "User Message",
                },
              },
            },
          },
        },
      },
    },
  },
};
