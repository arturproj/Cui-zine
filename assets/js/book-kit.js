/**
 * Include external file js
 */
function dynamicallyLoadScript(url) {
    var script = document.createElement("script");  // create a script DOM node
    script.src = url;  // set its src to the provided URL

    document.body.appendChild(script);  // add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
}
/**
 * Menegers Cookies
 */
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
function deleteCookie(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
/**
 * Parce param url
 */
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

function readTextFile(id,url) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", url, true);
    rawFile.onreadystatechange = function() {
      if (rawFile.readyState === 4) {
        var allText = rawFile.responseText;
        document.getElementById(id).innerHTML = allText;
      }
    }
    rawFile.send();
  }
/**
 * Document on ready function
 * S
 */
$(document).ready(function () {       
    $.get( "/navbar/index.html", function( data ) {
        $( "#rep_nav" ).html( data );
    }); 
    $.get( "/footer/index.html", function( data ) {
        $( "#rep_foo" ).html( data );
    });   
    if($(window).scrollTop() > 150){
        $(".navbar").toggleClass('bg-transparent');
    }
    $(document).scroll(function () {
        var $nav = $(".navbar");
            $nav.toggleClass('bg-transparent', $(window).scrollTop() < 150 ); 
    });
});