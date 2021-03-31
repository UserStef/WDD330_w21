// localStorage.removeItem("preferences");

console.log(" -- Start of Navigation Build Script -- ");
let preferences = {};
// ───────────────  ───────────────  ─────────────── 
let thisUrl = document.location.href;
let pathStart = "";
if(thisUrl.includes("WDD330_w21")){
    pathStart = thisUrl.split("WDD330_w21")[0] + "WDD330_w21";
} else {
    pathStart = thisUrl.split("portfolio")[0] + "portfolio";
}
console.log(`pathStart = '${pathStart}'`)

// ───────────────  ───────────────  ─────────────── 

let head = document.querySelector('header');

// ───────────────  ───────────────  ─────────────── 

let week_numb = 0;
let nav_form = "scroll";
// nav_form = "scroll | wrap";
let scrollLeft = 0;

function updatePreferences(){
    localStorage.setItem("preferences", JSON.stringify(preferences));
    console.log(preferences);
}
if (localStorage.getItem('preferences')){
    preferences = JSON.parse(localStorage.getItem('preferences'));
    console.log(preferences);
    nav_form = preferences['nav_form'];
    scrollLeft = preferences['scrollLeft'];
} else {
    preferences = {
        "nav_form":"scroll",
        "brightness":"night"
    }
    updatePreferences();
}



// ───────────────  ───────────────  ─────────────── 

// -- Add the toggle btn for the navbar.
let navswitch_btn = document.createElement('div');
navswitch_btn.id = "navswitch-btn";
navswitch_btn.classList.add("navswitch-btn");

// -- create element of both options for scroll or wrap.
let nav_scroll = document.createElement('div');
let nav_wrap = document.createElement('div');
nav_scroll.id = "nav_scroll";
nav_wrap.id = "nav_wrap";
nav_scroll.classList.add("navswitch-emoji", "centerAll");
nav_wrap.classList.add("navswitch-emoji", "centerAll");

if(nav_form == "scroll"){
    nav_wrap.classList.add("opac");
} else {
    nav_scroll.classList.add("opac");
}

nav_scroll.innerHTML = "&#128220;";
nav_wrap.innerHTML = "&#127791;";

navswitch_btn.appendChild(nav_scroll);
navswitch_btn.appendChild(nav_wrap);
// if(week_numb > 5){
//     head.appendChild(navswitch_btn);
//     nav_form = "scroll";
// }

head.appendChild(navswitch_btn);


// -- Add the list of links.
let ol = document.createElement('ol');
ol.id = "olnav";
ol.classList.add("olnav-"+nav_form);
let navbar = document.createElement('div');
navbar.appendChild(ol);
head.appendChild(navbar);

// -- Add event listener to the navigation toggle.
function toggleNav(ev){
    document.querySelector("#nav_scroll").classList.toggle("opac");
    document.querySelector("#nav_wrap").classList.toggle("opac");

    let olnav = document.querySelector("#olnav");
    olnav.classList.toggle("olnav-scroll");
    olnav.classList.toggle("olnav-wrap");

    if(preferences["nav_form"] == "scroll"){
        preferences["nav_form"] = "wrap";
    } else {
        preferences["nav_form"] = "scroll";
    }
    updatePreferences();
}
nav_scroll.addEventListener("click", toggleNav, true);
nav_wrap.addEventListener("click", toggleNav, true);

// ───────────────  ───────────────  ─────────────── 

let number_of_weeks = 12;

let links = [
    {
        label: "&#127968;",
        url: `${pathStart}/index.html`,
        classlist: ["homebtn"]
    }
];

let specific_btns = [
    `<li><button class="homebtn mhbtn-off">&#127968;</button></li>`,
    `<a href="../index.html"><div id="playground2">&#128682;</div></a>`];

// if(document.title == "WDD330 - Home"){
//     links[0].url = "index.html";
//     for(let i = 1; i<number_of_weeks+1; i++){
//         weekNumb = i;
//         if (i<10){weekNumb = "0"+i;}
//         links.push({label: "Week "+weekNumb, url: "week"+weekNumb+"/index.html", classlist: ["mbtn", "mbtn-on"]});
//     }
// } else {
//     for(let i = 1; i<number_of_weeks+1; i++){
//         weekNumb = i;
//         if (i<10){weekNumb = "0"+i;}
//         links.push({label: "Week "+weekNumb, url: "../week"+weekNumb+"/index.html", classlist: ["mbtn", "mbtn-on"]});
//     }
// }
// links[0].url = "index.html";
for(let i = 1; i<number_of_weeks+1; i++){
    weekNumb = i;
    if (i<10){weekNumb = "0"+i;}
    links.push({label: "Week "+weekNumb, url: `${pathStart}/week${weekNumb}/index.html`, classlist: ["mbtn", "mbtn-on"]});
}

// pathStart

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

if(scrollLeft > 0){
    document.getElementById('olnav').scrollLeft = scrollLeft;
}

ol.addEventListener("touchend", (ev) => {
    preferences['scrollLeft'] = document.getElementById('olnav').scrollLeft;
    updatePreferences();
})