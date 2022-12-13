const ratingContainer = document.querySelector('#rating-container');
const form = document.querySelector('form');
const btnRate = ratingContainer.querySelectorAll('button');
const submit = document.getElementById("submit");
let rating;

btnRate.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        rating = btn.textContent;
        return rating;
    })
})

console.log(rating);
