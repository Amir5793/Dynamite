const $ = document

// Functions
    function SliderSetter (wichSlider,slider1,slider2,slider3) {
        if(wichSlider == 'map'){
            map1.src = slider1
            map2.src = slider2
            map3.src = slider3
        }
        if(wichSlider == 'character'){
            character1.src = slider1
            character2.src = slider2
            character3.src = slider3
        }
    }

// character slider logic

const characterSelectorLeft = $.querySelector('.character-selector-left')
const characterSelectorCenter = $.querySelector('.character-selector-center')
const characterSelectorRight = $.querySelector('.character-selector-right')

characterSelectorLeft.addEventListener('click', () => {
    characterSelectorLeft.classList.add('top')
    characterSelectorCenter.classList.remove('top')
    characterSelectorRight.classList.remove('top')    
})
characterSelectorCenter.addEventListener('click', () => {
    characterSelectorCenter.classList.add('top')
    characterSelectorLeft.classList.remove('top')
    characterSelectorRight.classList.remove('top')    
})
characterSelectorRight.addEventListener('click', () => {
    characterSelectorRight.classList.add('top')
    characterSelectorLeft.classList.remove('top')
    characterSelectorCenter.classList.remove('top')    
})

// map slider logic

const mapSelectorLeft = $.querySelector('.map-selector-left')
const mapSelectorCenter = $.querySelector('.map-selector-center')
const mapSelectorRight = $.querySelector('.map-selector-right')

mapSelectorLeft.addEventListener('click', () => {
    mapSelectorLeft.classList.add('top')
    mapSelectorCenter.classList.remove('top')
    mapSelectorRight.classList.remove('top')    
})
mapSelectorCenter.addEventListener('click', () => {
    mapSelectorCenter.classList.add('top')
    mapSelectorLeft.classList.remove('top')
    mapSelectorRight.classList.remove('top')    
})
mapSelectorRight.addEventListener('click', () => {
    mapSelectorRight.classList.add('top')
    mapSelectorLeft.classList.remove('top')
    mapSelectorCenter.classList.remove('top')    
})

// map selection modal logic

const mapsSelectionModal = $.querySelector('.maps-selection-modal')
const mapButton = $.querySelector('.map-button')
const previousBtn = $.querySelector('.previous-btn')
const nextBtn = $.querySelector('.next-btn')
const map1 = $.querySelector('#map1')
const map2 = $.querySelector('#map2')
const map3 = $.querySelector('#map3')

const maps = ['../img/home/zombie-zone-map-png.png','../img/home/zombie-zone-map-png.png','../img/home/zombie-zone-map-png.png','../img/home/zombie-zone-map-png.png','../img/home/zombie-zone-map-png.png','../img/home/zombie-zone-map-png.png','../img/home/zombie-zone-map-png.png','../img/home/zombie-zone-map-png.png','../img/home/zombie-zone-map-png.png','../img/home/zombie-zone-map-png.png','../img/home/zombie-zone-map-png.png']
let firstShownMap = 0
let lastShownMap = 3
shownMaps = []

previousBtn.addEventListener('click', () => {
    if(firstShownMap == 0){
        return false
    }
    firstShownMap--
    lastShownMap--
    shownMaps = maps.slice(firstShownMap,lastShownMap)
    SliderSetter('map',shownMaps[0],shownMaps[1],shownMaps[2])
    console.log(shownMaps);
    console.log(firstShownMap);
    console.log(lastShownMap);    
})
nextBtn.addEventListener('click', () => {
    if(lastShownMap == maps.length){
        return false
    }
    firstShownMap++
    lastShownMap++
    shownMaps = maps.slice(firstShownMap,lastShownMap)
    SliderSetter('map',shownMaps[0],shownMaps[1],shownMaps[2])
    console.log(shownMaps);
    console.log(firstShownMap);
    console.log(lastShownMap);    
})
map1.addEventListener('click',(e) => {
    mapsSelectionModal.classList.add('hidden')
})
map2.addEventListener('click',(e) => {
    mapsSelectionModal.classList.add('hidden')
})
map3.addEventListener('click',(e) => {
    mapsSelectionModal.classList.add('hidden')
})
mapButton.addEventListener('click', () => {
    mapsSelectionModal.classList.remove('hidden')
})

SliderSetter('map',maps[0],maps[1],maps[2])

// character selection modal logic

const charactersSelectionModal = $.querySelector('.characters-selection-modal')
const characterButton = $.querySelector('.character-button')
const charactersPreviousBtn = $.querySelector('.characters-previous-btn')
const charactersNextBtn = $.querySelector('.characters-next-btn')
const character1 = $.querySelector('#character1')
const character2 = $.querySelector('#character2')
const character3 = $.querySelector('#character3')

const characters = ['../img/turnsloop/characters/character (1).png','../img/turnsloop/characters/character (2).png','../img/turnsloop/characters/character (3).png']
let firstShowncharacter = 0
let lastShowncharacter = 3
let showncharacters = []

charactersPreviousBtn.addEventListener('click', () => {
    if(firstShowncharacter == 0){
        return false
    }
    firstShowncharacter--
    lastShowncharacter--
    showncharacters = characters.slice(firstShowncharacter,lastShowncharacter)
    SliderSetter('character',showncharacters[0],showncharacters[1],showncharacters[2])
    console.log(showncharacters);
    console.log(firstShowncharacter);
    console.log(lastShowncharacter);    
})
charactersNextBtn.addEventListener('click', () => {
    if(lastShowncharacter == characters.length){
        return false
    }
    firstShowncharacter++
    lastShowncharacter++
    showncharacters = characters.slice(firstShowncharacter,lastShowncharacter)
    SliderSetter('character',showncharacters[0],showncharacters[1],showncharacters[2])
    console.log(showncharacters);
    console.log(firstShowncharacter);
    console.log(lastShowncharacter);    
})
character1.addEventListener('click',(e) => {
    charactersSelectionModal.classList.add('hidden')
})
character2.addEventListener('click',(e) => {
    charactersSelectionModal.classList.add('hidden')
})
character3.addEventListener('click',(e) => {
    charactersSelectionModal.classList.add('hidden')
})
characterButton.addEventListener('click', () => {
    charactersSelectionModal.classList.remove('hidden')
})

SliderSetter('character',characters[0],characters[1],characters[2])