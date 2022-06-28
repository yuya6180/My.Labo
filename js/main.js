'use strict'

{
const ham = document.querySelector('#js-hamburger');
const nav = document.querySelector('#js-nav');

ham.addEventListener('click', function () {

  ham.classList.toggle('active');
  nav.classList.toggle('active');

});

// ----------カルーセル---------

const next = document.getElementById('next');
const prev = document.getElementById('prev');
const ul =document.querySelector('ul');
const slides = ul.children;
let currentIndex = 0;

function updateButtons(){
    prev.classList.remove('hiddens');
    next.classList.remove('hiddens');

    if(currentIndex === 0){
        prev.classList.add('hiddens');
    }
    if(currentIndex === slides.length - 1){
        next.classList.add('hiddens');
    }
}

function moveSlides(){
    const slidesWidth = slides[0].getBoundingClientRect().width;
    ul.style.transform = `translateX(${-1 * slidesWidth * currentIndex}px)`;
}

updateButtons();

next.addEventListener('click', ()=>{
    currentIndex++;
    updateButtons();
    moveSlides();
});

prev.addEventListener('click', ()=>{
    currentIndex--;
    updateButtons();
    moveSlides();
});


// API

const targets = document.querySelectorAll('img');

    function callback(entries, obs) {
    console.log(entries);

    entries.forEach(entry =>{
            if (!entry.isIntersecting) {
                return;
            }

            entry.target.classList.add('appear');
            obs.unobserve(entry.target);
    });
}

    const options = {
        threshold: 0.8,
    };

    const observer = new IntersectionObserver(callback,options);

    targets.forEach(target => {
        observer.observe(target);
    });

}

