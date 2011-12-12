var score = 0;
var m, n;
var isRunning = false;
var easy = true;

function showImages(){
    var num1 = Math.floor(0 + (1+2-0)*Math.random());
    
    var numL1  = Math.floor(0 + (1+19-0)*Math.random());
    
    var im = ["z1.png","z2.png","z3.png"];
    var img1 = im[num1];
    
    var loca = ["t1A","t1B","t1C","t1D","t1E","t2A","t2B","t2C","t2D","t2E"];
    var loc1 = loca[numL1];

   
    $('td#'+loc1).html("<img src='./images/"+img1+"' id='"+img1+"'>").show("fast", function() {
        $(this).fadeOut(3000, function() {
            $('img#'+img1).remove();
        });
    });
    
    m = setTimeout("showImages()",1500);
}

function dis(){
    $('img').click(function(){
        //clearTimeout(m);
        if(isRunning) {
            $(this).hide("fast", function() {
            if(easy == true && parseInt($('section#gamepanel span#score').html()) >= 9) {
                clearTimeout(m);
                clearTimeout(timerOut);
                clearTimeout(n);
                isRunning = false;
                $('section#gamepanel span#score').html('0');
                alert('Press okay to proceed to hard mode.');
                level2();
            } else {
                $('section#gamepanel span#score').html(score+=1);
                $(this).remove();
            }  

            if(!easy && parseInt($('section#gamepanel span#score').html()) >= 14) {
                   alert('You have finished the game!'); 
            } 
           });
        }
    });
 
   n = setTimeout("dis()",1500);
}   

function level2() {
    score = 0;
    $('span#level').html('hard');
    $('span#ammo').html('10');
    $('span#score').html('0');
     easy = false;
     isRunning = true;
     showImages();
     dis();  
     mins = 1;
     sec = 0;
     document.getElementById('time').value = "1 : 00";
     kaBom();
}

// code for the timer
var mins = 1;
var sec = 00;
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
        }else if(!isRunning) {
                //do nothing
            
        } else {
            $('section#gamepanel span#ammo').html(parseInt($('section#gamepanel span#ammo').text()) - 1);
        }
    });

    //timer on load method
     $('input#start').click(function () {
        if(timerOut)clearTimeout(timerOut);
        if(m) clearTimeout(m);
        if(n) clearTimeout(n);
        isRunning = true;
        kaBom();
        showImages();
        dis();    
    });
    //end of timer on load
});

