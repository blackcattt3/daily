// totalResults     전체 데이터 갯수
// pageSize         한 페이지에 데이터 몇개 보여줄건지
// totalPage        전체 페이지 수 Math.ceil(totalResults/pageSize)
// groupSize        한 그룹당 몇개의 페이지 보여줄건지
// page             현재 내가 있는 페이지
// pageGroup        현재 내가 있는 그룹 번호 Math.ceil(page/groupSize)
// lastPage         한 그룹에서의 마지막 페이지 pageGroup * groupSize
// firstPage        한 그룹내에서의 첫번재 페이지 lastPage - (groupSize-1)

let dummyData = Array.from({length:64}, (_,i) => `data:${i+1}`);
let totalResults = dummyData.length;
let pageSize = 10;
let totalPage = Math.ceil(totalResults/pageSize);
let groupSize = 5
let page = 1;


const paginationRender = ()=>{
    paginationHTML = '';
    pageGroup = Math.ceil(page/groupSize)
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
        paginationHTML += ` <li class="page-item ${i===page?"active":""}" onclick="moveToPage(${i})"><a class="page-link" href="#">${i}</a></li>`
    }
    if(page<totalPage){
        paginationHTML += `<li class="page-item" onclick="moveToPage(${page+1})"><a class="page-link" href="#">></a></li>
        <li class="page-item" onclick="moveToPage(${totalPage})"><a class="page-link" href="#">>></a></li>`
    }

    document.querySelector(".pagination").innerHTML = paginationHTML;
    dataRender();
}

const moveToPage = (selectPage)=>{
    page = selectPage;
    console.log(page);
    paginationRender();
}

const dataRender = ()=>{
    start = (page-1) * pageSize;
    end = start + pageSize;
    data = dummyData.slice(start, end);
    console.log(data);
    dataHTML = data.map((item)=>{
        return `<div>${item}</div>`
    }).join("");
    console.log(dataHTML);
    document.querySelector(".data-show").innerHTML = dataHTML;
}

paginationRender();