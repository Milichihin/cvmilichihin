/*========================= hide menu =====================*/
$(document).ready(function()
{
    $('.openButton').click(function() {
        if(!$('.openButton').hasClass('openDone'))
        {
            $('.openButton').addClass('openDone');
            $('.head-prior').css("left", "-20px");
        }
        else
        {
            $('.openButton').removeClass('openDone');
            $('.head-prior').css("left", "-100px");
        }
    });
 
    /*
 
    Подключать тогда, когда вы изначально хотите делать меню 
    адаптивным после определённого размера экрана
 
    Этот код решает проблему случайно исчезающего меню при
    изменении размера экрана браузера
 
    Здесь ставьте ширину при которой
    включается адаптивный дизайн вашего меню
 
    $(window).resize(function() 
    {     
        if ($(window).width() > 1200)
        {
            $('nav ul li').removeAttr('style');
        }
    });
    */
});


