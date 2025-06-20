const buttons = document.querySelectorAll(".rating");
const successMsg = document.querySelector(".success-msg");
const successContainer = document.querySelector(".success-message");
const ratingsContainer = document.querySelector(".ratings-container");
const submitBtn = document.querySelector(".submit-btn");
const cancelSuccess = document.querySelector(".cancel-successMsg");
const errorMsg = document.querySelector(".error-message");
const maxRating = 5;
let rateValue = null;

buttons.forEach(button => {
    button.addEventListener("click", () => {
        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        rateValue = parseInt(button.getAttribute("data-rating"));
    });
});

submitBtn.addEventListener("click", ()=> {
    if(rateValue) {
        ratingsContainer.style.display = "none";
        successMsg.textContent = `You selected ${rateValue} out of ${maxRating}`;
        successContainer.classList.remove("hidden");
    }else{
        ratingsContainer.style.display = "none";
        successMsg.textContent = `Please select a rating`;
        successContainer.classList.remove("hidden");
    }
});

cancelSuccess.addEventListener("click", ()=> {
    successContainer.classList.add("hidden");

    ratingsContainer.style.removeProperty("display");
    rateValue = null;
    buttons.forEach(btn => btn.classList.remove("active"));
})