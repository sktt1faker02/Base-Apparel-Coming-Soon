const enteredEmail = document.getElementById("email");
const submitBtn = document.querySelector(".submit");
const showErrorIcon = document.querySelector(".icon_error");
const errMessage = document.querySelector(".error_message");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const inputValue = enteredEmail.value;

  let validRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (inputValue.toLowerCase().match(validRegex)) {
    // console.log("Valid");

    errMessage.style.display = "block";
    errMessage.style.color = "#009933";
    enteredEmail.style.border = "1px solid hsl(0, 36%, 70%)";
    errMessage.textContent =
      "Congratulations you will be notified to your email";
  } else {
    // console.log("Invalid");

    showErrorIcon.style.display = "block";
    errMessage.style.display = "block";
    enteredEmail.focus();
    enteredEmail.style.border = "1px solid hsl(0, 93%, 68%)";
  }
});
