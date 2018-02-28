// Get current location
$(document).ready(function() {
  $(".bg").css('background-image', 'url("images/clearsky.jpg")');
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var currentLatitude = position.coords.latitude;
      var currentLongitude = position.coords.longitude;
      var weatherSource = "https://api.openweathermap.org/data/2.5/weather?lat=" +
                        currentLatitude + "&lon=" +
                        currentLongitude + "&units=metric&appid=59b6d66e08c998f6401dfe11a6de2bd2";

// Configure click on temperature information to switch between units (C and F)
      var currentTemperature = 0;
      var convertedTemperature = 0;
      var toggleCount = 0;
      var tempUnit = "";
      $("#currentTemperature").on("click", function() {
        toggleCount += 1;
        if (toggleCount % 2 == 1) {
          convertedTemperature = ((currentTemperature * 1.8) + 32).toFixed(1);
          tempUnit = "F";
        }
        else {
          convertedTemperature = currentTemperature;
          tempUnit = "C";
        }
        $("#currentTemperature").html(convertedTemperature + "<sup>o</sup><strong id=\"unitChange\">" + tempUnit + "</strong>");
      });

// Get JSON data from openweathermap.org API based on geolocation
      $.ajax({
        url : weatherSource,
        method : 'GET',
        success : function (data) {

// Extract the data we need
          var currentLocation = data.name;
          var currentWeather = data.weather[0].description;
          currentWeather = currentWeather.charAt(0).toUpperCase() + currentWeather.slice(1); // Make first character a capital
          currentTemperature = data.main.temp.toFixed(1); // Temperature to 1 decimal place
          var currentWeatherIconID = data.weather[0].icon;
          var currentIconImageSrc = "https://openweathermap.org/img/w/" + currentWeatherIconID + ".png";

// Update web app with extracted data
          $("#currentTemperature").html(currentTemperature + "<sup>o</sup><strong id=\"unitChange\">C</strong>");
          $("#currentWeather").html(currentWeather);
          $("#currentLocation").html("<strong><mark>" + currentLocation + "</mark></strong>");
          $("#currentWeatherIcon").html("<img src='" + currentIconImageSrc + "'>")

// Choose background based on weather icon code
          var backgroundImage = "clearsky.jpg";
          switch (currentWeatherIconID) {
            case "01d":
            case "01n":
              backgroundImage = "clearsky.jpg"
              break;
            case "02d":
            case "02n":
            case "03d":
            case "03n":
              backgroundImage = "cloudswithbluesky.jpg";
              break;
            case "04d":
            case "04n":
            case "09d":
            case "09n":
            case "10d":
            case "10n":
              backgroundImage = "showerrain.jpg";
              break;
            case "11d":
            case "11n":
              backgroundImage = "lightning.jpg";
              break;
            case "13d":
            case "13n":
              backgroundImage = "snow.jpg";
              break;
            case "50d":
            case "50n":
              backgroundImage = "mist.jpg";
              break;
          }
          $(".bg").css('background-image', 'url(\"images/' + backgroundImage + '\")');
        }
      });
    });
  }
});
