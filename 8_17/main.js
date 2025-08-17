let redBtn = document.querySelector("#red")
let blueBtn = document.querySelector("#blue")
let yellowBtn = document.querySelector("#yellow")
let square = document.querySelector("#square");

//1. 처음에 내가 했던 방식
// redBtn.onclick = function(){square.style.backgroundColor = "red"};
// blueBtn.onclick = function(){square.style.backgroundColor = "blue"};
// yellowBtn.onclick = function(){square.style.backgroundColor = "yellow"};


//2. 함수로 고쳐보면 어떨까? 해서 고친 방식
redBtn.addEventListener("click", changeColor);
blueBtn.addEventListener("click", changeColor);
yellowBtn.addEventListener("click", changeColor);

function changeColor(){
    // console.log(typeof(this.getAttribute("id")));   // string
    square.style.backgroundColor = this.getAttribute("id");
}


//3. 현업에서 많이 쓰이는 방식
// let square = document.querySelector("#square");
// let buttons = document.querySelectorAll("button");

// buttons.forEach(btn => {
//     btn.addEventListener("click", function(){
//         square.style.backgroundColor = this.dataset.color;
//     })
// })