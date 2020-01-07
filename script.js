const deckUrl = 'https://rws-cards-api.herokuapp.com/api/v1/cards'

const reverseDeckUrl = 'https://rws-cards-api.herokuapp.com/api/v1/cards/search?meaning=difficult'

const card = document.querySelectorAll('.card')

const cardText = document.querySelectorAll('.info')

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


        cardText.forEach((item, i) => {

            let getCardInfo = getCards[Math.floor(Math.random() * Math.floor(totalCards))]
            let cardInfo = document.querySelectorAll('.info')
            cardInfo.innerHTML = ''
            let cardIndex = getCards.indexOf(getCardInfo)
            let imageContainers = document.querySelectorAll('.up')

            console.log(cardIndex)

            let cardName = document.createElement('div')
            cardName.innerHTML = `Card: ${getCardInfo.name}`
            cardInfo[i].append(cardName)

            let cardMeaning = document.createElement('div')
            cardMeaning.innerHTML = `Interpretation: ${getCardInfo.meaning_up}`
            cardInfo[i].append(cardMeaning)
            
            let cardImage = document.createElement('img')
            cardImage.src = getCardInfo.image
            imageContainers[i].append(cardImage)

            delete getCards[cardIndex]
            
        })





        // these console.logs are only here to help me keep track of everything in the console as I edit my code.
        console.log(getCards)
        // console.log(cardOneIndex)
        // console.log(cardTwoIndex)
        // console.log(cardThreeIndex)
        // console.log(getCardOneInfo)
        // console.log(getCardOneInfo.name)
        // console.log(getCardOneInfo.meaning_up)


    } catch(err) {
        console.log(`Oops! Error occurred! ${err}`)
    }

}

showCards()


// learned how to make card flip on click from https://codepen.io/AdamTheWizard/pen/QVgLLR
// might have to split this to do it for each card individually in order to get info to appear after click?
card.forEach(item => {
    item.addEventListener('click', function() {
        if (item.classList.contains("isFlipped")) {
            // removed item.classList.remove("isFlipped") so cards won't flip back over. now nothing happens when already flipped cards are clicked again
        } else {
            item.classList.add("isFlipped")
        }  
    })
})

