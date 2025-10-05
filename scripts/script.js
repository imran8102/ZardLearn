let $ = document
let homeDescShadow = $.querySelector('#hd-desc')
let homeDescContent = $.querySelector('#hd-content')
let seeAllBtn = $.querySelector('#hd-seeAllBtn')

seeAllBtn.addEventListener('click',() => {
    if(homeDescContent.classList.contains('hidden')){
        homeDescShadow.classList.add('after:hidden')
        homeDescContent.classList.remove('hidden')
        seeAllBtn.innerHTML = 'مشاهده کمتر'
    }else{
        homeDescContent.classList.add('hidden')
        homeDescShadow.classList.remove('after:hidden')
        seeAllBtn.innerHTML = 'مشاهده بیشتر'
    }
})

