document.addEventListener('DOMContentLoaded', function() {
    var searchForm = document.getElementById('search-form');
    var searchResults = document.getElementById('search-results');
  
    searchForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      var location = document.getElementById('location').value;
      var jobRole = document.getElementById('job-role').value;
  
      // Perform search based on location and job role
      var results = performSearch(location, jobRole);
  
      displayResults(results);
    });
  
    function performSearch(location, jobRole) {
      // Logic to perform the search basedon location and job role
      // Here, you can make an API request or query a database to fetch the candidates matching the search criteria
  
      // Placeholder logic to simulate search results
      var candidates = [
        { name: "John Doe", location: "City A, Country", jobRole: "Role A" },
        { name: "Jane Smith", location: "City B, Country", jobRole: "Role B" },
        { name: "Robert Johnson", location: "City C, Country", jobRole: "Role C" }
      ];
  
      // Filter the candidates based on location and job role
      var results = candidates.filter(function(candidate) {
        var candidateLocation = candidate.location.toLowerCase();
        var candidateJobRole = candidate.jobRole.toLowerCase();
        var searchLocation = location.toLowerCase();
        var searchJobRole = jobRole.toLowerCase();
  
        return candidateLocation.includes(searchLocation) && candidateJobRole.includes(searchJobRole);
      });
  
      return results;
    }
  
    function displayResults(results) {
      var searchResultsList = document.createElement('ul');
  
      results.forEach(function(candidate) {
        var listItem = document.createElement('li');
        var candidateName = document.createElement('h3');
        candidateName.textContent = candidate.name;
  
        var locationText = document.createElement('p');
        locationText.textContent = 'Location: ' + candidate.location;
  
        var jobRoleText = document.createElement('p');
        jobRoleText.textContent = 'Job Role: ' + candidate.jobRole;
  
        var evaluateButton = document.createElement('button');
        evaluateButton.classList.add('evaluate-button');
        evaluateButton.textContent = 'Evaluate';
  
        listItem.appendChild(candidateName);
        listItem.appendChild(locationText);
        listItem.appendChild(jobRoleText);
        listItem.appendChild(evaluateButton);
  
        searchResultsList.appendChild(listItem);
      });
  
      searchResults.innerHTML = '';
      searchResults.appendChild(searchResultsList);
    }
  });
  