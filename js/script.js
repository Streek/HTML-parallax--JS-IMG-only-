$(function(){

    var backgroundheight = 4000;
    var offset = backgroundheight;

    function scrollbackground() {
        offset = (offset < 1) ? offset + (backgroundheight - 1) : offset - 1;
        $('body').css("background-position", "50% " + offset + "px");
        setTimeout(function() {
            scrollbackground();
        }, 100
        );
    }

    // Start the animation
    scrollbackground();
});
$('document').ready(function(){
    var clickable = true;
    $('#show-hide').click(function(){
        var $that = $(this);
        if(clickable){
            clickable = false;
            $('#main').slideToggle( function(){
                if($(this).is(':visible')){
                    $that.text("Hide");
                }else{
                    $that.text("Show");
                }
                clickable = true;
            });
        }
        return false;
    });
    $('header a').click(function(){
        $('.active').removeClass('active');
        $(this).find('li').addClass('active');
        var index = $(this).index();

        $('.visibleArea').slideUp("medium",function(){
            setTimeout(function() {
                $('.visibleArea:eq('+index+')').slideDown("medium");
            }, 200
            );
        });
    });
    var t = {};
    $('header a:first').click();
    $('body,html,document').mousemove(function(){
        clearTimeout(t);
        if( !$('header').is(":visible") ){
            $('header').slideDown();
            $('footer').show();
        }
        t = setTimeout(function() {
            if( !$('#main').is(":visible") ){
                $('header').slideUp();
                $('footer').hide();
            }
        }, 2000
        );
    });
});