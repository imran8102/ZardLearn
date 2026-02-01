let htmlElem = document.querySelector('html')
let navbarIcon = document.querySelector('#navbar-icon')
let mobileNav = document.querySelector('.mobile-nav')
let overlay = document.querySelector('.overlay')
let chevronDownIcons = document.querySelectorAll('.chevron-down-icon')
let changeThemeBtnMobile = document.querySelector('.changeMode-btn-mobile')
let changeThemeBtn = document.querySelector('#changeMode-btn')
let moonIconElems = document.querySelectorAll('.moonIcon')
let sunIconElems = document.querySelectorAll('.sunIcon')
let changeModeTextElem = document.querySelector('.changeMode-text')
let hd_Btn = document.querySelector('#hd-btn')
let hd_ContentElem = document.querySelector('#hd-content')
let hd_Overlay = document.querySelector('#hd-overlay')
let blurOverlay = document.querySelector("#blur-overlay")
let userOptionsBtn = document.querySelector('#userOptionsBtn')
let userOptions = document.querySelector('#userOptions')
let cartBtn = document.querySelector('#cart-btn')
let cartMenu = document.querySelector('#cartMenu')

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

//change theme on mobile
changeThemeBtnMobile.addEventListener('click',() => {
    changeTheme()
})
//change theme on desktop
changeThemeBtn.addEventListener('click',()=>{
    changeTheme()
})
//change theme function
function changeTheme(){
    htmlElem.classList.toggle('dark')
    moonIconElems.forEach((moonIcon) => {
        moonIcon.classList.toggle('hidden')
    })
    sunIconElems.forEach((sunIcon) => {
        sunIcon.classList.toggle('hidden')
    })
    changeModeTextElem.textContent = changeModeTextElem.textContent === changeModeTextElem.dataset.a ? changeModeTextElem.dataset.b : changeModeTextElem.dataset.a
}

//show and hide content
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

//show and hide user options menu
userOptionsBtn.addEventListener('click',() => {
    toggleUserOptionsMenu()
})
//hide user options menu or cart menu by clicking outside of the menu
window.addEventListener('click', (e) => {
    if(!userOptions.classList.contains('opacity-0') && !userOptions.contains(e.target) && !userOptionsBtn.contains(e.target)){
        toggleUserOptionsMenu()
    }
    if(!cartMenu.classList.contains('opacity-0') && !cartMenu.contains(e.target) && !cartBtn.contains(e.target)){
        toggleCartMenu()
    }
})

//show or hide user options menu function
function toggleUserOptionsMenu(){
    userOptionsBtn.classList.toggle('z-40')
    blurOverlay.classList.toggle('opacity-0')
    blurOverlay.classList.toggle('pointer-events-none')
    userOptions.classList.toggle('opacity-0')
    userOptions.classList.toggle('pointer-events-none')
    userOptions.classList.toggle('scale-95')
    userOptions.classList.toggle('z-40')
}

//show cart preview by clicking on cart button
cartBtn.addEventListener('click',() => {
    console.log("click")
    toggleCartMenu()
})

//show or hide cart menu function
function toggleCartMenu(){
    blurOverlay.classList.toggle('opacity-0')
    blurOverlay.classList.toggle('pointer-events-none')
    cartBtn.classList.toggle('z-40')
    cartMenu.classList.toggle('opacity-0')
    cartMenu.classList.toggle('pointer-events-none')
    cartMenu.classList.toggle('scale-95')
    cartMenu.classList.toggle('z-40')
}

//swiper
//for latest courses carousel
var swiper = new Swiper(".mySwiper1", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop:true,
      navigation: {
        nextEl: ".custom-next1",
        prevEl: ".custom-prev1",
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1280: {
          slidesPerView: 4,
        }
        },
        autoplay: {
            delay: 3000,
        }
    });

//for recent courses carousel
var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop:true,
    navigation: {
    nextEl: ".custom-next2",
    prevEl: ".custom-prev2",
    },
    breakpoints: {
    640: {
        slidesPerView: 2,
    },
    1024: {
        slidesPerView: 3,
    },
    1280: {
        slidesPerView: 4,
    }
    },
    autoplay: {
        delay: 3000,
    }
});