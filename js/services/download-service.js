'use strict'
function downloadCanvas(elLink) {
    prepareForDownload()
    const data = gElCanvas.toDataURL()
    elLink.href = data
    elLink.download = 'my-meme.jpg'
}

function prepareForDownload(){
    clearCanvas()
    const imgIdx = gImgs.findIndex(img => img.id === +gMeme.selectedImgId)
    drawImg(gImgs[imgIdx].url)
    redrawText()
}