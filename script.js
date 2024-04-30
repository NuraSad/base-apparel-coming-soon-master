const emailInput = document.getElementById("email");
const submitBtn = document.getElementById("arrowBtn");
const errorIcon = document.getElementById("error-icon");
const emailErrorMessage = document.getElementsByClassName("error message")[0];

submitBtn.addEventListener("click", onSubmit);
// emailInput.addEventListener()

function onSubmit(event) {
  const emailStr = emailInput.value;
  const isValid = validateEmail(emailStr);
  toggleError(isValid);
}

function toggleError(isValid) {
  if (!isValid) {
    console.log(isValid);
    errorIcon.style.visibility = "visible";
    emailErrorMessage.style.visibility = "visible";
  } else {
    errorIcon.style.visibility = "hidden";
    emailErrorMessage.style.visibility = "hidden";
  }
}

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
