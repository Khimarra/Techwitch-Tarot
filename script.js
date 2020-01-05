// init commit

const deckUrl = 'https://rws-cards-api.herokuapp.com/api/v1/cards'

const reverseDeckUrl = 'https://rws-cards-api.herokuapp.com/api/v1/cards/search?meaning=difficult'

const card = document.querySelectorAll('.card')

// const cardOne = document.querySelector('.one')
// const cardTwo = document.querySelector('.two')
// const cardThree = document.querySelector('.three')



async function showCards() {
    try {
        let loadCards = await axios.get(deckUrl)
        let totalCards = 1
        let getCards = loadCards.data.cards
        // getCards is the array of cards


        // add images by using getCards.indexOf(cardnumber)
        // try using switch to add image classes based on index number.... ugh


        // - Card One
        let getCardOneInfo = getCards[Math.floor(Math.random() * Math.floor(totalCards))]
        let cardOneInfo = document.querySelector('.cardOneInfo')
        cardOneInfo.innerHTML = ''
        let cardOneIndex = getCards.indexOf(getCardOneInfo)
        let cardOneImageContainer = document.querySelector('.one')

        let cardOneName = document.createElement('div')
        cardOneName.innerHTML = `Card: ${getCardOneInfo.name}`
        cardOneInfo.append(cardOneName)

        let cardOneMeaning = document.createElement('div')
        cardOneMeaning.innerHTML = `Interpretation: ${getCardOneInfo.meaning_up}`
        cardOneInfo.append(cardOneMeaning)
        
        // let cardOneImage = document.createElement('div')
        // cardOneImage.classList.add('.tarot-magician')
        // cardOneImageContainer.append(cardOneImage)

        let cardOneImage = document.createElement('img')
        cardOneImage.src = 'cards/tarot-magician.jpg'
        cardOneImageContainer.append(cardOneImage)



        // - Card Two
        let getCardTwoInfo = getCards[Math.floor(Math.random() * Math.floor(totalCards))]
        let cardTwoInfo = document.querySelector('.cardTwoInfo')
        cardTwoInfo.innerHTML = ''
        let cardTwoIndex = getCards.indexOf(getCardTwoInfo)

        let cardTwoName = document.createElement('div')
        cardTwoName.innerHTML = `Card: ${getCardTwoInfo.name}`
        cardTwoInfo.append(cardTwoName)

        let cardTwoMeaning = document.createElement('div')
        cardTwoMeaning.innerHTML = `Interpretation: ${getCardTwoInfo.meaning_up}`
        cardTwoInfo.append(cardTwoMeaning)

        

        // - Card Three
        let getCardThreeInfo = getCards[Math.floor(Math.random() * Math.floor(totalCards))]
        let cardThreeInfo = document.querySelector('.cardThreeInfo')
        cardThreeInfo.innerHTML = ''
        let cardThreeIndex = getCards.indexOf(getCardThreeInfo)

        let cardThreeName = document.createElement('div')
        cardThreeName.innerHTML = `Card: ${getCardThreeInfo.name}`
        cardThreeInfo.append(cardThreeName)

        let cardThreeMeaning = document.createElement('div')
        cardThreeMeaning.innerHTML = `Interpretation: ${getCardThreeInfo.meaning_up}`
        cardThreeInfo.append(cardThreeMeaning)


        console.log(getCards)
        console.log(cardOneIndex)
        console.log(cardTwoIndex)
        console.log(cardThreeIndex)
        console.log(getCardOneInfo)
        console.log(getCardOneInfo.name)
        console.log(getCardOneInfo.meaning_up)


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

