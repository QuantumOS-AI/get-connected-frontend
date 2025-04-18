// Added Contact-update API to save the changes
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