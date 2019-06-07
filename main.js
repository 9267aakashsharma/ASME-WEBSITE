
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
document.addEventListener('DOMContentLoaded',domloaded,false);
function domloaded(){
function fn() {
        window.requestAnimFrame = (function () {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
                        window.setTimeout(callback, 1000 / 60);
                    }
        })();
        var canvas = document.getElementById('canvas'), ctx = canvas.getContext('2d'), w = canvas.width = window.innerWidth, h = canvas.height = window.innerHeight, hue = 217, stars = [], count = 0, maxStars = 1200;
        var canvas2 = document.createElement('canvas'), ctx2 = canvas2.getContext('2d');
        canvas2.width = 100;
        canvas2.height = 100;
        var half = canvas2.width / 2, gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);
        gradient2.addColorStop(0.025, '#fff');
        gradient2.addColorStop(0.1, 'hsl(' + hue + ', 61%, 33%)');
        gradient2.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)');
        gradient2.addColorStop(1, 'transparent');
        ctx2.fillStyle = gradient2;
        ctx2.beginPath();
        ctx2.arc(half, half, half, 0, Math.PI * 2);
        ctx2.fill();
        function random(min, max) {
            if (arguments.length < 2) {
                max = min;
                min = 0
            }
            if (min > max) {
                var hold = max;
                max = min;
                min = hold
            }
            return Math.floor(Math.random() * (max - min + 1)) + min
        }

        function maxOrbit(x, y) {
            var max = Math.max(x, y), diameter = Math.round(Math.sqrt(max * max + max * max));
            return diameter / 2
        }

        var Star = function () {
            this.orbitRadius = random(maxOrbit(w, h));
            this.radius = random(60, this.orbitRadius) / 12;
            this.orbitX = w / 2;
            this.orbitY = h / 2;
            this.timePassed = random(0, maxStars);
            this.speed = random(this.orbitRadius) / 900000;
            this.alpha = random(2, 10) / 10;
            count++;
            stars[count] = this
        };
        Star.prototype.draw = function () {
            var x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX, y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY, twinkle = random(10);
            if (twinkle === 1 && this.alpha > 0) {
                this.alpha -= 0.05
            } else if (twinkle === 2 && this.alpha < 1) {
                this.alpha += 0.05
            }
            ctx.globalAlpha = this.alpha;
            ctx.drawImage(canvas2, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius);
            this.timePassed += this.speed
        };
        for (var i = 0; i < maxStars; i++) {
            new Star()
        }
        function animation() {
            ctx.globalCompositeOperation = 'source-over';
            ctx.globalAlpha = 0.8;
            ctx.fillStyle = 'hsla(' + hue + ', 64%, 6%, 1)';
            ctx.fillRect(0, 0, w, h);
            ctx.globalCompositeOperation = 'lighter';
            for (var i = 1, l = stars.length; i < l; i++) {
                stars[i].draw()
            }
            ;
            window.requestAnimationFrame(animation)
        }

        animation();
    }
    fn();
	

}
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




// const buttu= document.querySelectorAll('.buttu');
// buttu.forEach(function(thisbut){
	// thisbut.addEventListener('click',function(e){
			// var inbutt = e.target.querySelector('.buttu .driip');
			// if(inbutt.getAttribute('src')=="Photos/DDsmall.png"){
			// inbutt.setAttribute("src", "Photos/LUsmall.png");
			// console.log(inbutt);
			// }
			// else{ 
			// inbutt.setAttribute("src", "Photos/DDsmall.png");
			// console.log(inbutt);
			// }
	// })
// })








//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 
$(window).load(scaleGallery);
$(window).resize(scaleGallery);