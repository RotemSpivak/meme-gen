'use strict'
var gMeme = []
function drawImg(src){
    var img = new Image()
    img.src = src
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
}

function drawText(txt,x,y){
    var txt = document.querySelector('input')
    gCtx.textBaseline = "middle"
    gCtx.font = "50px ariel"
    gCtx.strokeText(txt,50,50)
}

function onSubmitText(){
    var text = document.querySelector('input')
    if(!text) return
    console.log('text', text)
}
