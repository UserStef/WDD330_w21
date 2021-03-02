
console.log(" -- Start of Navigation Build Script -- ");

let head = document.querySelector('header');

// ───────────────  ───────────────  ─────────────── 

let week_numb = 0;
let nav_form = "wrap";
if(document.title != "WDD330 - Home"){
    week_numb = +document.title.split(" ")[1];
} else {
    week_numb = 9;
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
nav_wrap.classList.add("navswitch-emoji", "centerAll", "opac");

nav_scroll.innerHTML = "&#128220;";
nav_wrap.innerHTML = "&#127791;";

navswitch_btn.appendChild(nav_scroll);
navswitch_btn.appendChild(nav_wrap);
if(week_numb > 5){
    head.appendChild(navswitch_btn);
    nav_form = "scroll";
}



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
}
nav_scroll.addEventListener("click", toggleNav, true);
nav_wrap.addEventListener("click", toggleNav, true);

// ───────────────  ───────────────  ─────────────── 

let number_of_weeks = 9;

let links = [
    {
        label: "&#127968;",
        url: "../index.html",
        classlist: ["homebtn"]
    }
];

let specific_btns = [
    `<li><button class="homebtn mhbtn-off">&#127968;</button></li>`,
    `<a href="../index.html"><div id="playground2">&#128682;</div></a>`];

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
