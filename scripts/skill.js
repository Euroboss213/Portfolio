let beginner = document.getElementById("beginner")
const beginnerp = document.getElementById("beginner-p")
let intermediate = document.getElementById("intermediate")
const intermediatep = document.getElementById("intermediate-p")
let expert = document.getElementById("expert")
const expertp = document.getElementById("expert-p")

beginner.addEventListener("mouseover", function() {
    beginnerp.textContent = "Less than a year"
    beginnerp.style.textAlign = "center"
    beginnerp.style.fontSize = "11px"
})

beginner.addEventListener("mouseleave", function() {
    beginnerp.textContent = "Beginner"
})

intermediate.addEventListener("mouseover", function() {
    intermediatep.textContent = "1 year"
    intermediatep.style.textAlign = "center"
    intermediatep.style.fontSize = "12px"
})

intermediate.addEventListener("mouseleave", function() {
    intermediatep.textContent = "Intermediate"
    intermediatep.style.fontSize = "10px"
})

expert.addEventListener("mouseover", function() {
    expertp.textContent = "Since birth maheart"
    expertp.style.textAlign = "center"
    expertp.style.fontSize = "11px"
})

expert.addEventListener("mouseleave", function() {
    expertp.textContent = "Expert"
})
