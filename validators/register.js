const Validator = require("fastest-validator");

const v = new Validator();

const schema = {
  name: { type: "string", min: 3, max: 255 },
  username: { type: "string", min: 3, max: 100 },
  email: { type: "email", min: 10, max: 100 },
  password: { type: "string", min: 8, max: 24 },
  phone: { type: "string", min: 11, max: 11 },
  confirmPassword: { type: "equal", field: "password" },
  $$strict: true,
};

const registerValidator = v.compile(schema);

module.exports = registerValidator;
