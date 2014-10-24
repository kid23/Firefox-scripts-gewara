// ==UserScript==
// @name        gewara
// @namespace   gewara
// @description auto killsec
// @include     http://www.gewara.com/cinema/order/step1.shtml?mpid=53508071&tkn=f4fa76cd385d34d
// @version     0.1
// @grant       none
// ==/UserScript==

// @history   2014.10.24	Init


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
var targetTime = new Date(2014,9,24,21,49,30).getTime();
var left = targetTime - now + fixTime;
var element = document.getElementsByClassName("button redBt maxBt left");
console.log(left);
setTimeout(function(el){submitOrder(el)}, left);
//setTimeout(debug, 1000);

