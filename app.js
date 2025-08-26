
// THEME TOGGLE

const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark"); // dark 
});


// FORM VALIDATION

const form = document.getElementById("regForm");
const msg = document.getElementById("message");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // stop page 

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Validation
  if (username.length < 3) {
    msg.textContent = "Username must be at least 3 characters.";
    msg.className = "error";
  } else if (!email.includes("@")) {
    msg.textContent = "Invalid email.";
    msg.className = "error";
  } else if (password.length < 6) {
    msg.textContent = "Password must be at least 6 characters.";
    msg.className = "error";
  } else {
    msg.textContent = "Registration successful!";
    msg.className = "success";
  }
});


//EVENT BUBBLING & CAPTURING

const outerDiv = document.getElementById("outerDiv");
const innerBtn = document.getElementById("innerBtn");

innerBtn.addEventListener("click", () => {
  console.log("Button Clicked");
});

outerDiv.addEventListener("click", () => {
  console.log("Div Clicked (Bubbling)");
});

outerDiv.addEventListener("click", () => {
  console.log("Div Clicked (Capturing)");
}, { capture: true });
