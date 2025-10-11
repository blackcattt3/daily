// add-btn을 누르면 input안의 텍스트가 task-list에 저장된다(addTask())
// task-show에 task-list 보이게하기 (showTask()) 
// delete 버튼 구현
// check 버튼 누르면 가운데 선 생기게   isDone이 true 일때 선 생기게. toggle 사용..?
// All / Done / Not Done 버튼 구현
// 슬라이드바 구현

let navBar = document.querySelector(".nav-bar");
let underline = document.querySelector(".underline")
let inputBox = document.querySelector(".input-box");
let addBtn = document.querySelector(".add-btn");
let taskList = [];
let taskShow = document.querySelector(".task-show");
let itemName = document.querySelector(".item-name");
let menu = document.querySelectorAll(".menu");
let mode = "all"

const addTask = ()=>{
    task = {
        randomId : newID(),
        name : inputBox.value,
        isDone : false
    }
    // console.log(inputBox.value);
    taskList.push(task);
    // console.log(taskList);
    inputBox.value = "";
    inputBox.focus();
    filter();
}

const showTask = ()=>{
    list = []
    if(mode == "all"){
        list = taskList;
    } else if(mode == "done" || mode == "not-done"){
        list = filterList
    }
    taskShow.innerHTML = ""
    list.map((item)=>{
        console.log("show",item.name);
        taskShow.innerHTML += 
        `<div class="task-layout">
            <div class="item-name ${item.isDone?"done-Task":""}">${item.name}</div>
            <div>
                <button onclick=checkTask('${item.randomId}')>check</button>
                <button onclick=deleteTask('${item.randomId}')>delete</button>
            </div>
        </div>`
    })
}

const deleteTask = (deleteTaskId)=>{
    // console.log(item)
    taskList.map((item)=>{
        if(item.randomId === deleteTaskId){
            console.log("name",item.name);
            let index = taskList.indexOf(item);
            taskList.splice(index, 1);
        }
    })
    filter();
    // console.log("taskList", taskList)
}

const checkTask = (checkTaskId)=>{
    taskList.map((item)=>{
        if(item.randomId === checkTaskId){
            console.log("name",item.name);
            item.isDone = !item.isDone
            console.log(item.name, item.isDone);
            // doneTask = document.getElementById(`${item.randomId}`);
            // doneTask.classList.toggle('done-Task')
        }
    })
    filter();
}

const filter = (e)=>{
    // console.log("filter", e);
    filterList = [];
    if(e){
        mode = e.id;
    }
    console.log("mode", mode);
    if(mode == "done"){
        for(let i=0;i<taskList.length;i++){
            if(taskList[i].isDone == true){
                filterList.push(taskList[i]);
            }
        }
    } else if(mode == "not-done"){
        for(let i=0;i<taskList.length;i++){
            if(taskList[i].isDone == false){
                filterList.push(taskList[i]);
            }
        }
    }
    showTask();
}

const horizontalIndicator = (e)=>{
    underline.style.left = e.currentTarget.offsetLeft+"px";
    underline.style.top = e.currentTarget.offsetTop + e.currentTarget.offsetHeight+"px";
    underline.style.width = e.currentTarget.offsetWidth +"px";
}

var newID = function () {
  return Math.random().toString(36).substr(2, 16);
}

addBtn.addEventListener("click", addTask)
menu.forEach((e)=>{e.addEventListener("click", ()=>{console.log("e.id", e.id), filter(e)})});
menu.forEach((event)=>{event.addEventListener("click", (e)=>horizontalIndicator(e))});
