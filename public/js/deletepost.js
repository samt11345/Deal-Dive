const loginFormHandler = async (event) => {
    event.preventDefault();
  
  const id = event.target.dataset.id
  
    if ( id) {
      const response = await fetch('/api/posts/'+id, {
        // Converts the entered info to text for routes
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // Afterwards send to home
        document.location.replace('/dashboard');
      } else {
        alert('Failed to log in');
      }
    }
  };
  
  document
    .querySelector('#deleteBtn')
    .addEventListener('click', loginFormHandler);