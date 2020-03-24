const weatherURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=77bb596d2a5412ff7668b4a992e4f751';

fetch(weatherURL)
    .then((response) => response.json())
    .then((jsonObject) => {
            console.log(jsonObject);

            document.getElementById('description').textContent = jsonObject.weather[0].description;
            document.getElementById('currentTemp').textContent = jsonObject.main.temp + "°F";
            document.getElementById('high').textContent = jsonObject.main.temp_max + "°F";
            document.getElementById('humidity').textContent = jsonObject.main.humidity + '%';
            document.getElementById('windSpeed').textContent = jsonObject.wind.speed + 'mph';
            document.getElementById('windChill').textContent = windChill(jsonObject.main.temp, jsonObject.wind.speed);

            
                });