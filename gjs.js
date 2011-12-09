var num = Math.floor(0 + (1+2-0)*Math.random());
var numL  = Math.floor(0 + (1+19-0)*Math.random());

var im = ["z1.png","z2.png","z3.png"];
var img = im[num];

var loca = ["t1A","t1B","t1C","t1D","t1E","t2A","t2B","t2C","t2D","t2E","t3A","t3B","t3C","t3D","t3E","t4A","t4B","t4C","t4D","t4E",];
var loc = loca[numL];

$(document).ready(function () {
    $('td#'+loc).html("<img src='"+img+"'>");
    $('img').click(function(){
	$(this).fadeOut("slow");
    });
});

