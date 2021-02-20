
import { ToDo } from './todo.js';

// -- Temporaly holding data in 'todos'
let todos = [];
setTimeout(() => {  console.log("Loading..."); }, 1000);
if (localStorage.getItem('todos')){
    todos = JSON.parse(localStorage.getItem('todos'));
    setToDoList();
} else {
    const newTodo = new ToDo("Check this task");
    todos.push(newTodo);
    setTimeout(() => { 
        const newTodo2 = new ToDo("Delete the samples");
        todos.push(newTodo2); 
        console.log("Task 2 ready!"); 
        setToDoList(); 
    }, 1000);
}
setTimeout(() => {  console.log("Done!"); }, 2000);

let current_filter = "all";


function countTasks(){
    let undone = todos.filter(task => !task['Completed']);
    // console.log(undone);
    // console.log(undone.length);
    // console.log(`${undone.length} tasks left`);
    document.querySelector("#task-count").innerHTML = `${undone.length} tasks left`;
}

function setToDoList(){
    if (todos.length > 0){
        // -- for the 'table'
        const tablelist = document.querySelector("#tablelist");
        tablelist.innerHTML = '';
        todos.forEach((todo) =>{
            tablelist.innerHTML += `
            <tr id="${todo.Id}" data-id="${todo.Id}" data-pinned="${todo.Pinned}" class="tr-task btml_task">
                <td><button class="my_checkbox mybtn check_on_${todo.Completed}" data-is-checked="${todo.Completed}">&#10003;</button></td>
                <td><div class="taskname strike_text_${todo.Completed}">${todo.Content}</div></td>
                <td><button class="remove-btn mybtn" data-remove="${todo.Id}">X</button></td>
            </tr>`;
        });
    }
    else {
        document.querySelector("#tablelist").innerHTML = '';
    }
    countTasks();
    console.log(todos);
}
// Called by:
// -- Add new Task
// -- Remove Task.
// -- Check Completed.
function updateStorage(){
    console.log(" ── Update Local Storage ── ");
    localStorage.setItem("todos", JSON.stringify(todos));
    countTasks();
    // filterTasks();
    // setToDoList();
}

const button = document.querySelector('#addbtn');
button.addEventListener('click', (ev) => {
    // -- prevents the Form from using its built in function.
    event.preventDefault();

    const content = document.querySelector('#newtask').value;
    const newTodo = new ToDo(content);
    todos.push(newTodo);
    updateStorage();
    document.querySelector('#newtask').value = "";
    setToDoList();
})

function removeTask(taskId){
    // -- check the lenght to later confirm it was removed.
    // let allTasks = document.querySelectorAll('.tr-task');
    // console.log(`allTasks.length: ${allTasks.length}`);

    
    // console.log(todos);
    let taskToRemove = todos.filter(task => task['Id'] == taskId);
    todos = todos.filter(task => task['Id'] != taskId);
    // console.log(todos);

    // -- get the DOM element with that 'Id'
    let taskElem = document.getElementById(taskToRemove[0].Id);
    // -- remove the Element from the DOM.
    taskElem.remove();

    // -- confirm it is removed.
    // allTasks = document.querySelectorAll('.tr-task');
    // console.log(`allTasks.length: ${allTasks.length}`);


    updateStorage();
}

function toggleComplete(targetElem){
    // -- Switch the checkmark.
    targetElem.classList.toggle("check_on_true");
    targetElem.classList.toggle("check_on_false");
    if(targetElem.dataset.isChecked == "true"){
        targetElem.dataset.isChecked = "false";
    } else if(targetElem.dataset.isChecked == "false"){
        targetElem.dataset.isChecked = "true";
    }
    
    // -- Get task id.
    let taskId = targetElem.parentElement.parentElement.id;
    // console.log(`→toggleComplete2(#${taskId})`);

    if(taskId != ""){
        let toUpdate = todos.filter(task => task['Id'] == taskId);
        if(toUpdate.length != 0){
            // -- Get content elem.
            let taskContent = targetElem.parentElement.parentElement.children[1].children[0];
            // -- Toggle strike on text.
            taskContent.classList.toggle("strike_text_true");
            taskContent.classList.toggle("strike_text_false");

            // -- Update the task' attribute.
            toUpdate[0].Completed = !toUpdate[0].Completed;
            updateStorage();
            filterTasks();
        }
    }
}

function filterTasks(){
    // Previous Parameter: 'filrequest'
    // console.log('filterBy() -'+filrequest+'-');
    let allTasks = document.querySelectorAll('.tr-task');
    allTasks.forEach(taskelem => {
        if(taskelem.classList.contains('hidden')){
            taskelem.classList.toggle('hidden');
        }
    });
    // console.log("filterTask() by : "+current_filter);
    switch(current_filter){
        case "all":
            // console.log("Show All");
            // allTasks.forEach(taskelem => {
            //     if(taskelem.classList.contains('hidden')){
            //         taskelem.classList.toggle('hidden');
            //     }
            // });
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
            console.log("Error: filter got to default!");
    }
}


window.addEventListener("click", ev => {
    if(ev.target.dataset.remove != null){
        console.log(ev.target);
        // console.log(ev.target.dataset.remove);
        removeTask(ev.target.dataset.remove);
    }

    if(ev.target.dataset.isChecked != null){
        // console.log(ev.target);
        // console.log(ev.target.dataset.isChecked);
        let taskcheck = ev.target.dataset.isChecked;
        if(taskcheck == "false" || taskcheck == "true"){
            toggleComplete(ev.target);
        }else {
            console.log(ev.target);
            console.log(ev.target.dataset.isChecked);
        }
    }
    if(ev.target.dataset.filter != null){
        // console.log(ev.target);
        // console.log(ev.target.dataset.filter);
        current_filter = ev.target.dataset.filter;
        // console.log("filterTask() by : " + current_filter);
        filterTasks();
    }
    if(ev.target.dataset.toggleNav != null){
        ev.target.classList.toggle("navswitch-scroll");
        ev.target.classList.toggle("navswitch-wrap");

        let olnav = document.querySelector("#olnav");
        olnav.classList.toggle("olnav-scroll");
        olnav.classList.toggle("olnav-wrap");
    }
});
