document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  // Add your login logic here
  // Example: You can check credentials and redirect to home.html if successful
  window.location.href = 'home.html';
});

document.getElementById('signupForm').addEventListener('submit', function(e) {
  e.preventDefault();
  // Add your signup logic here
  // Example: You can create a new user and redirect to index.html (login page) after successful signup
  window.location.href = 'index.html';
});
