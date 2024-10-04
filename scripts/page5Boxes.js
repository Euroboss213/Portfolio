

const all = document.getElementById('all')
const supp = document.getElementById('supp')
const webdes = document.getElementById('webdes')
const webdev = document.getElementById('webdevs')
const adm = document.getElementById('adm')

let box = document.getElementById('box')

let allbox = `
    <div class="pattern1">
        <div class="box1" id="wd1"></div>
        <div class="box2" id="supp1"></div>
    </div>
    <div class="pattern2" id="pat2">
        <div class="box3" id="ad1"></div>
        <div class="box4" id="wdev1"></div>
    </div>
    <div class="pattern1">
        <div class="box5" id="wd3"></div>
        <div class="box6" id="ad2"></div>
    </div>
    <div class="pattern2">
        <div class="box7" id="wdev2"></div>
        <div class="box8" id="wd2"></div>
    </div>
    <div class="pattern2">
        <div class="box9" id="wd4"></div>
        <div class="box10" id="wdev3"></div>
    </div>        

`
let suppbox = `

    <div class="pattern1">
        <div class="box1" id="supp1"></div>
    </div>
` 
let webdesbox = `
    
        <div class="pattern1">
            <div class="box1" id="wd1"></div>
            <div class="box2" id="wd2"></div>
        </div>
        <div class="pattern2" id="pat2">
            <div class="box3" id="wd3"></div>
            <div class="box4" id="wd4"></div>
        </div>        
    
`
let webdevbox = `
    
        <div class="pattern1">
            <div class="box1" id="wdeb1"></div>
            <div class="box2" id="wdev2"></div>
        </div>
        <div class="pattern2" id="pat2">
            <div class="box3" id="wdev3"></div>
        </div>        
    
` 
let admbox = `
    
        <div class="pattern1">
            <div class="box1" id="adm1"></div>
            <div class="box2" id="adm2"></div>
        </div>    
    
` 

function allboxex(group) {
    box.innerHTML = group
}

all.addEventListener('click', function() {
    allboxex(allbox)
    box.style.width = "70%"
    all.style.color = "#F89700"
    supp.style.color = "#09B9C2"
    webdes.style.color = "#09B9C2"
    webdev.style.color = "#09B9C2"
    adm.style.color = "#09B9C2"
})
webdev.addEventListener('click', function() {
    allboxex(webdevbox)
    box.style.width = "30%"
    all.style.color = "#09B9C2"
    supp.style.color = "#09B9C2"
    webdes.style.color = "#09B9C2"
    webdev.style.color = "#F89700"
    adm.style.color = "#09B9C2"
})
webdes.addEventListener('click', function() {
    allboxex(webdesbox)
    box.style.width = "30%"
    all.style.color = "#09B9C2"
    supp.style.color = "#09B9C2"
    webdes.style.color = "#F89700"
    webdev.style.color = "#09B9C2"
    adm.style.color = "#09B9C2"
})
adm.addEventListener('click', function() {
    allboxex(admbox)
    box.style.width = "30%"
    all.style.color = "#09B9C2"
    supp.style.color = "#09B9C2"
    webdes.style.color = "#09B9C2"
    webdev.style.color = "#09B9C2"
    adm.style.color = "#F89700"
})
supp.addEventListener('click', function() {
    allboxex(suppbox)
    box.style.width = "30%"
    all.style.color = "#09B9C2"
    supp.style.color = "#F89700"
    webdes.style.color = "#09B9C2"
    webdev.style.color = "#09B9C2"
    adm.style.color = "#09B9C2"
})