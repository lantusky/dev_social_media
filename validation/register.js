const Validator = require("validator");
const is_Empty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};
  data.name = !is_Empty(data.name) ? data.name : "";
  data.email = !is_Empty(data.email) ? data.email : "";
  data.password = !is_Empty(data.password) ? data.password : "";
  data.password2 = !is_Empty(data.password2) ? data.password2 : "";

  // Validate name
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  } else if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "Name must be between 2 and 30 Characters";
  }

  // Validate email
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is inValid";
  }

  // Validate password
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  } else if (!Validator.isLength(data.password, { min: 6, max: 20 })) {
    errors.password = "Password must be between 6 and 20 Characters";
  }

  // Validate password2
  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Password2 field is required";
  } else if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match";
  }

  return {
    errors,
    isValid: is_Empty(errors)
  };
};
