$(function () {

    const $navBtn = $('.navigation__button');

    $navBtn.on('click', () => {
        $(".navigation__background").toggleClass("navigation__background--scale");
        $('.navigation__nav').fadeToggle("slow","linear");
        
    });
    
    
});