const footer = document.getElementById('contacts')
const contact1 = document.getElementById('contact1')
const about1 = document.getElementById('about1')

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            about1.classList.remove('active')
            contact1.classList.add('active')
        } else {
            about1.classList.add('active')
            contact1.classList.remove('active')
        }
    })
}, {
    root: null,
    threshold: 0.5
})

observer.observe(footer)
    