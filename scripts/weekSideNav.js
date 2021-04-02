
console.log(" -- Start of Week Side Navigation Script -- ");

// let title = document.title;
let title_sub = "";
if(document.title.length > 7){
    title = document.title.split(" - ")[0];
    title_sub = document.title.split(" - ")[1];
}
// let thisUrl = document.location.href;
// let pathStart = "";
if(thisUrl.includes("WDD330_w21")){
    pathStart = thisUrl.split("WDD330_w21")[0] + "WDD330_w21";
} else {
    pathStart = thisUrl.split("portfolio")[0] + "portfolio";
}
console.log(`pathStart = '${pathStart}'`);
let pathWeek = pathStart + "/" + (title.replace(" ", ""));
console.log(`pathWeek = '${pathWeek}'`);
// ───────────────  ───────────────  ─────────────── 
// let week_preview = document.querySelector('#week_preview');
// let subtitle = document.querySelector('.subtitle');
// ───────────────  ───────────────  ─────────────── 

// let progress = {
//     'Week 00': [],
//     'Week 01': [],
//     'Week 02': [0,1,2],
//     'Week 03': [0,2,3],
//     'Week 04': [2,3,4],
//     'Week 05': [2],
//     'Week 06': [],
//     'Week 07': [1,2],
//     'Week 08': [0,1,2],
//     'Week 09': [0,1,2],
//     'Week 10': [2],
//     'Week 11': [],
//     'Week 12': []
// };

// const weekEntries = [
//     {
//         link:"notes",
//         name:"Class Notes"
//     },
//     {
//         link:"reading",
//         name:"Reading..."
//     },
//     {
//         link:"team-activity",
//         name:"Team Activity"
//     },
//     {
//         link:"team-activity-later",
//         name:"Team Activity+"
//     },
//     {
//         link:"team-activity-plus",
//         name:"Team Activity++"
//     }
// ];

// for(let i = 0; i<5; i++){
//     if(progress[document.title].includes(i)){
//         let card = weekEntries[i];
//         let card_div = document.createElement('div');
//         // card_div.id = `week${weekNumb}_card`;
//         // card_div.classList.add("nav-card");
//         card_div.classList.add("extra-nav-card");
    
//         let card_link = document.createElement("div");
//         card_link.classList.add("link-title");
//         card_link.innerHTML = `<a href="${card.link}" style="text-decoration: underline;">${card.name}</a>`;
//         card_div.appendChild(card_link);
    
//         week_preview.appendChild(card_div);
//     }
// }

// ───────────────  ───────────────  ─────────────── 
// // subtitle
// for(let i = 0; i<5; i++){
//     if(progress[document.title].includes(i)){
//         let card = weekEntries[i];
//         let card_div = document.createElement('div');
//         // card_div.id = `week${weekNumb}_card`;
//         // card_div.classList.add("nav-card");
//         card_div.classList.add("extra-nav-card");
    
//         let card_link = document.createElement("div");
//         card_link.classList.add("link-title");
//         card_link.innerHTML = `<a href="${card.link}" style="text-decoration: underline;">${card.name}</a>`;
//         card_div.appendChild(card_link);

//         let sideNav_link = document.createElement("a");
//         // sideNav_link.classList.add("link-title");
//         sideNav_link.href = `../${card.link}`;
//         sideNav_link.innerHTML = card.name;
//         // Reading page 1 of 2&nbsp; <a href="page2.html" class="arrow-link-1">&RightTriangle;</a>
//         // <a href="../${card.link}">${card.name}</a> | 
//         // card_div.appendChild(card_link);
    
//         subtitle.appendChild(sideNav_link);
//     }
// }


// ───────────────  ───────────────  ─────────────── 

console.log(" -- End of Week Side Navigation Script -- ");

