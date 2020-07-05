export function validateLogin({ username, password }) {
  const errors = {};

  if (!username || !username.trim()) {
    errors["username"] = "Username is required";
  }

  if (!password || !password.trim()) {
    errors["password"] = "Password is required";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function validateRegistration({
  firstName,
  lastName,
  username,
  password,
}) {
  const errors = {};

  if (!username || !username.trim()) {
    errors["username"] = "Username is required";
  }

  if (!password || !password.trim()) {
    errors["password"] = "Password is required";
  }

  if (!firstName || !firstName.trim()) {
    errors["firstName"] = "First Name is required";
  }

  if (!lastName || !lastName.trim()) {
    errors["lastName"] = "Last Name is required";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
