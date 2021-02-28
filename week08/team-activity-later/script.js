const url = 'https://swapi.dev/api/people/'
let nextURl = '';
let prevURL = '';
console.log(prevURL);
let jResult = {};
let following = false;
let followed = 0;

function fetchData(pageCall) {
    fetch(pageCall)
    .then(result => result.json())
    .then(jsonResult => {
        console.log(jsonResult);
        const list = jsonResult['results'];
        const ol = document.querySelector('#json');
        ol.innerHTML = '';
        for(let i = 0; i < list.length; i++) {
            let li_elem = document.createElement('li');
            let div_elem = document.createElement('div');
            div_elem.classList.add('name-holder');
            div_elem.dataset.index = i;
            div_elem.innerHTML = `${list[i].name}`;
            div_elem.addEventListener("click", (event) => {
                let detailsCard = document.getElementById("detailsCard");
                if (!following){
                    following = true;
                    detailsCard.classList.remove("hidden2");
                    detailsCard.style.top = `${event.pageY+5}px`;
                    detailsCard.style.left = `${event.pageX+5}px`;
            
                    updateDetails(event.target.dataset.index);
                } else if (event.target.dataset.index == followed){
                    following = false;
                    detailsCard.classList.add("hidden2");
                    detailsCard.style.top = `-100vh`;
                    detailsCard.style.left = `-100vw`;
            
                    detailsCard.innerHTML = `hidden`
                } else {
                    updateDetails(event.target.dataset.index);
                }
            });
            li_elem.appendChild(div_elem);
            ol.appendChild(li_elem);
            // ol.innerHTML +=
            // `<li><div class="person" data-index="${i}">${list[i].name}</div></li>`
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
        jResult = jsonResult;
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


// let test = document.getElementById("test");
// test.dataset.index = 0;
// let test2 = document.getElementById("test2");
// test2.classList.add("hidden");

// test.addEventListener("mouseenter", function( event ) {
//   // highlight the mouseenter target
//   event.target.style.color = "purple";

//   // reset the color after a short delay
//   setTimeout(function() {
//     event.target.style.color = "";
//   }, 500);
// }, false);

// test.addEventListener("mouseover", function( event ) {
//     // highlight the mouseover target
//     event.target.style.color = "orange";
//     console.log(event);
  
//     // reset the color after a short delay
//     setTimeout(function() {
//       event.target.style.color = "";
//     }, 1500);
// }, false);

// test.addEventListener("mousemove", function( event ) {
//     console.log("mousemove");
//     // highlight the mouseover target
//     // event.target.style.color = "orange";
//     console.log(event);
//     // let test2 = document.getElementById("test2");

//     // console.log(`event.clientY: ${event.clientY}`);
//     // console.log(`event.clientX: ${event.clientX}`);
//     test2.style.top = `${event.clientY}px`;
//     test2.style.left = `${event.clientX}px`;
  
//     // reset the color after a short delay
//     // setTimeout(function() {
//     //   event.target.style.color = "";
//     // }, 1500);
// }, false);



// function showDetails(event){
//     let detailsCard = document.getElementById("detailsCard");
//     if (!following){
//         following = true;
//         detailsCard.classList.remove("hidden");
//         detailsCard.style.top = `${event.pageY+5}px`;
//         detailsCard.style.left = `${event.pageX+5}px`;

//         updateDetails(event.target.dataset.index);
//     } else if (event.target.dataset.index == followed){
//         following = false;
//         detailsCard.classList.add("hidden");
//         detailsCard.style.top = `-100vh`;
//         detailsCard.style.left = `-100vw`;

//         detailsCard.innerHTML = `hidden`
//     } else {
//         updateDetails(event.target.dataset.index);
//     }
// }

function updateDetails(index){
    let detailsCard = document.getElementById("detailsCard");
    let details = jResult['results'][index];
    followed = index;

    detailsCard.innerHTML = `
    <div>Name: ${details.name}</div>
    <div>Height: ${details.height}</div>
    <div>Mass: ${details.mass}</div>
    <div>Hair Color: ${details.hair_color}</div>
    <div>Eyes Color: ${details.eye_color}</div>
    <div>Skin Color: ${details.skin_color}</div>
    <div>Gender: ${details.gender}</div>
    <div>Birth Year: ${details.birth_year}</div>
    `;
}

// test.addEventListener("click", function( event ) {
//     if (!following){
//         following = true;
//         test2.classList.remove("hidden");
//         test2.style.top = `${event.pageY+5}px`;
//         test2.style.left = `${event.pageX+5}px`;

//         let details = jResult['results'][event.target.dataset.index]
//         test2.innerHTML = `${details.name}`
//         // test2.innerHTML = `name`;
//     } else if (event.target.dataset.index == followed){
//         following = false;
//         test2.classList.add("hidden");
//         test2.style.top = `-100vh`;
//         test2.style.left = `-100vw`;

//         test2.innerHTML = `hidden`
//     } else {
//         let details = jResult['results'][event.target.dataset.index]
//         test2.innerHTML = `${details.name}`
//         // test2.innerHTML = `name`;
//     }
//     // if (followed < 9){followed++;} else {followed = 0;}
// }, false);

window.addEventListener("mousemove", function( event ) {
    let detailsCardf = document.getElementById("detailsCard");
    // console.log(event);
    if(following){
        // console.log(event);
        // test2.style.top = `${event.clientY+5}px`;
        // test2.style.left = `${event.clientX+5}px`;
        // test2.style.top = `${event.screenY-65}px`;
        // test2.style.left = `${event.screenX+5}px`;
        // test2.style.top = `${event.offsetY+5}px`;
        // test2.style.left = `${event.offsetX+5}px`;
        detailsCardf.style.top = `${event.pageY+5}px`;
        detailsCardf.style.left = `${event.pageX+5}px`;
    } else {
        // top: -100vh; left: -100vw;
        detailsCardf.style.top = `-100vh`;
        detailsCardf.style.left = `-100vw`;
    }
});

// test.addEventListener("mouseenter", function( event ) {
//     console.log(event);

//     console.log(`clientX: ${event.clientX} \t clientY: ${event.clientY}`);

//     console.log(`pageX: ${event.pageX} \t\t pageY: ${event.pageY}`);

//     console.log(`screenX: ${event.screenX} \t screenY: ${event.screenY}`);

//     console.log(`offsetX: ${event.offsetX} \t offsetY: ${event.offsetY}`);

// }, false);