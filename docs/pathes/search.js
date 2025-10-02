exports.searchPath = {
  "/search/{keyword}": {
    get: {
      summary: "Search in courses",
      tags: ["Search"],
      parameters: [
        {
          in: "path",
          name: "keyword",
          schema: {
            type: "string",
          },
        },
      ],
      responses: {
        200: {
          description: "Courses finded successfully",
        },
        500: {
          description: "Server Error",
        },
      },
    },
  },
};
