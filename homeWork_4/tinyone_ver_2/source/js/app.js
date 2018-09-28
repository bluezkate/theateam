const   menuMobileButton = document.getElementById('menuMobileButton'),
        menuMobile = document.querySelector('.header__nav'),
        firstSlide = document.getElementById('firstSlide'),
        secondSlide = document.getElementById('secondSlide'),
        thirdSlide = document.getElementById('thirdSlide'),
        sliderList = document.getElementById('sliderList'),
        sliderWidth = document.querySelector('.slider__item').offsetWidth;
        // при записи значения ширины слайда в переменную требуется перезагрузка страницы для правильной работы в адаптиве
        // запись значения в саму функцию слишком "грязная" 
        

menuMobileButton.addEventListener('click', showHideMobileMenu);
firstSlide.addEventListener('click', changeToFirstSlide);
secondSlide.addEventListener('click', changeToSecondSlide);
thirdSlide.addEventListener('click', changeToThirdSlide);

function showHideMobileMenu () {
    // if(document.body.offsetWidth < 768) {
        if (menuMobile.style.display != "block") {
            menuMobile.style.display = "block";
        } else menuMobile.style.display = "none"; 
    // }
    
}

function changeToFirstSlide () {
    sliderList.style.transform="translateX(0px)";
}

function changeToSecondSlide () {
    sliderList.style.transform=`translateX(-${sliderWidth}px)`;
}

function changeToThirdSlide () {
    sliderList.style.transform=`translateX(-${ 2 * sliderWidth }px)`;
}
