// ============================================================
// MAD LIBS: DEBUGGING THE BEAST
// ============================================================
//
// THE STORY WE'RE BUILDING:
// "Deep inside the codebase lives a [adjective] bug that's been
// hiding for [number] days. [Name] grabs their debugger and
// ventures into [place] to hunt it down, only to discover the
// bug can [verb] and has been disguising itself as an innocent
// [noun] the whole time."
//
// ============================================================


// ************************************************************
// WE DO TOGETHER - Part 1: Grab the button
// ************************************************************
// First, we need to tell JavaScript which button to listen to.
// We use querySelector to find the element with id="generate"

let generateButton = document.querySelector("#generate");


// ************************************************************
// WE DO TOGETHER - Part 2: Listen for clicks
// ************************************************************
// Now we tell the button: "When someone clicks you, run this code"

generateButton.addEventListener("click", function() {

  // **********************************************************
  // WE DO TOGETHER - Part 3: Read the first few inputs
  // **********************************************************
  // We grab what the user typed using .value
  // Let's start with name, adjective, and noun

  let name = document.querySelector("#name").value;
  let adjective = document.querySelector("#adjective").value;
  let noun = document.querySelector("#noun").value;

  // Let's peek at what we grabbed (open the console to see!)
  console.log("Name:", name);
  console.log("Adjective:", adjective);
  console.log("Noun:", noun);


  // **********************************************************
  // WE DO TOGETHER - Part 4: Build the first sentence
  // **********************************************************
  // Template literals use backticks ` ` and ${} for variables
  // This makes it easy to mix text and variables together

  let firstSentence = `Deep inside the codebase lives a ${adjective} bug.`;

  // Display it on the page using innerHTML
  document.querySelector("#story").innerHTML = firstSentence;


  // ============================================================
  // YOUR TURN! Follow the same pattern to finish the story.
  // ============================================================


  // **********************************************************
  // YOUR TURN - Step 1: Read the remaining inputs
  // **********************************************************
  // We read name, adjective, and noun above.
  // Now you read: verb, place, and number
  // Follow the same pattern: let ____ = document.querySelector("#____").value;

  // Your code here:
let verb = document.querySelector("verb").value;
let place = document.querySelector("place").value;
let number = document.querySelector("number").value;


  // **********************************************************
  // YOUR TURN - Step 2: Log your new variables
  // **********************************************************
  // Use console.log() to check your values, just like we did above

  // Your code here:
console.log("verb:", verb);
console.log("place:", place);
console.log("number:", number);



  // **********************************************************
  // YOUR TURN - Step 3: Build the complete story
  // **********************************************************
  // Now combine ALL the variables into the full story.
  // Use a template literal like we did for firstSentence.
  //
  // The full story is:
  // "Deep inside the codebase lives a [adjective] bug that's been hiding for [number] days. [Name] grabs their debugger and ventures into [place] to hunt it down, only to discover the bug can [verb] and has been disguising itself as an innocent [noun] the whole time."

  // Your code here (replace firstSentence with your full story):
let fullstory = `Deep inside the codebase lives a ${adjective} bug that's been hiding for ${number} days. ${Name} grabs their debugger and ventures into ${place} to hunt it down, only to discover the bug can [verb] and has been disguising itself as an innocent [noun] the whole time.`



  // **********************************************************
  // YOUR TURN - Step 4: Display the complete story
  // **********************************************************
  // Update the innerHTML to show your complete story
  // (You might have already done this in Step 3 - that's fine!)

 // Your code here:

document.querySelector("#story").innerHTML=fullstory;

});


// ============================================================
// STRETCH GOALS (if you finish early!)
// ============================================================

// STRETCH 1: Show a message if any input is empty
// Hint: Check if name === "" || adjective === "" || ... etc.
// If any are empty, set innerHTML to a helpful message and use "return;"


// STRETCH 2: Make the Clear button work
// Hint: You'll need to:
// 1. Select the clear button with querySelector
// 2. Add a click event listener
// 3. Set each input's .value to ""
// 4. Clear the story output too

let clearButton = document. querySelector("#clear");
clearButton. addEventListener("click", () => {
document. queryselector ("#name"). value = "";
document. querySelector("#adjective"). value = "";
document. querySelector("#noun"). value = "";
document. querySelector("#verb"). value = "";
document. querySelector("#place"). value = "";
document. queryselector ("#number"). value = "";
});





// STRETCH 3: Use Number() with the number input
// Hint: let days = Number(number);
// Then calculate something fun, like hours: let hours = days * 24;
// Add this to your story or log it to the console
