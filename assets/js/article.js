$(function () {
    if (getUrlParameter('tech') !== ' ') {
        $('#avatar').attr("src",'./../assets/img/team/'+getUrlParameter('tech')+'.jpg');
    }
    if (getUrlParameter('title') !== ' ') {
        $('.equipe-header').text(getUrlParameter('title'));
    }
    if (getUrlParameter('header') !== ' ') {
        $('.header-page').css("background-image", 'url(./../assets/img/articles/'+getUrlParameter('header')+'/'+getUrlParameter('header')+'-header.jpg');
    }
    
     
    
});