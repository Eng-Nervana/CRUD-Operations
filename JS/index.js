var productNameInput=document.getElementById("productNameInput")
var productPriceInput=document.getElementById("productPriceInput")
var productCategoryInput=document.getElementById("productCategoryInput")
var productDescInput=document.getElementById("productDescInput")
var addBtn=document.getElementById("addBtn")
var tBody=document.getElementById("tBody")
var searchInput=document.getElementById("searchInput")

var mainIndex;
var productsArr=[]
if(localStorage.getItem("productsArr")!=null){
    productsArr=JSON.parse(localStorage.getItem("productsArr"))
   Search();
}
function addProduct(){
    var products= {
        name:productNameInput.value ,
        price:productPriceInput.value ,
        Category:productCategoryInput.value ,
        Desc:productDescInput.value ,
 
    }
    if(addBtn.innerHTML=="Add Product"){
 productsArr.push(products)
    }else
        {
            productsArr.splice(mainIndex,1,products)
            addBtn.innerHTML="Add Product"

    }

   
   
   localStorage.setItem("productsArr",JSON.stringify(productsArr));
  Search();
 

}
/*
function DisplayProduct(){
    var trs="";
    for(var i=0 ; i < productsArr.length ; i++)
    {
        trs +=`
         <tr>
                        <td>${i}</td>
                        <td>${productsArr[i].name}</td>
                        <td>${productsArr[i].price}</td>
                        <td>${productsArr[i].Category}</td>
                        <td>${productsArr[i].Desc}</td>
                        <td>
                            <button class="btn btn-outline-warning">Update</button>
                        </td>
                        <td>
                            <button class="btn btn-outline-danger" onclick="Deleteproduct(${i})">Delete</button>
                        </td>
                    </tr>` 
    }
    tBody.innerHTML =trs;
}
    */
function Deleteproduct(productIndex){

productsArr.splice(productIndex,1)
Search();
localStorage.setItem("productsArr",JSON.stringify(productsArr))

}

function Search(){
    var searchTerm=searchInput.value;
     var trs="";
    for(var i=0 ; i < productsArr.length ; i++)
    {
        if(productsArr[i].name.toLowerCase().includes(searchTerm.toLowerCase())||productsArr[i].price.toLowerCase().includes(searchTerm.toLowerCase()))

        {
        trs +=`
         <tr>
                        <td>${i}</td>
                        <td>${productsArr[i].name}</td>
                        <td>${productsArr[i].price}</td>
                        <td>${productsArr[i].Category}</td>
                        <td>${productsArr[i].Desc}</td>
                        <td>
                            <button class="btn btn-outline-warning" onclick="patchValues(${i})">Update</button>
                        </td>
                        <td>
                            <button class="btn btn-outline-danger" onclick="Deleteproduct(${i})">Delete</button>
                        </td>
                    </tr>` 
    }
    tBody.innerHTML =trs;

    }
     clear();
}
function patchValues(productIndex){
    mainIndex=productIndex;
productNameInput.value =productsArr[productIndex].name;
       productPriceInput.value =productsArr[productIndex].price;
        productCategoryInput.value =productsArr[productIndex].Category;
      productDescInput.value =productsArr[productIndex].Desc;
addBtn.innerHTML="Update Product"
}
function clear(){

    productNameInput.value ="";
       productPriceInput.value ="";
        productCategoryInput.value ="";
      productDescInput.value ="";
}




  
