// Add the event listener to the login button
document.getElementById("loginButton").addEventListener("click", function () {
  // Get values from the username and password input fields
  const username = document.getElementById("usernameInput").value;
  const password = document.getElementById("passwordInput").value;

  // Validate the credentials
  if (username === "admin@email.com" && password === "admin123") {
    // Redirect to dashboard if credentials are correct
    window.location.href = "dashboard.html";
  } else {
    // Show an alert if credentials are incorrect
    alert("Invalid credentials. Please try again.");
  }
});
