// Function to get weather data
function getWeather() {
    const location = document.getElementById("locationInput").value.trim();

    // Check if the location input is empty
    if (!location) {
        alert("Please enter a location.");
        return;
    }

    // Replace with your actual weather API URL and key
    const apiKey = "0204f8004f6fdfc05af1c9743b8ac721";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    // Fetch weather data from API
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            // Update city name and temperature
            document.getElementById("cityName").innerText = data.name;
            document.getElementById("temperature").innerText = `${Math.round(data.main.temp)} °C`;

            // Check weather condition and update icon
            const condition = data.weather[0].main.toLowerCase();
            updateWeatherIcon(condition);

            // Update other weather details
            document.getElementById("humidity").innerText = `${data.main.humidity} %`;
            document.getElementById("windSpeed").innerText = `${data.wind.speed} km/h`;
            document.getElementById("sunrise").innerText = formatTime(data.sys.sunrise);
            document.getElementById("sunset").innerText = formatTime(data.sys.sunset);
            document.getElementById("uvIndex").innerText = "N/A"; // UV index default
            document.getElementById("pressure").innerText = `${data.main.pressure} hPa`;
            document.getElementById("precipitation").innerText = `${data.rain?.["1h"] || 0} mm`;

            // Fetch UV index using latitude and longitude
            const lat = data.coord.lat;
            const lon = data.coord.lon;
            fetchUVIndex(lat, lon, apiKey);
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
            alert("Could not retrieve weather data. Please check the city name or try again later.");
        });
}

// Function to fetch UV index
function fetchUVIndex(lat, lon, apiKey) {
    const uvApiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    fetch(uvApiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            // Update UV index
            document.getElementById("uvIndex").innerText = `UV Index: ${data.current.uvi}`;
        })
        .catch(error => {
            console.error("Error fetching UV index:", error);
            document.getElementById("uvIndex").innerText = "N/A"; // Default value in case of error
        });
}

// Function to update the icon based on weather condition
function updateWeatherIcon(condition) {
    const iconElement = document.getElementById("condition");

    // Reset icon and description
    iconElement.innerHTML = "";

    // Select appropriate icon based on condition
switch (condition) {
    case "clear":
        iconElement.innerHTML = '<i class="wi wi-day-sunny"></i> Clear';
        break;
    case "clouds":
        iconElement.innerHTML = '<i class="wi wi-cloudy"></i> Cloudy';
        break;
    case "rain":
        iconElement.innerHTML = '<i class="wi wi-rain"></i> Rainy';
        break;
    case "thunderstorm":
        iconElement.innerHTML = '<i class="wi wi-thunderstorm"></i> Thunderstorm';
        break;
    case "snow":
        iconElement.innerHTML = '<i class="wi wi-snow"></i> Snowy';
        break;
    case "mist":
    case "fog":
        iconElement.innerHTML = '<i class="wi wi-fog"></i> Foggy';
        break;
    case "haze":
        iconElement.innerHTML = '<i class="wi wi-day-haze"></i> Hazy';
        break;
    case "drizzle":
        iconElement.innerHTML = '<i class="wi wi-sprinkle"></i> Drizzle';
        break;
    case "smoke":
        iconElement.innerHTML = '<i class="wi wi-smoke"></i> Smoky';
        break;
    case "dust":
        iconElement.innerHTML = '<i class="wi wi-dust"></i> Dusty';
        break;
    case "sand":
        iconElement.innerHTML = '<i class="wi wi-sandstorm"></i> Sandy';
        break;
    case "ash":
        iconElement.innerHTML = '<i class="wi wi-volcano"></i> Ashy';
        break;
    case "squall":
        iconElement.innerHTML = '<i class="wi wi-strong-wind"></i> Squall';
        break;
    case "tornado":
        iconElement.innerHTML = '<i class="wi wi-tornado"></i> Tornado';
        break;
    default:
        iconElement.innerHTML = '<i class="wi wi-na"></i> Not Available';
}
}

// Helper function to format sunrise and sunset time with AM/PM
function formatTime(unixTimestamp) {
    const date = new Date(unixTimestamp * 1000);
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;  // 12-hour format
    return `${hours}:${minutes} ${ampm}`;
}