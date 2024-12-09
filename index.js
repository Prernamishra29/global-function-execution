// Declare a global variable
let age = 25;

// Function in global execution context
function displayAge() {
  console.log(`Current age is: ${age}`);
}

// Function in a function execution context to modify global variable
function changeAge() {
  age = 30; // Updating the global variable
  console.log(`Age updated to: ${age}`);
}

// Call the functions
displayAge(); // Should print: Current age is: 25
changeAge();  // Should print: Age updated to: 30
displayAge(); // Should print: Current age is: 30
