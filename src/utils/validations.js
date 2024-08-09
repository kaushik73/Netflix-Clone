export const ValidateEmail = (email) => {
  const isEmailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);

  if (!isEmailValid) {
    return "Email is not valid !";
  } else {
    return null;
  }
};

export const ValidatePassword = (password) => {
  const isPasswordValid =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/.test(
      password
    );
  return isPasswordValid ? null : "Password is not strong enough!";
};

export const ValidateName = (name) => {
  const nameRegex = /^[A-Za-z\s]+$/;
  if (!name) {
    return "Name is required.";
  }
  if (!nameRegex.test(name)) {
    return "Name can only contain alphabetic characters and spaces.";
  }
  return null;
};

export const ValidatePhoneNumber = (phoneNumber) => {
  const phoneNumberRegex = /^[0-9]+$/;
  if (!phoneNumber) {
    return "Phone number is required.";
  }
  if (!phoneNumberRegex.test(phoneNumber)) {
    return "Phone number can only contain numeric characters.";
  }
  if (phoneNumber.length !== 10) {
    return "Phone number must be 10 digits long.";
  }
  return null;
};
