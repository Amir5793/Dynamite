const $ = document

const closeBook = $.querySelector(".close-book")
const openBook = $.querySelector(".open-book")

closeBook.addEventListener('click', e => {
    console.log(e.target);
    closeBook.className = 'close-book close-animation'

    const closingBook = $.querySelector(".close-animation")
    closingBook.addEventListener('animationend', e => {
        openBook.style.display = 'inline-block'
        closingBook.style.display = 'none'
    })
})

const options = $.querySelector('.main-options')
const start = $.querySelector('.start')
const settings = $.querySelector('.settings')
const credits = $.querySelector('.credits')
let pageFlip = new Audio('../sound/sound effects/page-flip.mp3')

const players = $.querySelector('.players')
start.addEventListener('click', e => {
    playersBack.style.display = 'inline-block'

    pageFlip.play()
    options.style.display = 'none'

    players.style.display = 'inline-block'

    const twoPlayers = $.querySelector('.two-players')
    twoPlayers.addEventListener('click', e => {
        const userNamesMainCountainer = $.querySelector(".user-names-countainer")
        userNamesMainCountainer.innerHTML = ''

        seasonsBack.style.display = 'inline-block'

        let playerCount = 2

        pageFlip.play()

        const seasons = $.querySelector('.seasons')
        players.style.display = 'none'
        seasons.style.display = 'inline-block'

        const classicSeason = $.querySelector('.classic')
        classicSeason.addEventListener('click', e => {
            pageFlip.play()

            const userNamesCountainer = $.querySelector('.user-names')
            const userNamesMainCountainer = $.querySelector('.user-names-countainer')

            seasons.style.display = 'none'
            userNamesCountainer.style.display = 'inline-block'
            userNamesMainCountainer.innerHTML = ''

            userNameInputCreator(playerCount)
        })
    })

    const threePlayers = $.querySelector('.three-players')
    threePlayers.addEventListener('click', e => {
        const userNamesMainCountainer = $.querySelector(".user-names-countainer")
        userNamesMainCountainer.innerHTML = ''

        seasonsBack.style.display = 'inline-block'

        let playerCount = 3

        pageFlip.play()

        const seasons = $.querySelector('.seasons')
        players.style.display = 'none'
        seasons.style.display = 'inline-block'

        const classicSeason = $.querySelector('.classic')
        classicSeason.addEventListener('click', e => {
            pageFlip.play()

            const userNamesCountainer = $.querySelector('.user-names')

            seasons.style.display = 'none'
            userNamesCountainer.style.display = 'inline-block'

            userNameInputCreator(playerCount)
        })
    })

    const fourPlayers = $.querySelector('.four-players')
    fourPlayers.addEventListener('click', e => {
        const userNamesMainCountainer = $.querySelector(".user-names-countainer")
        userNamesMainCountainer.innerHTML = ''

        seasonsBack.style.display = 'inline-block'

        let playerCount = 4

        pageFlip.play()

        const seasons = $.querySelector('.seasons')
        players.style.display = 'none'
        seasons.style.display = 'inline-block'

        const classicSeason = $.querySelector('.classic')
        classicSeason.addEventListener('click', e => {
            pageFlip.play()

            const userNamesCountainer = $.querySelector('.user-names')

            seasons.style.display = 'none'
            userNamesCountainer.style.display = 'inline-block'

            userNameInputCreator(playerCount)
        })
    })
    
    const userNamesCountainer = $.querySelector(".user-names-countainer")
    function userNameInputCreator(playerCount) {

        const userNamesMainCountainer = $.querySelector(".user-names-countainer")
        userNamesMainCountainer.innerHTML = ''    

        let playersList = []
        let i = 1
        for (i; i <= playerCount; i++) {

            let input = $.createElement('input')
            input.className = 'username-input'
            let label = $.createElement('label')
            label.className = 'username-label'
            label.innerHTML =`Player ${i}`

            input.setAttribute('id', `user ${i}`)
            input.setAttribute('name', `user ${i}`)
            label.setAttribute('for', `user ${i}`)

            userNamesCountainer.appendChild(label)
            userNamesCountainer.appendChild(input)
        }
        let h1 = $.createElement('h1')
        h1.innerHTML = 'Start the game'

        userNamesCountainer.appendChild(h1)

        h1.addEventListener('click',() => {
            localStorageHanler('count', playerCount)

            let inputList = $.querySelectorAll('input')
            inputList.forEach((input) => {
                if(input.value == ''){
                    playersList.push('player' + (playersList.length + 1))
                }else{
                    playersList.push(input.value)
                }
            })

            localStorageHanler('playersList', JSON.stringify(playersList))

            location.pathname = '/mainpage.html'
        })

    }

    function localStorageHanler (name,value) {
        localStorage.setItem(name,value)
    }

})


const creditsOption = $.querySelector('.credits-option')

credits.addEventListener('click', () => {
    options.style.display = 'none'
    creditsOption.style.display = 'inline-block'
    creditsBack.style.display = 'inline-block'
})

const playersBack = $.querySelector('.players-back')
const seasonsBack = $.querySelector('.seasons-back')
const userBack = $.querySelector('.users-back')
const creditsBack = $.querySelector('.credits-back')

playersBack.addEventListener('click', () => {
    playersBack.style.display = 'none'
    players.style.display = 'none'
    options.style.display = 'inline-block'
})
seasonsBack.addEventListener('click', () => {
    seasonsBack.style.display = 'none'
    const seasons = $.querySelector('.seasons')
    seasons.style.display = 'none'
    players.style.display = 'inline-block'

    const userNamesMainCountainer = $.querySelector(".user-names-countainer")
    userNamesMainCountainer.innerHTML = ''
})
userBack.addEventListener('click', () => {
    userBack.style.display = 'none'
    const userNamesCountainer = $.querySelector(".user-names")
    userNamesCountainer.style.display = 'none'
    const seasons = $.querySelector('.seasons')
    
    seasons.style.display = 'inline-block'
})
creditsBack.addEventListener('click', () => {
    creditsBack.style.display = 'none'
    creditsOption.style.display = 'none'
    options.style.display = 'inline-block'
})