// localStorage.removeItem("pages");
// localStorage.removeItem("resultCount");
// localStorage.removeItem("planets");

let currentPage = 1;
// 'jResult' is what returns when fetched.
let jResult = {};
// 'dataResult' is the data loaded from Local storage, or updated when fetched.
let dataResult = {};
// 'resultCount' is the number of items in all pages.
let resultCount = 0;
let resultsPerPage = 1;
let numbOfPages = 0;

// 'planetsData' to storage the information of the different planets.
let planetsData = {};


let colReplace = {
    "gold": "DarkGoldenRod",
    "fair": "FloralWhite",
    "light": "White",
    "pale": "Ivory",
    "dark": "Black",
    "green-tan": "DarkOliveGreen",
    "mottled green": "SeaGreen", 
    "blond": "Gold", 
    "blonde": "Gold", 
    "auburn": "FireBrick",
    "brown": "SaddleBrown"
}
let colorsToIgnore = ["unknown", "n/a", "none"];

let main = document.querySelector('main');
// main.innerHTML = `<h2>Names:</h2>`;

function updateData(){
    console.log(" ─── Updating Data ─── ");
    // console.log(jResult.next);
    // console.log(jResult.next.split("=")[1]);
    // dataResult.push(jsonResult.results);

    if(dataResult[currentPage] == null && Object.keys(jResult).length != 0){
        if(jResult.next){
            currentPage = jResult.next.split("=")[1] - 1;
            // console.log(`currentPage: ${currentPage}`);
        }
        dataResult[currentPage] = jResult.results;
        resultCount = jResult.count;
    }

    // console.log(`results: →`);
    // console.log(dataResult);
    // console.log(`results for the requested page: →`);
    // console.log(dataResult[currentPage]);
    // console.log(`length of results: ${dataResult[currentPage].length}`);

    if(resultsPerPage < dataResult[currentPage].length){
        resultsPerPage = dataResult[currentPage].length;
        // console.log(`result per page: ${resultsPerPage}`);
    }
    if(numbOfPages == 0){
        numbOfPages = Math.floor(resultCount/resultsPerPage);
        if(resultCount%resultsPerPage > 0){numbOfPages++;}
        // console.log(`number of pages: ${numbOfPages}`);   
    }

    saveToLocalStorage();
}

// page, name, listIndex
function loadDetailsCard(name, page, listIndex){
    console.log(" ─── Load Details Card ─── ");
    // dataResult[page][listIndex]
    console.log(`name: ${name}`);
    console.log(`page: ${page}`);
    console.log(`listIndex: ${listIndex}`);
    console.log(dataResult[page][listIndex]);
    let cardDetails = dataResult[page][listIndex];

    let cardKeys = Object.keys(dataResult[page][listIndex]);
    console.log(cardKeys);
    // ["name", "height", "mass", "hair_color", "skin_color", "eye_color", "birth_year", "gender", 
    //  "homeworld", "films", "species", "vehicles", "starships", "created", "edited", "url"];
    let keysToUse = ["name", "height", "mass", 
    "hair_color", "skin_color", "eye_color", 
    "birth_year", "gender", "homeworld"];

    // keysToUse.forEach(key => {
    //     console.log(`♦key: ${key} ─── `);
    //     console.log(cardDetails[key]);
    //     console.log(typeof cardDetails[key]);
    // });

    // let planetUrl = cardDetails["homeworld"];
    // let planetID = planetUrl.split("planets")[5];
    // if(planetsData[planetID] == null){
    //     fetchPlanet(planetUrl, listIndex);
    // } else {
    //     buildDetailsCard(listIndex);
    // }

    // buildDetailsCard();
    updateDetailsCard(listIndex);

    // let speciesUrl = cardDetails["species"];
    // if(cardDetails["species"] != null){
    //     let speciesUrl = cardDetails["species"];
    //     let planetID = planetUrl.split("planets")[5];
    // }

}
function buildDetailsCard(){
    console.log(" ─── Build Details Card ─── ");
    // console.log(`listIndex: ${listIndex}`);

    // console.log(`dataResult[currentPage][listIndex]: →`);
    // console.log(dataResult[currentPage][listIndex]);
    // let cardDetails = dataResult[currentPage][listIndex];

    // if(Object.keys(planetsData).length != 0){
    //     let planetUrl = cardDetails["homeworld"];
    //     let planetID = planetUrl.split("planets")[5];
    
    //     console.log(planetID);
    //     console.log(planetsData[planetID]);
    //     console.log(planetsData[planetID]["name"]);    
    // }

    // let keysToUse = ["name", "height", "mass", 
    // "hair_color", "skin_color", "eye_color", 
    // "birth_year", "gender", "homeworld"];

    let keysToUse = ["name", "height", "mass", 
    "hair_color", "skin_color", "eye_color", 
    "birth_year", "gender"];

    let keysToShow = ["Name", "Height", "Mass", 
    "Hair Color", "Skin Color", "Eye Color", 
    "Birth Year", "Gender"];
    
    // keysToUse.forEach(key => {
    //     console.log(`♦key: ${key} ─── ${typeof cardDetails[key]}`);
    //     console.log(`\t: ${cardDetails[key]}`);
    // });

    // let ulResult = document.getElementById('ulResult');
    // let resultsHeight = ulResult.offsetHeight;
    let detailsSpace = document.getElementById('detailsSpace');
    detailsSpace.innerHTML = "";

    let detailsScreenHeight = document.getElementById('ulResult').offsetHeight;
    detailsSpace.style.height = `${detailsScreenHeight}px`;

    let detailsBackScreen = document.createElement('div');
    detailsBackScreen.classList.add('detailsBackScreen');
    detailsBackScreen.style.height = `${detailsScreenHeight}px`;
    detailsBackScreen.style.width = `${detailsSpace.offsetWidth}px`;
    detailsBackScreen.addEventListener('click', (ev) => {
        toggleDetails();
    })
    detailsSpace.appendChild(detailsBackScreen);

    let detailsCard = document.createElement('div');
    detailsCard.id = "detailsCard";
    detailsCard.classList.add("detailsCard");
    detailsCard.style.height = `${detailsScreenHeight-20}px`;
    // detailsCard.innerHTML = "detailsCard";
    detailsSpace.appendChild(detailsCard);

    keysToUse.forEach(key => {
        let detailRow = document.createElement('div');
        detailRow.classList.add('detailRow');
        let detailKey = document.createElement('div');
        detailKey.classList.add('detailKey');
        let detailData = document.createElement('div');
        detailData.id = `detailKey_${key}`;
        // detailData.classList.add('detailData');
        detailKey.innerHTML = `${keysToShow[keysToUse.indexOf(key)]}:`;
        // detailData.innerHTML = `${cardDetails[key]}`;
        detailData.innerHTML = "";

        detailRow.appendChild(detailKey);
        detailRow.appendChild(detailData);
        detailsCard.appendChild(detailRow);
    });
    // toggleDetails();
    // updateDetails(listIndex);
}

function updateDetailsCard(listIndex){
    console.log(" ─── Update Details Card ─── ");
    let cardDetails = dataResult[currentPage][listIndex];
    let keysToUse = ["name", "height", "mass", 
    "hair_color", "skin_color", "eye_color", 
    "birth_year", "gender"];

    // hair_color
    // skin_color
    // if(cardDetails["skin_color"] == "unknown");

    let colorList = [];
    colorList.push(cardDetails["skin_color"]);
    colorList.push(cardDetails["hair_color"]);
    console.log('colorList: '+colorList.join(", "));

    let colorsToAdd = [];
    colorList.forEach(input =>{
        let colors = input.split(",");
        colors.forEach(color_s => {
            color = color_s.trim();
            if(colReplace[color] != null){color = colReplace[color];}
            if(!colorsToIgnore.includes(color)){
                colorsToAdd.push(color);
            }
        });
    });
    if(colorsToAdd.length == 0){colorsToAdd.push("gray");}

    console.log('colorsToAdd: '+colorsToAdd.join(", "));
    let nColors = colorsToAdd.length;
    let pickColor = 0;
    // newElement.style.backgroundColor = color;

    // -- adding attributes and colors;
    keysToUse.forEach(key => {
        keyID = `detailKey_${key}`;
        let detailData = document.getElementById(keyID);
        detailData.innerHTML = `${cardDetails[key]}`;
        // border: 0px inset rgba(255,0,255,0.5);
        detailData.style.border = `0px inset black`;
        detailData.style.borderBottom = `1px inset ${colorsToAdd[pickColor]}`;
        if(nColors>1){
            if(pickColor == nColors-1){
                pickColor = 0;
            } else {
                pickColor++;
            }
        }
    });
    toggleDetails();
}

function toggleDetails(){
    let ulResult = document.getElementById('ulResult');
    ulResult.classList.toggle('rotateResults');
    let detailsSpace = document.getElementById('detailsSpace');
    detailsSpace.classList.toggle('showDetails');

    let detailsBackScreen = document.querySelector('.detailsBackScreen');
    detailsBackScreen.classList.toggle('detailsBlackScreen');
    // detailsBackScreen
}

function buildDOM(){
    console.log(" ─── Building the DOM ─── ");
    // main.innerHTML = `<div class="listTitle">Names: <div class="pageNote">(page ${currentPage})</div></div>`;
    
    let resultsTitle = document.createElement('div');
    resultsTitle.innerHTML = `<div class="listTitle">Names: <div class="pageNote">(page ${currentPage})</div></div>`;
    main.appendChild(resultsTitle);

    let resultsList = document.createElement('div');
    resultsList.id = "resultsList";
    resultsList.classList.add("resultsList");
    main.appendChild(resultsList);

    let ulResult = document.createElement('div');
    ulResult.id = "ulResult";
    ulResult.classList.toggle('hide2');
    ulResult.classList.add("ulResult");
    setTimeout(() => { 
        ulResult.classList.toggle('hide2');
    }, 500);
    resultsList.appendChild(ulResult);
    dataResult[currentPage].forEach(person => {
        let resultCard = document.createElement('div');
        resultCard.classList.add("result-card");
        let listIndex = dataResult[currentPage].indexOf(person);
        resultCard.id = `name${listIndex}`;
        resultCard.innerHTML = `${person.name}`;
        resultCard.dataset.name = `${person.name}`;
        resultCard.dataset.index = listIndex;
        resultCard.dataset.page = currentPage;
        resultCard.addEventListener("click", (ev) => {
            // console.log(person);
            console.log(ev.target.dataset.name);
            console.log(ev.target.dataset.page);
            console.log(ev.target.dataset.index);
            // buildDetailsCard(ev.target.dataset.page, ev.target.dataset.name);
            loadDetailsCard(ev.target.dataset.name, ev.target.dataset.page, ev.target.dataset.index);
            // buildDetailsCard(ev.target.dataset.index);
        })
        ulResult.appendChild(resultCard);
    });
    // setTimeout(() => { 
    //     // ulResult.classList.toggle('hide2');
    //     // resultCard.classList.add("result-card");
    //     loadNames();
    // }, 100);
    loadNames();
    

    let detailsSpace = document.createElement('div');
    detailsSpace.id = "detailsSpace";
    // detailsCard.classList.add("detailsSpace", "hidden");
    detailsSpace.classList.toggle('hide2');
    detailsSpace.classList.add("detailsSpace");
    // detailsSpace.classList.toggle('hide2');
    setTimeout(() => { 
        detailsSpace.classList.toggle('hide2');
    }, 1200);
    // detailsSpace.innerHTML = "detailsSpace";
    resultsList.appendChild(detailsSpace);

    // let detailsBackScreen = document.createElement('div');
    // detailsSpace.appendChild(detailsBackScreen);

    let pagesNav = document.createElement('div');
    pagesNav.classList.add("pagesNav");
    main.appendChild(pagesNav);

    for(let i = 1; i< numbOfPages+1; i++){
        let liPage = document.createElement('div');
        liPage.dataset.page = i;
        liPage.innerHTML = i;
        liPage.classList.add("pageNav");
        liPage.addEventListener('click', (ev) => {
            currentPage = liPage.dataset.page;
            updateFromLocalStorage(liPage.dataset.page);
        });
        pagesNav.appendChild(liPage);
    }

    buildDetailsCard();

    UpdateResults();
    
    console.log(" ─── DOM Ready! ─── ");
    console.log(" ─── ↑ ─── End of request and update ─── ↑ ─── ");
}

function UpdateResults(){
    console.log(" ─── Updating the Results List ─── ");
    let pageNote = document.querySelector('.pageNote');
    pageNote.innerHTML = `(page ${currentPage})`;

    let ulResult = document.getElementById('ulResult');

    let cards = document.querySelectorAll('.result-card');
    let card_timeadd = 100;
    cards.forEach(card =>{
        // -- each card goes in 100 miliseconds intervals.
        setTimeout(() => { 
            // -- card leaves...
            if(!card.classList.contains("card-leaving")){
                card.classList.toggle("card-loaded"); 
                card.classList.toggle("card-leaving");
            }

            setTimeout(() => { 
                // -- card is updated.
                let person = dataResult[currentPage][card.dataset.index];
                if(person != null){
                    card.innerHTML = `${person.name}`;
                    card.dataset.name = `${person.name}`;
                    card.dataset.page = currentPage;
                    
                    // -- card clears 'leaving classes'...
                    if(card.classList.contains("card-leaving")){
                        card.classList.toggle("hide2");
                        card.classList.toggle("card-leaving");
                    }
                    // -- card returns...
                    setTimeout(() => { 
                        if(card.classList.contains("hide2")){
                            card.classList.toggle("hide2");
                        }
                        card.classList.toggle("card-loaded"); 
                    }, 100);
                }
            }, 300);
        }, card_timeadd);
        card_timeadd += 50;
    });
    console.log(" ─── Results List Updated! ─── ");
    console.log(" ─── End of request and update ─── ");
}


function updateDOM(){
    console.log(" ─── Updating the DOM ─── ");
    let pageNote = document.querySelector('.pageNote');
    pageNote.innerHTML = `(page ${currentPage})`;
    let ulResult = document.getElementById('ulResult');
    
    removeNames();
    let timeend = (resultsPerPage)*100;
    setTimeout(() => { /*...*/ 
        // ulResult.innerHTML = ``;
        dataResult[currentPage].forEach(person => {
            resultCard_id = `name${dataResult[currentPage].indexOf(person)}`;
            let resultCard = document.getElementById(resultCard_id);
            resultCard.innerHTML = `${person.name}`;
            resultCard.dataset.name = `${person.name}`;
            resultCard.dataset.page = currentPage;
        });
        loadNames();
    }, timeend);
    console.log(" ─── DOM Updated! ─── ");
    console.log(" ─── End of request and update ─── ");
}

function loadNames(){
    console.log(" ─── Load Names ─── ");
    // testA.classList.add("card-loaded");
    let cards = document.querySelectorAll('.result-card');
    let timeadd = 100;
    setTimeout(() => { 
        cards.forEach(card =>{
            setTimeout(() => { 
                if(card.classList.contains("card-leaving")){
                    card.classList.toggle("card-leaving");
                }
            }, timeadd);
            timeadd += 50;
            setTimeout(() => { 
                card.classList.add("card-loaded"); 
            }, timeadd);
            timeadd += 50;
        })
    }, 100);
}

function removeNames(){
    console.log(" ─── Remove Names ─── ");
    // testA.classList.add("card-loaded");
    let cards = document.querySelectorAll('.result-card');
    let timeadd = 100;
    // let timeend = (timeadd*cards.length)+500;
    setTimeout(() => { 
        cards.forEach(card =>{
            setTimeout(() => { 
                card.classList.toggle("card-loaded"); 
                card.classList.add("card-leaving");
            }, timeadd);
            timeadd += 50;
        })
    }, 100);
}

// ───────────────  ───────────────  ─────────────── //

// if(){}
// 'https://swapi.dev/api/people/'
// 'http://swapi.dev/api/people/?page=2'

function fetchData(page = 1){
    console.log(" ─── fetch People ─── ");
    urlToGet = 'https://swapi.dev/api/people/'
    if (page > 1){ urlToGet += `?page=${page}`;}
    console.log(` ♦ fetching ♦ for: ${urlToGet}`);
    fetch(urlToGet)
    .then(result => result.json())
    .then(jsonResult => {
        console.log(jsonResult);
        jResult = jsonResult;
        updateData();
    })
}
function fetchPlanet(planetUrl, cardIndex){
    console.log(" ─── fetch Planet ─── ");
    // 'https://swapi.dev/api/planets/1/'
    let planetID = planetUrl.split("planets")[5];
    
    console.log(` ♦ fetching ♦ for Planet: ${planetUrl}`);
    fetch(planetUrl)
    .then(result => result.json())
    .then(jsonPlanet => {
        console.log(`\tPlanet Response: →`);
        console.log(jsonPlanet);
        console.log(`\tPlanet Name: ${jsonPlanet.name}`);
        console.log(`\tplanetID: ${planetID}`);
        planetsData[planetID] = jsonPlanet;
        // console.log(planetsData);
        // console.log(planetsData[planetID]);
        // localStorage.setItem("planets", JSON.stringify(planetsData));

        console.log(`\tcardIndex: ${cardIndex}`);
        // console.log(`Planet Name: ${jsonPlanet.url}`);
        // let planetID = jsonPlanet.url.split("planets")[5];
        buildDetailsCard(cardIndex);
    })
}

// ───────────────  ───────────────  ─────────────── //

function saveToLocalStorage(){
    console.log(" ─── Saving To Local Storage ─── ");
    localStorage.setItem("pages", JSON.stringify(dataResult));
    
    localStorage.setItem("resultCount", JSON.stringify({"resultCount": resultCount}));

    localStorage.setItem("planets", JSON.stringify(planetsData));

    console.log('Saved! → ');
    console.log(dataResult);
    // updateDOM();
    buildDOM();
    UpdateResults();
}

function updateFromLocalStorage(toPage){
    console.log(" ─── ↓ ─── Update From Local Storage ─── ↓ ─── ");
    console.log(`\tto Page: ${toPage}`);
    if(dataResult[toPage] == null){
        // if the data does NOT include the current page, fetch it.
        fetchData(toPage);
    }else {
        // if the data DOES include the current page, update the DOM.
        currentPage = toPage;
        // updateDOM();
        UpdateResults();
    }
}

function loadFromLocalStorage(){
    console.log(" ─── ↓ ─── Load From Local Storage ─── ↓ ─── ");
    if (resultCount == 0 && localStorage.getItem('resultCount')){
        resultCount = JSON.parse(localStorage.getItem("resultCount"))["resultCount"];
    }
    if(resultCount>0){
        console.log(`Result Count: ${resultCount}`);
    }

    if (localStorage.getItem('planets')){
        planetsData = JSON.parse(localStorage.getItem("planets"));
    }

    if (localStorage.getItem('pages')){
        // if there is data in local storage, parse it.
        dataResult = JSON.parse(localStorage.getItem("pages"));
        if(dataResult[currentPage] == null){
            // if the data does NOT include the current page, fetch it.
            fetchData();
        }
        else {
            // if the data DOES include the current page, update the DOM.
            console.log(`Current Page: ${currentPage}`);
            updateData();
            // saveToLocalStorage();
            // updateDOM();
        }
    } else {
        console.log(`No data in Local Storage.`);
        fetchData();
    }
}

loadFromLocalStorage();