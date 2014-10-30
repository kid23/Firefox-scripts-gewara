// ==UserScript==
// @name gewara mobile
// @namespace gewaram
// @description auto killsec
// @include http://m.gewara.com/touch/home/showOrder.xhtml?seatid=6%3A09%2C6%3A08&mpid=54077401
// @version 0.1
// @grant none
// ==/UserScript==

// @history 2014.10.30 Init


function debug()
{
 var t= new Date().getTime();
 var str = "Left Time "+ ":" + (targetTime-t)/1000;
 console.log(str);
 setTimeout(debug, 1000);
}


//本地先同步北京时间，修改开枪时间、影片地址再用
var fixTime = 1000 * 0;
var now = new Date().getTime();
var targetTime = new Date(2014,9,30,13,05,00).getTime();
var left = targetTime - now + fixTime;
var element = document.getElementsByClassName("ui_btn");
console.log(left);
setTimeout(function(){goSale()}, left);
//setTimeout(debug, 1000);
