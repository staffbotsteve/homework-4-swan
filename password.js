// # Unit 03 JavaScript Homework: Password Generator
// Create an application that generates a random password based on user-selected criteria. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code.

// The user will be prompted to choose from the following password criteria:

// returns a random integer from 8 to 128
// * Length (must be between 8 and 128 characters)

var pwdLength = prompt("Enter how long you would like your password to be (must be between 8-128 characters", "");
while (isNaN(pwdLength) || pwdLength < 8 || pwdLength > 128) {
    pwdLength = prompt("ERROR: Enter how long you would like your password to be (MUST be between 8-128 characters", "");
}
for (let index = 0; index < array.length; index++) {
    const element = array[index];

}
// * Character type:

//   * Special characters ([see examples](https://www.owasp.org/index.php/Password_special_characters))

var numSpChar = Math.floor(Math.random() * pwdLength) + 1;
console.log('numSpChar', numSpChar);

var spChar = "";
var spCharStr = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
while (spChar.length < numSpChar) {
    spChar += spCharStr[Math.floor(Math.random() * spCharStr.length)];
}
console.log('spChar', spChar);

//   * Numeric characters
var numNumChar = Math.floor(Math.random() * (pwdLength - numSpChar)) + 1;
console.log('numNumChar', numNumChar);

var numChar = "";
var numCharStr = "0123456789";
while (numChar.length < numNumChar) {
    numChar += numCharStr[Math.floor(Math.random() * numCharStr.length)];
}
console.log('numChar', numChar);

//   * Lowercase characters
var numLwrChar = Math.floor(Math.random() * (pwdLength - numSpChar - numNumChar)) + 1;
console.log('numLwrChar', numLwrChar);

var lwrChar = "";
var lwrCharStr = "abcdefghijklmnopqrstuvwxyz";
while (lwrChar.length < numLwrChar) {
    lwrChar += lwrCharStr[Math.floor(Math.random() * lwrCharStr.length)];
}
console.log('lwrChar', lwrChar);

//   * Uppercase characters
var numUprChar = (pwdLength - numSpChar - numNumChar - numLwrChar);
console.log('numUprChar', numUprChar);
if (numUprChar = 0) {
    numUpChar = 1;
    numUpChar = numSpChar - 1;
}

var uprChar = "";
var uprCharStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
while (uprChar.length < numUprChar) {
    uprChar += uprCharStr[Math.floor(Math.random() * uprCharStr.length)];
}
console.log('uprChar', uprChar);

// The application should validate user input and ensure that at least one character type is selected.

// Once all prompts are answered, the user will be presented with a password matching the answered prompts. Displaying the generated password in an alert is acceptable, but attempt to write the password to the page instead.

// As a bonus, the user should also have the option to click a button to copy the password to their clipboard.

// Your application should have a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.

// Your application should be deployed to GitHub Pages.

// Your application's GitHub repository should contain a README.md file explaining the purpose and functionality of the application. The README.md file should include a screenshot of the completed application as well as a link to the deployed GitHub Pages URL.

// ![password generator demo](./Assets/03-JavaScript-homework-demo.png)

// ## User Story

// AS AN employee with access to sensitive data

// I WANT to randomly generate a password that meets certain criteria

// SO THAT I can create a strong password that provides greater security

// ## Business Context

// For companies that handle large amounts of sensitive data, weak passwords can pose a real security threat. An application that can generate strong passwords quickly and effortlessly saves employees time and ensures secure access to data.

// ## Acceptance Criteria

// GIVEN that a user needs a new, secure password

// WHEN prompted for password criteria

// THEN a password is generated

// - - -

// ## Commit Early and Often

// One of the most important skills to master as a web developer is version control. Building the habit of committing via Git is important for two reasons:

// * Your commit history is a signal to employers that you are actively working on projects and learning new skills.

// * Your commit history allows you to revert your codebase in the event that you need to return to a previous state.

// Follow these guidelines for committing:

// * Make single-purpose commits for related changes to ensure a clean, manageable history. If you are fixing two issues, make two commits.

// * Write descriptive, meaningful commit messages so that you and anyone else looking at your repository can easily understand its history.

// * Don't commit half-done work, for the sake of your collaborators (and your future self!).

// * Test your application before you commit to ensure functionality at every step in the development process.

// We would like you to have well over 200 commits by graduation, so commit early and often!

// ## Submission on BCS

// You are required to submit the following:

// * The URL of the deployed application

// * The URL of the GitHub repository

// - - -
// © 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.