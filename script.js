let emailInput = document.querySelector("#emailAddress");
let button = document.querySelector(".submitBtn");
let container = document.querySelector(".container");
let succesCont = document.querySelector(".successCon");
let errorMsg = document.querySelector(".errorMsg");
let input = document.querySelector("input");

let dismiss = document.querySelector("#dismiss");

// Check if the email address is valid

function validateEmail(){
    let validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
    if (emailInput.value.match(validRegex)) {
        errorMsg.style.display = "none";
        input.classList.remove("error")
        return true;
    } else {
        errorMsg.style.display = "flex";
        input.classList.add("error");
    }
}

// Clicking on the submit button
button.addEventListener("click", function(e){
    e.preventDefault();

    if (validateEmail()){
        container.style.display = "none";
        succesCont.style.display = "flex";
    }

})

dismiss.addEventListener("click", function(e){
    e.preventDefault();
    container.style.display = "flex";
    succesCont.style.display = "none";

})