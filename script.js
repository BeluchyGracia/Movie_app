document.addEventListener('DOMContentLoaded', () => {
    // Get references to the relevant HTML elements
    const form = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    
    // Add an event listener to the form
    form.addEventListener('submit', (event) => {
      // Prevent the default form submission behavior
      event.preventDefault();
      
      // Get the username and password values
      const username = usernameInput.value;
      const password = passwordInput.value;
      
      // TODO: Validate the username and password
      
      // TODO: Perform the login action (e.g., send a request to the server)
      
      // Redirect the user to the next page
      window.location.href = 'login.html';
    });
});
