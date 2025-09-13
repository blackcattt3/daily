// totalResult 전체 데이터 갯수
// pageSize 한 페이지당 몇개의 데이터 넣을건지
// page 현재 내가 있는 페이지
// groupSize 한 그룹당 몇개의 페이지 넣을건지
// totalPage 전체 페이지 갯수 Math.ceil(totalResult/pageSize)
// pageGroup 내가 현재 있는 그룹번호 Math.ceil(page/groupSize)
// lastPage 현재 있는 그룹에서 마지막 페이지 pageGroup * groupSize
// firstPage 현재 있는 그룹의 첫번째 페이지 lastPage-(groupSize-1)

const dummyData = Array.from({length:113},(_,i)=>`data : ${i+1}`)
const totalResult = dummyData.length;
let page = 1;
const pageSize = 10;
const groupSize = 5;
const totalPage = Math.ceil(totalResult / groupSize);   // 23


const paginationRender = ()=>{
    let paginationHTML = ''

    pageGroup = Math.ceil(page/groupSize);
    lastPage = pageGroup * groupSize;
    if(lastPage>totalPage){
        lastPage = totalPage;
    }
    firstPage = lastPage - (groupSize-1);
    if(firstPage<1){
        firstPage = 1;
    }

    if(page>1){
        paginationHTML += `<li class="page-item" onclick="moveToPage(${1})"><a class="page-link" href="#"><<</a></li>
        <li class="page-item" onclick="moveToPage(${page-1})"><a class="page-link" href="#"><</a></li>`
    }
    for(let i=firstPage;i<=lastPage;i++){
        paginationHTML += `<li class="page-item ${i===page?"active":""}" onclick="moveToPage(${i})"><a class="page-link" href="#">${i}</a></li>`
    }
    if(page<totalPage){
        paginationHTML += `<li class="page-item" onclick="moveToPage(${page+1})"><a class="page-link" href="#">></a></li>
        <li class="page-item" onclick="moveToPage(${totalPage})"><a class="page-link" href="#">>></a></li>`
    }
    document.querySelector(".pagination").innerHTML = paginationHTML;
    showData();
}

const moveToPage = (clickPage)=>{
    page = clickPage;
    console.log(page);
    paginationRender();
}

const showData = ()=>{
    const start = (page-1) * pageSize;      // 0 10 20 30..
    const end = start+pageSize;             // 10 20 30 ...
    const items = dummyData.slice(start, end);

    const resultHTML = items.map((item)=>{
        return `<div>${item}</div>`
    }).join("");

    document.querySelector(".result").innerHTML = resultHTML;
}

paginationRender();
// <, << 버튼 등 누를때 나는 onclick으로 이벤트 줬는데 그거말고 직접 버튼 클래스 달아서  <li class="page-item" id="moveLeft"><a class="page-link" href="#"><</a></li>`
// document.querySelector("#moveLeft").addEventListener("click",()=>{...}) 이거로 해도 되지않은지. 근데 이렇게 되면 이벤트리스너를 각각 < << > >> 4개를 줘야하고 코드도 넘 길어져서
// 그냥 onclick으로 때려버리는건지