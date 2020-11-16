let username = document.getElementById("username");
let usererror = document.getElementById("user-error");
let password = document.getElementById("password");
let passworderror = document.getElementById("password-error");

function validateEmail() {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (mailformat.test(username.value)) {
    // username.style.backgroundColor = "green";
    usererror.innerHTML = "User details found";
    usererror.style.color = "green";
    return true;
  } else {
    // username.style.backgroundColor = "red";
    usererror.innerHTML = "Username is Invalid";
    usererror.style.color = "red";
    return false;
  }
}

function validatePassword() {
  var passwordexp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

  if (passwordexp.test(password.value)) {
    // password.style.backgroundColor = "green";
    passworderror.innerHTML = "Password is Correct";
    passworderror.style.color = "green";
    return true;
  } else {
    // password.style.backgroundColor = "red";
    passworderror.innerHTML = "Password is Incorrect";
    passworderror.style.color = "red";
    alert("Username: Email-Id & Password: Symbols,Numbers,Uppercase,Lowercase");
    return false;
  }
}
