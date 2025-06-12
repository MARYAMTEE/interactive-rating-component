const buttons = document.querySelectorAll(".rate");
const successMsg = document.querySelector(".success-msg");
const successContainer = document.querySelector(".success-message");
const ratingsContainer = document.querySelector(".ratings-container");
const submitBtn = document.querySelector(".submit-btn");

const maxRating = 5;
let rateValue = null;

buttons.forEach(button => {
    button.addEventListener("click", () => {
        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        rateValue = parseInt(button.getAttribute("data-rating"));
    });
});
