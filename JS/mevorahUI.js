/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
    "use strict";
    
    console.log(screen.height);
    
    $(".CornerNav").mouseenter(expandCorner);
    $(".CornerNav").mouseleave(releaseCorner);
    
});

function expandCorner() {
    var animationTime = 500;
    var newHeightAndWidth = screen.height;    
    animateCorner(newHeightAndWidth, animationTime);
}

function releaseCorner() {
   var animationTime = 500;
   var newHeightAndWidth = 250;  
   animateCorner(newHeightAndWidth, animationTime);
}

function animateCorner(heightWidth, animationTime){
    var offset = (-1) * Math.floor(heightWidth/2);
    $(".CornerNav").animate({
        height: heightWidth,
        width: heightWidth,
        left: offset,
        top: offset
    }, animationTime);
}