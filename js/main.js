$(document).ready(function(){
    $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });

    $(".zoom").hover(function(){

        $(this).addClass('transition');
    }, function(){

        $(this).removeClass('transition');
    });
});



$('#offcanvasleft').click(function() {
  $('.row-offcanvas-left').toggleClass('active');
});

$('[data-toggle=offcanvasright]').click(function() {
  $('.row-offcanvas-right').toggleClass('active');
});