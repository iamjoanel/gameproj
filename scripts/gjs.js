var score = 0;
var m;

function showImages(){
    var num1 = Math.floor(0 + (1+2-0)*Math.random());
    
    var numL1  = Math.floor(0 + (1+19-0)*Math.random());
    
    var im = ["z1.png","z2.png","z3.png"];
    var img1 = im[num1];
    
    var loca = ["t1A","t1B","t1C","t1D","t1E","t2A","t2B","t2C","t2D","t2E","t3A","t3B","t3C","t3D","t3E","t4A","t4B","t4C","t4D","t4E",];
    var loc1 = loca[numL1];
    
    $('td#'+loc1).html("<img src='./images/"+img1+"'>").show("slow");
    
    
    var m = setTimeout("showImages()",2000);
    

}

function dis(){
    $('img').click(function(){
	   clearTimeout(m);
	   $(this).fadeOut("fast", function() {
        $('section#gamepanel span#score').html(score+=1);   
       });
    });
    
    setTimeout("dis()",2000);
}   

// code for the timer
var mins = 2;
var sec = 0;
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
        $('body').css("background-image","url('./images/bg.jpg')")
    }
}

//end of timer code

$(document).ready(function () {
    $('section#gamearea').hover(function() {
        $(this).css('cursor','crosshair');
            }, function() {
        $(this).css('cursor','auto');
    });

    //timer on load method
     $('input#start').click(function () {
        kaBom();
        showImages();
        dis();    
    });
    //end of timer on load
});

