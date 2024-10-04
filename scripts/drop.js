const dropBtn = document.getElementById("dropBtn")
const dropCont = document.getElementById("dropCont")

function drop() {
    dropBtn.addEventListener('mouseover', function() {
        dropCont.style.opacity = "1"
        dropCont.style.cursor = "pointer"
        dropCont.style.pointerEvents = "auto"
    })
    
    dropCont.addEventListener('mouseover', function() {
        dropCont.style.opacity = "1"
        dropCont.style.cursor = "pointer"
        dropCont.style.pointerEvents = "auto"
    })
}

function removeDrop() {
    dropBtn.addEventListener('mouseleave', function(){
        dropCont.style.opacity = "0"
        dropCont.style.cursor = "none"
        dropCont.style.pointerEvents = "none"
    })
    dropCont.addEventListener('mouseleave', function() {
        dropCont.style.opacity = "0"
        dropCont.style.cursor = "none"
        dropCont.style.pointerEvents = "none"
    })
}


drop()
removeDrop()

// function drop() {
    // if (dropCont.style.opacity = "0") {
        // dropCont.style.opacity = "1"
    // } if (dropCont.style.opacity = "1") {
    //     removeDrop()
    // }
// }

// function removeDrop() {
//     dropCont.style.opacity = "0"
// }

// if (dropCont.style.opacity = "0") {
//     dropBtn.addEventListener('click', drop)
// } else {
//     dropBtn.addEventListener('click', removeDrop)
// }




// dropBtn.addEventListener('click', drop)

