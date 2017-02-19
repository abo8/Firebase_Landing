// EVENT SCROLL
$('.anch, header li a').click(function(event){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 750);
    $('.menu ul li').removeClass('open');
    event.preventDefault();
});

// EVENT MOBILE MENU
var menu = $('.menu');
var lim = $('header ul');
var burger = 0;
menu.click(function(){
    lim.toggleClass('none');
});


// SCROLL MENU
$(window).scroll(function() {
    if($(this).scrollTop() > 20){
        $('header').addClass('top-header');
    }else{
        $('header').removeClass('top-header');
    }
});

// CHAT BUTTONS
$("#msg-but").click(function () {
    $('#chat').toggleClass('on');
    $('body').toggleClass('hide');
    $('#blackout').toggleClass('nope');
    $(this).toggleClass('closed')
});

$("#msg-cross, #blackout").click(function () {
    $('#chat').removeClass('on');
    $('body').removeClass('hide');
    $('#blackout').addClass('nope');
    $('#msg-but').addClass('closed')
});
