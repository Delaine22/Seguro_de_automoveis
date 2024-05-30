const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
    accordion.addEventListener('click', () => {
        const body = accordion.querySelector('.accordion_body');
        body.classList.toggle('active');
    })
})

window.sr = ScrollReveal({ reset: true });
sr.reveal('#introducao',{
    duration:1000,
    rotate:{y:18}
});
sr.reveal('#feedback',{
    duration:1000,
    rotate:{y:18}
});
sr.reveal('#accordion',{
    duration:1000,
    rotate:{y:18}
});
