
console.log("Js is linked");

  //declares all of the input fields we had on page into constant variables
  const email = document.getElementById("email");
  const username = document.getElementById("username");
  const pass = document.getElementById("pass");
  const pass2 = document.getElementById("pass2");
//all of the divs that will tell user if there is an error
  const emailError = document.getElementById("email-error");
  const usernameError = document.getElementById("username-error");
  const passError = document.getElementById("pass-error");
  const pass2Error = document.getElementById("pass2-error");
  var message = "oh no";
//function runs when user hits submit to check
function checkIfValid() {
  emailError.innerHTML = message;
  usernameError.innerHTML = message;
  passError.innerHTML = message;
  pass2Error.innerHTML = message;

  //stops the default action of submiting, and erasing users info they in text field
  event.preventDefault();


  //window.open('success.html', '_blank');
}

//user presses the submit button and runs the function to check
//if all the users info is valid (not empty, passwords match)
var btn = document.getElementById('submit');
btn.addEventListener('click', checkIfValid);
