'use strict'
var gElCanvas;
var gCtx;

function init(){
    gElCanvas = document.querySelector('#canvas');
    console.log('gelcancas', gElCanvas)
    gCtx = gElCanvas.getContext('2d');
    renderImages(gMemeImgs)
}