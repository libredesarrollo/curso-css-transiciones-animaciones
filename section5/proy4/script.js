const body = document.body
const slides = document.querySelectorAll('.slide')

let activeSlide = 0

function setBgBody() {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

function setActiveSlide() {
    slides.forEach((slide) => slide.classList.remove('active'))
    slides[activeSlide].classList.add('active')
}

function timer() {
    activeSlide++

    if (activeSlide >= slides.length) {
        activeSlide = 0
    }
    //if(activeSlide < 0) activeSlide--
    // activeSlide = slides.length -1

    setBgBody()
    setActiveSlide()
    setTimeout(timer, 2000)
}

timer()

