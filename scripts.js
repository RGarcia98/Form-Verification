
document.addEventListener('DOMContentLoaded', function() {
  var btn = document.getElementById('submit');
  //declares all of the input fields
  const email = document.getElementById("email");
  const username = document.getElementById("username");
  const pass = document.getElementById("pass");
  const pass2 = document.getElementById("pass2");
//all of the divs that will tell user if there is an error 
  const usernameError = document.getElementById("username-error");
  const emailError = document.getElementById("email-error");
  const passError = document.getElementById("pass-error");
  const pass2Error = document.getElementById("pass2-error");

  var message = ""; //error message text
  var success; //boolean to check if the form is successful


//user presses the submit button and runs the function to check
//if all the users info is valid (not empty, passwords match, etc.)
btn.addEventListener('click', checkIfValid);


//function runs when user hits submit to check
function checkIfValid() { 
  
  success = true;   //We assume the form is correct untill one of the invalids are triggered

  clearAll();   //clear all error messages incase this is the users 2nd time submiting to get new relevent errors to fix

  
  event.preventDefault(); //prevents the page from refreshing incase the user makes a mistake it won't delete users text field 


//compares passwords only if both field have values to compare to 
if(pass.value != pass2.value){
  message = "passwords does not match";
  passError.innerHTML = message;
  pass2Error.innerHTML = message;
  success = false;
}

//checks to see if password is between 6-20 characters
if(pass.value.length <= 5){
  message = "Please enter a password longer than 6 characters";
  passError.innerHTML = message;
  pass2Error.innerHTML = "";
  success = false;
}
if(pass.value.length > 20){
  message = "Please enter a password shorter than 20 characters";
  passError.innerHTML = message;
  pass2Error.innerHTML = "";
  success = false;
}


//Checks if email has '@' 
if(email.value.indexOf("@") == -1){
  message = 'Please enter valid email';
  emailError.innerHTML = message;
  success = false;
}


//checks all fields if they are empty
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


//if none of the if statements above were triggered then it must be a successful form that was filled!
if(success == true){
    window.open('success.html', "_self"); //takes user to the success page
  }
  
}

// clears all of the error messages
function clearAll(){
message = ""
usernameError.innerHTML = message;
emailError.innerHTML = message;
passError.innerHTML = message;
pass2Error.innerHTML = message;
usernameError.innerHTML = message;
}

}, false);
