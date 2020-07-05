function validateCreds(emailAddress, password) {
  const errors = {};

  if (!emailAddress || !emailAddress.trim()) {
    errors["emailAddress"] = "emailAddress is required";
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
