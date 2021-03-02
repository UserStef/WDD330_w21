
console.log(" -- Start of Preview Build Script -- ");

// let previews = document.querySelector('#previews');
let first_block = document.querySelector('#first_block');
let second_block = document.querySelector('#second_block');

// ───────────────  ───────────────  ─────────────── 

// <div id="playground" class="map-nav-card hidden">
//     <div class="link-title"><a href="playground/nav-toggle.html" style="text-decoration: underline;">&#128682; Navigation Toggle</a></div>
// </div>

// let number_of_weeks = 7;

// let week_topic = [
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     ""
// ];

function makeWeekPreview(weekNumb, whereto){
    // weekNumb = i;
    if (weekNumb<10){weekNumb = "0"+weekNumb;}

    let previewCard = document.createElement("div");
    previewCard.id = `week${weekNumb}_card`;
    previewCard.classList.add("nav-card");

    let weekLink = document.createElement("div");
    weekLink.classList.add("link-title");
    weekLink.innerHTML = `<a href="week${weekNumb}" style="text-decoration: underline;">Week ${weekNumb}</a>`;
    previewCard.appendChild(weekLink);

    whereto.appendChild(previewCard);
}

for(let i = 1; i<7; i++){
    makeWeekPreview(i, first_block);
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

