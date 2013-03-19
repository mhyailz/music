var mySound=[];
var FM;
var pause = false;
$(".music-menu li").click(function(){
    var c = $(this).attr("data-num");
    if(FM == c) return;
    FM = c;
    musicPlay(FM);
    $(".music-menu li").removeClass("music-menu-on");
    $(this).addClass("music-menu-on");
    $("footer a").css({
        display:"inline-block",
        backgroundImage :"url(../music/images/button.png)"
    })
    $(this).blur();
});
$("#button-pause").click(function(){
    mySound[FM].togglePlay();
    $("footer a").css("backgroundImage",function(){
        if(!pause){
            pause = !pause;
            return  "url(../music/images/button-click.png)";
        }else {
            pause = !pause;
            return   "url(../music/images/button.png)"
        }
    })
});

$("#button-logo").click(function(){
    mySound[FM].increaseVolume(5);
})
$("#button-next").click(function(){
    if(FM<28){
        FM++;
    }else{
        FM=1;
    }
    $(".music-menu li").removeClass("music-menu-on").eq(FM-1).addClass("music-menu-on");
    musicPlay(FM);
    $("footer a").css({
        backgroundImage :"url(../music/images/button.png)"
    })
})
$("#button-pre").click(function(){
    if(FM>1){
        FM--;
    }else{
        FM=30;
    }
    $(".music-menu li").removeClass("music-menu-on").eq(FM-1).addClass("music-menu-on");
    musicPlay(FM);
    $("footer a").css({
        backgroundImage :"url(../music/images/button.png)"
    })
})
function musicPlay(e){
    mySound[e] = new buzz.sound( "../music/music/"+ FM +"", {
        formats: [ "mp3", "ogg", "acc" ]
    });
    for(var i=1;i<mySound.length;i++){
        if(mySound[i] && i!=e){
            mySound[i].stop();
            delete mySound[i];
        }
    }
    mySound[e].play();
    pause = false;
}