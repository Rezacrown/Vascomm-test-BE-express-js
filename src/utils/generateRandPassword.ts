export const generateRandomPassword = (length: number = 12): string => {
  const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  // const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

  const allCharacters = lowerCaseLetters + upperCaseLetters + numbers;

  if (length < 4 || length > 100) {
    throw new Error("Password length must be between 4 and 100 characters");
  }

  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allCharacters.length);
    password += allCharacters[randomIndex];
  }

  return password;
};
