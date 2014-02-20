var index_li = 0;
var index_first = 0;
var length_li = $('.list li').length;
$(document).ready(function() {

    /* Button Play and Pause*/

    play.click(function() {
        Play();

    });

    /* Click List */
    $('.list li:eq(0)').addClass('selected');
    $('.list li').click(function() {
        $('.list li').removeClass('selected');
        index_first = $(this).index();
        $(this).addClass('selected');

    });
    $('.list li').dblclick(function() {
        index_li = $(this).index();
        isPlay = 0;
        Play();
        $('.list li').removeClass('playing');
        $("#show").find('div').hide();
        $("#show").find('div.content').eq(index_li).show();
        $(this).addClass('playing');
    });

    /* Button Next and Pre*/

    $('#btnNext').click(function() {
        $('.list li').removeClass('selected playing');
        if (index_li < length_li - 1) {
            index_li += 1;
        }
        $('.list li:eq(' + index_li + ')').addClass('selected playing');
        isPlay = 1;
        Play();
        $("#show").find('div').hide();
        $("#show").find('div.content').eq(index_li).show();

    });

    $('#btnPre').click(function() {
        $('.list li').removeClass('selected playing');
        if (index_li > 0) {
            index_li -= 1;
        }
        $('.list li:eq(' + index_li + ')').addClass('selected playing');
        isPlay = 1;
        Play();
        $("#show").find('div').hide();
        $("#show").find('div.content').eq(index_li).show();

    });
    /* Button EQ*/
    var isClick = 0;
    $('#btnEQ').click(function() {
        if (isClick === 0) {
            if ($(window).width() < 900) {
                $('#EQPanel').animate({
                    height: '18%'
                },
                500);
            } else {
                $('#EQPanel').animate({
                    height: '30%'
                },
                500);
            }

            $('#EQContent').fadeIn(200);
            isClick = 1;
        } else {
            $('#EQPanel').animate({
                height: '0%'
            },
            500);
            $('#EQContent').fadeOut(500);
            isClick = 0;
        }
    });
    /* Button Sound */
    var isSoundClick = 0;
    $('#btnSound').click(function() {
        if (isSoundClick === 0) {
            $(this).removeClass("icon_NoSound").addClass("icon_Sound");
            $(this).next('span').fadeIn(200).delay(500).fadeOut(200);
            isSoundClick = 1;
        } else {
            $(this).removeClass("icon_Sound").addClass("icon_NoSound");
            isSoundClick = 0;
        }
    });

});

/* CD Play */
var isPlay = 0;
var play = $('#btnPlay');
function Play() {
    if (isPlay === 0) {
        $("#show").find('div').hide();
        $("#show").find('div.content').eq(index_first).show();
        $('.list li:eq(' + index_first + ')').addClass('selected playing');
        $('.circle').css({
            "animation-play-state": "running",
            "-moz-animation-play-state": "running",
            "-webkit-animation-play-state": "running",
            "o-animation-play-state": "running"
        });
        isPlay = 2;
        play.removeClass("icon_Play").addClass("icon_Pause");
    } else if (isPlay === 1) {
        $('.circle').css({
            "animation-play-state": "running",
            "-moz-animation-play-state": "running",
            "-webkit-animation-play-state": "running",
            "o-animation-play-state": "running"
        });
        isPlay = 2;
        play.removeClass("icon_Play").addClass("icon_Pause");
    } else {
        $('.circle').css({
            "animation-play-state": "paused",
            "-moz-animation-play-state": "paused",
            "-webkit-animation-play-state": "paused",
            "o-animation-play-state": "paused"
        });
        isPlay = 1;
        play.removeClass("icon_Pause").addClass("icon_Play");

    }
    var myname = $('.list li:eq(' + index_li + ')').find('span:eq(0)').text();
    var myitem = $('.list li:eq(' + index_li + ')').find('span:eq(1)').text();
    $('.info').find('p:eq(0)').html(myitem);
    $('.info').find('p:eq(1)').html(myname);
}