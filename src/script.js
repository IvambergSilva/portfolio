let menuIcon = document.querySelector('#menuIcon')
let nav = document.querySelector('.nav')

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x')
    nav.classList.toggle('active')
})

let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    document.querySelector('.header').classList.toggle('sticky', window.scrollY > 0)

    sections.forEach(sec => {
        let top = window.scrollY
        let offSet = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')
        
        if (top >= (offSet - 350) && top < offSet + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            })
        }
    })

    menuIcon.classList.remove('bx-x')
    nav.classList.remove('active')
}

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
})

ScrollReveal().reveal('.homeContent, .heading', {origin: 'top'})
ScrollReveal().reveal('.homeImg, .servicesContent, .portfolioBox, .contact form', {origin: 'bottom'})
ScrollReveal().reveal('.homeContent h1, .aboutImg', {origin: 'left'})
ScrollReveal().reveal('.homeContent p, .aboutContent', {origin: 'right'})

const typed = new Typed('.multiple-text', {
    strings: ['Apaixonado por programação','Desenvolvedor FrontEnd'],
    typeSpeed: 80,
    backSpeed: 100,
    backDelay: 700,
    loop: true
})

// window.addEventListener('scroll', () => {
//     document.querySelector('.header').classList.toggle('activeScroll', scrollY > 0)
    
// })