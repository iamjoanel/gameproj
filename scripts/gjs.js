var min=0,sec=0;
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
	$(this).fadeOut("slow");
    });
    setTimeout("dis()",2000);
}

$(document).ready(function () {
    showImages();
    dis();
});

