
fetch('https://swapi.dev/api/people/')
    .then(result => result.json())
    .then(jsonResult => {
        let main = document.querySelector('main');

        main.innerHTML = `<h2>Names:</h2>`;
        console.log(jsonResult);
        jsonResult
        main.innerHTML = `<h2>Names:</h2>`;
        jsonResult.results.forEach(person => {
            main.innerHTML += `<li>${person.name}</li>`
        });
    })

