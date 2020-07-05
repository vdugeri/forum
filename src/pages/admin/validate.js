function validateCreds(useranme, password) {
  const errors = {};

  if (!useranme || !useranme.trim()) {
    errors["username"] = "Useranme is required";
  }

  if (!password || !password.trim()) {
    errors["password"] = "Password is required";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export default validateCreds;
