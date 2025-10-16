let input = document.querySelector(".input");
let inputBtn = document.querySelector(".input-btn");


const printValue = ()=>{
    console.log(input.value);
}

inputBtn.addEventListener("click", printValue);
