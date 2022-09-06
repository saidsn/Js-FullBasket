let products = [];

if (localStorage.getItem("products") != null) {
    products = JSON.parse(localStorage.getItem("products"))
}

let tableBody = document.querySelector(".table .table-body");


addDatasToTable(products);
showIconbasketCount();

let deleteBtns = document.querySelectorAll(".delete-btn");


deleteBtns.forEach(btn => {
    btn.addEventListener("click",function(){
        deleteProducts(this)
    })
});

function deleteProducts(btn){


    let id = parseInt(btn.parentNode.parentNode.firstElementChild.getAttribute("data-id"));
    
    products = products.filter(m=>m.id != id);

    localStorage.setItem("products",JSON.stringify(products));

    btn.parentNode.parentNode.remove();

    showIconbasketCount();
    //document.location.reload();
    
};

function addDatasToTable(products){
    for (const product of products) {
        tableBody.innerHTML += `<tr>
        <td data-id ="${product.id}"><img src="${product.image}" height="100px" width="100px" class="card-img-top" alt="..."></td>
        <td>${product.name}</td>
        <td>${product.desc}</td>
        <td>${product.count}</td>
        <td><i class="fa-solid fa-circle-xmark delete-btn"></i></td>
      </tr>`
    }
};

function getProductsCount(items){
    let resultCount = 0;
    for (const item of items) {
        resultCount += item.count
    }
    return resultCount;
};

function showIconbasketCount(){
    document.querySelector("sup").innerText = getProductsCount(products);
};

