const submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "./principal.html";
});

const forgotPassword = document.getElementById("forgotPassword");
const contactUs = document.getElementById("contactUs");

forgotPassword.addEventListener("mouseover", function () {
  forgotPassword.style.color = "#e74c3c";
});

forgotPassword.addEventListener("mouseout", function () {
  forgotPassword.style.color = "#333";
});

contactUs.addEventListener("mouseover", function () {
  contactUs.style.color = "#27ae60";
});

contactUs.addEventListener("mouseout", function () {
  contactUs.style.color = "#333";
});
