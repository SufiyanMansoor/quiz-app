document.addEventListener("DOMContentLoaded", function () {
  const signupForm = document.getElementById("signupForm");
  const signinForm = document.getElementById("signinForm");

  if (signupForm) {
    signupForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Sign up successful!");
      window.location.href = "signin.html";
    });
  }

  if (signinForm) {
    signinForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Sign in successful!");
      window.location.href = "quiz.html";
    });
  }
});
