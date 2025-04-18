
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    
    if (loginForm) {
      loginForm.addEventListener('submit', async function(e) {
        e.preventDefault(); // This is crucial to stop the form from submitting traditionally
        
        const phoneNumber = document.getElementById('phone').value.trim();
        const password = document.getElementById('password').value;
        
        if (!phoneNumber || !password) {
          alert('Please enter both phone number and password.');
          return;
        }
        
        try {
          const response = await fetch('https://get-connected-backend.dev.quantumos.ai/api/auth/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ phoneNumber, password })
          });
          
          const data = await response.json();
          console.log('Login response:', data);
          
          if (response.ok && data?.data?.token) {
            localStorage.setItem('token', data.data.token);
            localStorage.setItem('userInfo', JSON.stringify(data.data.user));
            alert('Login successful!');
            window.location.href = 'index.html';
          } else {
            alert(data.message || 'Login failed.');
          }
        } catch (err) {
          console.error('Login error:', err);
          alert('An error occurred during login.');
        }
      });
    }
  });
  