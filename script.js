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

        console.log(getCards.data.cards[1].name)
    } catch(err) {
        console.log(`Oops! Error occurred! ${err}`)
    }

}

showCards()


card.forEach(item => {
    item.addEventListener('click', function() {
        if (item.classList.contains("isFlipped")) {
            item.classList.remove("isFlipped")
        } else {
            item.classList.add("isFlipped")
        }  
    })
})

