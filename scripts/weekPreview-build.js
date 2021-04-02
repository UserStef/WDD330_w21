
console.log(" -- Start of Week Preview Build Script -- ");

let title = document.title;
let week_preview = document.querySelector('#week_preview');

// ───────────────  ───────────────  ─────────────── 

let progress = {
    'Week 00': [],
    'Week 01': [],
    'Week 02': [0,1,2],
    'Week 03': [0,2,3],
    'Week 04': [2,3,4],
    'Week 05': [2],
    'Week 06': [],
    'Week 07': [1,2],
    'Week 08': [0,1,2],
    'Week 09': [0,1,2],
    'Week 10': [2],
    'Week 11': [],
    'Week 12': []
};

const weekEntries = [
    {
        link:"notes",
        name:"Class Notes"
    },
    {
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

for(let i = 0; i<5; i++){
    if(progress[document.title].includes(i)){
        let card = weekEntries[i];
        let card_div = document.createElement('div');
        // card_div.id = `week${weekNumb}_card`;
        // card_div.classList.add("nav-card");
        card_div.classList.add("extra-nav-card");
    
        let card_link = document.createElement("div");
        card_link.classList.add("link-title");
        card_link.innerHTML = `<a href="${card.link}" style="text-decoration: underline;">${card.name}</a>`;
        card_div.appendChild(card_link);
    
        week_preview.appendChild(card_div);
    }
}

// ───────────────  ───────────────  ─────────────── 

console.log(" -- End of Week Preview Build Script -- ");

