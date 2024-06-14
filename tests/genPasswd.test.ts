import passwordGenerator from "../src/app";

test('Should throw error if length less than 4 or more than 20 characters', () => {
  expect(() => passwordGenerator(2, 2)).toThrow(
    "Password characters can not be less than 4 or more than 20 characters, please check and try again"
  );
  })
  
test("Should throw error if length is more than 20 characters", () => {
    expect(() => passwordGenerator(2, 44)).toThrow(
      "Password characters can not be less than 4 or more than 20 characters, please check and try again"
    );
    
})

test('Should throw if strenght is less than 1', () => {
  expect(() => passwordGenerator(0, 10)).toThrow('Strength has to be a digit between 1 and 4')
})

test('Should throw if strenght is less than 1 or greather than 4', () => {
  expect(() => passwordGenerator(6, 10)).toThrow('Strength has to be a digit between 1 and 4')
})

test('Should return a string of 10 characters', () => {
  expect(passwordGenerator(4, 10).length).toEqual(10)
})

// --| There's actually a possiblity for this test to fail, will have to refactor the code to ensure there is at least one or more special characters when a strength of 4 is chosen
test('Strenght of 4 should include one or more special characters', () => {
  expect([
  '~', '!', '@', '#', '$',
  '%', '^', '&', '*', '(',
  ')', '=', '+', '?', '/',
  '"', ';', '<', '>', '|',
  '}', '{', '[', ']'
].some(char => passwordGenerator(4, 10).includes(char))).toBeTruthy()
})

function hasRecurringValues(password: string){
  const passwordArray = Array.from(password);
  const passwordSet = new Set(passwordArray);
  const newPasswordArray = Array.from(passwordSet);

  if (passwordArray.length !== newPasswordArray.length) {
    return true;
  } else {
    return false
  }
}

test('Should return false if password does not have reocurring values', () => {
  expect(hasRecurringValues(passwordGenerator(4, 10))).toBeFalsy()
})