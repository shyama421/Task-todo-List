// import clearAll, { name, fname } from './utils.js'
// "use strict";

const arr = JSON.parse(localStorage.getItem("task")) || [];
let id = 1;

function localstorage() {
    localStorage.setItem("task", JSON.stringify(arr));
}

// console.log(clearAll(), "data@@@@")

taskRender();

function taskRender() {
    const inpt = arr.map((obj, index) => {
        return `<div class='task-box'>
                    <div class='task_design'>
                        <div class='task-box-design'>${obj.task} </div>
                        <button class='dltbtn' onclick="deletetask(${index})">       
                            <img src="/delete.png" height="40px"> 
                        </button>
                    </div>
                 </div>`
    })
    const taskCount = document.getElementById('taskCount');
    taskCount.innerHTML = arr.length;
    const taskvalue = document.getElementById('taskvalue');
    taskvalue.innerHTML = inpt.join(' ');
}

function addtask() {
    const taskone = document.getElementById('task');
    if (task.value.trim() === "") {
        alert("Please Enter a Task : ")
        return;
    }

    arr.push({ id, task: taskone.value });
    taskone.value = "";
    localstorage();
    taskRender();
    id++;
}

function Render(){
    document.getElementById("")
}

function deletetask(index) {
    arr.splice(index, 1);
    localstorage();
    taskRender();
}

function clearAll() {
    arr.length = 0;
    localstorage();
    taskRender();
}


// Local Storage

// arr.filter()

// localStorage.removeItem("todos");
// localStorage.clear();

// try {
//     console.log(asdas);


// } catch (err) {
//     console.log(err)
// }

// console.log(122 == "122")


let person = { name: "123" }

let members = person

members = null;

console.log(person, "@@@@@@@@")