$(document).ready(function() {

    $( ".card-btn-open" ).click(function() {
        $(".cover").slideUp();
        $(this).hide();
        //$(".cover").addClass("cover-hide");
        $(".resume").removeClass("resume-hide");
        //window.removeEventListener( 'scroll', noscroll );
    });

    $( ".resume" ).click(function() {
        $(".cover").slideDown();
        $( ".card-btn-open").show();
        //$(".cover").removeClass("cover-hide");
        $(".resume").addClass("resume-hide");
        //window.addEventListener( 'scroll', noscroll );
    });

    //function noscroll() {
    //    window.scrollTo( 0, 0 );
    //}
    //// reset scrolling position
    //document.body.scrollTop = document.documentElement.scrollTop = 0;
    //
    //// disable scrolling
    //window.addEventListener( 'scroll', noscroll );

});