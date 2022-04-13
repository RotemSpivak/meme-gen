'use strict'
var gText = []
var textLine = false
function drawImg(src){
    var img = new Image()
    img.src = src
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
}

function drawText(txt,x,y){
    textLine = true
    gCtx.textBaseline = "middle"
    gCtx.font = "60px impact"
    gCtx.textAlign = 'center';
    gCtx.fillStyle = 'white';
    gCtx.fillText(txt, x, y);
    gCtx.strokeStyle = 'white'
    gCtx.strokeText(txt,x,y)
    console.log('list', gText)
    

}
function onSubmitText(){
    var text = document.querySelector(`input`).value
    if(!text) return
    gText.push(text)
    drawText(gText[0],gElCanvas.width/2,50)
    drawText(gText[1],gElCanvas.width/2,gElCanvas.height - 50)
    // drawText(gText[2],gElCanvas.width/2,gElCanvas.height/2)
}
