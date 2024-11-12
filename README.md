# WeatherApp
**Weather Management App**

A responsive, modern web application to display real-time weather data based on user input. It fetches weather information such as temperature, humidity, wind speed, pressure, sunrise, sunset, and other metrics using the OpenWeather API. The app features a user-friendly interface with weather icons to represent different weather conditions.


---

**Project Overview**

This project is designed to give users the ability to enter a location (city name) and view real-time weather data such as:

Temperature

Humidity

Wind Speed

Pressure

Sunrise and Sunset times

Precipitation

UV Index

Weather Condition Icons


The app makes use of the OpenWeatherMap API to fetch weather data and display it on the frontend with appropriate weather icons and other weather-related information.


---

**Features**

Search Bar: Allows users to search for the weather of any location by entering the city name.

Real-Time Data: Displays current weather details such as temperature, humidity, wind speed, etc.

Weather Icons: Shows dynamic icons based on the weather condition (e.g., clear, cloudy, rainy).

Responsive Design: The layout adjusts to fit various screen sizes and devices.

Background: Customizable background image to enhance the user experience.



---

**Technologies Used**

HTML: Markup for structuring the app.

CSS: Styling to make the app visually appealing and responsive.

JavaScript: For handling user input, fetching API data, and updating the UI dynamically.

OpenWeatherMap API: Provides weather data for different locations.



---

**Requirements**

1. Text Editor/IDE: You can use any text editor such as VS Code.


2. Web Browser: To view the application (e.g., Chrome, Firefox, Edge).


3. Internet Connection: To fetch weather data from the API.




---

**Setup Instructions**

Follow these steps to run the Weather Management App locally:

1. Clone the Repository:

git clone https://github.com/yourusername/WeatherApp.git
cd WeatherApp

2. Add Your OpenWeatherMap API Key:

Sign up at OpenWeatherMap and get an API key.

Replace the placeholder YOUR_API_KEY in script.js with your actual API key:

const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API key

3. Open the Project in Your Browser:

Double-click the index.html file to open the app in your browser.

Or, use a live server extension in your IDE (such as the "Live Server" extension in VS Code).

---

**How to Run the Project**

1. After setting up the project as described above, you can run the app by simply opening the index.html file in any modern web browser.


2. Once the app loads, you can:

Enter a city name in the search bar.

Click the "Search" button to fetch weather details for that city.

The weather details including temperature, wind speed, humidity, etc., will be displayed in the app interface.





---

**Customization Options**

Background Image: You can replace the default background image located in /images/background.jpg with your own preferred image.

Weather Icons: The app uses Weather Icons for representing weather conditions. You can add or modify the icons as per your design preferences.



---

**API Key and Limits**

OpenWeatherMap API:

You need to sign up at OpenWeatherMap and obtain an API key to access weather data.

Free-tier usage is available with limited requests per minute. Check the pricing for further details.

---

**Troubleshooting**

1. Location Not Found:

Ensure the city name is spelled correctly.

Check your internet connection.



2. API Response Error:

Make sure your API key is correctly set in the script.js file.

If the API is down or limited, retry later.

---

**Acknowledgements**

OpenWeatherMap for providing the weather data API.

Font Awesome for providing free icons.

Weather Icons for beautiful weather icons.
