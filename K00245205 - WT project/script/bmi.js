
    var bmi = document.querySelector("#bmiConfirm");
    bmi.addEventListener("click", calcBmi);
   
    var emptyCheck = document.querySelector("#bmiConfirm");
    emptyCheck.addEventListener("click", checkFields);
432
    function checkFields(){
        let height = document.querySelector("#height").value;
        let weight = document.querySelector("#weight").value;

        if (weight === ""){
            alert("A weight is required");
        }

        if (height ===""){
            alert("A height is needed");
        }
    }


function calcBmi(){
    let weight = document.querySelector("#weight").value;
    let height = document.querySelector("#height").value;
    console.log(weight);
    console.log(height);

    let bmi = Math.round(weight/(height*height));
    console.log(bmi);

    if (bmi < 18){
        document.querySelector("#result").innerHTML = "Result You are underweight";
    } else if(bmi >= 18 && bmi <= 25) {
        document.querySelector("#result").innerHTML = "Result You are at a normal weight";
    } else if (bmi >= 25 && bmi <= 30) {
        document.querySelector("#result").innerHTML = "Result You are Overweight";
    } else if (bmi > 30){
        document.querySelector("#result").innerHTML = "Result you are Obease";
    }
}



calcBmi();