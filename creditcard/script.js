const theForm = document.querySelector("#credit-grid");
const errorDisplay = document.querySelector("#errors");

function isCardNumberValid(number) {
    console.log(number == '1234123412341234')
	return number == '1234123412341234';
}

function displayError(message){
    errorDisplay.textContent = message;
}

function submitHandler(event){
    event.preventDefault();
    let errorMsg = "";
    const cardNum = document.querySelector("#card-number-input").value.trim();
    console.log(cardNum);
    
    if (!isCardNumberValid(cardNum)){
        errorMsg += "Card number not valid."
    }

    if (errorMsg === ""){
        errorMsg = "Successful submit!"
    }
    
    displayError(errorMsg);

}
theForm.addEventListener("submit", submitHandler);


