let numberBtn = document.querySelectorAll(".number-btn");
let symbolBtn = document.querySelectorAll(".symbol-btn");
let resultBtn = document.querySelector(".result-btn");

let number = '';
let numList = []

const makeNum = (num)=>{
    number += num;
    numList.push(Number(number));
    console.log(numList);
}
const pushSymbolToList = (symbol)=>{
    numList.push(symbol);
    console.log(numList);
    number = '';
}
const decideNum = ()=>{
    index = numList.findIndex((item)=>{return item=='+' || item=='-' || item=='X' || item=='/'})
    firstNum = numList[index-1]
    secondNum = numList[numList.length-1];
    symbol = numList[index];
    console.log(firstNum, symbol, secondNum);
}
// = 버튼 눌렀을때 계산 함수
const calculate = ()=>{
    if(symbol == '+'){
        resultNum = firstNum + secondNum;
    } else if(symbol == '-'){
        resultNum = firstNum - secondNum;
    } else if(symbol == 'X'){
        resultNum = firstNum * secondNum;
    } else if(symbol == '-'){
        resultNum = firstNum * secondNum;
    }
    console.log(resultNum);
    numList = [];
    numList.push(resultNum);
}

numberBtn.forEach((btn)=>btn.addEventListener("click",(btn)=>{makeNum(btn.target.textContent)}));
symbolBtn.forEach((btn)=>btn.addEventListener("click", (btn)=>pushSymbolToList(btn.target.textContent)));
resultBtn.addEventListener("click", ()=>{decideNum(); calculate();});

// 숫자들을 배열에 저장
// 기호 만나기전까지 계속 누적해서 저장하다가 기호 만나면 num을 초기화. 다시 누적해서 저장
// = 버튼을 만나면 symbol 인덱스를 기준으로 index-1과 배열 마지막원소 계산. 계산값을 resultNum에 대입, numList 초기화 후 resultNum push