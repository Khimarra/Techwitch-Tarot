// init commit

const deckUrl = 'https://rws-cards-api.herokuapp.com/api/v1/cards'

const reverseDeckUrl = 'https://rws-cards-api.herokuapp.com/api/v1/cards/search?meaning=difficult'

const card = document.querySelectorAll('.card')

// const cardOne = document.querySelector('.one')
// const cardTwo = document.querySelector('.two')
// const cardThree = document.querySelector('.three')

async function showCards() {
    try {
        let getCards = await axios.get(deckUrl)
        let totalCards = 78
        let getCardOneInfo = getCards.data.cards[Math.floor(Math.random() * Math.floor(totalCards))]
        let cardOneInfo = document.querySelector('.cardOneInfo')
        cardOneInfo.innerHTML = ''
        let cardTwoInfo = document.querySelector('.cardTwoInfo')
        cardTwoInfo.innerHTML = ''
        let cardThreeInfo = document.querySelector('.cardThreeInfo')
        cardThreeInfo.innerHTML = ''
        console.log(getCardOneInfo.name)
        console.log(getCardOneInfo.meaning_up)

        // - Card One
        let cardOneName = document.createElement('div')
        cardOneName.innerHTML = `Card: ${getCardOneInfo.name}`
        cardOneInfo.append(cardOneName)

        let cardOneMeaning = document.createElement('div')
        cardOneMeaning.innerHTML = `Interpretation: ${getCardOneInfo.meaning_up}`
        cardOneInfo.append(cardOneMeaning)


    } catch(err) {
        console.log(`Oops! Error occurred! ${err}`)
    }

}

showCards()


// learned how to make card flip on click from https://codepen.io/AdamTheWizard/pen/QVgLLR

card.forEach(item => {
    item.addEventListener('click', function() {
        if (item.classList.contains("isFlipped")) {
            item.classList.remove("isFlipped")
        } else {
            item.classList.add("isFlipped")
        }  
    })
})

