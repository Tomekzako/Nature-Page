$(function () {

    const $navBtn = $('.navigation__button');

    $navBtn.on('click', function() {
        $(".navigation__background").toggleClass("navigation__background--scale");
        $(this).toggleClass("navigation__button--checked");
        $('.navigation__nav').fadeToggle("slow","linear");
//        if($(".navigation__background").hasClass("navigation__background--scale")) {
//            
//           }
        
    });
    
    
});