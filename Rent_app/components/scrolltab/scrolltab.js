$('.scroll-container').scroll(function() {
    if ($(this).scrollLeft() == 0) {
        $('#left-select2').hide();
        $('#left-button').addClass('disable');
        $('.left').addClass('disable');
        $('#right-button').removeClass('disable');
        $('.right').removeClass('disable');
    } else {
        $('#left-button').removeClass('disable');
        $('.left').removeClass('disable');
        $('#right-button').addClass('disable');
        $('.right').addClass('disable');
    }
}).scroll();

$('#right-button').click(function() {
    event.preventDefault();
    $('#myTab').animate({
        scrollLeft: "+=320px"
    }, "slow");
});

$('#left-button').click(function() {
    event.preventDefault();
    $('#myTab').animate({
        scrollLeft: "-=320px"
    }, "slow");
});

$("ul li").click(function(e) {
    if ($(this).hasClass('slider')) {
        return;
    }

    var whatTab = $(this).index();

    var howFar = 160 * whatTab;

    $(".slider").css({
        left: howFar + "px"
    });

    $(".ripple").remove();

    var posX = $(this).offset().left,
        posY = $(this).offset().top,
        buttonWidth = $(this).width(),
        buttonHeight = $(this).height();

    $(this).prepend("<span class='ripple'></span>");

    if (buttonWidth >= buttonHeight) {
        buttonHeight = buttonWidth;
    } else {
        buttonWidth = buttonHeight;
    }

    var x = e.pageX - posX - buttonWidth / 2;
    var y = e.pageY - posY - buttonHeight / 2;

    $(".ripple").css({
        width: buttonWidth,
        height: buttonHeight,
        top: y + 'px',
        left: x + 'px'
    }).addClass("rippleEffect");

});


$(".nav-list-item:first-of-type").addClass("active");

$(".nav-list-item").on('click', function() {
    $(this).addClass('active').siblings().removeClass('active');
})


$("#home").click(function() {
    $("#topbarTabs").addClass('slide-up');
    $("#sideNav").addClass('slide-up', 'active');
});

$("#topPlayers").click(function() {
    $("#topbarTabs").removeClass('slide-up');
    $("#sideNav").removeClass('slide-up');
});
