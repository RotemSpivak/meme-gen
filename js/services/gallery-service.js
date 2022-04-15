'use strict'
let gCurrImg
const elGallery = document.querySelector('.gallery')
const elCanvasContainer = document.querySelector('.meme-editor-container')
var gImgs = [
    {id:1, url:'img/1.jpg', keywords:['politics', 'funny', 'famous']},
    {id:3, url:'img/3.jpg', keywords:['dog', 'baby', 'cute', 'animal', 'child']},
    {id:4, url:'img/4.jpg', keywords:['cat', 'cute', 'animal',]},
    {id:5, url:'img/5.jpg', keywords:['child', 'cute', 'funny']},
    {id:6, url:'img/6.jpg', keywords:['movie', 'celebrity', 'tv']},
    {id:7, url:'img/7.jpg', keywords:['baby', 'cute', 'funny', 'child']},
    {id:8, url:'img/8.jpg', keywords:['movie', 'celebrity', 'tv']},
    {id:9, url:'img/9.jpg', keywords:['baby', 'cute', 'funny', 'child']},
    {id:10, url:'img/10.jpg', keywords:['politics', 'famous', 'funny']},
    {id:11, url:'img/11.jpg', keywords:['sports', 'funny']},
    {id:12, url:'img/12.jpg', keywords:['tv', 'famous']},
    {id:13, url:'img/13.jpg', keywords:['movie', 'celebrity', 'famous', 'tv']},
    {id:14, url:'img/14.jpg', keywords:['movie', 'celebrity', 'tv']},
    {id:15, url:'img/15.jpg', keywords:['movie', 'celebrity', 'famous', 'tv']},
    {id:16, url:'img/16.jpg', keywords:['movie', 'celebrity','famous', 'tv']},
    {id:17, url:'img/17.jpg', keywords:['politics', 'famous']},
    {id:18, url:'img/18.jpg', keywords:['animation', 'movie']},
    {id:19, url:'img/19.jpg', keywords:['dog', 'animal','funny']},
    {id:20, url:'img/20.jpg', keywords:['cat', 'animal','funny']},
    {id:21, url:'img/21.jpg', keywords:['cat', 'animal','funny']},
    {id:22, url:'img/22.jpg', keywords:['cat', 'animal','funny']},
    {id:23, url:'img/23.jpg', keywords:['cat', 'animal','funny']},
    {id:24, url:'img/24.jpg', keywords:['cat', 'animal','funny']},
    {id:25, url:'img/25.jpg', keywords:['cat', 'animal','funny']},
]


function renderImages(imgs){
    if(imgs){
        let strHTML = ''
        imgs.forEach(image => strHTML+=`<img class="meme-image" id="${image.id}" src="./${image.url}" onclick="chosenImg(event)">`)
        elGallery.innerHTML = strHTML
    }
}

function chosenImg(event){
    var id = event.target.id
    gMeme = createMeme(id, '')
    var src = event.target.src
    var elSearch = document.querySelector('.search')
    elSearch.style.display = "none"
    elGallery.style.display = "none"
    elCanvasContainer.style.display = "flex"
    drawImg(src)
    return gCurrImg = event
}

function goToGallery(){
    var elSearch = document.querySelector('.search')
    elGallery.style.display = "block"
    elCanvasContainer.style.display = "none"
    elSearch.style.display = "block"
}

function onSearch(event) {
    const text = event.target.value
    if(!text) {
        renderImages(gImgs)
        return
    } 
    var searchedImgs = gImgs.filter(img => {
        let match = false
        img.keywords.forEach(keyword => {
            if (keyword.includes(text)) match = true
        })
        return match
    })
    renderImages(searchedImgs)
}
