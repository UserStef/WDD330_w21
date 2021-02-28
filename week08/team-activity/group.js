const url = 'https://swapi.dev/api/people/'
let nextURl = '';
let prevURL = '';
console.log(prevURL);

function fetchData(pageCall) {
    fetch(pageCall)
    .then(result => result.json())
    .then(jsonResult => {
        console.log(jsonResult);
        const list = jsonResult['results'];
        const ol = document.querySelector('#json');
        ol.innerHTML = '';
        for(let i = 0; i < list.length; i++) {
            ol.innerHTML +=
            `<li><a href="#">${list[i].name}</a></li>`
        }
        if(jsonResult.next != null){
            nextURL = jsonResult.next;
        }
        else{
            nextURl = null;
        }
        if(jsonResult.previous != null){
            prevURL = jsonResult.previous;
        }
        else{
            prevURL = null;
        }
        // console.log(jsonResult.next);
        // console.log(nextURL);
    })
}
fetchData(url);


const prev = document.querySelector('#prev');
const next = document.querySelector('#next');

next.addEventListener('click', () => {
    if(nextURl != null){
        fetchData(nextURL);
        // console.log(nextURL);
    }
})
prev.addEventListener('click', () => {
    if(prevURL != null){
        fetchData(prevURL);
    }
})
