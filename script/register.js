var submit = document.querySelector("#login");
submit.addEventListener("click", checkfields);

function checkfields(){
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    let fName = document.querySelector("#fName").value;
    let lName = document.querySelector("#lName").value;
    let addressOne = document.querySelector("#address1").value;
    let addressTwo = document.querySelector("#address2").value;



    if (email === ""){
       document.querySelector("#emailError").innerHTML = "Email is required";
       document.querySelector("#emailError").style.color= "red";  
    } else if (!emailCheck(email)){
        document.querySelector("#emailError").innerHTML = "Email format is incorrect";
       document.querySelector("#emailError").style.color= "red"; 
    }


    if (password === ""){
        document.querySelector("#passwordError").innerHTML = "Password Field is empty"
        document.querySelector("#passwordError").style.color= "red";
    }

    if (fName === ""){
        document.querySelector("#fNameError").innerHTML = "Enter your first Name";
        document.querySelector("#fNameError").style.color = "red";
    } else if(firstLetterCapital(fName)===false){
        document.querySelector("#fNameError").innerHTML = "First Letter must be a capital";
        document.querySelector("#fNameError").style.color = "red";
    }

    if (lName === ""){
        document.querySelector("#lNameError").innerHTML = "Enter your Last Name";
        document.querySelector("#lNameError").style.color = "red";

    } else if(firstLetterCapital(lName)===false){
        document.querySelector("#lNameError").innerHTML = "First Letter must be a capital";
        document.querySelector("#lNameError").style.color = "red";
    }

    if (addressOne === ""){
        document.querySelector("#addressOneError").innerHTML = "Enter Address 1";
        document.querySelector("#addressOneError").style.color = "red";
    }

    if (addressTwo === ""){
        document.querySelector("#addressTwoError").innerHTML = "Enter Address 2";
        document.querySelector("#addressTwoError").style.color = "red";
    }


    
}



function emailCheck(email) {
    return /^(([^<>()[]\.,;:\s@"]+(.[^<>()[]\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/.test(email);
}

function firstLetterCapital(name){
    var letter = name[0];
    if (letter !== letter.toUpperCase()){
        return false;
    }         
    return true;
}
