// test-1: declare the variable currentUser
const currentUser = "Wahu Gikenye";
console.log(currentUser);

//test-2: declare welcomeMessage 
/*Concatenate strings using + operator
const welcomeMessage = "Welcome to Flatbook, " + currentUser;
*/
//string interpolation.
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;
console.log(welcomeMessage);

//test-3: excitedWelcomeMessage
const excitedWelcomeMessage = welcomeMessage.toUpperCase();
console.log(excitedWelcomeMessage);

//test-4: shortGreeting
const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;
console.log(shortGreeting);

