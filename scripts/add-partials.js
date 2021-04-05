
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

const toHeader = {
    "icon":{"rel":"icon","href":"/res/St-icon.png"},
    "mainstyle":{"rel":"stylesheet","href":"/styles/mainstyle.css"},
    "week-styles":{"rel":"stylesheet","href":"/styles/week-styles.css"}
};

Object.keys(toHeader).forEach(elem => {
    let elemToAdd = document.createElement('link');
    elemToAdd.rel = toHeader[elem]["rel"];
    elemToAdd.href = pathStart+toHeader[elem]["href"];
    document.head.appendChild(elemToAdd);
});