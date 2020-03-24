const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject);  // temporary checking for valid response and data parsing

        const towns = jsonObject['towns'];
        for (let i = 0; i < towns.length; i++) {
            if (towns[i].name == 'Fish Haven' || towns[i].name == 'Preston' || towns[i].name == 'Soda Springs') {
                let townpage = document.createElement('section');
                let townname = document.createElement('h2');
                let motto = document.createElement('h3');
                let year = document.createElement('h4');
                let population = document.createElement('h4');
                let rain = document.createElement('h4');
                let photo = document.createElement('img');

                photo.setAttribute('src', "images/" + towns[i].photo);
                photo.setAttribute('alt', towns.name);
                townpage.appendChild(photo);

                townname.textContent = towns[i].name;
                townpage.appendChild(townname);

                motto.textContent = towns[i].motto;
                townpage.appendChild(motto);

                year.textContent = 'Founded in ' + towns[i].yearFounded;
                townpage.appendChild(year);

                population.textContent = 'Population: ' + towns[i].currentPopulation;
                townpage.appendChild(population);

                rain.textContent = 'Avg. rainfall: ' + towns[i].averageRainfall;
                townpage.appendChild(rain);

                document.querySelector('div.towns').appendChild(townpage);
            }
        }
    });