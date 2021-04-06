
console.log(" -- Start of Preview Build Script -- ");

// let previews = document.querySelector('#previews');
let first_block = document.querySelector('#first_block');
let second_block = document.querySelector('#second_block');

// ───────────────  ───────────────  ─────────────── 

// <div id="playground" class="map-nav-card hidden">
//     <div class="link-title"><a href="playground/nav-toggle.html" style="text-decoration: underline;">&#128682; Navigation Toggle</a></div>
// </div>

// let number_of_weeks = 7;


let week = [
    {'link':'00', 'team-activity': 'none', 'class': ['w0btn']},
    {'link':'01', 'team-activity': 'none', 'class': ['w1btn']},
    {'link':'02', 'team-activity': 'later', 'class': ['w2btn']},
    {'link':'03', 'team-activity': 'later', 'class': ['w3btn']},
    {'link':'04', 'team-activity': 'plus', 'class': ['w4btn']},
    {'link':'05', 'team-activity': 'later', 'class': ['w5btn']},
    {'link':'06', 'team-activity': 'none', 'class': ['w6btn']},
    {'link':'07', 'team-activity': 'plus', 'class': ['w7btn-plus']},
    {'link':'08', 'team-activity': 'plus', 'class': ['w8btn-plus']},
    {'link':'09', 'team-activity': 'later', 'class': ['w9btn']},
    {'link':'10', 'team-activity': 'none', 'class': ['w10btn']},
    {'link':'11', 'team-activity': 'none', 'class': ['w11btn']},
    {'link':'12', 'team-activity': 'none', 'class': ['w12btn']},
    {'link':'13', 'team-activity': 'none', 'class': ['w13btn']}
];

function makeWeekPreview(i, whereto){
    let weekNumb = i;
    if (weekNumb<10){weekNumb = "0"+weekNumb;}
    console.log(`makeWeekPreview(${i},${whereto})`);

    let previewCard = document.createElement("div");
    previewCard.id = `week${weekNumb}_card`;
    previewCard.classList.add("nav-card");

    let weekLink = document.createElement("div");
    weekLink.classList.add("link-title");
    weekLink.innerHTML = `<a href="week${weekNumb}" style="text-decoration: underline;">Week ${weekNumb}</a>`;
    // if(week[i]['team-activity'] != 'none'){
    //     weekLink.innerHTML += `<a href="${pathStart}/week${weekNumb}/team-activity-${week[i]['team-activity']}" class="${week[i]['class']}">Week ${weekNumb}</a>`;
    // }
    previewCard.appendChild(weekLink);

    whereto.appendChild(previewCard);
}

function makeActivityPreview(i, whereto){
    let weekNumb = i;
    if (weekNumb<10){weekNumb = "0"+weekNumb;}
    console.log(`makeActivityPreview(${i},${whereto})`);

    let previewCard = document.createElement("div");
    previewCard.id = `activity${weekNumb}_card`;
    // previewCard.classList.add("nav-card", `${week[i]['class']}`);
    previewCard.classList.add('activity-nav-card', `${week[i]['class']}`);

    let weekLink = document.createElement("div");
    // weekLink.classList.add("link-title");
    weekLink.classList.add("link-activity");
    // weekLink.innerHTML = `<a href="week${weekNumb}" style="text-decoration: underline;">Week ${weekNumb}</a>`;
    // if(week[i]['team-activity'] != 'none'){
    //     weekLink.innerHTML += `<a href="${pathStart}/week${weekNumb}/team-activity-${week[i]['team-activity']}" class="${week[i]['class']}">Week ${weekNumb}</a>`;
    // }
    // weekLink.innerHTML = `<a href="${pathStart}/week${weekNumb}/team-activity-${week[i]['team-activity']}" class="${week[i]['class']}">Team Activity ${weekNumb}</a>`;
    weekLink.innerHTML = `<a href="${pathStart}/week${weekNumb}/team-activity-${week[i]['team-activity']}" class="w${i}link">Activity ${weekNumb}</a>`;
    previewCard.appendChild(weekLink);

    whereto.appendChild(previewCard);
}

for(let i = 1; i<7; i++){
    makeWeekPreview(i, first_block);
    // if(week[i]['team-activity'] != 'none'){
    //     makeActivityPreview(i, first_block);
    // }
}

for(let i = 7; i<number_of_weeks+1; i++){
    makeWeekPreview(i, second_block);
}

// for(let i = 1; i<number_of_weeks+1; i++){
//     weekNumb = i;
//     if (i<10){weekNumb = "0"+i;}

//     let previewCard = document.createElement("div");
//     previewCard.id = `week${weekNumb}_card`;
//     previewCard.classList.add("map-nav-card");

//     let weekLink = document.createElement("div");
//     weekLink.classList.add("link-title");
//     weekLink.innerHTML = `<a href="week${weekNumb}" style="text-decoration: underline;">Week ${weekNumb}</a>`;
//     previewCard.appendChild(weekLink);
//     previews.appendChild(previewCard);
// }

console.log(" -- End of Preview Build Script -- ");

