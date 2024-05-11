const form = document.querySelector("form")

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const results = document.querySelector("#results");
    const status = document.querySelector("#status");
    if (height < 0 || height === "" || isNaN(height)) {
        results.innerHTML = "<h3>Please enter valid input</h3>"
    }
    else if (weight < 0 || weight === "" || isNaN(weight)) {
        results.innerHTML = "<h3>Please enter valid input</h3>"
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        //show the result
        results.innerHTML = `<span>${bmi}</span>`;
        if (bmi < 18.6) { status.innerHTML = "<h4>You are Under Weight, Please improve your diet.....</h4>";
            status.style.color = "red";
         }
        else if ( bmi > 24.9) { status.innerHTML = "<h4>You are Overweight Weight, Please Maintain your diet.....</h4>"; 
        status.style.color = "yellow";
        
        }
        else{
            status.innerHTML = "<h4>You are Normal Weight and Healthy Person, Please Maintain your diet.....</h4>";
            status.style.color = "green"; }
        }
    


})