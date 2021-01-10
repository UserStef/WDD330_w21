
console.log(" -- Start of Script -- ")
let ol = document.querySelector('ol');

const links = [
    {
        label: "Week 1 notes",
        url: "week01/week01.html"
    }
]

links.forEach(
    link => {
        ol.innerHTML += 
        `<li><a href="${link.url}">${link.label}</a></li>`;
    }
);
