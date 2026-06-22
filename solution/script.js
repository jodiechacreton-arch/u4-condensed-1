// ============================================================
// MAD LIBS: DEBUGGING THE BEAST — COMPLETE SOLUTION
// ============================================================

// CONCEPT: querySelector
// Grab references to the elements we'll interact with
let generateButton = document.querySelector("#generate");
let clearButton = document.querySelector("#clear");
let storyOutput = document.querySelector("#story");

// CONCEPT: addEventListener
// When the Generate button is clicked, run this function
generateButton.addEventListener("click", function() {

  // CONCEPT: .value
  // Read what the user typed into each input field
  let name = document.querySelector("#name").value;
  let adjective = document.querySelector("#adjective").value;
  let noun = document.querySelector("#noun").value;
  let verb = document.querySelector("#verb").value;
  let place = document.querySelector("#place").value;
  let number = document.querySelector("#number").value;

  // CONCEPT: console.log
  // Log values to the console for debugging
  console.log("Inputs captured:", name, adjective, noun, verb, place, number);

  // STRETCH: Input validation
  // Check if any input is empty and show a friendly message
  if (name === "" || adjective === "" || noun === "" ||
      verb === "" || place === "" || number === "") {
    storyOutput.innerHTML = "Please fill in all the blanks before generating your story!";
    return;
  }

  // CONCEPT: Template literals
  // Build the story using backticks and ${} to insert variables
  let story = `Deep inside the codebase lives a ${adjective} bug that's been hiding for ${number} days. ${name} grabs their debugger and ventures into ${place} to hunt it down, only to discover the bug can ${verb} and has been disguising itself as an innocent ${noun} the whole time.`;

  // CONCEPT: .innerHTML
  // Display the story on the page
  storyOutput.innerHTML = story;

  // STRETCH: Number() conversion
  // Convert the number input and calculate something with it
  let daysAsNumber = Number(number);
  let hoursHiding = daysAsNumber * 24;
  console.log(`That bug hid for ${hoursHiding} hours!`);

});

// STRETCH: Clear button functionality
// Reset all inputs and the story output
clearButton.addEventListener("click", function() {

  // Clear all input fields by setting their value to empty string
  document.querySelector("#name").value = "";
  document.querySelector("#adjective").value = "";
  document.querySelector("#noun").value = "";
  document.querySelector("#verb").value = "";
  document.querySelector("#place").value = "";
  document.querySelector("#number").value = "";

  // Clear the story output
  storyOutput.innerHTML = "";

  console.log("All cleared!");
});

//done