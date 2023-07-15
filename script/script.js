const inputField = document.getElementById("emailInput");

function validateEmail(inputText) {
  var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (inputText.value.match(emailFormat)) {
    console.log("Valid");
    inputField.style.border = "2px solid #ff9b9b";
    return true;
  } else {
    console.log("Not");
    inputField.style.border = "2px solid red";
    inputField.style.background = "#ffd3d3";
    inputField.style.color = "#ff9b9b";
    return false;
  }
}
