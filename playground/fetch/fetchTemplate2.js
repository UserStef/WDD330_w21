// localStorage.removeItem("jResponse");

let url = 'https://raw.githubusercontent.com/UserStef/WDD330_w21/main/playground/fetch/test.json'            

let jResponse = {};

function getJSON(url){
    console.log(" ─── getJSON() ─── ");
    console.log(` ♦ fetching ♦ from: ${url}`);
    fetch(url)
    .then(result => result.json())
    .then(jsonResult => {
        jResponse = jsonResult;
        console.log("jResponse Ready!");
        console.log(jResponse);

        console.log(" ─── to → Local Storage ─── ");
        jResponseString = JSON.stringify(jResponse);
        console.log(jResponseString);
        localStorage.setItem("jResponse", JSON.stringify(jResponse));
    });
}

function loadFromLocalStorage(){
    console.log(" ─── ↓ ─── Load From Local Storage ─── ↓ ─── ");
    if (localStorage.getItem('jResponse')){
        jResponse = JSON.parse(localStorage.getItem("jResponse"));
        console.log(" ─── from ← Local Storage ─── ");
        console.log(jResponse);
    } else {
        console.log(" ─── calling: getJSON() ─── ");
        getJSON(url);
    }
}

loadFromLocalStorage();

