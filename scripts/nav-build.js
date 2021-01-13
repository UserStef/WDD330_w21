
console.log(" -- Start of Navigation Build Script -- ");

{/* <div class="homebtn"><a href="../index.html">&#127968;</a></div> */}
let ol = document.querySelector('ol');

let number_of_weeks = 5;

// Building the data in the links.
// let links = [];
// for(let i = 1; i<number_of_weeks+1; i++){
//     weekNumb = i;
    // if (i<10){
    //     weekNumb = "0"+i;
    // }
//     links.push({label: "Week "+weekNumb, url: "../week"+weekNumb+"/index.html"});
// }

// links.forEach(
//     link => {
//         if (link.label != document.title){
//             ol.innerHTML += 
//             `<li><a href="${link.url}"><button class="mbtn">${link.label}</button></a></li>`;
        // } else {
        //     ol.innerHTML += 
        //     `<li><button class="mbtn">${link.label}</button></li>`;
        // }
//     }
// );

// // --Single loop.
for(let i = 1; i<number_of_weeks+1; i++){
    weekNumb = i;
    if (i<10){
        weekNumb = "0"+i;
    }
    if (document.title != `Week ${weekNumb}`){
        ol.innerHTML += 
            `<li><a href="../week${weekNumb}/index.html"><button class="mbtn">Week ${weekNumb}</button></a></li>`;
    } else {
        ol.innerHTML += 
        `<li><button class="mbtn">Week ${weekNumb}</button></li>`;
    }
}

// for(let i = 1; i<number_of_weeks+1; i++){
//     const li = document.createElement("li");
//     const a = document.createElement("a");

//     weekNumb = i;
//     if (i<10){
//         weekNumb = "0"+i;
//     }

//     a.innerText = `Week ${weekNumb}`;
//     a.setAttribute('href', `../week${weekNumb}/index.html`);
//     a.classList.add("mbtn");

//     li.appendChild(a);
//     ol.appendChild(li);
// }

// let number_of_weeks = 5;
// number_of_weeks = 5;

// for(let i = 1; i<number_of_weeks+1; i++){
//     ol.innerHTML += 
//         `<li><a href="../week${i}/index.html"><button class="mbtn">Week ${i}</button></a></li>`;
// }

// for(let i = 1; i<number_of_weeks+1; i++){
//     const li = document.createElement("li");
//     const a = document.createElement("a");

//     a.innerText = `Week ${i}`;
//     a.setAttribute('href', `../week${i}/index.html`);

//     li.appendChild(a);
//     ol.appendChild(li);
// }


// Repeat:
// let number_of_weeks = 5;
// let links = [];
// for(let i = 1; i<number_of_weeks+1; i++){
//     links.push({label: "Week "+i, url: "../week"+i+"/index.html"});
// }