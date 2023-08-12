const navBar = document.querySelector('.nav-bar');
const openNav = document.querySelector('.hamburger-icon');
const closeNav = document.querySelector('.close-icon');
const productNav = document.querySelector('.product-sec');
const companyNav = document.querySelector('.company-sec');
const contentNav = document.querySelector('.content-sec');
const productNavLinks = document.querySelector('.product-sub-link');
const companyNavLinks = document.querySelector('.company-sub-link');
const contentNavLinks = document.querySelector('.content-sub-link');
const svg = document.querySelectorAll('svg');

openNav.addEventListener('click', ()=> {
    openNav.style.display = 'none';
    closeNav.style.display = 'block';
    navBar.style.width = '80%';
    navBar.style.overflow = 'vissible';
    navBar.style.height = 'auto';
    navBar.style.padding = '2rem';
    
    
});

closeNav.addEventListener('click', ()=> {
    closeNav.style.display = 'none';
    openNav.style.display = 'block';
    navBar.style.width = '0px';
    navBar.style.overflow = 'hidden';
    navBar.style.height = '0px';
    navBar.style.padding = '0px';
});


productNav.addEventListener('click', ()=> { 
    productNavLinks.classList.toggle('visible');
    // arrIcon[0].classList.toggle('.rotate')
    svg[0].classList.toggle('rotate');
});

companyNav.addEventListener('click', ()=> { 
    companyNavLinks.classList.toggle('visible');
    svg[1].classList.toggle('rotate');
});

contentNav.addEventListener('click', ()=> { 
    contentNavLinks.classList.toggle('visible');
    svg[2].classList.toggle('rotate');
});

