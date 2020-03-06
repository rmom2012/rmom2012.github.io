const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);  // temporary checking for valid response and data parsing

  const prophets = jsonObject['prophets'];
  for (let i = 0; i < prophets.length; i++ ) {
      let card = document.createElement ('section');
      let name = document.createElement ('h2');
      let birthdate = document.createElement ('p');
      let birthplace = document.createElement ('p');
      let picture = document.createElement ('img');

name.textContent = prophets[i].name + '' + prophets[i].lastname;
card.appendChild(name);

birthdate.textContent = 'Date of birth:' + prophets[i].birthdate;
card.appendChild(birthdate);

birthplace.textContent = 'Place of birth:' + prophets[i].birthplace;
card.appendChild(birthplace);

picture.setAttribute( 'src', prophets[i].imageurl);
picture.setAttribute('alt' , prophets[i].name + '-' + prophets.order);
card.appendChild(picture);

document.querySelector('div.cards').appendChild(card);}
  });


