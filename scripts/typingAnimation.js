const speed = 50
const duration = 1000
var gagi = "gagi"
var pogi = "pogi"
var malambing = "malambing"
var mapagmahl = "mapagmahal"


const word = document.getElementById('gagi2')
const words = ["gagi", "ko si Tangol" , "tapang tao", "malambing"]
let i = 0
let currentIndex = 0
let currentword = ""

function wordChange() {
    if (i < currentword.length) {
        word.innerHTML = `I'm Alen Jerru Ganotice, a <font color="#F89700">${currentword.slice(0, i + 1)}</font>`
        i++
        setTimeout(wordChange, speed)
    } else {
        setTimeout(wordRemove, duration)
    }
}

function wordRemove() {
    if (i > 0) {
        i--
        word.innerHTML = `I'm Alen Jerru Ganotice, a <font color="#F89700">${currentword.slice(0, i)}</font>`
        setTimeout(wordRemove, speed)
    } else {
        currentIndex = (currentIndex + 1) % words.length
        currentword = words[currentIndex]
        i = 0
        setTimeout(wordChange, duration)  
    }
}

window.addEventListener("load", function() {
    currentword = words[currentIndex]
    wordChange()
})


// window.addEventListener("load", function() {
//     setInterval(function() {
        
        
//         function wordChange() {
//              if (i < malambing.length) {
//                  newword += malambing.charAt(i)
//                  word.innerHTML = `I'm Alen Jerru Ganotice, a <font color="#F89700">${newword}</font>`;
//                  i++;
//                  setTimeout(wordChange, speed);
//              } else {
//                  setTimeout(wordRemove, 1000);
//              }
//          }
//         function wordRemove() {
//             if (newword.length > 0  ) {
//                 newword = newword.slice(0, -1);
//                 word.innerHTML = `I'm Alen Jerru Ganotice, a <font color="#F89700">${newword}</font>`;
//                 setTimeout(wordRemove, speed);
//             }
//         }

//         wordChange()

//     }, 2000 + (malambing.length * speed) + 1000)
// })

