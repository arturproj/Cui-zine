$(function () {
    console.log( $.type(getUrlParameter('tech')) + '"' + getUrlParameter('tech') + '"' )
    if (getUrlParameter('tech') !== '') {
        $('#avatar').attr("src",'./../assets/img/team/'+getUrlParameter('tech')+'.jpg');
        $('.tit_eql').text(getUrlParameter('tech'));
    }
    if (getUrlParameter('prof') !== '') {
        $('.pro_eql').text(getUrlParameter('prof'));
    }
});