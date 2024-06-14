# PASSWORD GENERATOR
This password generator use alphabets, numbers and special characters based on specified length and strength

**parameters**
This generator requires two parameters which are both numbers:
- Strength to denote how strong the password should be
- Length to denote how long the password should be

**strength**
Strength is between 1 and 4, 1 being the weakest and 4 being the strongest. To ensure greater strength, there are no reoccuring values in the generated password string

**length**
Password can be as long as 4 to 20 characters, any value outside of this range throws an error

This generator returns a string 

#### Tests
This generator contains 7 test cases that demonstrate the strength of the password generated and how the code handles errors.