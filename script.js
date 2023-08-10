// IP Geolocation API Key
const ipGeoApiKey = 'a749c55302af49be805c1c6a96d4971b';

// Fetch user's location data
fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${ipGeoApiKey}`)
    .then(response => response.json())
    .then(data => {
        const locationDiv = document.getElementById('location');
        locationDiv.innerHTML = `<h3>Your Geolocation</h3><p>City: ${data.city}, Country: ${data.country_name}</p>`;
    })
    .catch(error => console.error('Error fetching location data:', error));

// Fetch NASA APOD data
fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(response => response.json())
    .then(data => {
        document.getElementById('apod-image').src = data.url;
        document.getElementById('apod-description').textContent = data.explanation;
    })
    .catch(error => console.error('Error fetching NASA APOD data:', error));
