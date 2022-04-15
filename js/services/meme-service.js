'use strict'
var gMeme = []
function createMeme(id, txt, size = 60, fillColor = 'white', strokeStyle = 'white', y = 50){
    gMeme ={
        selectedImgId: id,
        selectedLineIdx: 0,
        lines: [
            {
                txt: '',
                size,
                align: 'center',
                fillColor: 'white',
                strokeStyle: 'white',
                font: 'Impact',
                y,
            },
        ],
    }
    return gMeme  
}