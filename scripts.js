
console.log("Js is linked");

  //declares all of the input fields we had on page into constant variables
  const email = document.getElementById("email");
  const username = document.getElementById("username");
  const pass = document.getElementById("pass");
  const pass2 = document.getElementById("pass2");
//all of the divs that will tell user if there is an error 
  const usernameError = document.getElementById("username-error");
  const emailError = document.getElementById("email-error");
  const passError = document.getElementById("pass-error");
  const pass2Error = document.getElementById("pass2-error");
  var message = "";

//function runs when user hits submit to check
function checkIfValid() {
  event.preventDefault();

if(email.value.length == 0){
  message = "E-mail is empty, please enter email";
  emailError.innerHTML = message;
}
if(username.value.length == 0){
  message = "username is empty, please enter a username";
  usernameError.innerHTML = message;
}
if(pass.value.length == 0){
  message = "password is empty, please enter a password";
  passError.innerHTML = message;
}
if(pass2.value.length == 0){
  message = "password is empty, please enter a password";
  pass2Error.innerHTML = message;
}
  else{
    window.open('success.html', '_blank');
  }

  //stops the default action of submiting, and erasing users info they in text field
  


  
}

//user presses the submit button and runs the function to check
//if all the users info is valid (not empty, passwords match)
var btn = document.getElementById('submit');
btn.addEventListener('click', checkIfValid);
