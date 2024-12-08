document.addEventListener('DOMContentLoaded', () => {
  // Feedback form submission
  const feedbackForm = document.getElementById('feedback-form');
  feedbackForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const feedback = document.getElementById('feedback').value;

    alert(`Thank you, ${name}, for your feedback: "${feedback}"`);
    feedbackForm.reset();
  });

  // Registration form submission
  const registerForm = document.getElementById('register-form');
  registerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('reg-name').value;
    const email = document.getElementById('email').value;

    alert(`Welcome, ${name}! Registration successful with email: ${email}`);
    registerForm.reset();
  });
});
