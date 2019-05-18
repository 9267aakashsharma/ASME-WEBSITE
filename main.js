
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


var dropdown1 = document.getElementById("drops1");
var button1 = document.getElementById("button-drop1");

button1.onclick = function(){
	if(dropdown1.getAttribute("src") == "Photos/DDsmall.png"){
		dropdown1.setAttribute("src", "Photos/LUsmall.png");
	}
	else{
		dropdown1.setAttribute("src", "Photos/DDsmall.png");
	}
		
};

var dropdown2 = document.getElementById("drops2");
var button2 = document.getElementById("button-drop2");

button2.onclick = function(){
	if(dropdown2.getAttribute("src") == "Photos/DDsmall.png"){
		dropdown2.setAttribute("src", "Photos/LUsmall.png");
	}
	else{
		dropdown2.setAttribute("src", "Photos/DDsmall.png");
	}
		
};

var dropdown3 = document.getElementById("drops3");
var button3 = document.getElementById("button-drop3");

button3.onclick = function(){
	if(dropdown3.getAttribute("src") == "Photos/DDsmall.png"){
		dropdown3.setAttribute("src", "Photos/LUsmall.png");
	}
	else{
		dropdown3.setAttribute("src", "Photos/DDsmall.png");
	}
		
};

var dropdown4 = document.getElementById("drops4");
var button4 = document.getElementById("button-drop4");

button4.onclick = function(){
	if(dropdown4.getAttribute("src") == "Photos/DDsmall.png"){
		dropdown4.setAttribute("src", "Photos/LUsmall.png");
	}
	else{
		dropdown4.setAttribute("src", "Photos/DDsmall.png");
	}
		
};
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 
$(window).load(scaleGallery);
$(window).resize(scaleGallery);