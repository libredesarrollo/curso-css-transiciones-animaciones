const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', () => {
    boxes.forEach(box => {
        if(box.getBoundingClientRect().top < window.innerHeight * .8){
            box.classList.add('show')
        } else{ 
            box.classList.remove('show')
        }
    })
})
