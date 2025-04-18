// Added jobs API
function getJobs(event) {
    const token = localStorage.getItem('token');

    if (!token) {
      alert('You need to be logged in to view jobs.');
      return;
    }

    fetch('https://get-connected-backend.dev.quantumos.ai/api/jobs', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json(); // or response.text() if the response is not JSON
    })
    .then(job_data => {
      // console.log('Jobs data:', job_data);
      // console.log('Jobs name:', job_data.data[0].name);
      // Optional: Navigate to jobs page or do something with the data
      localStorage.setItem('jobInfo', JSON.stringify(job_data));
      window.location.href = 'jobs.html'; // Call your navigation function
    })
    .catch(error => {
      console.error('Error fetching jobs:', error);
    });
  }


// Fetch username from login info
  document.addEventListener('DOMContentLoaded', () => {
    const userInfoStr = localStorage.getItem('userInfo');
    
    if (userInfoStr) {
      const userInfo = JSON.parse(userInfoStr);
      document.getElementById('user-name').textContent = userInfo.name;
    } else {
      console.warn('No user info found in localStorage');
      // Optional redirect or fallback
    }
  });


  // Added contact API
function getContacts(event) {
    const token = localStorage.getItem('token');

    if (!token) {
      alert('You need to be logged in to view contacts.');
      return;
    }

    contact_res=fetch('https://get-connected-backend.dev.quantumos.ai/api/contacts', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(contact_data => {
      console.log('Contacts data:', contact_data);
      // Optional: Navigate to contacts page or render data
      localStorage.setItem('contactInfo', JSON.stringify(contact_data));
      window.location.href = 'contacts.html'; 
    //   navigateTo('contacts',contact_data);
    })
    .catch(error => {
      console.error('Error fetching contacts:', error);
    });
   
  }



// Added Contact-update API to save the changes
function getEstimates(event) {
  event.preventDefault(); // Prevent link from navigating immediately

  const token = localStorage.getItem('token');
  console.log("Token from localStorage:", token);

  if (!token) {
    alert('You need to be logged in to view jobs.');
    return;
  }

  est_res=fetch('https://get-connected-backend.dev.quantumos.ai/api/estimates', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      console.log("Fetch response status:", response.status);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(estimate_data => {
      console.log('Estimates data received:', estimate_data);
      localStorage.setItem('estimatesInfo', JSON.stringify(estimate_data));
      // Redirect only after data is saved
      window.location.href = 'estimates.html';
    })
    .catch(error => {
      console.error('Error fetching estimates:', error);
    });
}


// Added CalenderEvent API to save the changes
function getCalenderEvent(event) {
  event.preventDefault(); // Prevent link from navigating immediately

  const token = localStorage.getItem('token');
  // console.log("Token from localStorage:", token);

  if (!token) {
    alert('You need to be logged in to view jobs.');
    return;
  }

  est_res=fetch('https://get-connected-backend.dev.quantumos.ai/api/calendar/events', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      console.log("Fetch response status:", response.status);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(calEvent_data => {
      console.log('Calender data received:', calEvent_data);
      localStorage.setItem('estimatesInfo', JSON.stringify(calEvent_data));
      // Redirect only after data is saved
      window.location.href = 'calender.html';
    })
    .catch(error => {
      console.error('Error fetching estimates:', error);
    });
}

