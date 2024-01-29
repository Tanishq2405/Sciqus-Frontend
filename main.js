function validateForm() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  var regularExpression =
    /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  // Basic validation for required fields
  if (username.trim() === "" || password.trim() === "") {
    alert("Please fill out all the required fields.");
    return false;
  }

  // Password strength validation (minimum 8 characters)
  if (password.length < 8) {
    document.getElementById("passwordHelp").textContent =
      "Password must be at least 8 characters long";
    return false;
  } else if (!regularExpression.test(password)) {
    document.getElementById("passwordHelp").textContent =
      "password should contain atleast one number and one special character";
    return false;
  } else {
    document.getElementById("passwordHelp").textContent = "";
  }

  return true;
}

function forgotPassword() {
  prompt("Enter mail address");
  alert("Password sent on registered mail");
}

function addStudent(event) {
  const name = document.getElementById("name").value;
  const mail = document.getElementById("mail").value;
  const contact = document.getElementById("contact").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  localStorage.setItem("name", name);
  localStorage.setItem("mail", mail);
  localStorage.setItem("contact", contact);
  localStorage.setItem("username", username);
  localStorage.setItem("password", password);

  alert("Student added successfully..!");
}

function redirectToDashboard(userRole) {
  if (userRole === "admin") {
    window.location.href = "admin-dashboard.html";
  } else {
    window.location.href = "user-dashboard.html";
  }
}