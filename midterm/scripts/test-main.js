
// var refresh = 0;
// localStorage.setItem("","");

// const head = ["✔️", "Task", "due"];

// const ToDoList = [];

// ToDoList.forEach( task => {
//     // create new row in table.
//     // add [check box ☑️ DOM] (is clickable) to [first column].
//     // add [tasks DOM] (shows content) to [second column].
//     // add the [due date] to the [last column].
// });
    
// window.addEventListener("touchend", ev => {
//     // if [dataset.check],
//         // mark check box.
//         // update model.
//     // if [dataset.sort],
//         // querySelectAll.
//         // SortBy( [dataset.sort-selection] ).
//         // add to table.
//     // if [dataset.task],
//         // [ev.target] show [edit] or [delete] buttons.
//     // if [dataset.show-edit],
//         // display [input text box] for content.
//         // display [date input box] for the due date.
//         // display [confirm] and [cancel] buttons.
//     // if [dataset.edit],
//         // if [#new-content] != null,
//             // update [task.content]
//         // if [#new-due-date] != null,
//             // update [task.due-date]
//     // if [dataset.cancel]
//         // hide [edit form].
//         // hide [confirm] and [cancel] buttons.
//     // if [dataset.delete],
//         // display [confirmation alert 🚨]
//     // if [dataset.
// });


// ───────────────  ───────────────  ─────────────── 
/*

load.
    → check if any data on storage.
    → load what data is there.
use.
    → add new one.
    → sort current ones.
    → 

*/
// ───────────────  ───────────────  ─────────────── 

import { ToDo } from './todo.js';

// -- Temporaly holding data in 'todos'
let todos = [];
// let todoslen = 0;
setTimeout(() => {  console.log("Loading..."); }, 1000);
if (localStorage.getItem('todos')){
    todos = JSON.parse(localStorage.getItem('todos'));
    // todoslen = todos.length;
    setToDoList();
    console.log("Done!");
} else {
    const newTodo = new ToDo("Check this task");
    todos.push(newTodo);
    setTimeout(() => { 
        const newTodo2 = new ToDo("Delete the samples");
        todos.push(newTodo2); 
        console.log("Task 2 ready!"); 
        setToDoList(); 
    }, 1000);
    console.log("Done!");
}


function countTasks(){
    // task-count
    let undone = todos.filter(task => !task['Completed']);
    // console.log(undone);
    // console.log(undone.length);
    // console.log(`${undone.length} tasks left`);
    document.querySelector("#task-count").innerHTML = `${undone.length} tasks left`;
}

function setToDoList(){
    if (todos.length > 0){
        // -- for the 'table'
        // tasks-list
        const tablelist = document.querySelector("#tablelist");
        tablelist.innerHTML = '';
        todos.forEach((todo) =>{
            tablelist.innerHTML += `
            <tr id="${todo.Id}" data-id="${todo.Id}" data-pinned="${todo.Pinned}" class="tr-task btml_task">
                <td><button class="my_checkbox mybtn check_on_${todo.Completed}" data-is-checked="${todo.Completed}">&#10003;</button></td>
                <td><div class="taskname">${todo.Content}</div></td>
                <td><button class="remove-btn mybtn" data-remove="${todo.Id}">X</button></td>
            </tr>`;
        });
        // // -- for the 'ul' (unordered list)
        // const ulList = document.querySelector("#ulList");
        // ulList.innerHTML = '';
        // todos.forEach((todo) =>{
        //     ulList.innerHTML += `
        //     <li id="${todo.Id}" data-id="${todo.Id}" data-completed="${todo.Id}">
        //     <button class="my_checkbox mybtn check_on_${todo.Completed}" data-is-checked="${todo.Completed}">&#10003;</button>
        //     <div class="taskname">${todo.Content}</div>
        //     <button class="remove-btn mybtn" data-remove="${todo.Id}">X</button>
        //     </li>`;
        // });
    }
    else {
        document.querySelector("#tablelist").innerHTML = '';
    }
    countTasks()
    console.log(todos);
}
function updateStorage(){
    console.log(" ── Update Local Storage ── ");
    // localStorage.setItem("todos", JSON.stringify(todos));
    // countTasks();
    setToDoList();
}

const button = document.querySelector('#addbtn');
button.addEventListener('click', (ev) => {
    // -- prevents the Form from using its built in function.
    event.preventDefault();

    const content = document.querySelector('#newtask').value;
    // const newTodo = new ToDo(content);
    // todos.push(newTodo);
    // updateStorage();
    // document.querySelector('#newtask').value = "";

    console.log(content);
    let testD = document.querySelector('#testD');
    testD.style = `height: ${content}vh;`;
})

function removeTask(taskId){
    // console.log(todos);
    todos = todos.filter(task => task['Id'] != taskId);
    // console.log(todos);
    updateStorage();
}

function toggleComplete(taskId){
    if(taskId != ""){
        let toUpdate = todos.filter(task => task['Id'] == taskId);
        if(toUpdate.length != 0){
            toUpdate[0].Completed = !toUpdate[0].Completed;
            updateStorage();
        }
    }
}

function filterBy(filrequest){
    // console.log('filterBy() -'+filrequest+'-');
    let allTasks = document.querySelectorAll('.tr-task');
    allTasks.forEach(taskelem => {
        if(taskelem.classList.contains('hidden')){
            taskelem.classList.toggle('hidden');
        }
    });
    switch(filrequest){
        case "all":
            // console.log("Show All");
            break;
        case "active":
            // console.log("filter by Active");
            allTasks.forEach(taskelem => {
                // console.log(taskelem.children[0].children[0].dataset.isChecked)
                if(taskelem.children[0].children[0].dataset.isChecked == "true"){
                    taskelem.classList.toggle('hidden');
                }
            });
            break;
        case "completed":
            // console.log("filter by Completed");
            allTasks.forEach(taskelem => {
                if(taskelem.children[0].children[0].dataset.isChecked == "false"){
                    taskelem.classList.toggle('hidden');
                }
            });
            break;
        default:
            console.log("default");
    }
}

// document.querySelectorAll('button');
window.addEventListener("click", ev => {
    if(ev.target.dataset.remove != null){
        console.log(ev.target);
        // console.log(ev.target.dataset.remove);
        removeTask(ev.target.dataset.remove);
    }

    if(ev.target.dataset.isChecked != null){
        if(ev.target.dataset.isChecked == "false"){
            ev.target.classList.toggle("check_on_true");
            ev.target.classList.toggle("check_on_false");
            ev.target.dataset.isChecked = "true";
            if(ev.target.parentElement.parentElement.id != ""){
                toggleComplete(ev.target.parentElement.parentElement.id);
            }
        } else if(ev.target.dataset.isChecked == "true"){
            ev.target.classList.toggle("check_on_true");
            ev.target.classList.toggle("check_on_false");
            ev.target.dataset.isChecked = "false";
            if(ev.target.parentElement.parentElement.id != ""){
                toggleComplete(ev.target.parentElement.parentElement.id);
            }
        } else {
            console.log(ev.target);
            console.log(ev.target.dataset.isChecked);
        }
    }
    if(ev.target.dataset.filter != null){
        // console.log(ev.target);
        // console.log(ev.target.dataset.filter);
        filterBy(ev.target.dataset.filter);
    }
    if(ev.target.dataset.toggleNav != null){
        ev.target.classList.toggle("navswitch-scroll");
        ev.target.classList.toggle("navswitch-wrap");

        let olnav = document.querySelector("#olnav");
        olnav.classList.toggle("olnav-scroll");
        olnav.classList.toggle("olnav-wrap");
    }
});
