$(document).ready(function(){
    // preload
    $('.preload').delay(2000).fadeOut();
    // window scroll
    $(window).scroll(function(){
        // to show back btn
        var scrolling = $(this).scrollTop();
        if(scrolling > 350){
            $('.back-btn').fadeIn();
        }
        else{
            $('.back-btn').fadeOut();
        }
        // to show menu
        if(scrolling > 200){
                  $("#menu").addClass('menu-fixed');
                }
                else{
            $("#menu").removeClass('menu-fixed');
    
        }
    
    
    });

    // back to top
    
    $('.back-btn').click(function(){
        $('body,html').animate({
            scrollTop:'0px',
        },2000);
    });

});


// add from

var triger = document.getElementById('triger');
var modal = document.getElementById('modal');
var end = document.getElementById('end');
// show form

triger.addEventListener('click', function(){
    modal.style.display ="flex";
});
// close form
end.addEventListener('click', function(){
    modal.style.display ="none";
});





