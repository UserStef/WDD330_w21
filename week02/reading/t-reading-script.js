
// <span class="subtitle"><a href="index.html" class="arrow-link-2">&LeftTriangle;</a>&nbsp;Reading notes from Chapter 03&nbsp;<a href="ch4.html" class="arrow-link-1">&RightTriangle;</a></span>

// -- Reading StepUp -- //
let scriptLog = {};
let btn = {};
let btn_build = {};
let actions = document.getElementById('actions');

// ♦ ── ── Chapter 4 ── ── ♦ //

const helloMessage = 'Hello Master ;)';
const byeMessage = 'Goodnight Master &#127747;';

// ── Invoking a Function ── //

function hello(){
    console.log(helloMessage);
}

// ── Function Expressions ── //

const goodbye = function(){
    console.log(byeMessage);
};

const goodbye2 = function bye(){
    console.log(byeMessage);
};

const hi = new Function('console.log("Hi World!");');

// ── Invoking a Function ── //

hello();


// ── __________ ── //
// ── __________ ── //
// ── __________ ── //
// ── __________ ── //
// ── __________ ── //
// ── __________ ── //
// ── __________ ── //
// ── __________ ── //
// ── __________ ── //


// ♦ ── ── Building the Buttons ── ── ♦ //

// ── Template ── //
btn_build["template"] = {"tag":"div",
"innerHTML":"template",
"classList":['mbtn2-s','template-btn', 'hidden']};
scriptLog["template"] = function(ev){
    console.log(`// ── Template ── //`);
    // -- code goes here
};

// ── Template 2 ── //
btn_build["template"] = {"tag":"div",
"innerHTML":"template",
"classList":['mbtn2-s','log-btn', 'faded']};
scriptLog["template"] = function(ev){
    console.log(`// ── Template ── //`);
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
