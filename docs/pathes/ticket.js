exports.ticketPath = {
  "/tickets": {
    get: {
      summary: "Get all tickets",
      tags: ["Tickets"],
      responses: {
        200: {
          description: "All tickets data",
        },
        401: { description: "Unauthorized" },
        500: { description: "Internal server error" },
      },
    },
  },
};
