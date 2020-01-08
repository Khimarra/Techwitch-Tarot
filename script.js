const deckUrl = 'https://cors-anywhere.herokuapp.com/https://rws-cards-api.herokuapp.com/api/v1/cards'

const card = document.querySelectorAll('.card')

// const cardText = document.querySelectorAll('.desktopInfo')

const imageContainers = document.querySelectorAll('.up')


async function showCards() {
    try {
        let loadCards = await axios.get(deckUrl)
        let totalCards = 78
        let getCards = loadCards.data.cards
        // getCards is the array of cards

        let imageArray = [
            'cards/tarot-magician.jpg', 
            'cards/tarot-highpriestess.jpg', 
            'cards/tarot-empress.jpg', 
            'cards/tarot-emperor.jpg', 
            'cards/tarot-hierophant.jpg', 
            'cards/tarot-lovers.jpg', 
            'cards/tarot-chariot.jpg', 
            'cards/tarot-strength.jpg', 
            'cards/tarot-hermit.jpg', 
            'cards/tarot-wheeloffortune.jpg', 
            'cards/tarot-justice.jpg', 
            'cards/tarot-hangedman.jpg', 
            'cards/tarot-death.jpg', 
            'cards/tarot-temperance.jpg', 
            'cards/tarot-devil.jpg', 
            'cards/tarot-tower.jpg', 
            'cards/tarot-star.jpg', 
            'cards/tarot-moon.jpg', 
            'cards/tarot-sun.jpg', 
            'cards/tarot-judgement.jpg', 
            'cards/tarot-fool.jpg', 
            'cards/tarot-world.jpg', 
            'cards/tarot-wands-11.jpg', 
            'cards/tarot-wands-12.jpg', 
            'cards/tarot-wands-13.jpg', 
            'cards/tarot-wands-14.jpg', 
            'cards/tarot-wands-01.jpg', 
            'cards/tarot-wands-02.jpg', 
            'cards/tarot-wands-03.jpg', 
            'cards/tarot-wands-04.jpg', 
            'cards/tarot-wands-05.jpg', 
            'cards/tarot-wands-06.jpg', 
            'cards/tarot-wands-07.jpg', 
            'cards/tarot-wands-08.jpg', 
            'cards/tarot-wands-09.jpg', 
            'cards/tarot-wands-10.jpg', 
            'cards/tarot-cups-11.jpg', 
            'cards/tarot-cups-12.jpg', 
            'cards/tarot-cups-13.jpg', 
            'cards/tarot-cups-14.jpg', 
            'cards/tarot-cups-01.jpg', 
            'cards/tarot-cups-02.jpg', 
            'cards/tarot-cups-03.jpg', 
            'cards/tarot-cups-04.jpg', 
            'cards/tarot-cups-05.jpg', 
            'cards/tarot-cups-06.jpg', 
            'cards/tarot-cups-07.jpg', 
            'cards/tarot-cups-08.jpg', 
            'cards/tarot-cups-09.jpg', 
            'cards/tarot-cups-10.jpg', 
            'cards/tarot-pentacles-11.jpg', 
            'cards/tarot-pentacles-12.jpg', 
            'cards/tarot-pentacles-13.jpg', 
            'cards/tarot-pentacles-14.jpg', 
            'cards/tarot-pentacles-01.jpg', 
            'cards/tarot-pentacles-02.jpg', 
            'cards/tarot-pentacles-03.jpg', 
            'cards/tarot-pentacles-04.jpg', 
            'cards/tarot-pentacles-05.jpg', 
            'cards/tarot-pentacles-06.jpg', 
            'cards/tarot-pentacles-07.jpg', 
            'cards/tarot-pentacles-08.jpg', 
            'cards/tarot-pentacles-09.jpg', 
            'cards/tarot-pentacles-10.jpg', 
            'cards/tarot-swords-11.jpg', 
            'cards/tarot-swords-12.jpg', 
            'cards/tarot-swords-13.jpg', 
            'cards/tarot-swords-14.jpg', 
            'cards/tarot-swords-01.jpg', 
            'cards/tarot-swords-02.jpg', 
            'cards/tarot-swords-03.jpg', 
            'cards/tarot-swords-04.jpg', 
            'cards/tarot-swords-05.jpg', 
            'cards/tarot-swords-06.jpg', 
            'cards/tarot-swords-07.jpg', 
            'cards/tarot-swords-08.jpg', 
            'cards/tarot-swords-09.jpg', 
            'cards/tarot-swords-10.jpg'
        ]

        for (i = 0; i < getCards.length; i++) {
            getCards[i].image = imageArray[i]
        }


        card.forEach((item, i) => {

            let getCardInfo = getCards[Math.floor(Math.random() * Math.floor(totalCards))]
            let cardIndex = getCards.indexOf(getCardInfo)

            // for desktop hover display
            let desktopInfo = document.querySelectorAll('.desktopInfo')
            desktopInfo.innerHTML = ''
            let desktopCardName = document.createElement('div')
            let desktopCardMeaning = document.createElement('div')

            // for mobile print display
            let mobileInfo = document.querySelectorAll('.mobileInfo')
            mobileInfo.innerHTML = ''
            let mobileCardName = document.createElement('div')
            let mobileCardMeaning = document.createElement('div')

            let cardImage = document.createElement('img')

            
            function cardDirection() {
                return (Math.floor(Math.random() * 2))
            }
            

            // randomize between upright and reversed cards
            if (cardDirection() === 0) {
                desktopCardName.innerHTML = `Card: ${getCardInfo.name}`
                desktopCardMeaning.innerHTML = `Interpretation: ${getCardInfo.meaning_up}`

                mobileCardName.innerHTML = `Card: ${getCardInfo.name}`
                mobileCardMeaning.innerHTML = `Interpretation: ${getCardInfo.meaning_up}`

                cardImage.src = getCardInfo.image

            } else {
                desktopCardName.innerHTML = `Card: ${getCardInfo.name} reversed`
                desktopCardMeaning.innerHTML = `Interpretation: ${getCardInfo.meaning_rev}`

                mobileCardName.innerHTML = `Card: ${getCardInfo.name} reversed`
                mobileCardMeaning.innerHTML = `Interpretation: ${getCardInfo.meaning_rev}`

                cardImage.src = getCardInfo.image
                cardImage.setAttribute('style', 'transform:rotateX(180deg);')

            }

            desktopInfo[i].append(desktopCardName)
            desktopInfo[i].append(desktopCardMeaning)

            mobileInfo[i].append(mobileCardName)
            mobileInfo[i].append(mobileCardMeaning)

            imageContainers[i].append(cardImage)

            delete getCards[cardIndex]
            
        })





        console.log(getCards)


    } catch(err) {
        console.log(`Oops! Error occurred! ${err}`)
    }

}

showCards()


// learned how to make card flip on click from https://codepen.io/AdamTheWizard/pen/QVgLLR
card.forEach(item => {
    item.addEventListener("click", function() {
        if (item.classList.contains("isFlipped")) {
        } else {
            item.classList.add("isFlipped")
            // let mobileCard = document.querySelectorAll(".hide")
            // mobileCard.classlist.remove("hide")
        }  
    })
})

