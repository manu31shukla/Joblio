function fetchLocation() {
    // Implement the logic to fetch the user's location using Google Maps API or other geolocation methods
    // Update the input value with the fetched location
  }
  
  function toggleJobRoleOptions() {
    const options = document.querySelector('.job-role-options');
    options.style.display = options.style.display === 'none' ? 'block' : 'none';
  }
  
  function selectJobRole(option) {
    const jobRoleInput = document.getElementById('job-role');
    if (option === 'other') {
      // Handle "Other" option
      jobRoleInput.classList.add('show-other-input');
    } else {
      jobRoleInput.value = option.innerText;
      jobRoleInput.classList.remove('show-other-input');
    }
    toggleJobRoleOptions();
  }
  