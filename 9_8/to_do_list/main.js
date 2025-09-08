// 기능 추가, 삭제
// 화면에 보이게 구현하기(render 함수)
// 탭 넘어가며 undo와 do 보기 (탭은 All, Undo, do 총 3개) (filter함수 사용)
// 체크하면 밑줄, 다시 해제 가능
// 슬라이드바

let itemList = [];
let list = [];
let saveBtn = document.querySelector(".save-btn");
let input = document.querySelector(".input");
let checkBtn = document.querySelector(".check-btn");
let deleteBtn = document.querySelectorAll(".delete-btn");
let showResult = document.querySelector(".show-result");
let tabBtn = document.querySelectorAll(".tab-list div");
let mode = "All"

// 할일 추가 함수
const addList = ()=>{
    items = {
        id : newID(),
        item : input.value,
        isDone : false
    }
    itemList.push(items);
    input.value = "";
    input.focus();
    // console.log(itemList);
    filterTab();
}

// 랜덤 아이디 생성 함수
var newID = function () {
    return Math.random().toString(36).substr(2, 16);
}

// 화면 구현 함수
const render = ()=>{
    // resultHTML = '';
    // itemList.forEach((item)=>{
    //     resultHTML += `<div class="list">
    //     <div>일어나기</div>
    //     <div class="buttons">
    //         <button>check</button>
    //         <button>Delete</button>
    //     </div>
    // </div>`
    // })
    resultHTML = filterList.map((item)=>{
        return `<div class="list">
            <div class="item-name ${item.isDone?"task-done":""}" data-id='${item.id}'>${item.item}</div>
            <div class="buttons">
                <button class="check-btn" data-id='${item.id}'>Check</button>
                <button class="delete-btn" data-id='${item.id}'>Delete</button>
            </div>
        </div>`
    }).join("");
    showResult.innerHTML = resultHTML;
}

// 삭제함수
const deleteItem = (e)=>{
    // console.log(id);
    // 해당 아이디를 가진 요소의 인덱스가 몇번인지,, findIndex 사용!
    let index = itemList.findIndex((item)=>{
        return item.id == e
    })
    itemList.splice(index, 1);
    filterTab();
    // console.log(index);
}
// 토글함수
// 1. isDone이 true/false 바뀜 ->
// 2. toggle 이용하기
const toggleItem = (e)=>{
    let index = itemList.findIndex((item)=>{
        return item.id == e;
    })
    itemList[index].isDone = !itemList[index].isDone;
    // console.log(itemList[index].isDone);
    filterTab();
}

const filterTab = (e) => {
    filterList = []
    if (e) {
        mode = e;       // 탭 모드 바꿔주는 역할
    }

    if(mode == "All"){
        filterList = itemList;
    } else if(mode == "Undo"){
        filterList = itemList.filter((item)=>{
            return item.isDone == false;
        })
        // console.log(filterList, filterList[0].id)
    } else if(mode == "Do"){
        filterList = itemList.filter((item)=>{
            return item.isDone == true;
        })
        // console.log(filterList);
    }
    render();
}


tabBtn.forEach((e)=>e.addEventListener("click", (e)=>filterTab(e.target.textContent)));

showResult.addEventListener("click", (e)=>{if(e.target.classList.contains("delete-btn")){
        // console.log(e.target);
        // console.log(e.target.dataset);
        // console.log(e.target.dataset.id);
        deleteItem(e.target.dataset.id);
    } else if(e.target.classList.contains("check-btn")){
        // console.log("c");
        toggleItem(e.target.dataset.id);
    }
});
saveBtn.addEventListener("click", addList);
input.addEventListener("keydown", function(event){
    if(event.key === 'Enter'){
        event.preventDefault();
        addList();
    }
})


// e.target.textContent == "Undo"   ->  item.isDone == false
// e.target.textContent == "Do"   ->  item.isDone == true