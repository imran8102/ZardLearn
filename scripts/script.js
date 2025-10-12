let navbarIcon = document.querySelector('#navbar-icon')
let mobileNav = document.querySelector('.mobile-nav')
let overlay = document.querySelector('.overlay')
let chevronDownIcons = document.querySelectorAll('.chevron-down-icon')
let changeThemeBtn = document.querySelector('#theme')

//Opening the navbar by clicking on the navIcon
navbarIcon.addEventListener('click', () => {
    console.log('click')
    mobileNav.classList.remove('translate-x-full')
    overlay.classList.remove('hidden')
})

//closing the mobile navbar by clicking on the overlay
overlay.addEventListener('click',(e) => {
    overlay.classList.add('hidden')
    mobileNav.classList.add('translate-x-full')
})

//showing navbar links dropdown by clicking on the chevron
chevronDownIcons.forEach((chevronDownIcon) => {
    chevronDownIcon.addEventListener('click',(e) => {
        console.log(chevronDownIcon.previousElementSibling.innerHTML)
        chevronDownIcon.classList.toggle('rotate-90')
        chevronDownIcon.parentElement.classList.toggle('text-amber-500')
        chevronDownIcon.parentElement.nextElementSibling.classList.toggle('hidden')
        chevronDownIcon.parentElement.nextElementSibling.classList.toggle('flex')
    })
})

//change theme
changeThemeBtn.addEventListener('click',(e) => {
    console.log(e.target)
    let themeBtn = document.querySelector('#theme')
    let changeThemeBtnValue = themeBtn.firstElementChild.getAttribute('xlink:href')
    if(changeThemeBtnValue === '#moon'){
        themeBtn.setAttribute("xlink:href",'#sun')
        e.target.nextElementSibling.innerHTML = "تم روشن"
    }else{
        themeBtn.setAttribute("xlink:href",'#moon')
        e.target.nextElementSibling.innerHTML = "تم تیره"
    }
})