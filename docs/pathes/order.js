exports.orderPath = {
  "/orders": {
    get: {
      summary: "Get user all courses",
      tags: ["Orders"],
      responses: {
        200: {
          description: "User all courses",
        },
        401: {
          description: "Unauthorized",
        },
        500: {
          description: "Error been Occurred",
        },
      },
    },
  },
};
