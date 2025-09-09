
const messageBtn = document.getElementById("messageBtn");
const message = document.getElementById("message");

messageBtn.addEventListener("click", () => {
  message.textContent = "Hello! You clicked the button 🎉";
});
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
let count = 0;
const counterValue = document.getElementById("counterValue");
const incrementBtn = document.getElementById("incrementBtn");
const resetBtn = document.getElementById("resetBtn");

incrementBtn.addEventListener("click", () => {
  count++;
  counterValue.textContent = count;
});

resetBtn.addEventListener("click", () => {
  count = 0;
  counterValue.textContent = count;
});
const faqTitle = document.getElementById("faqTitle");
const faqAnswer = document.getElementById("faqAnswer");

faqTitle.addEventListener("click", () => {
  faqAnswer.classList.toggle("hidden");
});

const form = document.getElementById("myForm");

form.addEventListener("submit", (event) => {
  event.preventDefault(); 
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const formSuccess = document.getElementById("formSuccess");
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  formSuccess.textContent = "";

  let isValid = true;
  if (name === "") {
    nameError.textContent = "Name is required.";
    isValid = false;
  }
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email === "") {
    emailError.textContent = "Email is required.";
    isValid = false;
  } else if (!email.match(emailPattern)) {
    emailError.textContent = "Enter a valid email.";
    isValid = false;
  }
  if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    isValid = false;
  }
  if (isValid) {
    formSuccess.textContent = "✅ Form submitted successfully!";
    form.reset();
  }
});
