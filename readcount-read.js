﻿var timeoutHandle; 
function countdown(minutes, seconds) { 
function tick() { 
var counter = document.getElementById("timerread"); 
counter.innerHTML = 
minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds); 
seconds--; 
if (seconds >= 0) { 
timeoutHandle = setTimeout(tick, 1000); 
} else { 
if (minutes >= 1) { 
setTimeout(function () { 
countdown(minutes - 1, 59);
 }, 1000);
 } } } tick(); } countdown(0, 40);