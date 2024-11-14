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
    pageFlip.play()
    options.style.display = 'none'

    players.style.display = 'inline-block'

    const twoPlayers = $.querySelector('.two-players')
    twoPlayers.addEventListener('click', e => {
        let playerCount = 1

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

    const threePlayers = $.querySelector('.three-players')
    threePlayers.addEventListener('click', e => {
        let playerCount = 2

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

})