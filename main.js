
//for loader

 window.addEventListener("load" , function(){
     var load_screen = document.getElementById("load_screen");
 	document.body.removeChild(load_screen);
 });
 
 function scaleGallery()
{
  // This is roughly the max pixels width/height of a square photo
  var widthSetting = 400;
  
  // Do not edit any of this unless you know what you're doing
  var containerWidth = $(".gallery").width();
  var ratioSumMax = containerWidth / widthSetting;
  var imgs = $(".gallery img");
  var numPhotos = imgs.length, ratioSum, ratio, photo, row, rowPadding, i = 0;

  while (i < numPhotos) {
    ratioSum = rowPadding = 0;
    row = new Array();
    while (i < numPhotos && ratioSum < ratioSumMax) {
        photo = $(imgs[i]);
        // reset width to original
        photo.width(""); 
        ratio = photo.width() / photo.height();
        rowPadding += getHorizontalPadding(photo);
        // if this is going to be first in the row, clear: left
        if(ratioSum == 0) photo.css("clear", "left"); else photo.css("clear", "none");
        ratioSum += ratio;
        row.push(photo);
        i++;
        // if only 1 image left, squeeze it in
        if(i == numPhotos - 1) ratioSumMax = 999;
    }
    unitWidth = (containerWidth - rowPadding) / ratioSum;

    row.forEach(function (elem) {
      elem.width(unitWidth * elem.width() / elem.height());
    });
  }
}

function getHorizontalPadding(elem)
{
    var padding = 0;
    var left = elem.css("padding-left");
    var right = elem.css("padding-right");
    padding += parseInt(left ? left.replace("px", "") : 0);
    padding += parseInt(right ? right.replace("px", "") : 0);
    return padding;
}


//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//For the Tech team pull-down/pull-up button on team page
var dropdown1 = document.getElementById("drops1");
var collapper1 = document.getElementById("collapseFour");
var button1 = document.getElementById("button-drop1");


//For the Core team pull-down/pull-up button on team page
var dropdown2 = document.getElementById("drops2");
var collapper2 = document.getElementById("collapseThree");
var button2 = document.getElementById("button-drop2");


//For the Lead team pull-down/pull-up button on team page
var dropdown3 = document.getElementById("drops3");
var collapper3 = document.getElementById("collapseTwo");
var button3 = document.getElementById("button-drop3");


//For the Faculty team pull-down/pull-up button on team page
var dropdown4 = document.getElementById("drops4");
var collapper4 = document.getElementById("collapseOne");
var button4 = document.getElementById("button-drop4");



//For the Tech team pull-down/pull-up button on team page
button1.onclick = function(){
	if(collapper1.getAttribute("class") == "collapse"){
		dropdown1.setAttribute("src", "Photos/LUsmall.png");
	}
	else{
		dropdown1.setAttribute("src", "Photos/DDsmall.png");
	}
};



//For the Core team pull-down/pull-up button on team page
button2.onclick = function(){
	if(collapper2.getAttribute("class") == "collapse"){
		dropdown2.setAttribute("src", "Photos/LUsmall.png");
	}
	else{
		dropdown2.setAttribute("src", "Photos/DDsmall.png");
	}
		
};



//For the Lead team pull-down/pull-up button on team page
button3.onclick = function(){
	if(collapper3.getAttribute("class") == "collapse"){
		dropdown3.setAttribute("src", "Photos/LUsmall.png");
	}
	else{
		dropdown3.setAttribute("src", "Photos/DDsmall.png");
	}	
};



//For the Faculty team pull-down/pull-up button on team page
button4.onclick = function(){
	if(collapper4.getAttribute("class") == "collapse"){
		dropdown4.setAttribute("src", "Photos/LUsmall.png");
	}
	else{
		dropdown4.setAttribute("src", "Photos/DDsmall.png");
	}
		
};



/*
for(i=0; i<buttu.length; i++){
	var buttu = document.getElementsByClassName("buttu");
var driip;
var cpy;
	
	
	cpy = buttu[i].getElementsByClassName("driip");
		driip = cpy[0].getAttribute('src');
		

	buttu[i].onclick = function(){
		
		if(driip == "Photos/DDsmall.png"){
			cpy[0].setAttribute("src", "Photos/LUsmall.png");
		}
		else{
			cpy[0].setAttribute("src", "Photos/DDsmall.png");
		}
		
		console.log(driip);
		
	};
}*/


//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 
$(window).load(scaleGallery);
$(window).resize(scaleGallery);