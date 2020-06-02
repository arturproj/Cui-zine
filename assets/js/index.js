$(function () {
    console.log('document ready');
    console.log('position scroll '+$(window).scrollTop());
    if($(window).scrollTop() > 200){
        $(".navbar").toggleClass('bg-transparent');
    }
    $(document).scroll(function () {
        var $nav = $(".navbar");
            $nav.toggleClass('bg-transparent', $(window).scrollTop() < 200 ); 
    });
});