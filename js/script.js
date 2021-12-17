burger = document.querySelector('.burger');
nav = document.querySelector('.nav');
listNav = document.querySelector('.list-nav');
right = document.querySelector('.right');

burger.addEventListener("click", ()=>{
    nav.classList.toggle('h-nav');
    listNav.classList.toggle('v-nav');
    right.classList.toggle('v-nav');
})

