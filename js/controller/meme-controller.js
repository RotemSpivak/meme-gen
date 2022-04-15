'use strict'

function switchLine(jumpToIdx){
    if(jumpToIdx){
        var idx = jumpToIdx
        clearCanvas()
        const imgIdx = gImgs.findIndex(img => img.id === +gMeme.selectedImgId)
        drawImg(gImgs[imgIdx].url)
        drawRect(idx)
        redrawText()
    } 
    else {
        const idx = gMeme.selectedLineIdx
        if(idx >= gMeme.lines.length - 1){
            gMeme.selectedLineIdx = 0
            clearCanvas()
            const imgIdx = gImgs.findIndex(img => img.id === +gMeme.selectedImgId)
            drawImg(gImgs[imgIdx].url)
            redrawText()
            drawRect(0)
        } else {
            var newIdx = ++gMeme.selectedLineIdx
            clearCanvas()
            const imgIdx = gImgs.findIndex(img => img.id === +gMeme.selectedImgId)
            drawImg(gImgs[imgIdx].url)
            redrawText()
            drawRect(newIdx)
        }   
    }
    const elInput = document.querySelector('input[name="meme-text"]')
    elInput.value = gMeme.lines[gMeme.selectedLineIdx].txt
}



