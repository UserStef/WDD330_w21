
console.log(" -- Start of Week Preview Build Script -- ");

let title = document.title;
let week_preview = document.querySelector('#week_preview');

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
// pathStart → 'https://userstef.github.io/WDD330_w21'
console.log(`pathStart = '${pathStart}'`);
let pathWeek = pathStart + "/" + (title.replace(" ", "").toLowerCase());
console.log(`pathWeek = '${pathWeek}'`);

let weekNumb = parseInt(title.split(" ")[1],10);

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
let progress = {
    'Week 00': [],
    'Week 01': [],
    'Week 02': [0,1,2,3],
    'Week 03': [0,2,3],
    'Week 04': [2,3,4],
    'Week 05': [2,3],
    'Week 06': [],
    'Week 07': [1,2,3,4],
    'Week 08': [0,1,2,3,4],
    'Week 09': [0,1,2], // add 3.
    'Week 10': [2],
    'Week 11': [],
    'Week 12': []
};

const weekEntries = [
    {
        link:"notes",
        name:"Class Notes"
    },
    { // 1
        link:"reading",
        name:"Reading..."
    },
    {
        link:"team-activity",
        name:"Team Activity"
    },
    {
        link:"team-activity-later",
        name:"Team Activity+"
    },
    {
        link:"team-activity-plus",
        name:"Team Activity++"
    }
];

// ───────────────  ───────────────  ─────────────── 

// let readingPages = {
//     'Week 00': [],
//     'Week 01': [],
//     'Week 02': [0,1,2,3],
//     'Week 03': [0,2,3],
//     'Week 04': [2,3,4],
//     'Week 05': [2],
//     'Week 06': [],
//     'Week 07': [1,2,3],
//     'Week 08': [0,1,2,3,4],
//     'Week 09': [0,1,2,3],
//     'Week 10': [2],
//     'Week 11': [],
//     'Week 12': []
// };

// ───────────────  ───────────────  ─────────────── 

let teamActivity = {
    'Week 00': [],
    'Week 01': [],
    'Week 02': ["0","1","Calculator", "Calculator"],
    'Week 03': ["0","1","Filters", "Filters"],
    'Week 04': ["0","1","Tic-tac-toe","Tic-tac-toe","Tic-tac-toe"],
    'Week 05': ["0","1","Great Hikes", "Great Hikes+"],
    'Week 06': [],
    'Week 07': ["0","1","Great Hikes", "Great Hikes+", "Great Hikes"],
    'Week 08': ["0","1","StarWars API", "StarWars API", "StarWars API++"],
    'Week 09': ["0","1","DrumKit","DrumKit"],
    'Week 10': ["0","1","Quake List"],
    'Week 11': [],
    'Week 12': []
};

let iconActivity = {
    'Week 00': [],
    'Week 01': [],
    'Week 02': ["0","1","2", ["","🔢"]],
    'Week 03': ["0","1","2", ["","🔍"]],
    'Week 04': ["0","1","2", ["❌","⭕"], ["🍩","🥗"]],
    'Week 05': ["0","1","2", ["",""]],
    'Week 06': [],
    'Week 07': ["0","1","2", ["",""], ["⛺","🌲"]],
    'Week 08': ["0","1","2", ["⬛","⬜"], ["🔲","🔳"]],
    'Week 09': ["0","1","2", ["🎼","🎵"]],
    'Week 10': ["0","1","2"],
    'Week 11': [],
    'Week 12': []
};

// ───────────────  ───────────────  ─────────────── 


for(let i = 0; i<5; i++){
    if(progress[title].includes(i)){
        let card = weekEntries[i];
        let card_div = document.createElement('div');
        // card_div.classList.add("extra-nav-card");
    
        let card_link = document.createElement("div");
        card_link.classList.add("link-title");

        let card_link_a = document.createElement("a");
        card_link_a.href = `${pathWeek}/${card.link}`;

        switch(i){
            case 2:
                card_div.classList.add("basicbtn");
                card_link_a.classList.add("basiclink");
                card_link_a.innerHTML = `<p class="shinny-link">${card.name}:</p> <p class="shinny-link">${teamActivity[title][i]}</p>`;
                break;
            case 4:
                card_div.classList.add(`w${weekNumb}btn-plus`);
            case 3:
                card_div.classList.add("week-nav-card-plus", `w${weekNumb}btn`);
                card_link_a.classList.add(`w${weekNumb}link`);
                card_link_a.innerHTML = `<p class="shinny-link">${card.name}:&nbsp;</p><p>${iconActivity[title][i][0]}<span class="shinny-link">${teamActivity[title][i]}</span>${iconActivity[title][i][1]}</p>`;
                break;
            default:
                card_div.classList.add("week-nav-card");
                card_link_a.innerText = `${card.name}`;
                break;
        }

        card_link.appendChild(card_link_a);
        card_div.appendChild(card_link);
    
        week_preview.appendChild(card_div);
    }
}


// ───────────────  ───────────────  ─────────────── 

console.log(" -- End of Week Preview Build Script -- ");

