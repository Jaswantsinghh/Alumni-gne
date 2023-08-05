export function validateFormFields(
  firstName,
  lastName,
  rollNumber,
  branch,
  graduationYear,
  email,
  password
) {
  const nameRegex = /^[A-Za-z]+$/;
  const rollNumberRegex = /^\d+$/;
  const branchRegex = /^[A-Za-z\s]+$/;
  const graduationYearRegex = /^(19|20)\d{2}$/;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^.{6,}$/; // Minimum 6 characters required

  if (!firstName) {
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

export function updateFormValidations(
  firstName,
  lastName,
  rollNumber,
  branch,
  graduationYear,
  email
) {
  const nameRegex = /^[A-Za-z]+$/;
  const rollNumberRegex = /^\d+$/;
  const branchRegex = /^[A-Za-z\s]+$/;
  const graduationYearRegex = /^(19|20)\d{2}$/;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!firstName.trim()) {
    return "Please enter a valid first name. Only alphabets are allowed.";
  }

  if (!lastName) {
    return "Please enter a valid last name. Only alphabets are allowed.";
  }

  if (!rollNumber || !rollNumber.match(rollNumberRegex)) {
    return "Please enter a valid roll number. Only numeric characters are allowed.";
  }

  if (!branch || !branch.match(branchRegex)) {
    return "Please enter a valid branch name. Only alphabets and spaces are allowed.";
  }

  if (!graduationYear) {
    return "Please enter a valid graduation year.";
  }

  if (!email || !email.match(emailRegex)) {
    return "Please enter a valid email address.";
  }

  // If all fields are valid, return null (indicating no errors)
  return null;
}
