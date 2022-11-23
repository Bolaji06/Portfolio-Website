
//Navbar
const menu = document.querySelector('.menu-list');
const body = document.querySelector('body');
const menuBtn = document.querySelector('.menu-btn');
const cancelBtn = document.querySelector('.close-btn');
const navBar = document.querySelector('.nav-bar');

menuBtn.addEventListener('click', ()=>{
    menu.classList.add('active');
    menuBtn.classList.add('hide');
    body.classList.add('disabledScroll');
});

cancelBtn.addEventListener('click', ()=>{
    menu.classList.remove('active');
    menuBtn.classList.remove('hide');
    body.classList.remove('disabledScroll');
});

window.onscroll = ()=>{
    this.scrollY > 20 ? navBar.classList.add('sticky') : navBar.classList.remove('sticky');
}
