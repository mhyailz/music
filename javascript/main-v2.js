var mySound = [];
var FM ;
var Music ={
    play : function(a,b,e){
        mySound[e] = new buzz.sound( Music.musicUrl + FM +"", {
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
    },
    pause : false,
    musicUrl : "../music/music/",
    picUrl : {
        "off" : "url(../music/images/button.png)",
        "on" :  "url(../music/images/button-click.png)"
    }
};
$(".music-menu li").on({
    click : function(){
        var c = $(this).attr("data-num");
        if(FM === c) return;
        FM = c;
        Music.play(FM);
        $(this).siblings().removeClass("music-menu-on").end().addClass("music-menu-on").blur();
        $("footer a").css({display : "inline-block",background : Music.picUrl.off});
    }
});