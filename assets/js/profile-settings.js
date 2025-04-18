function update_userProfile(event) {
    event.preventDefault(); // Prevent the default form submission
  
    const token = localStorage.getItem('token');
  
    if (!token) {
      alert('You need to be logged in to update your profile.');
      return;
    }
  
    // Pull updated values from the form
    const updatedProfile = {
      name: document.getElementById('profile-name').value,
      email: document.getElementById('profile-email').value,
      phone: document.getElementById('profile-phone').value,
      title: document.getElementById('profile-title').value
    };
  
    fetch('https://get-connected-backend.dev.quantumos.ai/api/users/profile', {
      method: 'PUT', // or 'PATCH' based on your backend
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedProfile)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(usr_data => {
      console.log('Updated user data:', usr_data);
      localStorage.setItem('UsrProfile', JSON.stringify(usr_data));
      alert('Profile updated successfully!');
    })
    .catch(error => {
      console.error('Error updating profile:', error);
      alert('Failed to update profile.');
    });
  }
  