const visToggle = document.querySelector('.fa-lock');

const input = document.querySelector('#pwdWrap input');

var password = true;

visToggle.addEventListener('click', function () {
    if (password) {
        input.setAttribute('type', 'text'); // using js dynamically changed the type attribute
        visToggle.classList.remove('fa-lock');
        visToggle.classList.add('fa-lock-open');
    } else {
        input.setAttribute('type', 'password');
        visToggle.classList.remove('fa-lock-open');
        visToggle.classList.add('fa-lock');
    }
    password = !password;
});

var submit = document.querySelector("#login");
submit.addEventListener("click", checkfields);

function checkfields(){
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

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
}



function emailCheck(email) {
    return /^(([^<>()[]\.,;:\s@"]+(.[^<>()[]\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/.test(email);
}

isEmail();