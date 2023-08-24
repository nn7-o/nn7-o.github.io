$(function(){

    function site_show(){
        $('#bg').fadeIn();
    }
    setTimeout(site_show,500);

    $('.close').on('click',function(){
        window.location.replace('../../index.html');

    });

});