const signupFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  const username = document.querySelector('#username-signup').value.trim();

  if (password.length < 8) {
    alert('Password must be more then 8 characters.');
  } else if (email && password && username) {
    // Converts the entered info to text for routes
    const response = await fetch('/api/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
        name: username,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to sign up');
    }
  }
};

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);