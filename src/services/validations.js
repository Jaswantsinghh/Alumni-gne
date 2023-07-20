export function validateFormFields(
  firstName,
  lastName,
  rollNumber,
  branch,
  graduationYear,
  phoneNumber,
  email,
  password
) {
  const nameRegex = /^[A-Za-z]+$/;
  const rollNumberRegex = /^\d+$/;
  const branchRegex = /^[A-Za-z\s]+$/;
  const graduationYearRegex = /^(19|20)\d{2}$/;
  const phoneRegex = /^\d{10}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^.{6,}$/; // Minimum 6 characters required

  if (!firstName || !firstName.match(nameRegex)) {
    return "Please enter a valid first name. Only alphabets are allowed.";
  }

  if (!lastName || !lastName.match(nameRegex)) {
    return "Please enter a valid last name. Only alphabets are allowed.";
  }

  if (!rollNumber || !rollNumber.match(rollNumberRegex)) {
    return "Please enter a valid roll number. Only numeric characters are allowed.";
  }

  if (!branch || !branch.match(branchRegex)) {
    return "Please enter a valid branch name. Only alphabets and spaces are allowed.";
  }

  if (!graduationYear || !graduationYear.match(graduationYearRegex)) {
    return "Please enter a valid graduation year. It should be between 1900 and the current year.";
  }

  if (!phoneNumber || !phoneNumber.match(phoneRegex)) {
    return "Please enter a valid phone number. It should be a 10-digit number.";
  }

  if (!email || !email.match(emailRegex)) {
    return "Please enter a valid email address.";
  }

  if (!password || !password.match(passwordRegex)) {
    return "Please enter a valid password. It should be at least 6 characters long.";
  }

  // If all fields are valid, return null (indicating no errors)
  return null;
}

export function validateLoginFormFields(email, password) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email || !email.match(emailRegex)) {
    return "Please enter valid email address.";
  }

  if (!password) {
    return "Please enter valid password. ";
  }

  return null;
}