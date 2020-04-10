const requestURL = 'https://rmom2012.github.io/salmonRiver/riverGuide.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    

  const guides = jsonObject['guides'];
  for (let i = 0; i < guides.length; i++ ) {
      let card = document.createElement ('section');
      let name = document.createElement ('h2');
      let imageurl = document.createElement ('img');
      let certification = document.createElement ('h4');
      let experience = document.createElement ('h4');
      let email = document.createElement ('h4');
      let bio = document.createElement ('h4');
      

name.textContent = guides[i].name + '' + guides[i].lastname;
card.appendChild(name);

imageurl.setAttribute( 'src', guides[i].imageurl);
imageurl.setAttribute('alt' , guides[i].name);
card.appendChild(imageurl);

certification.textContent = 'Certification:' + guides[i].certification;
card.appendChild(certification);

experience.textContent = 'Experience:' + guides[i].experience;
card.appendChild(experience);

email.textContent = 'Email:' + guides[i].email;
card.appendChild(email);

bio.textContent = 'Biography:' + guides[i].bio;
card.appendChild(bio);

document.querySelector('div.cards').appendChild(card);}
  });

