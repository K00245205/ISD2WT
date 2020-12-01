var $ = document.querySelector(".admin-content");

var option = document.querySelector('.option');
var form = document.querySelector('.hiddenContent');

var optionTwo = document.querySelector('.optionTwo');
var formTwo = document.querySelector('.hiddenContentTwo');

var optionThree = document.querySelector('.optionThree');
var formThree = document.querySelector('.hiddenContentThree');


var submit = document.querySelector('#addProduct');
submit.addEventListener("click", k => {
    k.preventDefault();
    checkfieldsOne();
});

function checkfieldsOne(){

    let productName = document.querySelector("#pName").value;
    let productDescription = document.querySelector("#pDescription").value;
    let quantity = document.querySelector("#quantity").value;

    if (productName === ""){
        document.querySelector("#pNameError").innerHTML = "Enter a product Name";
        document.querySelector("#pNameError").style.color = "red";
    }

    if (productDescription === ""){
        document.querySelector("#productDescError").innerHTML = "Enter Description";
        document.querySelector("#productDescError").style.color = "red";
    }

    if (quantity === ""){
        document.querySelector("#quantityError").innerHTML = "Enter a quantity";
        document.querySelector("#quantityError").style.color = "red"
    }

    
}

var submitTwo = document.querySelector("#updateProduct");
submitTwo.addEventListener("click", u => { 
    u.preventDefault();
    checkfieldsTwo()});

function checkfieldsTwo(){

    let updatedProductName = document.querySelector("#updatePName").value;
    let productName = document.querySelector("#upName").value;
    let productDescription = document.querySelector("#upDescription").value;
    let quantity = document.querySelector("#uquantity").value;

    if (updatedProductName === ""){
        document.querySelector("#updateProductName").innerHTML = "Enter Product Name"
        document.querySelector("#updateProductName").style.color = "red";
    }


    if (productName === ""){
        document.querySelector("#pNameErrorUp").innerHTML = "Enter a product Name";
        document.querySelector("#pNameErrorUp").style.color = "red";
    }

    if (productDescription === ""){
        document.querySelector("#productDescErrorUp").innerHTML = "Enter Description";
        document.querySelector("#productDescErrorUp").style.color = "red";
    }

    if (quantity === ""){
        document.querySelector("#quantityErrorUp").innerHTML = "Enter a quantity";
        document.querySelector("#quantityErrorUp").style.color = "red"
    }

}

var submitThree = document.querySelector("#deleteProduct");
submitThree.addEventListener("click", d => {
    checkfieldsThree();
    d.preventDefault();
    });

function checkfieldsThree(){
    let updatedProductName = document.querySelector("#deletePName").value;
    let productDescription = document.querySelector("#dDescription").value;
    let quantity = document.querySelector("#dquantity").value;

    if (updatedProductName === ""){
        document.querySelector("#dupdateProductName").innerHTML = "Enter Product Name for deletion"
        document.querySelector("#dupdateProductName").style.color = "red";
    }



    if (productDescription === ""){
        document.querySelector("#dproductDescErrorUp").innerHTML = "Enter Description";
        document.querySelector("#dproductDescErrorUp").style.color = "red";
    }

    if (quantity === ""){
        document.querySelector("#dquantityErrorUp").innerHTML = "Enter a quantity";
        document.querySelector("#dquantityErrorUp").style.color = "red"
    }
}

option.addEventListener('click', e =>{
    //   if (formTwo.style.display === 'block'){
    //     formTwo.style.display = 'none';
    // }

    // if (formThree.style.display === 'block'){
    //     formThree.style.display = 'none';
    // }
    e.preventDefault();
    formTwo.style.display = 'none';
    formThree.style.display = 'none';

    if (form.style.display === 'none'){
        
        e.preventDefault();
        form.style.display = 'block';
    } else {
        e.preventDefault();
        form.style.display = 'none';
    }
   


})

optionTwo.addEventListener('click', e =>{

    form.style.display = 'none';
    formThree.style.display = 'none';

    if (formTwo.style.display === 'none'){
        e.preventDefault();
        formTwo.style.display = 'block';
    } else {
        e.preventDefault();
        formTwo.style.display = 'none';
    }
})



optionThree.addEventListener('click', e =>{

    formTwo.style.display = 'none';
    form.style.display = 'none';
    

    if (formThree.style.display === 'none'){
        e.preventDefault();
        formThree.style.display = 'block';
    } else {
        e.preventDefault();
        formThree.style.display = 'none';
    }
})