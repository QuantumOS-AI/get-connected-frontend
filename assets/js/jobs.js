// Fetch username from login info
document.addEventListener('DOMContentLoaded', () => {
    const jobDataStr  = localStorage.getItem('jobInfo');
    console.log("jobss",jobDataStr )
    
    
    if (jobDataStr ) {
      const jobInfo = JSON.parse(jobDataStr );
      document.getElementById('job-name').textContent =  jobInfo.data[0].name;
      document.getElementById('job-clientname').textContent =  jobInfo.data[0].client.name;
      document.getElementById('job-startdt').textContent = jobInfo.data[0].startDate;
      document.getElementById('job-add').textContent = jobInfo.data[0].address;
      document.getElementById('job-price').textContent = jobInfo.data[0].price;
    } else {
      console.warn('No user info found in localStorage');
      // Optional redirect or fallback
    }
  });