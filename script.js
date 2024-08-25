const menu = document.querySelector('#menu-icon')
const navList = document.querySelector('.navlist')

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navList.classList.toggle('open')
}

const sr = ScrollReveal({
    distance: '10%',
    duration: 3000,
    reset: true
})
sr.reveal('.hero-text', {delay: 200, origin: 'top'})
sr.reveal('.icons', {delay: 400, origin: 'left'})
sr.reveal('.hero-img', {delay: 800, origin: 'right'})
sr.reveal('.scroll-down', {delay: 1000, origin: 'top'})

sr.reveal('.s1', {delay: 0, origin: 'left', reset: true})
sr.reveal('.s2', {delay: 500, origin: 'right'})
sr.reveal('.s3', {delay: 1000, origin: 'left'})