
// <span class="subtitle"><a href="index.html" class="arrow-link-2">&LeftTriangle;</a>&nbsp;Reading notes from Chapter 03&nbsp;<a href="ch4.html" class="arrow-link-1">&RightTriangle;</a></span>

// -- Reading StepUp -- //
let scriptLog = {};
let btn = {};
let btn_build = {};
let actions = document.getElementById('actions');

// ♦ ── ── Chapter _ ── ── ♦ //

const helloMessage = 'Hello Master ;)';
const byeMessage = 'Goodnight Master &#127747;';
console.log(helloMessage);


// ♦ ─── Chapter 9 ─── ♦ //
// ─── The Browser Object Model ─── //
btn_build["The Browser Object Model"] = {"tag":"div",
"innerHTML":"The Browser Object Model",
"classList":['mbtn2-s','log-btn'],
"log":""};

scriptLog["The Browser Object Model"] = function(ev){
    console.log(`// ── The Browser Object Model ── //`);
    // -- code goes here
    let toLog = [];
    let sectionLog = ``;
    toLog.forEach(log => {
        sectionLog += ` ${log}`;
        sectionLog += `\n  ≫ ${eval(log)}\n`;
    });
    console.log(sectionLog);
    btn_build["The Browser Object Model"]["log"] = sectionLog;
};

// ─── Browser Information ─── //
btn_build["Browser Information"] = {"tag":"div",
"innerHTML":"Browser Information",
"classList":['mbtn2-s','log-btn'],
"log":""};

scriptLog["Browser Information"] = function(ev){
    console.log(`// ── Browser Information ── //`);
    // -- code goes here
    let toLog = [];
    let sectionLog = ``;
    toLog.forEach(log => {
        sectionLog += ` ${log}`;
        sectionLog += `\n  ≫ ${eval(log)}\n`;
    });
    console.log(sectionLog);
    btn_build["Browser Information"]["log"] = sectionLog;
};

// ─── The Browser History ─── //
btn_build["The Browser History"] = {"tag":"div",
"innerHTML":"The Browser History",
"classList":['mbtn2-s','log-btn'],
"log":""};

scriptLog["The Browser History"] = function(ev){
    console.log(`// ── The Browser History ── //`);
    // -- code goes here
    let toLog = [];
    let sectionLog = ``;
    toLog.forEach(log => {
        sectionLog += ` ${log}`;
        sectionLog += `\n  ≫ ${eval(log)}\n`;
    });
    console.log(sectionLog);
    btn_build["The Browser History"]["log"] = sectionLog;
};

// ─── Controlling Windows ─── //
btn_build["Controlling Windows"] = {"tag":"div",
"innerHTML":"Controlling Windows",
"classList":['mbtn2-s','log-btn'],
"log":""};

scriptLog["Controlling Windows"] = function(ev){
    console.log(`// ── Controlling Windows ── //`);
    // -- code goes here
    let toLog = [];
    let sectionLog = ``;
    toLog.forEach(log => {
        sectionLog += ` ${log}`;
        sectionLog += `\n  ≫ ${eval(log)}\n`;
    });
    console.log(sectionLog);
    btn_build["Controlling Windows"]["log"] = sectionLog;
};

// ─── Screen Information ─── //
btn_build["Screen Information"] = {"tag":"div",
"innerHTML":"Screen Information",
"classList":['mbtn2-s','log-btn'],
"log":""};

scriptLog["Screen Information"] = function(ev){
    console.log(`// ── Screen Information ── //`);
    // -- code goes here
    let toLog = [];
    let sectionLog = ``;
    toLog.forEach(log => {
        sectionLog += ` ${log}`;
        sectionLog += `\n  ≫ ${eval(log)}\n`;
    });
    console.log(sectionLog);
    btn_build["Screen Information"]["log"] = sectionLog;
};

// ─── The Document Object ─── //
btn_build["The Document Object"] = {"tag":"div",
"innerHTML":"The Document Object",
"classList":['mbtn2-s','log-btn'],
"log":""};

scriptLog["The Document Object"] = function(ev){
    console.log(`// ── The Document Object ── //`);
    // -- code goes here
    let toLog = [];
    let sectionLog = ``;
    toLog.forEach(log => {
        sectionLog += ` ${log}`;
        sectionLog += `\n  ≫ ${eval(log)}\n`;
    });
    console.log(sectionLog);
    btn_build["The Document Object"]["log"] = sectionLog;
};

// ─── Timing Functions ─── //
btn_build["Timing Functions"] = {"tag":"div",
"innerHTML":"Timing Functions",
"classList":['mbtn2-s','log-btn'],
"log":""};

scriptLog["Timing Functions"] = function(ev){
    console.log(`// ── Timing Functions ── //`);
    // -- code goes here
    let toLog = [];
    let sectionLog = ``;
    toLog.forEach(log => {
        sectionLog += ` ${log}`;
        sectionLog += `\n  ≫ ${eval(log)}\n`;
    });
    console.log(sectionLog);
    btn_build["Timing Functions"]["log"] = sectionLog;
};


// ♦ ── ── Building the Buttons ── ── ♦ //

// ── Template ── //
btn_build["template"] = {"tag":"div",
"innerHTML":"template",
"classList":['mbtn2-s','template-btn', 'faded']};
scriptLog["template"] = function(ev){
    console.log(`// ── Template ── //`);
    // -- code goes here
};

// ── Template 2 ── //
btn_build["Template 2"] = {"tag":"div",
"innerHTML":"Template 2",
"classList":['mbtn2-s','log-btn', 'faded']};
scriptLog["Template 2"] = function(ev){
    console.log(`// ── Template 2 ── //`);
    // -- code goes here
    let toLog = [
        `3+5`,
        `parseInt('st',36)`];

    let sectionLog = ``;
    toLog.forEach(log => {
        sectionLog += ` ${log}`;
        sectionLog += `\n  ≫ ${eval(log)}\n`;
    });

    console.log(sectionLog);
};

// ── Button Push Animation ── //
function clickBtn(ev){
    // -- This helps to make the btn look like it was pushed.
    ev.target.classList.add("mbtn2-s-click");
    setTimeout(() => { ev.target.classList.remove("mbtn2-s-click"); }, 100);
};

// ── Making Buttons ── //
// -- Create element.
// -- Add the class styles.
// -- Add to the DOM.
// -- Add events.
let btnkeys = Object.keys(btn_build);
btnkeys.forEach(btnkey =>{
    btn[btnkey] = document.createElement('div');
    btn_build[btnkey]["classList"].forEach(class_style =>{
        btn[btnkey].classList.add(class_style);
    })
    btn[btnkey].innerHTML = btn_build[btnkey]["innerHTML"];
    
    actions.appendChild(btn[btnkey]);

    btn[btnkey].addEventListener('click', scriptLog[btnkey]);
    btn[btnkey].addEventListener('click', clickBtn);
})
