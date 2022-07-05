const container = document.querySelector(".header__bottom-block")
const swiper = new Swiper('.hero__swiper', {
  loop: true,
  speed: 300,
  pagination: {
    el: '.hero__pagination',
    type: 'bullets',
    clickable: true
  }

})

document.querySelectorAll('.tabs-nav__btn').forEach(function(tabsBtn){
    tabsBtn.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;
    document.querySelectorAll('.tabs-nav__btn').forEach(function(btn){
    btn.classList.remove('tabs-nav__btn--active')});
    e.currentTarget.classList.add('tabs-nav__btn--active');
    document.querySelectorAll('.tabs-item').forEach(function(tabsBtn){
    tabsBtn.classList.remove('tabs-item--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');

    });
    });

    $(".accordion").accordion({
        heightStyle: "content",
        
        });

    $('.type_1 .headingElem').on('click', function (){
    let thisContentBlock = $(this).parent().find('.descElem');
    if(thisContentBlock.hasClass('active')) {
        thisContentBlock.removeClass('active')
    }
    else {
        thisContentBlock.addClass('active')
    }
    })

    $('.type_1 .headingElem').on('click', function (){
        let thisContentBlockone = $(this).parent().find('.burger-arrow');
        if(thisContentBlockone.hasClass('active') ) {
            thisContentBlockone.removeClass('active')
        }
        else {
            thisContentBlockone.addClass('active')
        }
        })



        
let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('nav__link');

burger.addEventListener('click',
  function () {

    burger.classList.toggle('burger--active');

    menu.classList.toggle('header__nav--active');

    document.body.classList.toggle('stop-scroll');

  });

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {

    burger.classList.remove('burger--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll');
  });
});



let search = document.querySelector('.search');
let loop = document.querySelector('.search .loop');
let none = document.querySelector('.none')

loop.addEventListener('click',
function() {

  search.classList.add('search--active')

});

none.addEventListener('click',
function() {

  search.classList.remove('search--active')

});
