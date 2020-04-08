//------NAV------//
const hambutton = document.querySelector(".ham");
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
  document.querySelector(".navigation").classList.toggle("responsive");
}

const weatherURL = 'https://api.openweathermap.org/data/2.5/weather?id=4092267&units=imperial&APPID=77bb596d2a5412ff7668b4a992e4f751';

fetch(weatherURL)
    .then((response) => response.json())
    .then((jsonObject) => {
        console.table(jsonObject);
        document.getElementById('description').textContent = jsonObject.weather[0].description;
        document.getElementById('currentTemp').textContent = jsonObject.main.temp + "°F";
        document.getElementById('high').textContent = jsonObject.main.temp_max + "°F";
        document.getElementById('humidity').textContent = jsonObject.main.humidity + '%';
        document.getElementById('windSpeed').textContent = jsonObject.wind.speed + 'mph';
});

const requestURL = 'https://rmom2012.github.io/Salmon%20River/riverGuide.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);  // temporary checking for valid response and data parsing

  const guides = jsonObject['guides'];
  for (let i = 0; i < guides.length; i++ ) {
      let card = document.createElement ('section');
      let name = document.createElement ('h2');
      let imageurl = document.createElement ('img');
      let certification = document.createElement ('p');
      let experience = document.createElement ('p');
      let email = document.createElement ('p');
      let bio = document.createElement ('p');
      

name.textContent = guides[i].name + '' + guides[i].lastname;
card.appendChild(name);

certification.textContent = 'Certification:' + guides[i].certification;
card.appendChild(certification);

experience.textContent = 'Experience:' + guides[i].experience;
card.appendChild(experience);

email.textContent = 'Email:' + guides[i].email;
card.appendChild(email);

bio.textContent = 'Biography:' + guides[i].bio;
card.appendChild(bio);

imageurl.setAttribute( 'src', guides[i].imageurl);
imageurl.setAttribute('alt' , guides[i].name);
card.appendChild(imageurl);

document.querySelector('div.cards').appendChild(card);}
  });

