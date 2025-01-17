import { localStorageHandler } from "../utils/function.js"
import { serverRoomsHandler } from "../utils/function.js"

Parse.initialize("YceaSBI2iOQuYYVTr7IIT0FOt8Vr9bJy4B1lTGm1", "D1dPBQmwMLtXDYDE1ibviC3y7HKXFRgosG9dITLT"); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
Parse.serverURL = "https://parseapi.back4app.com/";

const $ = document

let details = {
    name : null,
    HP : 100,
    FP : 100,
    map : '../img/home/zombie-zone-map-png.png',
    character : '../img/turnsloop/characters/character (2).png',
    place : null
}
let characterDetailFlag = false

// Functions
function sliderSetter (wichSlider,slider1,slider2,slider3) {
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

function selectionSetter (wichSlider,slider1,slider2,slider3) {
    if(wichSlider == 'map'){
        map1.src = slider1
        map2.src = slider2
        map3.src = slider3
    }
    if(wichSlider == 'character'){
        selectionCharacter1.src = slider1
        selectionCharacter2.src = slider2
        selectionCharacter3.src = slider3
    }
}

let serverId = 1
const servers = $.querySelector('.servers')
let selectedRoom
let joinBtn = $.querySelector('.join-btn')
function roomCreator (roomName, roomCon = servers, id) {
    
    let roomContainer = $.createElement('dev')
    roomContainer.className = 'server'
    roomContainer.id = id
    
    let roomSelector = $.createElement('input')
    roomSelector.type = 'radio'
    roomSelector.name = 'server'
    
    let roomLabel = $.createElement('label')
    roomLabel.setAttribute('for', 'server')
    roomLabel.innerHTML = roomName
    
    roomContainer.appendChild(roomSelector)
    roomContainer.appendChild(roomLabel)
    
    roomCon.appendChild(roomContainer)
    
    roomSelector.addEventListener('click',() => {selectedRoom = id;joinBtn.classList.remove('hidden')})
}

const joinMainContent = $.querySelector('.join-main-content')    
const hostMainContent = $.querySelector('.host-main-content')
const myRoomsMainContent = $.querySelector('.my-rooms-main-content')
const roomOptions = $.querySelector(".room-options")
joinBtn.addEventListener('click', () => {
    joinMainContent.classList.add('hidden')
    hostMainContent.classList.add('hidden')
    myRoomsMainContent.classList.add('hidden')
    roomOptions.classList.add('hidden')
    $.querySelector('.waiting-room').classList.remove('hidden')

    serverRoomsHandler('update','room',selectedRoom,'room','playersInRoom',null,null,localStorageHandler('get','details'))
    console.log([localStorageHandler('get','details')]);
    setInterval(() => {
        serverRoomsHandler('get','room',selectedRoom,'playersInRoom')
        .then(json => JSON.parse(json))
        .then(palyers => {
            serverRoomsHandler('get','room',selectedRoom,'maxCount')
            .then(json => JSON.parse(json))
            .then(data => {
                if(palyers.length == data){
                    console.log('object');
                }
            })
        })
    },2000)
})

// character slider logic

const characterSelectorLeft = $.querySelector('.character-selector-left')
const characterSelectorCenter = $.querySelector('.character-selector-center')
const characterSelectorRight = $.querySelector('.character-selector-right')
const selectionCharacter1 = $.querySelector('#selectionCharacter1')
const selectionCharacter2 = $.querySelector('#selectionCharacter2')
const selectionCharacter3 = $.querySelector('#selectionCharacter3')

characterSelectorLeft.addEventListener('click', (e) => {
    characterSelectorLeft.classList.add('top')
    characterSelectorCenter.classList.remove('top')
    characterSelectorRight.classList.remove('top')
    if (!characterDetailFlag) {
        details.character = characters[0];
    }else if (characterDetailFlag){
        details.character = showncharacters[0];
    }
})
characterSelectorCenter.addEventListener('click', (e) => {
    characterSelectorCenter.classList.add('top')
    characterSelectorLeft.classList.remove('top')
    characterSelectorRight.classList.remove('top')
    if (!characterDetailFlag) {
        details.character = characters[1];
    }else if (characterDetailFlag){
        details.character = showncharacters[1];
    }
})
characterSelectorRight.addEventListener('click', (e) => {
    characterSelectorRight.classList.add('top')
    characterSelectorLeft.classList.remove('top')
    characterSelectorCenter.classList.remove('top')
    if (!characterDetailFlag) {
        details.character = characters[2];
    }else if (characterDetailFlag){
        details.character = showncharacters[2];
    }
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
const previousBtn = $.querySelector('.map-previous-btn')
const nextBtn = $.querySelector('.map-next-btn')
const map1 = $.querySelector('#map1')
const map2 = $.querySelector('#map2')
const map3 = $.querySelector('#map3')

const maps = ['../img/home/zombie-zone-map-png.png','../img/home/zombie-zone-map-png.png','../img/home/zombie-zone-map-png.png','../img/home/zombie-zone-map-png.png','../img/home/zombie-zone-map-png.png','../img/home/zombie-zone-map-png.png','../img/home/zombie-zone-map-png.png','../img/home/zombie-zone-map-png.png','../img/home/zombie-zone-map-png.png','../img/home/zombie-zone-map-png.png','../img/home/zombie-zone-map-png.png']
let firstShownMap = 0
let lastShownMap = 3
let shownMaps = ['']

previousBtn.addEventListener('click', () => {
    if(firstShownMap == 0){
        return false
    }
    firstShownMap--
    lastShownMap--
    shownMaps = maps.slice(firstShownMap,lastShownMap)
    sliderSetter('map',shownMaps[0],shownMaps[1],shownMaps[2])
})
nextBtn.addEventListener('click', () => {
    if(lastShownMap == maps.length){
        return false
    }
    firstShownMap++
    lastShownMap++
    shownMaps = maps.slice(firstShownMap,lastShownMap)
    sliderSetter('map',shownMaps[0],shownMaps[1],shownMaps[2])
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

sliderSetter('map',maps[0],maps[1],maps[2])

// character selection modal logic

const charactersSelectionModal = $.querySelector('.characters-selection-modal')
const characterButton = $.querySelector('.character-button')
const characterPreviousBtn = $.querySelector('.character-previous-btn')
const characterNextBtn = $.querySelector('.character-next-btn')
const character1 = $.querySelector('#character1')
const character2 = $.querySelector('#character2')
const character3 = $.querySelector('#character3')

const characters = ['../img/turnsloop/characters/character (1).png','../img/turnsloop/characters/character (2).png','../img/turnsloop/characters/character (3).png']
let firstShowncharacter = 0
let lastShowncharacter = 3
let showncharacters = []

characterPreviousBtn.addEventListener('click', () => {
    if(firstShowncharacter == 0){
        return false
    }
    firstShowncharacter--
    lastShowncharacter--
    showncharacters = characters.slice(firstShowncharacter,lastShowncharacter)
    sliderSetter('character',showncharacters[0],showncharacters[1],showncharacters[2])
    selectionSetter('character',showncharacters[0],showncharacters[1],showncharacters[2])
    characterDetailFlag = true
})
characterNextBtn.addEventListener('click', () => {
    if(lastShowncharacter == characters.length){
        return false
    }
    firstShowncharacter++
    lastShowncharacter++
    showncharacters = characters.slice(firstShowncharacter,lastShowncharacter)
    sliderSetter('character',showncharacters[0],showncharacters[1],showncharacters[2])
    selectionSetter('character',showncharacters[0],showncharacters[1],showncharacters[2])
    characterDetailFlag = true
})
character1.addEventListener('click',(e) => {
    details.character = characters[0]
    characterSelectorLeft.classList.add('top')

    charactersSelectionModal.classList.add('hidden')
})
character2.addEventListener('click',(e) => {
    details.character = characters[1]
    characterSelectorCenter.classList.add('top')

    charactersSelectionModal.classList.add('hidden')
})
character3.addEventListener('click',(e) => {
    details.character = characters[2]
    characterSelectorRight.classList.add('top')

    charactersSelectionModal.classList.add('hidden')
})
characterButton.addEventListener('click', () => {
    charactersSelectionModal.classList.remove('hidden')
    characterSelectorLeft.classList.remove('top')
    characterSelectorCenter.classList.remove('top')
    characterSelectorRight.classList.remove('top')
})

sliderSetter('character',characters[0],characters[1],characters[2])
selectionSetter('character',characters[0],characters[1],characters[2])

// enter name modal

const enterNameModal = $.querySelector('.enter-name-modal')
const modalInput = $.querySelector('.modal-input')
const modalBtn = $.querySelector('.modal-btn')
const characterSpeech = $.querySelector('.character-speech')

if (localStorageHandler('get', 'name') == null){
    $.querySelector('.character-selector').classList.add('hidden')
    $.querySelector('.map-selector').classList.add('hidden')    
    $.querySelector('.options-coutntainer').classList.add('hidden')  
    $.querySelector('.player-name').classList.add('hidden')  
    enterNameModal.classList.remove('hidden')

    modalBtn.addEventListener('click', () => {
        localStorageHandler('set', 'name', modalInput.value)
        enterNameModal.classList.add('hidden')
        $.querySelector('.character-selector').classList.remove('hidden')
        $.querySelector('.map-selector').classList.remove('hidden')    
        $.querySelector('.options-coutntainer').classList.remove('hidden')  
        $.querySelector('.player-name').classList.remove('hidden')
        $.querySelector('.start-h1').classList.remove('hidden')

        $.querySelector('.player-name-p').innerHTML = localStorageHandler('get' ,'name')
    })
}else{
$.querySelector('.player-name-p').innerHTML = localStorageHandler('get' ,'name')
}

// main options

const aboutUS = $.querySelector('.about-us')
const aboutUsModal = $.querySelector('.about-us-option')
const backdrop = $.querySelector('.backdrop')

aboutUS.addEventListener('click', () => {
    $.querySelector('.character-selector').classList.add('hidden')
    $.querySelector('.map-selector').classList.add('hidden')    
    $.querySelector('.main-options').classList.add('hidden')  
    $.querySelector('.player-name').classList.add('hidden')  
    aboutUsModal.classList.remove('hidden')
    backdrop.classList.remove('hidden')

    backdrop.addEventListener('click', () => {
        $.querySelector('.character-selector').classList.remove('hidden')
        $.querySelector('.map-selector').classList.remove('hidden')    
        $.querySelector('.main-options').classList.remove('hidden')  
        $.querySelector('.player-name').classList.remove('hidden')  
        aboutUsModal.classList.add('hidden')
        backdrop.classList.add('hidden')
    })
    aboutUsModal.addEventListener('click', () => {
        $.querySelector('.character-selector').classList.remove('hidden')
        $.querySelector('.map-selector').classList.remove('hidden')    
        $.querySelector('.main-options').classList.remove('hidden')  
        $.querySelector('.player-name').classList.remove('hidden')  
        aboutUsModal.classList.add('hidden')
        backdrop.classList.add('hidden')
    })

})

const start = $.querySelector('.start')
const startOptions = $.querySelector('.start-options')
const listId = 'egYhCENGAt'

start.addEventListener('click', () => {
    details.name = localStorageHandler('get', 'name')
    details.place = Math.floor(Math.random()*17)
    localStorageHandler('set', 'details', JSON.stringify(details))
    $.querySelector('.character-selector').classList.add('hidden')
    $.querySelector('.map-selector').classList.add('hidden')    
    $.querySelector('.main-options').classList.add('hidden')  
    $.querySelector('.player-name').classList.add('hidden')  
    backdrop.classList.remove('hidden')
    startOptions.classList.remove('hidden')

    const joinRoom = $.querySelector('.join-room')
    const myRooms = $.querySelector('.my-rooms')
    const hostRoom = $.querySelector('.host-room')
    const roomNameInput = $.querySelector('.roomName-input')
    const roomPassInput = $.querySelector('.roomPass-input')
    const roomCountInput = $.querySelector('.roomCount-input')
    const roomSubmiteBtn = $.querySelector('.room-submite-btn')
    const errorContainer = $.querySelector('.error') 
    const myRoomsServer = $.querySelector('.my-servers')
    const back = $.querySelector('.back')
    const loading = $.querySelector('.loading')
    let serverFlag = 'join'

    joinRoom.addEventListener('click', () => {
        serverFlag = 'join'
        joinRoom.classList.add('selected')
        hostRoom.classList.remove('selected')
        myRooms.classList.remove('selected')
        myRoomsMainContent.classList.add('hidden')
        joinMainContent.classList.remove('hidden')
        hostMainContent.classList.add('hidden')

        let Rooms;

        serverRoomsHandler('get','list',listId)
        .then(json => JSON.parse(json))
        .then(obj => {Rooms = obj
            servers.innerHTML = ''
            Rooms.forEach(room => {
                roomCreator(room[1],servers,room[0])
            });
        })
    })
    hostRoom.addEventListener('click', () => {
        serverFlag = 'host'
        hostRoom.classList.add('selected')
        joinRoom.classList.remove('selected')
        myRooms.classList.remove('selected')
        myRoomsMainContent.classList.add('hidden')
        joinMainContent.classList.add('hidden')
        hostMainContent.classList.remove('hidden')
    })
    myRooms.addEventListener('click', () => {
        serverFlag = 'host'
        myRooms.classList.add('selected')
        joinRoom.classList.remove('selected')
        joinMainContent.classList.add('hidden')
        myRoomsMainContent.classList.remove('hidden')
        hostRoom.classList.remove('selected')
        hostMainContent.classList.add('hidden')

        if(localStorageHandler('get','myRooms')){
            myRoomsServer.innerHTML = ''
            JSON.parse(localStorageHandler('get','myRooms')).forEach(room => {
                roomCreator(room[1],myRoomsServer,room[0])
            })
        }
    })
    roomSubmiteBtn.addEventListener('click', () => {

        if (roomNameInput.value != '' && roomPassInput.value != '') {

            if (roomCountInput.value >= 2 && roomCountInput.value <= 12){
                
                            serverRoomsHandler('get', 'list', listId)
                            .then(json => JSON.parse(json))
                            .then(obj => {
                                var isExist
                                if (obj.length == 0) {
                                    isExist = true
                                }else{
                                    obj.forEach(room => {
                                        if (room[1] == roomNameInput.value) {
                                            errorContainer.classList.remove('hidden')
                                            errorContainer.innerHTML = 'A room with this name already exists please enter another name'
                                            isExist = false
                                        }else{
                                        isExist = true
                                        }
                                    })
                                }
                                return isExist
                            })
                            .then(isExist => {
                                if(isExist){
                                errorContainer.classList.add('hidden')
                                let roomName = roomNameInput.value
                                let roompass = roomPassInput.value
                                let roomCount = roomCountInput.value
                                serverRoomsHandler('set','uncompleted',null,roomName,roompass,roomCount)
                                roomNameInput.value = ''
                                roomPassInput.value = ''
                                roomCountInput.value = ''
                                alert('room created successfully')
                            }})
            }else{
                errorContainer.classList.remove('hidden')
                errorContainer.innerHTML = 'please take a number between 2 and 12 for the count of players'
            }
        }else{
            errorContainer.classList.remove('hidden')
            errorContainer.innerHTML = 'please fill all fields' 
        }
    });
    back.addEventListener('click', () => {
        serverFlag = 'join'
        $.querySelector('.character-selector').classList.remove('hidden')
        $.querySelector('.map-selector').classList.remove('hidden')    
        $.querySelector('.main-options').classList.remove('hidden')  
        $.querySelector('.player-name').classList.remove('hidden')  
        backdrop.classList.add('hidden')
        startOptions.classList.add('hidden')
    });

    if (serverFlag === 'join') {
        servers.innerHTML = ''
        hostMainContent.classList.add('hidden')
        myRoomsMainContent.classList.add('hidden')
        let Rooms;
        
        async function roomHandler () {
            await serverRoomsHandler('get','list',listId)
            .then(json => JSON.parse(json))
            .then(obj => {Rooms = obj
                Rooms.forEach(room => {
                    roomCreator(room[1],servers,room[0])
                });
            })
            loading.classList.add('hidden')
        }
        roomHandler()
        loading.classList.remove('hidden')
        
    }
})
// serverRoomsHandler('update','list',null,'clear')