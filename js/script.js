const hamMenu= document.querySelector('.ham-menu');

const hamMenuOff= document.querySelector('.ham-menu-off');

hamMenu.addEventListener('click', ()=>{
    hamMenu.classList.toggle('active');
    hamMenuOff.classList.toggle('active');
});