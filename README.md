# weather app

Summary: This is a solution to the Free Code Camp (FCC) intermediate front-end development project task to create a web app to display the current local weather.

Resources: HTML5, CSS3, Bootstrap 3, Javascript, jQuery, AJAX/JSON, Openweathermap.org API, Geolocation, CodePen.

Notes: This is one of the intermediate challenges included in the FCC Front-End Web Developer certification course. The requirement was to build a web app that would display the current weather for the user's location. It also required the background image to change depending on the current weather. An additional piece of fucntionality was that the units of the temperature displayed could be changed from Celcius to Fahrenheit just by clicking on the temperature displayed.

A JS/jQuery script takes the user's location by accessing the browser navigator geolocation information. It uses the current latitude and longitude to make an AJAX call to the Openweathermap.org API to request the current weather results returned in JSON. Location and weather data are added to the displayed page along with an appropriate weather icon using jQuery. A JS switch is used to select an appropriate background image based on the returned Openweathermap weather code.

Link: https://codepen.io/woody01666/full/aLvgjQ/
