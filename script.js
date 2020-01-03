// init commit

const deckUrl = 'https://rws-cards-api.herokuapp.com/api/v1/cards'

const reverseDeckUrl = 'https://rws-cards-api.herokuapp.com/api/v1/cards/search?meaning=difficult'

let card = document.querySelector(".card");

async function showCards() {
    try {
        let getCards = await axios.get(deckUrl)

        console.log(getCards.data.cards[1].name)
    } catch(err) {
        console.log(`Oops! Error occurred! ${err}`)
    }

}

showCards()

// let card = document.querySelector('.card')

// document.querySelector('.cardContainer').onClick = function() {
//     if (card.classList.contains('isFlipped')) {
//         card.classList.remove('isFlipped')
//     }
// }


document.querySelector(".cardContainer").onclick = function() {
  if (card.classList.contains("isFlipped")) {
    card.classList.remove("isFlipped")
  } else {
    card.classList.add("isFlipped")
  }
}
