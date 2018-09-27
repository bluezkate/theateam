const   firstSlide = document.getElementById('firstSlide'),
        secondSlide = document.getElementById('secondSlide'),
        thirdSlide = document.getElementById('thirdSlide'),
        sliderList = document.getElementById('sliderList');

firstSlide.addEventListener('click', changeToFirstSlide);
secondSlide.addEventListener('click', changeToSecondSlide);
thirdSlide.addEventListener('click', changeToThirdSlide);

function changeToFirstSlide () {
    sliderList.style.transform="translateX(0px)";
}

function changeToSecondSlide () {
    switch (true) {
        case (document.body.offsetWidth > 1023):
            sliderList.style.transform="translateX(-930px)";
            break;
        case (document.body.offsetWidth > 767):
            sliderList.style.transform="translateX(-720px)";
            break;
        case (document.body.offsetWidth > 0):
            sliderList.style.transform="translateX(-280px)";
            break; 
        default:
            sliderList.style.transform="translateX(-930px)";
    }
}

function changeToThirdSlide () {
    switch (true) {
        case (document.body.offsetWidth > 1023):
            sliderList.style.transform="translateX(-1860px)";
            break;
        case (document.body.offsetWidth > 767):
            sliderList.style.transform="translateX(-1440px)";
            break;
        case (document.body.offsetWidth > 0):
            sliderList.style.transform="translateX(-560px)";
            break; 
        default:
            sliderList.style.transform="translateX(-1860px)";
    }
}