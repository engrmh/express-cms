exports.coursePath = {
  // ✅ GET /courses  |  POST /courses
  "/courses": {
    get: {
      summary: "Get all courses (Admin only)",
      tags: ["Courses"],
      responses: {
        200: { description: "Courses fetched successfully" },
        401: { description: "Unauthorized" },
        403: { description: "Forbidden (Admin only)" },
        500: { description: "Internal server error" },
      },
    },
    post: {
      summary: "Create new course (Admin only)",
      tags: ["Courses"],
      requestBody: {
        required: true,
        content: {
          "multipart/form-data": {
            schema: {
              type: "object",
              required: [
                "title",
                "description",
                "cover",
                "support",
                "href",
                "price",
                "status",
                "discount",
                "category",
              ],
              properties: {
                title: { type: "string" },
                description: { type: "string" },
                cover: {
                  type: "string",
                  format: "binary",
                  description: "Upload cover image",
                },
                support: { type: "string" },
                href: { type: "string" },
                price: { type: "number" },
                status: {
                  type: "string",
                  enum: ["presell", "complated", "inprogress"],
                },
                discount: { type: "number" },
                category: { type: "string" },
              },
            },
          },
        },
      },
      responses: {
        201: { description: "Course created successfully" },
        400: { description: "Invalid input data" },
        401: { description: "Unauthorized" },
        403: { description: "Forbidden (Admin only)" },
        500: { description: "Internal server error" },
      },
    },
  },

  // ✅ GET /courses/sessions
  "/courses/sessions": {
    get: {
      summary: "Get all sessions (Admin only)",
      tags: ["Courses"],
      responses: {
        200: { description: "All sessions fetched successfully" },
        401: { description: "Unauthorized" },
        403: { description: "Forbidden (Admin only)" },
        500: { description: "Internal server error" },
      },
    },
  },

  // ✅ GET /courses/populate
  "/courses/populate": {
    get: {
      summary: "Get courses with populated data (Admin only)",
      tags: ["Courses"],
      responses: {
        200: { description: "Populated courses fetched successfully" },
        401: { description: "Unauthorized" },
        403: { description: "Forbidden (Admin only)" },
        500: { description: "Internal server error" },
      },
    },
  },

  // ✅ GET /courses/category/{href}
  "/courses/category/{href}": {
    get: {
      summary: "Get courses by category href",
      tags: ["Courses"],
      parameters: [
        {
          name: "href",
          in: "path",
          required: true,
          schema: { type: "string" },
        },
      ],
      responses: {
        200: { description: "Courses fetched by category" },
        404: { description: "Category not found" },
        500: { description: "Internal server error" },
      },
    },
  },

  // ✅ POST /courses/{id}/sessions
  "/courses/{id}/sessions": {
    post: {
      summary: "Add session to a course (Admin only)",
      tags: ["Courses"],
      parameters: [
        { name: "id", in: "path", required: true, schema: { type: "string" } },
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["title", "time", "free", "video"],
              properties: {
                title: { type: "string" },
                time: { type: "string" },
                free: {
                  type: "number",
                  enum: [0, 1],
                  description: "0 = not free, 1 = free",
                },
                video: { type: "string" },
              },
            },
          },
        },
      },
      responses: {
        201: { description: "Session created successfully" },
        401: { description: "Unauthorized" },
        403: { description: "Forbidden (Admin only)" },
        404: { description: "Course not found" },
        500: { description: "Internal server error" },
      },
    },
  },

  // ✅ GET /courses/{href}/{sessionId}
  "/courses/{href}/{sessionId}": {
    get: {
      summary: "Get a specific session info by href and sessionId",
      tags: ["Courses"],
      parameters: [
        {
          name: "href",
          in: "path",
          required: true,
          schema: { type: "string" },
        },
        {
          name: "sessionId",
          in: "path",
          required: true,
          schema: { type: "string" },
        },
      ],
      responses: {
        200: { description: "Session info fetched successfully" },
        404: { description: "Session not found" },
        500: { description: "Internal server error" },
      },
    },
  },

  // ✅ DELETE /courses/session/{id}
  "/courses/session/{id}": {
    delete: {
      summary: "Delete session (Admin only)",
      tags: ["Courses"],
      parameters: [
        { name: "id", in: "path", required: true, schema: { type: "string" } },
      ],
      responses: {
        200: { description: "Session deleted successfully" },
        401: { description: "Unauthorized" },
        403: { description: "Forbidden (Admin only)" },
        404: { description: "Session not found" },
        500: { description: "Internal server error" },
      },
    },
  },

  // ✅ POST /courses/{id}/register
  "/courses/{id}/register": {
    post: {
      summary: "Register user for a course",
      tags: ["Courses"],
      parameters: [
        { name: "id", in: "path", required: true, schema: { type: "string" } },
      ],
      responses: {
        200: { description: "User registered successfully" },
        400: { description: "Already registered or invalid data" },
        401: { description: "Unauthorized" },
        404: { description: "Course not found" },
        500: { description: "Internal server error" },
      },
    },
  },

  // ✅ DELETE + PUT /courses/{id}
  "/courses/{id}": {
    delete: {
      summary: "Delete course (Admin only)",
      tags: ["Courses"],
      parameters: [
        { name: "id", in: "path", required: true, schema: { type: "string" } },
      ],
      responses: {
        200: { description: "Course deleted successfully" },
        401: { description: "Unauthorized" },
        403: { description: "Forbidden (Admin only)" },
        404: { description: "Course not found" },
        500: { description: "Internal server error" },
      },
    },
    put: {
      summary: "Update course (Admin only)",
      tags: ["Courses"],
      parameters: [
        { name: "id", in: "path", required: true, schema: { type: "string" } },
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { type: "object" },
          },
        },
      },
      responses: {
        200: { description: "Course updated successfully" },
        401: { description: "Unauthorized" },
        403: { description: "Forbidden (Admin only)" },
        404: { description: "Course not found" },
        500: { description: "Internal server error" },
      },
    },
  },

  // ✅ GET /courses/{href}
  "/courses/{href}": {
    get: {
      summary: "Get single course by href",
      tags: ["Courses"],
      parameters: [
        {
          name: "href",
          in: "path",
          required: true,
          schema: { type: "string" },
        },
      ],
      responses: {
        200: { description: "Course fetched successfully" },
        401: { description: "Unauthorized" },
        404: { description: "Course not found" },
        500: { description: "Internal server error" },
      },
    },
  },
};
