const ratingContainer = document.querySelector('#rating-container');
const form = document.querySelector('form');
const btnRate = ratingContainer.querySelectorAll('button');
const submit = document.getElementById("submit");
let rating;

btnRate.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        rating = btn.textContent;
        console.log(rating);
        submit.addEventListener("click", (e) => {
            e.preventDefault();
            console.log(rating.length);
            console.log(rating);
            console.log(`You rated us ${rating} out of 5`);
        })
    })
})
