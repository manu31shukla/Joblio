

document.getElementById('search-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  
  var location = document.getElementById('location').value;
  var jobRole = document.getElementById('job-role').value;
  
  // Simulate search functionality
  searchCandidates(location, jobRole);
});

function searchCandidates(location, jobRole) {
  // Fetch the list of candidates based on the search criteria (location and job role)
  
  // Example: Dummy data for demonstration
  var dummyCandidates = [
    {
      name: 'John Doe',
      location: 'New York, USA',
      jobRole: 'Frontend Developer'
    },
    {
      name: 'Jane Smith',
      location: 'London, UK',
      jobRole: 'Backend Developer'
    },
    {
      name: 'Alex Johnson',
      location: 'Sydney, Australia',
      jobRole: 'Full Stack Developer'
    },
    {
      name: "Sarah Thompson",
      location: "Toronto, Canada",
      jobRole: "Software Engineer"
    },
    {
      name: "Michael Brown",
      location: "Berlin, Germany",
      jobRole: "Data Scientist"
    },
    {
      name: "Emily Wilson",
      location: "Paris, France",
      jobRole: "Graphic Designer"
    },
    {
      name: "Daniel Lee",
      location: "Tokyo, Japan",
      jobRole: "UX/UI Designer"
    },
    {
      name: "Sara aLI",
      location: "New Delhi, India",
      jobRole: "Mechanical Engineer"
    },
    {
      name: "Manu Shukla",
      location: "Hyderabad, India",
      jobRole: "Devops Engineer"
    },
    {
      name: "Mohit Singh",
      location: "Chennai, India",
      jobRole: "AI/ML Engineer"
    },
    {
      name: "Daniel Patel",
      location: "Mumbai, India",
      jobRole: "Graphic Designer"
    },
    // Add more dummy candidates here
  ];
  
  // Filter the candidates based on the search criteria
  var filteredCandidates = dummyCandidates.filter(function(candidate) {
    return (location === '' || candidate.location.toLowerCase().includes(location.toLowerCase())) &&
           (jobRole === '' || candidate.jobRole.toLowerCase().includes(jobRole.toLowerCase()));
  });
  
  // Display the filtered candidates
  displayCandidates(filteredCandidates);
}

function displayCandidates(candidates) {
  var searchResults = document.getElementById('search-results');
  searchResults.innerHTML = ''; // Clear the previous search results
  
  var resultsHeading = document.createElement('h2');
  resultsHeading.textContent = 'Search Results';
  searchResults.appendChild(resultsHeading);
  
  if (candidates.length === 0) {
    var noResultsMessage = document.createElement('p');
    noResultsMessage.textContent = 'No candidates found.';
    searchResults.appendChild(noResultsMessage);
  } else {
    var candidatesList = document.createElement('ul');
    
    candidates.forEach(function(candidate) {
      var candidateCard = document.createElement('li');
      candidateCard.className = 'candidate-card';
      
      var candidateName = document.createElement('h3');
      candidateName.textContent = candidate.name;
      candidateCard.appendChild(candidateName);
      
      var location = document.createElement('p');
      location.textContent = 'Location: ' + candidate.location;
      candidateCard.appendChild(location);
      
      var jobRole = document.createElement('p');
      jobRole.textContent = 'Job Role: ' + candidate.jobRole;
      candidateCard.appendChild(jobRole);
      
      var evaluateButton = document.createElement('button');
      evaluateButton.className = 'evaluate-button';
      evaluateButton.textContent = 'Evaluate';
      candidateCard.appendChild(evaluateButton);
      
      candidatesList.appendChild(candidateCard);
    });
    
    searchResults.appendChild(candidatesList);
  }
}
