'use strict'

function drawImg(src){
    var img = new Image()
    img.src = src
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
}

function drawText(idx){
    const {txt, y, fillStyle, size, strokeStyle} = gMeme.lines[idx]
    gCtx.textBaseline = "middle"
    gCtx.font = `${size}px impact`
    gCtx.textAlign = "center"
    // gCtx.fillStyle = fillStyle
    gCtx.fillText(txt, gElCanvas.width/2, y);
    // gCtx.strokeStyle = strokeStyle
    gCtx.strokeText(txt, gElCanvas.width/2,y)
}

function drawRect(idx){
    gCtx.strokeStyle = "black";
    switch(idx) {
        case 0:
            gCtx.rect(10, 10, 470, 80);
            gCtx.strokeRect(10,10,470,80)

            break
        case 1:
            gCtx.rect(10, gElCanvas.height - 90, 470, 80);
            gCtx.strokeRect(10,gElCanvas.height - 90,470,80)
            break
        case 2:
            gCtx.rect(10, gElCanvas.height/2 - 35, 470, 80);
            gCtx.strokeRect(10,gElCanvas.height/2 - 35,470,80)
            break
            
    }
} 

function deleteRect(idx){
    gCtx.strokeStyle = "";
    switch(idx) {
        case 0:
            gCtx.rect(10, 10, 470, 80);
            gCtx.strokeRect(10,10,470,80)

            break
        case 1:
            gCtx.rect(10, gElCanvas.height - 90, 470, 80);
            gCtx.strokeRect(10,gElCanvas.height - 90,470,80)
            break
        case 2:
            gCtx.rect(10, gElCanvas.height/2, 470, 80);
            gCtx.strokeRect(10,gElCanvas.height/2,470,80)
            break       
    }   
}

function onSubmitText(event){
    var input = document.querySelector(`input[name="meme-text"]`)
    if(!event.target.value) return
    gMeme.lines[gMeme.selectedLineIdx].txt = event.target.value
    clearCanvas()
    const imgIdx = gImgs.findIndex(img => img.id === +gMeme.selectedImgId)
    drawImg(gImgs[imgIdx].url)
    redrawText()
    input.value = ''
}

function redrawText(){
    gMeme.lines.forEach((line,idx) => {
        drawText(idx)
    })
}
function onAddLine(event){
    var length = gMeme.lines.length
    if(gMeme.lines.length > 2) return
    var y = (length === 1) ?  gElCanvas.height - 50 : (length === 2) ? gElCanvas.height/2 : 50
    gMeme.lines.push({
        txt: '',
        size: 60,
        align: 'center',
        txtColor: 'black',
        fontStyle: 'Impact',
        y,
    })
    drawRect(length - 1)
}

function deleteTextLine(){ 
    gMeme.lines[gMeme.selectedLineIdx].txt = ''
    clearCanvas()
    const imgIdx = gImgs.findIndex(img => img.id === +gMeme.selectedImgId)
    drawImg(gImgs[imgIdx].url)
    redrawText()
}

function clearCanvas(){
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
}

function onColorChange(event){
    var color = event.target.value
    gCtx.fillStyle = color
}

function onStrokeChange(event){
    var strokeColor = event.target.value
    gCtx.strokeStyle = strokeColor
}

function onSizeChange(diff){
    const idx = gMeme.selectedLineIdx
    gMeme.lines[idx].size += diff
    rerenderCanvas();
}

function moveText(diff){
    const idx = gMeme.selectedLineIdx
    gMeme.lines[idx].y += diff
    rerenderCanvas()
}

function rerenderCanvas() {
    clearCanvas()
    const imgIdx = gImgs.findIndex(img => img.id === +gMeme.selectedImgId)
    drawImg(gImgs[imgIdx].url)
    // drawRect(idx)
    redrawText()
}