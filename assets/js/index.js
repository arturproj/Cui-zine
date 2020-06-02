$(function () {
    console.log('document ready');
    $(document).scroll(function () {
        var $nav = $(".navbar");
        $nav.toggleClass('bg-transparent', $(this).scrollTop() < $(".navbar").height());
    });
});