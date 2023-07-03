function boxes() {
    while (document.querySelector('.container').offsetHeight < window.innerHeight)
        document.querySelector('.container').innerHTML += '<div class="box show"><h1>Content</h1></div>'
}

boxes()

window.addEventListener('scrollend', () => {
    document.querySelector('.container').innerHTML += '<div class="box"><h1>Content</h1></div>'

    setTimeout(function () {
        document.querySelectorAll('.container .box')[document.querySelectorAll('.container .box').length - 1].classList.add("show")
    }, 0)
})


window.addEventListener('scroll', () => {

    // if((window.scrollY + window.innerHeight) >= document.querySelector('.container').offsetHeight /*document.body.offsetHeight*/ ){
    //     console.log('DOWN')
    // }

    if (checkScrollDirectionY()) {
        let lastBox = document.querySelectorAll('.container .box')[document.querySelectorAll('.container .box').length - 1]
        if (lastBox.getBoundingClientRect().top < window.innerHeight * .8) {
        } else {
            lastBox.remove()
        }
    } else {
        // scroll down
        if ((window.scrollY + window.innerHeight) >= document.querySelector('.container').offsetHeight /*document.body.offsetHeight*/) {
            document.querySelector('.container').innerHTML += '<div class="box"><h1>Content</h1></div>'

            setTimeout(function () {
                document.querySelectorAll('.container .box')[document.querySelectorAll('.container .box').length - 1].classList.add("show")
            }, 0)
        }
    }
})

var oldScrollY = window.scrollY;
function checkScrollDirectionY() {
    let up = oldScrollY > window.scrollY
    oldScrollY = window.scrollY

    // if (up) {
    //     console.log('UP')
    // } else {
    //     console.log('DOWN')
    // }

    return up
}