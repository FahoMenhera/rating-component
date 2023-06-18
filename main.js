const submitBtn = document.querySelector('.btn');
const ratingState = document.querySelector('.rating-state');
const thanksState = document.querySelector('.thanks-state');
const rating = document.getElementById('rating');
const numbers = document.querySelectorAll('.number-btn');

submitBtn.addEventListener('click', () =>{
    ratingState.classList.add('hidden');
    thanksState.classList.remove('hidden');
})

numbers.forEach((e) =>{
    e.addEventListener('click', () =>{
        rating.innerHTML = e.innerHTML;
    })
})

