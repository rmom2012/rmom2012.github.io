const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {return response.json();})

  .then(function (jsonObject) {
    console.table(jsonObject);
  
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++ ) {
      if (towns[i].name == 'Fish Haven'){
        let eventscard = document.createElement('section');
        let event1 = document.createElement('h4');
        let event2 = document.createElement('h4');
        let event3 = document.createElement('h4');
        let event4 = document.createElement('h4');
       
        event1.textContent = towns[i].events[0];
        eventscard.appendChild(event1);

        event2.textContent = towns[i].events[1];
        eventscard.appendChild(event2);

        event3.textContent = towns[i].events[2];
        eventscard.appendChild(event3);

        event4.textContent = towns[i].events[3];
        eventscard.appendChild(event4);

        document.querySelector('div.activities').appendChild(eventscard);
      }
    }
  });