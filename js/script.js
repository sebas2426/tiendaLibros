const hamMenu= document.querySelector('.ham-menu');

const hamMenuOff= document.querySelector('.ham-menu-off');

const irTopBtn= document.querySelector('.ir-inicio');

window.onscroll=()=>{
    scrollFunction();
}

function scrollFunction(){
    if(document.body.scrollTop>300 || document.documentElement.scrollTop>300){
        irTopBtn.style.display='block';
    }else{
        irTopBtn.style.display='none';
    }
};


irTopBtn.addEventListener('click', ()=>{
    irTopBtn.style.display='none';
    window.scroll({
        top:0,
        behavior:'smooth',
    });
});

hamMenu.addEventListener('click', ()=>{
    hamMenu.classList.toggle('active');
    hamMenuOff.classList.toggle('active');
});

const productContainers=[...document.querySelectorAll('.masVendidos')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    });

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    });
});


