const button = document.getElementById('activeToast')
const body = document.body

button.addEventListener('click', () => createNotification2('Mensaje', 'error', 3))

function createNotification() {

    const message = 'Mensaje'
    const type = 'success'

    const id = 'toast' + Math.random()

    const notification = `
     <div class='toast ${type}' id='${id}'>
        ${message}
     </div>
    `

    button.innerHTML += notification

    setTimeout(
        function () {
            document.getElementById(id).remove()
        },
        5000
    )
}
function createNotification2(message, type, effectRemoveN) {

    const id = 'toast' + Math.random()

    const notification = document.createElement('div')
    notification.classList.add('toast')
    notification.classList.add(type)
    notification.innerText = message
    notification.id = id

    // body.appendChild(notification)
    document.querySelector('.toast-wrap').appendChild(notification)

    setTimeout(function(){
        document.getElementById(id).classList.add('effect-add1')
    }, 10)

    let effectRemove = 'effect-remove1'
    switch (effectRemoveN) {
        case 1:
            effectRemove = 'effect-remove1'
            break;
        case 2:
            effectRemove = 'effect-remove2'
            break;
        case 3:
            effectRemove = 'effect-remove3'
            break;
        case 4:
            effectRemove = 'effect-remove4'
            break;
        case 5:
            effectRemove = 'effect-remove5'
            break;
        default:
            effectRemove = 'effect-remove6'
    }

    setTimeout(
        function () {
            document.getElementById(id).classList.add(effectRemove)
            setTimeout(
                function () {
                    document.getElementById(id).remove()
                },
                500
            )
        },
        1000
    )
}

function createWrap(position) {
    const toastWrap = document.createElement('div')
    toastWrap.classList.add('toast-wrap')
    toastWrap.classList.add(position)
    body.appendChild(toastWrap)
}

// createWrap('top-right')
// createWrap('top-left')
// createWrap('bottom-right')
createWrap('bottom-left')