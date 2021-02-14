
console.log(" -- Start of Navigation Build Script -- ");

let head = document.querySelector('header');

// let homebtn = document.createElement('div');
// homebtn.classList.add("homebtn");
// let homelink = document.createElement('a');
// homelink.setAttribute('href', '../index.html');
// homelink.innerText = '&#127968;';
// homebtn.appendChild(homelink);
// head.appendChild(homebtn);

/* <div class="homebtn"><a href="../index.html">&#127968;</a></div> */

let ol = document.createElement('ol');
head.appendChild(ol);

let number_of_weeks = 6;

let links = [
    {
        label: "&#127968;",
        url: "../index.html",
        classlist: ["homebtn"]
    }
];

if(document.title == "WDD330 - Home"){
    links[0].url = "index.html";
    for(let i = 1; i<number_of_weeks+1; i++){
        weekNumb = i;
        if (i<10){weekNumb = "0"+i;}
        links.push({label: "Week "+weekNumb, url: "week"+weekNumb+"/index.html", classlist: ["mbtn", "mbtn-on"]});
    }
} else {
    for(let i = 1; i<number_of_weeks+1; i++){
        weekNumb = i;
        if (i<10){weekNumb = "0"+i;}
        links.push({label: "Week "+weekNumb, url: "../week"+weekNumb+"/index.html", classlist: ["mbtn", "mbtn-on"]});
    }
}

links.map(link => {
    let classes = link.classlist.join(" ");
    if (document.title == "WDD330 - Home" && link.label == "&#127968;"){
        ol.innerHTML += 
        `<li><button class="homebtn mhbtn-off">${link.label}</button></li>`;
    } else if (link.label != document.title){
        ol.innerHTML += 
        `<li><a href="${link.url}"><button class="${classes}">${link.label}</button></a></li>`;
    } else {
        ol.innerHTML += 
        `<li><button class="${link.classlist[0]} mbtn-off">${link.label}</button></li>`;
    }
});



// Building the data in the links.
// let links = [];
// for(let i = 1; i<number_of_weeks+1; i++){
//     weekNumb = i;
//     if (i<10){
//         weekNumb = "0"+i;
//     }
//     links.push({label: "Week "+weekNumb, url: "../week"+weekNumb+"/index.html"});
// }

// links.forEach(
//     link => {
        // if (link.label != document.title){
        //     ol.innerHTML += 
        //     `<li><a href="${link.url}"><button class="mbtn">${link.label}</button></a></li>`;
        // } else {
        //     ol.innerHTML += 
        //     `<li><button class="mbtn">${link.label}</button></li>`;
        // }
//     }
// );

// // --Single loop.
// for(let i = 1; i<number_of_weeks+1; i++){
//     weekNumb = i;
//     if (i<10){
//         weekNumb = "0"+i;
//     }
//     if (document.title != `Week ${weekNumb}`){
//         ol.innerHTML += 
//             `<li><a href="../week${weekNumb}/index.html"><button class="mbtn">Week ${weekNumb}</button></a></li>`;
//     } else {
//         ol.innerHTML += 
//         `<li><button class="mbtn2">Week ${weekNumb}</button></li>`;
//     }
// }

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