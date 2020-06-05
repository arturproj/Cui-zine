$(function () {
    if (getUrlParameter('tech') !== ' ') {
        $('#avatar').attr("src",'./../assets/img/team/'+getUrlParameter('tech')+'.jpg');
    }
    if (getUrlParameter('title') !== ' ') {
        $('.title_article').text(getUrlParameter('title'));
    }
    if (getUrlParameter('header') !== ' ') {
        $('header').css("background-image", 'url(./../assets/img/articles/'+getUrlParameter('header')+'/'+getUrlParameter('header')+'-header.jpg');
    }
    
     
    
});