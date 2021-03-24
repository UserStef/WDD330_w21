


let testA = {};

//─W02─ [02, 03, 04];
//─Ch3─
testA[3] = `Arrays
Set
Converting Sets to Arrays
Maps
Converting Maps to Arrays
Logic
Loops`;

//─Ch4─
testA[4] = `Defining a Function
Invoking a Function
Return Values
Parameters and Arguments
Callbacks
Array Iterators`;

//─W03─ [05, 06, 07];
//─Ch5─
testA[5] = `Object Literals
Creating Objects
Calling Methods
Checking if Properties or Methods Exist
Finding all the Properties of an Object
Removing Properties
Nested Objects
Namespacing
Built-in Objects
Character Groups`;

//─Ch6─
testA[6] = `The Document Object Model
History of the DOM
An Example Web Page
Getting Elements
Setting and Element's Attributes
Updating CSS`;

//─Ch7─
testA[7] = `Event Listeners
Example Code?
The Event Object
Types of Events
Removing Event Listeners
Stopping Default Behavior
Event Propagation
Event Delegation`;

//─W04─ [08, 12, 15];
//─Ch8─
testA[8] = `Forms
A Searching Example?
Input Fields
I need a Hero!
Form Validation`;

//─Ch12─
testA[12] = `Object-Oriented Programming
Constructor Functions
Static Methods
Prototypal Inheritance
Public and Private Methods
Inheritance
The Object Constructor
Polymorphism
Adding Methods to Build-in Objects
Property Attributes and Descriptors
Creating Objects from Other Objects
Mixins
Chaning Functions
Binding 'this'
Borrowing Methods from Prototypes
Composition Over Inheritance`;

//─Ch15─
testA[15] = `Libraries
Modular JavaScript
MVC Frameworks
Templates
Package Managers
Deploying JavaScript`;

//─W05─ [10];
//─Ch10─
testA[10] = `Errors, Exceptions, and Warnings
The Importance of Testing and Debugging
Strict Mode
Feature Detection
Debugging in the Browser
Error Objects
Exception Handling
Tests`;

//─W09─ [09, 14];
//─Ch9─
testA[9] = `The Browser Object Model
Browser Information
The Browser History
Controlling Windows
Screen Information
The Document Object
Timing Functions`;

//─Ch14─
testA[14] = `HTML5
The 'data-' Attribute
HTML5 APIs
Others APIs
Drawing with Canvas
Shims and Polyfills`;

let testB = {};
let testC = '';

// testB = {};
Object.keys(testA).forEach(ch => {
    let testD = '';
    testD += `\n// ♦ ─────────────── Chapter ${ch} ─────────────── ♦ //\n`;
    testD += testA[ch].split("\n").map(line => {
        return `
        // ─── ${line} ─── //
        btn_build["${line}"] = {"tag":"div",
        "innerHTML":"${line}",
        "classList":['mbtn2-s','log-btn'],
        "log":""};
    
        scriptLog["${line}"] = function(ev){
            console.log(\`// ── ${line} ── //\`);
            // -- code goes here
            let toLog = [];
            let sectionLog = \`\`;
            toLog.forEach(log => {
                sectionLog += \` \${log}\`;
                sectionLog += \`\\n  ≫ \${eval(log)}\\n\`;
            });
            btn_build["${line}"]["log"] = sectionLog;
            console.log(btn_build["${line}"]["log"]);
            logToTheDOM(sectionLog);
        };\n`;
    }).join('\n');
    testB[ch] = testD;
});


