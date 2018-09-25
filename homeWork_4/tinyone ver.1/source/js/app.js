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
    sliderList.style.transform="translateX(-950px)";
}

function changeToThirdSlide () {
    sliderList.style.transform="translateX(-1900px)";
}