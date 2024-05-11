$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        console.log("you clicked on menu");
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('load scroll',function(){
        $("#menu").removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');
        if($(window).scrollTop() > 60){
    $('.header-2').addClass('header-active');
    }else{
            $('.header-2').removeClass('header-active');
        }
    });

});