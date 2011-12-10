var min=0,sec=0;


function showImages(){
    var num1 = Math.floor(0 + (1+2-0)*Math.random());
    var num2 = Math.floor(0 + (1+2-0)*Math.random());
    var num3 = Math.floor(0 + (1+2-0)*Math.random());
    var num4 = Math.floor(0 + (1+2-0)*Math.random());
    
    var numL1  = Math.floor(0 + (1+19-0)*Math.random());
    var numL2 = Math.floor(0 + (1+19-0)*Math.random());
    var numL3  = Math.floor(0 + (1+19-0)*Math.random());
    var numL4  = Math.floor(0 + (1+19-0)*Math.random());
    
    var im = ["z1.png","z2.png","z3.png"];
    var img1 = im[num1];
    var img2 = im[num2];
    var img3 = im[num3];
    var img4 = im[num4];
    
    var loca = ["t1A","t1B","t1C","t1D","t1E","t2A","t2B","t2C","t2D","t2E","t3A","t3B","t3C","t3D","t3E","t4A","t4B","t4C","t4D","t4E",];
    var loc1 = loca[numL1];
    var loc2 = loca[numL2];
    var loc3 = loca[numL3];
    var loc4 = loca[numL4];
    
    $('td#'+loc1).html("<img src='"+img1+"'>");
    $('td#'+loc2).html("<img src='"+img2+"'>");
    $('td#'+loc3).html("<img src='"+img3+"'>");
    $('td#'+loc4).html("<img src='"+img4+"'>");
    
    
    var m = setTimeout("showImages()",6000);
    

}

function hideShit(){
    clearTimeout(m);
    $('td#'+loc1).html("<img src='"+img1+"'>").hide();
    $('td#'+loc2).html("<img src='"+img2+"'>").hide();
    $('td#'+loc3).html("<img src='"+img3+"'>").hide();
    $('td#'+loc4).html("<img src='"+img4+"'>").hide();
    
    var m = setTimeout("hideShit()",1000);
}
$(document).ready(function () {
    showImages();
        hideShit();
    zTime();
    $('img').click(function(){
	$(this).fadeOut("slow");
    });
});

