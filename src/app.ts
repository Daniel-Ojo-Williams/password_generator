function passwordGenerator(strength: number, length: number) {

  if (strength < 1 || strength > 4) throw Error('Strength has to be a digit between 1 and 4');

  if (length < 4) throw new Error('Password can\'t be less than 4 characters, please check and try again');

  const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowerCase = 'abcdefghijklmnopqrstuvwxyz'
  const digits = 1234567890
  const specialChar = '~!@#$%^&*()=+?/";<>|}{[]';

  let password = "";

  let passChars: string;

  // --| If strength is 1, use only small letters
  switch (strength) {
    case 1:
      passChars = lowerCase
      break;
    case 2:
      passChars = lowerCase + upperCase
      break;
    case 3:
      passChars = lowerCase + upperCase + digits
      break;
    case 4:
      passChars = lowerCase + upperCase + digits + specialChar
      break
    default:
      throw new Error('Strength has to be between 1 and 4')
  }

  for (let i = 0; i <= length; i++) {
    // --| Get a random number between 0 and the number of characters in the password character set based on strength chosen
    const char = passChars[Math.floor(Math.random() * passChars.length)]
    password += char;
  }

  return password;
}

console.log(passwordGenerator(4, 8));