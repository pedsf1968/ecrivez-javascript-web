let codeDiv = document.getElementById('code');
let codeValidationDiv = document.getElementById('code-validation');
let emailInput = document.getElementsByTagName('input')[1];
let submitInput = document.getElementById('submit-btn');

emailInput.setAttribute('type','email');
emailInput.setAttribute('required',true);

function codeIsValid() {  
  var isValid = /^(CODE-)/.test(codeDiv.value);
  
    if( isValid) {
    codeValidationDiv.innerHTML = "Code valide";
  } else {
    codeValidationDiv.innerHTML = "Code invalide";
  }
  return isValid;
}

function emailIsValid() {
  var isValid =  /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(emailInput.value);  
  
  return isValid;
}

function activeSubmit() {
  if( codeIsValid() && emailIsValid()) {
    submitInput.removeAttribute('disabled','');
  } else {
    submitInput.setAttribute('disabled',true);
  }
}
codeDiv.addEventListener('input', function(event) {  
  activeSubmit();
});

emailInput.addEventListener('input', function(event) {
    activeSubmit();    
});