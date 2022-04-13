'use strict'
var gElCanvas;
var gCtx;

function init(){
    gElCanvas = document.querySelector('#canvas');
    gCtx = gElCanvas.getContext('2d');
    renderImages(gMemeImgs)
}