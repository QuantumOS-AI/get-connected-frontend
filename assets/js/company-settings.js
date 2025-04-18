function update_companyProfile(event) {
    event.preventDefault(); // Prevent the default form submission
  
    const token = localStorage.getItem('token');
  
    if (!token) {
      alert('You need to be logged in to update your profile.');
      return;
    }
  
    // Pull updated values from the form
    const comProfile = {
        companyName: document.getElementById('company-name').value,
        companyAddress: document.getElementById('company-address').value,
        phone: document.getElementById('company-phone').value,
        email: document.getElementById('company-email').value,
        website: document.getElementById('company-website').value
      
    };
  
    fetch('https://get-connected-backend.dev.quantumos.ai/api/users/company', {
      method: 'PUT', // or 'PATCH' based on your backend
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(comProfile)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(com_prof => {
      console.log('Updated user data:', com_prof);
      localStorage.setItem('companyProfile', JSON.stringify(com_prof));
      alert('Profile updated successfully!');
    })
    .catch(error => {
      console.error('Error updating profile:', error);
      alert('Failed to update profile.');
    });
  }
  

//   GET user Profile

  function update_comProfile(event) {
    event.preventDefault(); // Prevent the default form submission
  
    const token = localStorage.getItem('token');
  
    if (!token) {
      alert('You need to be logged in to update your profile.');
      return;
    }
  
    // Pull updated values from the form
    const comProfile = {
      companyName: document.getElementById('company-name').value,
      companyAddress: document.getElementById('company-address').value,
      phone: document.getElementById('company-phone').value,
      email: document.getElementById('company-email').value,
      website: document.getElementById('company-website').value
    };
  
    fetch('https://get-connected-backend.dev.quantumos.ai/api/users/company', {
      method: 'GET', // ✅ Correct method to send data
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
    //   body: JSON.stringify(comProfile)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(com_prof => {
      console.log('Updated company profile:', com_prof);
      localStorage.setItem('companyProfile', JSON.stringify(user_prof));
      alert('Company profile updated successfully!');
    })
    .catch(error => {
      console.error('Error failed to fetch:', error);
      alert('Failed to update company profile.');
    });
  }
  