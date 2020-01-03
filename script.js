// init commit

const deckUrl = 'https://rws-cards-api.herokuapp.com/api/v1/cards'

const reverseDeckUrl = 'https://rws-cards-api.herokuapp.com/api/v1/cards/search?meaning=difficult'

let cityInput = document.querySelector('#city')
let citySubmit = document.querySelector('#getTemp')

async function showCards() {
    try {
        let getCards = await axios.get(deckUrl)

        console.log(getCards.data.cards[1].name)
    } catch(err) {
        console.log(`Oops! Error occurred! ${err}`)
    }

}

showCards()