const mainContainer = document.getElementById('main-container');
const ratingContainer = document.querySelector('#rating-container');
const form = document.getElementById('dashboard-form');
const btnRate = ratingContainer.querySelectorAll('button');
const submit = document.getElementById("submit");
let rating = [];

btnRate.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        rating.push(btn.getAttribute("value"));
        console.log(rating);
        submit.addEventListener("click", (e) => {
            e.preventDefault();
            overallRating(rating);
        })
    }); 
})

const overallRating = (currentRate) => {
    
    console.log(currentRate[currentRate.length - 1])

    console.log(mainContainer.children);
    while(mainContainer.lastElementChild) {
        mainContainer.removeChild(mainContainer.lastElementChild);
    }

    const submittedDiv = document.createElement('div');
    const submittedImg = document.createElement('img');
    const submittedRateCon = document.createElement('div');
    const submittedRate = document.createElement('p');
    const submittedHeader = document.createElement('h2');
    const submittedParagraph = document.createElement('p');

    submittedDiv.setAttribute('id', 'submitted-div');
    submittedImg.setAttribute('class', 'm-auto');
    submittedImg.setAttribute('src', 'img/illustration-thank-you.svg');
    submittedImg.setAttribute('alt', 'thank-you-image');
    submittedRateCon.setAttribute('class', 'bg-zinc-700 w-2/3 rounded-full');
    submittedRate.setAttribute('class', 'text-orange-500 text-center p-1')
    submittedRate.textContent = `You selected ${currentRate[currentRate.length -1]} out of 5`;
    submittedHeader.setAttribute('class', 'text-white text-center text-3xl');
    submittedHeader.textContent = 'Thank you!';
    submittedParagraph.setAttribute('class', 'text-slate-400 text-center')
    submittedParagraph.textContent = "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!"

    const newClass = `${mainContainer.getAttribute('class')} items-center`;
    mainContainer.setAttribute('class', newClass);


    submittedDiv.appendChild(submittedImg);
    submittedRateCon.appendChild(submittedRate);
    mainContainer.appendChild(submittedDiv);
    mainContainer.appendChild(submittedRateCon);
    mainContainer.appendChild(submittedHeader);
    mainContainer.appendChild(submittedParagraph);

}
