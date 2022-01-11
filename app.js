// const sectionsPage = new fullpage('#fullpage', {
//     autoScrolling: true,
//     fitToSection: false,
//     fitToSectionDelay: 300,
//     easing: 'easeInOutCubic',
//     scrollingSpeed: 999,
//     css3: true,
//     easingcss3: 'ease-out',
//     loopBottom: false,

//     anchors: ['section1', 'section2', 'section3', 'section4', 'lastPage'],
//     menu: '#menu1',
//     navigationTooltips: ['inicio', 'productos', 'contacto'],
//     showActiveTooltip: false,
// });

const imgBx = document.querySelector('.imgBx');
const backImage = imgBx.getElementsByTagName('img');
const menu1 = document.querySelector('#menu1');
const slidesControl = menu1.getElementsByTagName('span');

function nextSlide(i){
    backImage[i].classList.add('active');
    slidesControl[i].classList.add('active');

    for (var j = 0; j < 4; j++) {

        if(j != i){
            backImage[j].classList.remove('active');
            slidesControl[j].classList.remove('active');
        }
     }
}

//Funciones de controles slider ciudades
// const slideNowNum = 1;
const slideNow = document.querySelector('.slideNow');
const space = document.querySelector('.locations-space')

function nextCities(){
    const numNow = slideNow.getAttribute('data-target');
    const numNowI = parseInt(numNow) + 1;
    if(numNowI > 4){
        slideNow.innerText = '01';
        slideNow.setAttribute('data-target', 1);
    }else{
        slideNow.innerText = '0' + numNowI;
        slideNow.setAttribute('data-target', numNowI);
    }
}

function backCities(){
    const numNow = slideNow.getAttribute('data-target');
    const numNowI = parseInt(numNow) - 1;
    if(numNowI == 0){
        slideNow.innerText = '04';
        slideNow.setAttribute('data-target', 4);
    }else{
        slideNow.innerText = '0' + numNowI;
        slideNow.setAttribute('data-target', numNowI);
    }
    
}


