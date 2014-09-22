/*jslint browser: true*/
/*global $, jQuery, alert*/

var cornerIsExpanded = false;
var numNavigationLinks = 0;
var navigationHeigthDefault;
var navigationHeigthExpanded;

var bufferHeight = 130;
var NAV_BOX_SIZE = 100;

$(document).ready(function () {
    "use strict";
    
    init();
    
    $(".Navigation").mouseenter(toggleCorner);
    $(".Navigation").mouseleave(toggleCorner);
    
});

function init(){
    numNavigationLinks = $(".Navigation").children().length - 1; //Minus one for background triangle
    
    $(".NavBox").hide();
    
    var sum = 0;
    var i = 0;
    while(numNavigationLinks > sum){
        sum += Math.pow(2, i);
        i++;
    }
    
    navigationHeigthDefault = 230;
    navigationHeigthExpanded = numNavigationLinks * (NAV_BOX_SIZE + bufferHeight);
    
    console.log(i);
}

function toggleCorner() {
    var animationTime = 500;
    var newHeightAndWidth;
    
    if(!cornerIsExpanded){
        newHeightAndWidth = navigationHeigthExpanded;
    }else{
        newHeightAndWidth = navigationHeigthDefault;
    }
    cornerIsExpanded = !cornerIsExpanded;

    animateCorner(newHeightAndWidth, animationTime);
    
    if(cornerIsExpanded){
        for(i = 0; i < numNavigationLinks; i++){
                     
        }
    }
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