var score = 0;
var m;
var isRunning = false;
var easy = "true";

function showImages(){
    var num1 = Math.floor(0 + (1+2-0)*Math.random());
    
    var numL1  = Math.floor(0 + (1+19-0)*Math.random());
    
    var im = ["z1.png","z2.png","z3.png"];
    var img1 = im[num1];
    
    var loca = ["t1A","t1B","t1C","t1D","t1E","t2A","t2B","t2C","t2D","t2E"];
    var loc1 = loca[numL1];

   
    $('td#'+loc1).html("<img src='./images/"+img1+"'>").show("fast", function() {
        $(this).fadeOut(5000);
    });
    
    var m = setTimeout("showImages()",1500);
}

function dis(){
    $('img').click(function(){
	   clearTimeout(m);
       if(isRunning && $(this).is(':visible')) {
    	   $(this).fadeOut("fast", function() {
            $('section#gamepanel span#score').html(score+=1);   
           });
        }
    });
    
    var n = setTimeout("dis()",2000);
}   

// code for the timer
var mins = 0;
var sec = 30;
var timerOut;

function kaBom(){
    if(sec>=10){
        document.getElementById('time').value = mins +" : "+sec;
    }else{
        document.getElementById('time').value = mins +" : 0"+sec;
    }
    if(mins>=0 && sec>0){
        sec--;
    }
    if(sec==0){
        if(mins>0){
            mins--;
            sec=59;
        }
    }
    timerOut = setTimeout("kaBom()",1000);
    
    if(document.getElementById('time').value == "0 : 00"){
	$('body').css("background-image","url('./images/go.jpg')").css("background-repeat","no-repeat").css("background-size","100% 100%");
           isRunning = false;
    }
}

//end of timer code

$(document).ready(function () {
    $('body').css("background-image","url('./images/bg.jpg')").css("background-repeat","no-repeat").css("background-size","100% 100%");
    $('section#gamearea').hover(function() {
        $(this).css('cursor','crosshair');
    }, function() {
        $(this).css('cursor','auto');
    });
    
    $('section#gamearea tbody').click(function () {
        if(parseInt($('section#gamepanel span#ammo').text()) <= 0) {
	       $('body').css("background-image","url('./images/go.jpg')").css("background-repeat","no-repeat").css("background-size","100% 100%");
	       clearTimeout(m);
            clearTimeout(timerOut);
            clearTimeout(n);
            isRunning = false;
        } else if(!isRunning) {
            //do nothing
        } else {
            $('section#gamepanel span#ammo').html(parseInt($('section#gamepanel span#ammo').text()) - 1);
        }
    });

    //timer on load method
     $('input#start').click(function () {
        isRunning = true;
        kaBom();
        showImages();
        dis();    
    });
    //end of timer on load
});

