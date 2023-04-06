//------------------------------------변수
//1. KR
const kr_lnb = document.querySelector('.top>ul>li>a')
const kr_lnb_open = document.querySelector('.lang')
//2. 전체메뉴+닫기
const all_nav = document.querySelector('.top>ul>li:last-child>a')
const all_nav_open = document.querySelector('.all_nav')
const all_nav_close = document.querySelector('.all_nav .close')
//3. ACC gnb + sub
const nav_acc = document.querySelectorAll('.btm>nav>ul>li')
const nav_acc_sub = document.querySelectorAll('.btm>nav>ul>li>.sub')
//5. aside오픈탭
const asideOpenBtn = document.querySelector('main>.right_popup>#left_btn>a:first-child')
const asideTap = document.querySelector('main>.right_popup>.contents')
const aside = document.querySelector('main>.right_popup')
//6. 변수
let krlang = true
console.log(kr_lnb, kr_lnb_open)
console.log(all_nav, all_nav_open, all_nav_close)
console.log(nav_acc, nav_acc_sub)
console.log(asideOpenBtn, asideTap, aside)
//-----------------------------------------------------event
//1. 이벤트 전 모두 숨기기
//객체.속성.속성 = 값
//객체.style.display = 'none'

kr_lnb_open.style.display = 'none'
all_nav_open.style.display = 'none'
nav_acc_sub[0].style.display = 'none'

//2. all_nav 실행과 종료
all_nav.addEventListener('click', function(){
    all_nav_open.style.display = 'block'
})

all_nav_close.addEventListener('click', function(){
    all_nav_open.style.display = 'none'
})

//3. ACC_sub 실행과 종료(mouseover)
nav_acc[11].addEventListener('mouseover', function(){
    nav_acc_sub[0].style.display = 'block'
})

nav_acc[11].addEventListener('mouseout', function(){
    nav_acc_sub[0].style.display = 'none'
})

//4. lang 실행과 종료
kr_lnb.addEventListener('click', function(){
    if(krlang){
        kr_lnb_open.style.display = 'inline-block'
    }
    else {
        kr_lnb_open.style.display = 'none'
    }
    krlang =! krlang
})
/* kr_lnb.addEventListener('click', function(){
    kr_lnb_open.style.display = 'inline-block'
})

kr_lnb_open.addEventListener('click', function(){
    kr_lnb_open.style.display = 'none'
}) */

//5. aside 숨겼다 펼치기

/* aside.style.transform = 'translateX(500px)' */

/* asideOpenBtn.addEventListener('click', function(){
    aside.style.transition = 'all 0.5s'
    aside.style.transform = 'translateX(0)'
})
asideOpenBtn.addEventListener('mouseover', function(){
    aside.style.transition = 'all 0.5s'
    aside.style.transform = 'translateX(500px)'
}) */

asideOpenBtn.addEventListener('click', function(){
    if (aside.classList.contains('on')){
        aside.classList.remove('on')
    }
    else {
        aside.classList.add('on')
    }
})
