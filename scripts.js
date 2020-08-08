
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
  var success = true;

//function runs when user hits submit to check
function checkIfValid() {
  //prevents the page from refreshing incase the user makes a mistake it won't delete users text field 
  event.preventDefault();

  //compares passwords only if both field have values
if((pass.value != pass2.value) && (pass.value.length != 0 && pass2.value.length != 0)){
  message = "passwords does not match";
  passError.innerHTML = message;
  pass2Error.innerHTML = message;
  success = false;
}

//checks all fields to see if they are empty
if(email.value.length == 0){
  message = "E-mail is empty, please enter email";
  emailError.innerHTML = message;
  success = false;
}
if(username.value.length == 0){
  message = "username is empty, please enter a username";
  usernameError.innerHTML = message;
  success = false;
}
if(pass.value.length == 0){
  message = "password is empty, please enter a password";
  passError.innerHTML = message;
  success = false;
}
if(pass2.value.length == 0){
  message = "password is empty, please enter a password";
  pass2Error.innerHTML = message;
  success = false;
}


//if none of the if statements above were triggered then it must be a successful form that was filled
if(success == true){
    window.open('success.html', "_self");
  }
  
}

//user presses the submit button and runs the function to check
//if all the users info is valid (not empty, passwords match)
var btn = document.getElementById('submit');
btn.addEventListener('click', checkIfValid);
