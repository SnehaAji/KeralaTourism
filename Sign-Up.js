let email = document.getElementById("email");
let emailerror = document.getElementById("email-error");
let phonenumber = document.getElementById("phone-number");
let phoneerror = document.getElementById("phone-error");
let password = document.getElementById("password");
let passworderror = document.getElementById("password-error");
let confirmpassword = document.getElementById("confirm-password");
let confirmerror = document.getElementById("confirm-error");
let passwordstrength = document.getElementById("password-strength");


function validateEmail() {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (mailformat.test(email.value)) {
    // email.style.backgroundColor = "green";
    emailerror.innerHTML = "Email is Valid";
    emailerror.style.color = "green";
    return true;
  } else {
    // emailerror.style.backgroundColor = "red";
    emailerror.innerHTML = "Email is Invalid";
    emailerror.style.color = "red";
    return false;
  }
}

function validatePhone() {
  var phonenumberformat = /^\(?([1-9]{1}[0-9]{2})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

  if (phonenumberformat.test(phonenumber.value)) {
    // phonenumber.style.backgroundColor = "green";
    phoneerror.innerHTML = "Phone Number is Valid";
    phoneerror.style.color = "green";
    return true;
  } else {
    // phonenumber.style.backgroundColor = "red";
    phoneerror.innerHTML = "Phone Number is Invalid";
    phoneerror.style.color = "red";
    return false;
  }
}

function validatePassword() {
  var passwordexp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

  if (passwordexp.test(password.value)) {
    // password.style.backgroundColor = "green";
    passworderror.innerHTML = "Password is Good";
    passworderror.style.color = "green";
    return true;
  } else {
    // password.style.backgroundColor = "red";
    passworderror.innerHTML = "Password strength is poor, Include Uppecase, lowercase, Numbers & Symbols";
    passworderror.style.color = "red";
    return false;
  }
}

function validateCheckPassword() {
  if (password.value == confirmpassword.value) {
    // confirmpassword.style.backgroundColor = "green";
    confirmerror.innerHTML = "Password Matched";
    confirmerror.style.color = "green";
    return true;
  } else {
    // confirmpassword.style.backgroundColor = "red";
    confirmerror.innerHTML = "Password Unmatched";
    confirmerror.style.color = "red";
    return false;
  }
}

function checkStrength() {
  if (password.value.length < 1) {
    passwordstrength.style.backgroundColor = "yellow";
    passwordstrength.innerHTML = "Enter Password"
  } else if (password.value.length < 8) {
    passwordstrength.style.backgroundColor = "red";
    passwordstrength.innerHTML = "Password Strength: Poor"
} else if (password.value.length <11) {
    passwordstrength.style.backgroundColor = "orange";
    passwordstrength.innerHTML = "Password Strength: Medium"
} else if(password.value.length > 10){
    passwordstrength.style.backgroundColor = "green";
    passwordstrength.innerHTML = "Password Strength: Strong"
} else{
    passwordstrength.style.backgroundColor = "green";
    passwordstrength.innerHTML = "Password Strength: Strong"
  }
};