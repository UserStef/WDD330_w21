// -- Reading StepUp -- //
let scriptLog = {};
let btn = {};
let btn_build = {};
let actions = document.getElementById('actions');


// ♦ ─────────────── Chapter 2 ─────────────── ♦ //

// ── Comments ── //

// Single comment.
/* Multiple
line comment */

btn_build["comments"] = {"tag":"div",
"innerHTML":"Comments",
"classList":['mbtn2-s','log-btn']};
scriptLog["comments"] = function(ev){
    console.log(`// ── Comments ── //`);
    // -- code goes here
    console.log(`// Single comment.`);
    console.log(`/* Multiple \nline comment */`);
};


// ── JavaScript Grammar ── //
const helloMessage = 'Hello Master ;)';
// alert(helloMessage);

// let alertBtn = document.createElement('div');
// alertBtn.classList.add('mbtn2-s','action-btn');
// alertBtn.innerHTML = "Welcome Message";
// actions.appendChild(alertBtn);
// alertBtn.addEventListener('click', (ev) => {
//     // alert(helloMessage);
//     console.log(helloMessage);
//     ev.target.classList.add("mbtn2-s-click");
//     setTimeout(() => { ev.target.classList.remove("mbtn2-s-click"); }, 200);
// });

btn_build["alert"] = {"tag":"div",
"innerHTML":"Welcome Message",
"classList":['mbtn2-s','action-btn']};
scriptLog["alert"] = function(ev){
    console.log(`// ── JavaScript Grammar ── //`);
    // -- code goes here
    console.log(helloMessage);
    ev.target.classList.add("mbtn2-s-click");
    setTimeout(() => { ev.target.classList.remove("mbtn2-s-click"); }, 200);
    alert(helloMessage);
};

// btn["alert"] = document.createElement('div');
// actions.appendChild(btn["alert"]);


// ── Reserved Words ── //

/* abstract, await, boolean, break, byte, 
case, catch, char, class, const, 
continue, debugger, default, delete, do, 
double, else, enum, export, extends, 
false, final, finally, float, for, 
function, goto, if, implements, import, 
in instanceof, int, interface, let, long, 
native, new, null, package, private, 
protected, public, return, short, static, 
super, switch, synchronized, this, throw, 
throws, transient, true, try, typeof, 
var, volatile, void, while, with, 
yield */

/* undefined, NaN, Infinity */

// ── Primitive Data Types ── //

/* 
• String
• Symbol
• Number
• Boolean
• Undefined
• Null
*/

// typeof 'hello'
// // → 'string'
// typeof 10;
// // → 'number'
// typeof true;
// // → 'bolean'
// typeof {object: 'sample'};
// // → 'object'
// typeof [1,2,3];
// // → 'object'

btn_build["typeof"] = {"tag":"div",
"innerHTML":"Data Types",
"classList":['mbtn2-s','log-btn']};
scriptLog["typeof"] = function(ev){
    console.log(`// ── Primitive Data Types ── //`);
    // -- code goes here
    let differentVariables = ['hello', 10, true, {object: 'sample'}, [1,2,3]];
    differentVariables.forEach(item =>{
        let itemReady = item;
        if(typeof item == "string"){itemReady = `'${item}'`;}
        if(typeof item == "object"){itemReady = JSON.stringify(item);}
        console.log(`typeof ${itemReady}; \n ≫ "${typeof item}"`);
    })
};



// ── Declaring and Assigning ── //

// let x = 3, y = 4, z = 5;

btn_build["declare"] = {"tag":"div",
"innerHTML":"Declaring",
"classList":['mbtn2-s','log-btn']};
scriptLog["declare"] = function(ev){
    console.log(`// ── Declaring and Assigning ── //`);
    // -- code goes here
    console.log(`let x = 3, y = 4, z = 5;`);
};

// ── Scope ── //



// ── Naming Constants & Variables ── //

/* Constant and variable names can start with any upper or lower-case letter, an underscore, _ , or dollar character, $ . 
They can also contain numbers, but cannot start with them. */

/* Constant and variable names are case sensitive, so ANSWER is different to Answer and answer . */

// Camel case
let firstNameAndLastName;
// Underscore
let first_name_and_last_name;


btn_build["naming"] = {"tag":"div",
"innerHTML":"Naming",
"classList":['mbtn2-s','log-btn']};
scriptLog["naming"] = function(ev){
    console.log(`// ── Naming Constants & Variables ── //`);
    // -- code goes here
    console.log(`Constant and variable names can \nstart with any upper or lower-case letter, \nan underscore, _ , or dollar character, $ . \nThey can also contain numbers, but cannot start with them.`);
    console.log(`Constant and variable names are case sensitive, \nso 'ANSWER' is different to 'Answer' and 'answer'.`);
    console.log(`// Camel case \nlet firstNameAndLastName;`);
    console.log(`// Underscore \nlet first_name_and_last_name;`);
};

// ── Direct Assignment and Assignment By Reference ── //


// ── Strings ── //

// Backslashes allow specific instructions in the string format.
/*
• Single quote marks \'

• Double quote marks \"

• End of line \n

• Carriage return \r

• Tab \t

• "This is a backslash \\"
*/

btn_build["strings"] = {"tag":"div",
"innerHTML":"Strings",
"classList":['mbtn2-s','log-btn']};
scriptLog["strings"] = function(ev){
    console.log(`// ── Strings ── //`);
    // -- code goes here
    let sectionLog = `Backslashes allow specific instructions in the string format.`;
    sectionLog += `\n • Single quote marks \\'`;
    sectionLog += `\n • Double quote marks \\"`;
    sectionLog += `\n • End of line \\n`;
    sectionLog += `\n • Carriage return \\r`;
    sectionLog += `\n • Tab \\t`;
    sectionLog += `\n • "This is a backslash \\\\"`;
    console.log(sectionLog);
};


// ── String Properties and Methods ── //

// let name = 'Alexa';
// name.length;
// // → 5
// name['length'];
// // → 5

// name.toUpperCase();
// // → 'ALEXA'

// name.toLowerCase();
// // → 'alexa'

// name.charAt(1);
// // → 'l'

// name.indexOf('A');
// // → 0

// name.indexOf('z');
// // → -1

// name.lastIndexOf('a');

// name.includes('a');

// name.includes('z');

// name.startsWith('A');

// name.startsWith('a');

// name.endsWith('A');

// name.endsWith('a');

'JavaScript'.concat('Ninja');

'Hello'.concat(' ','World','!');

'Java' + 'Script' + ' ' + 'Ninja';

'    Hello World     '.trim();

'   \t\t  JavaScript Ninja! \r'.trim()

'Hello'.repeat(2);


btn_build["string_properties"] = {"tag":"div",
"innerHTML":"String Properties",
"classList":['mbtn2-s','log-btn']};
scriptLog["string_properties"] = function(ev){
    console.log(`// ── String Properties and Methods ── //`);
    // -- code goes here
    let name = 'Alexa';
    let sectionLog = ` let name = 'Alexa';`;
    sectionLog += `\n name.length; \n  ≫ ${name.length}`;
    sectionLog += `\n name['length']; \n  ≫ ${name['length']}`;
    sectionLog += `\n name.toUpperCase(); \n  ≫ '${name.toUpperCase()}'`;
    sectionLog += `\n name.toLowerCase(); \n  ≫ '${name.toLowerCase()}'`;
    sectionLog += `\n name.charAt(1); \n  ≫ '${name.charAt(1)}'`;
    sectionLog += `\n name.indexOf('A'); \n  ≫ '${name.indexOf('A')}'`;
    sectionLog += `\n name.indexOf('z'); \n  ≫ '${name.indexOf('z')}'`;

    sectionLog += `\n name.lastIndexOf('a'); \n  ≫ '${name.lastIndexOf('a')}'`;
    sectionLog += `\n name.includes('a'); \n  ≫ '${name.includes('a')}'`;
    sectionLog += `\n name.includes('z'); \n  ≫ '${name.includes('z')}'`;

    sectionLog += `\n name.startsWith('A'); \n  ≫ '${name.startsWith('A')}'`;
    sectionLog += `\n name.startsWith('a'); \n  ≫ '${name.startsWith('a')}'`;
    sectionLog += `\n name.endsWith('A'); \n  ≫ '${name.endsWith('A')}'`;
    sectionLog += `\n name.endsWith('a'); \n  ≫ '${name.endsWith('a')}'`;

    sectionLog += `\n\n 'JavaScript'.concat('Ninja'); \n  ≫ ${'JavaScript'.concat('Ninja')}`;
    sectionLog += `\n\n 'Hello'.concat(' ','World','!'); \n  ≫ ${'Hello'.concat(' ','World','!')}`;
    sectionLog += `\n\n 'Java' + 'Script' + ' ' + 'Ninja'; \n  ≫ ${'Java' + 'Script' + ' ' + 'Ninja'}`;
    sectionLog += `\n\n '    Hello World     '.trim(); \n  ≫ ${'    Hello World     '.trim()}`;
    sectionLog += `\n\n '   \t\t  JavaScript Ninja! \r'.trim(); \n  ≫ ${'   \t\t  JavaScript Ninja! \r'.trim()}`;
    sectionLog += `\n\n 'Hello'.repeat(2);; \n  ≫ ${'Hello'.repeat(2)}`;

    console.log(sectionLog);
};

// -- Supposly deprecated, but used for URLs.
// escape('abc123');     // "abc123"
// escape('äöü');        // "%E4%F6%FC"
// escape('ć');          // "%u0107"
// escape('@*_+-./');    // "@*_+-./"

// ── Template Literals ── //

// const name2 = `Siri`;
// `Hello ${ name2 }!`;
// // << 'Hello Siri!'
// const age = 39;
// `I will be ${ age + 1 } next year`;
// // << 'I will be 40 next year'

btn_build["template literals"] = {"tag":"div",
"innerHTML":"Template Literals",
"classList":['mbtn2-s','log-btn']};
scriptLog["template literals"] = function(ev){
    console.log(`// ── Template Literals ── //`);
    // -- code goes here
    const name2 = `Siri`;
    const age = 39;
    let sectionLog = ``;
    sectionLog += `\n const name = \`Siri\`;`;
    sectionLog += `\n \`Hello \${ name }!\``;
    sectionLog += `\n  ≫ Hello ${ name2 }!`;
    sectionLog += `\n const age = 39;`;
    sectionLog += `\n \`I will be \${ age + 1 } next year\``;
    sectionLog += `\n  ≫ I will be ${ age + 1 } next year`;
    console.log(sectionLog);
};

// ── Symbols ── //

// ── Numbers ── //

Number.isInteger(42);
// → true
Number.isInteger(3.142);
// → false

btn_build["numbers"] = {"tag":"div",
"innerHTML":"Numbers",
"classList":['mbtn2-s','log-btn']};
scriptLog["numbers"] = function(ev){
    console.log(`// ── Numbers ── //`);
    // -- code goes here
    let sectionLog = ``;
    sectionLog += ` Number.isInteger(42);`;
    sectionLog += `\n  ≫ ${Number.isInteger(42)}`;
    sectionLog += `\n Number.isInteger(3.142);`;
    sectionLog += `\n  ≫ ${Number.isInteger(3.142)}`;
    
    console.log(sectionLog);
};

// ── Octal and Hexadecimal Numbers ── //


// ── Exponential Notation ── //
// ── Number Methods ── //
// ── Arithmetic Operations ── //
// ── Changing The Value of Variables ── //
// ── Incrementing Values ── //
// ── Infinity ── //
// 1e308; // 1 with 308 zeroes!
// << 1e308

// 1/0;
// << Infinity

// ── NaN ── //
// ── Checking a Value is a Number ── //
// ── Type Coercion ── //
// ── Converting Between Strings and Numbers ── //
// ── Converting Strings to Numbers ── //
// ── Converting Numbers to Strings ── //

btn_build["numb2String"] = {"tag":"div",
"innerHTML":"Number to String",
"classList":['mbtn2-s','log-btn']};
scriptLog["numb2String"] = function(ev){
    console.log(`// ── Converting Numbers to Strings ── //`);
    // -- code goes here
    let sectionLog = ``;
    sectionLog += ` String(3);`;
    sectionLog += `\n  ≫ ${String(3)}`;

    sectionLog += `\n 3 +'';`;
    sectionLog += `\n  ≫ ${3 +''}`;
    
    sectionLog += `\n 10..toString()`;
    sectionLog += `\n  ≫ ${10..toString()}`;
    
    sectionLog += `\n 10..toString(2);`;
    sectionLog += `\n  ≫ ${10..toString(2)}`;
    
    console.log(sectionLog);
};

// ── Parsing Numbers ── //

btn_build["parsingNumbers"] = {"tag":"div",
"innerHTML":"Parsing Numbers",
"classList":['mbtn2-s','log-btn']};
scriptLog["parsingNumbers"] = function(ev){
    console.log(`// ── Parsing Numbers ── //`);
    // -- code goes here
    let toLogt = [`parseInt('1010',2)`,
    `parseInt('omg',36)`,
    `parseInt('23',10)`,
    `const address = '221B Baker Street';\nparseInt(address, 10)`,
    `Number(address)`,
    `parseInt('2.4',10)`,
    `parseInt('2.9',10)`,
    `parseFloat('2.9',10)`];
    const address = '221B Baker Street';

    let sectionLog = ``;
    sectionLog += ` parseInt('1010',2);`;
    sectionLog += `\n  ≫ ${parseInt('1010',2)}`;

    sectionLog += `\n parseInt('omg',36)`;
    sectionLog += `\n  ≫ ${parseInt('omg',36)}`;
    
    sectionLog += `\n parseInt('23',10)`;
    sectionLog += `\n  ≫ ${parseInt('23',10)}`;
    
    sectionLog += `\n const address = '221B Baker Street';`;
    sectionLog += `\n parseInt(address, 10);`;
    sectionLog += `\n  ≫ ${parseInt(address, 10)}`;

    sectionLog += `\n Number(address);`;
    sectionLog += `\n  ≫ ${Number(address)}`;

    sectionLog += `\n parseInt('2.4',10);`;
    sectionLog += `\n  ≫ ${parseInt('2.4',10)}`;

    sectionLog += `\n parseInt('2.9',10);`;
    sectionLog += `\n  ≫ ${parseInt('2.9',10)}`;

    sectionLog += `\n parseFloat('2.9',10);`;
    sectionLog += `\n  ≫ ${parseFloat('2.9',10)}`;

    sectionLog += `\n\n ↓ my examples ↓ `;
    let toLog = [
        `parseInt('st',36)`,
        `parseInt('night',36)`,
        `parseInt('Jane',36)`,
        `parseInt('Stéfano',36)`,
        `parseInt('Kate',36)`];

    toLog.forEach(log => {
        sectionLog += `\n ${log}`;
        sectionLog += `\n  ≫ ${eval(log)}`;
    });

    sectionLog += `\n\nUsing characters with accent(áéíóú) will break the parseInt()`;
    sectionLog += `\nlike in:`;
    sectionLog += `\nparseInt('Stéfano',36) ≫ ${parseInt('Stéfano',36)}`;
    sectionLog += `\nparseInt('Stefano',36) ≫ ${parseInt('Stefano',36)}`;
    
    console.log(sectionLog);

};

// ── Undefined ── //
// ── Null ── //

// 10 + null; // null behaves like zero
// // << 10
// 10 + undefined; // undefined is not a number
// // << NaN

btn_build["null"] = {"tag":"div",
"innerHTML":"Null",
"classList":['mbtn2-s','log-btn']};
scriptLog["null"] = function(ev){
    console.log(`// ── Null ── //`);
    // -- code goes here

    let sectionLog = ``;
    sectionLog += `\n 10 + null; // null behaves like zero`;
    sectionLog += `\n  ≫ ${10 + null}`;
    sectionLog += `\n 10 + undefined; // undefined is not a number`;
    sectionLog += `\n  ≫ ${10 + undefined}`;
    
    console.log(sectionLog);
};

// ── Booleans ── //

btn_build["Booleans"] = {"tag":"div",
"innerHTML":"Booleans",
"classList":['mbtn2-s','log-btn']};
scriptLog["Booleans"] = function(ev){
    console.log(`// ── Booleans ── //`);
    // -- code goes here
    let toLogEval = [
        `Boolean('hello')`,
        `Boolean(42)`,
        `Boolean(0)`];

    let toLog = [
        `* "" // double quoted empty string literal`,
        `* '' // single quoted empty string literal`,
        `* \`\` // empty template literal`,
        `* 0`,
        `* -0 // considered different to 0 by JavaScript!`,
        `* NaN`,
        `* false`,
        `* null`,
        `* undefined`];

    let sectionLog = ``;
    toLogEval.forEach(code => {
        sectionLog += ` ${code};`;
        sectionLog += `\n  ≫ ${eval(code)}\n`;
    });
    sectionLog += `\n`;
    toLog.forEach(log => {
        sectionLog += `${log}\n`;
    });

    console.log(sectionLog);
};

// ── Logical Operators ── //
// ── Lazy Evaluation ── //
// ── Bitwise Operators ── //
// ── Bitwise Shift Operators ── //
// ── Comparison ── //
// ── Equality ── //
// ── Inequality ── //
// ── Greater Than and Less Than ── //






// ♦ ── ── Building the Buttons ── ── ♦ //

// ── Template ── //
btn_build["template"] = {"tag":"div",
"innerHTML":"template",
"classList":['mbtn2-s','template-btn', 'hidden']};
scriptLog["template"] = function(ev){
    console.log(`// ── Template ── //`);
    // -- code goes here

    let sectionLog = `// ── Template ── //`;
    sectionLog += `\n 3+5`;
    sectionLog += `\n  ≫ ${3+5}`;
    console.log(sectionLog);
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


// ♦ ── ── Done ── ── ♦ //

// console.log(scriptLog);
// console.log(btn);
// console.log(btn_build);

// ── _____ ── //
// ── _____ ── //
// ── _____ ── //
// ── _____ ── //
// ── _____ ── //