let navbarIcon = document.querySelector('#navbar-icon')
let mobileNav = document.querySelector('.mobile-nav')
let overlay = document.querySelector('.overlay')
let chevronDownIcons = document.querySelectorAll('.chevron-down-icon')
let changeThemeBtn = document.querySelector('#theme')
let hd_Btn = document.querySelector('#hd-btn')
let hd_ContentElem = document.querySelector('#hd-content')
let hd_Overlay = document.querySelector('#hd-overlay')


//Opening the navbar by clicking on the navIcon
navbarIcon.addEventListener('click', () => {
    console.log('click')
    overlay.classList.remove('hidden')
    mobileNav.classList.remove('translate-x-full')
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

//view and hide content
hd_Btn.addEventListener('click',(e) => {
    console.log(e)
    console.log(hd_Btn.innerHTML)
    if(hd_Btn.innerHTML === 'مشاهده بیشتر'){
        hd_Btn.innerHTML = 'مشاهده کمتر'
        hd_Btn.classList.add('mt-8')
        hd_ContentElem.classList.remove('hidden')
        hd_ContentElem.parentElement.classList.remove('max-h-64')
        hd_Overlay.classList.add('hidden')
    }else{
        hd_Btn.innerHTML = 'مشاهده بیشتر'
        hd_Btn.classList.remove('mt-8')
        hd_ContentElem.classList.add('hidden')
        hd_ContentElem.parentElement.classList.add('max-h-64')
        hd_Overlay.classList.remove('hidden')
    }
})