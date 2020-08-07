
console.log("Js is linked");

  //declares all of the input fields we had on page into constant variables
  const fName = document.getElementById("fname");
  const lName = document.getElementById("lname");
  const email = document.getElementById("email");
  const username = document.getElementById("username");
  const pass = document.getElementById("pass");
  const pass2 = document.getElementById("pass2");


//function runs when user hits submit to check
function checkIfValid() {
  //stops the default action of submiting, and erasing users info they in text field
  event.preventDefault();

}

//user presses the submit button and runs the function to check
//if all the users info is valid (not empty, passwords match)
var btn = document.getElementById('submit');
btn.addEventListener('click', checkIfValid);
