const solution = (num)=>{
    let array = num.toString().split('')
    console.log(array)
    let number = 0;
    array.forEach((item)=>{
        console.log(Number(item))
        number += Number(item)
    })
    console.log(array)
    console.log(number)
    return num%number == 0?'true':'false'
}

solution(18)