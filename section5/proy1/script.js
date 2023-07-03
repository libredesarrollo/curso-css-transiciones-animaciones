
const tabs = document.querySelectorAll('.tab');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // remover todas las clases active de los tabs
        tabs.forEach(panel => {
            panel.classList.remove('active')
        })

        tab.classList.add('active');
    })
});

