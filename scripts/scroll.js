window.addEventListener('scroll', function(){
    const bodyCont = document.querySelector('.bodyCont')
    const bodyCont2 = document.querySelector('.bodyCont2')
    const sidenav = document.querySelector('.side-nav')

    const bodyContBottom = bodyCont.getBoundingClientRect().bottom

    if (bodyContBottom <= 0) {
        bodyCont2.style.opacity = "1"
        bodyCont2.style.top = "0"
        sidenav.style.top ="0"
    } else {
        bodyCont2.style.opacity = "1"
        bodyCont2.style.top = "100vh"
        sidenav.style.top ="100vh"
    }
});