const deckUrl = 'https://cors-anywhere.herokuapp.com/https://rws-cards-api.herokuapp.com/api/v1/cards'

const card = document.querySelectorAll('.card')

async function showCards() {
    try {
        let loadCards = await axios.get(deckUrl)
        let getCards = loadCards.data.cards

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

            let cardSection = document.querySelector('.spread')

            let cardName = document.createElement('h3')
            cardName.innerHTML = `${getCards[i].name}`
            cardName.id = i
            cardSection.append(cardName)

            let image = document.createElement('img')
            image.src = getCards[i].image
            cardSection.append(image)

            let cardDescription = document.createElement('h4')
            cardDescription.innerHTML = `${getCards[i].desc}`
            cardSection.append(cardDescription)

            let cardMeaningUp = document.createElement('h4')
            cardMeaningUp.innerHTML = `Upright Meaning: ${getCards[i].meaning_up}`
            cardSection.append(cardMeaningUp)

            let cardMeaningDown = document.createElement('h4')
            cardMeaningDown.innerHTML = `Reverse Meaning: ${getCards[i].meaning_rev}`
            cardSection.append(cardMeaningDown)

        }


// ------ Links to Major Arcana
        for (i = 0; i < 22; i++) {

            let linksSection = document.querySelector('.major')
            let cardLink = document.createElement('li')
            cardLink.innerHTML = `<a href="cards.html#${i}">${getCards[i].name}</a>`
            linksSection.append(cardLink)


        }

        // ------ Links to Wands
        for (i = 22; i < 36; i++) {

            let linksSection = document.querySelector('.wands')
            let cardLink = document.createElement('li')
            cardLink.innerHTML = `<a href="cards.html#${i}">${getCards[i].name}</a>`
            linksSection.append(cardLink)


        }

        // ------ Links to Cups
        for (i = 36; i < 50; i++) {

            let linksSection = document.querySelector('.cups')
            let cardLink = document.createElement('li')
            cardLink.innerHTML = `<a href="cards.html#${i}">${getCards[i].name}</a>`
            linksSection.append(cardLink)


        }

        // ------ Links to Pentacles
        for (i = 50; i < 64; i++) {

            let linksSection = document.querySelector('.pentacles')
            let cardLink = document.createElement('li')
            cardLink.innerHTML = `<a href="cards.html#${i}">${getCards[i].name}</a>`
            linksSection.append(cardLink)


        }

        // ------ Links to Swords
        for (i = 64; i < 78; i++) {

            let linksSection = document.querySelector('.swords')
            let cardLink = document.createElement('li')
            cardLink.innerHTML = `<a href="cards.html#${i}">${getCards[i].name}</a>`
            linksSection.append(cardLink)


        }





        console.log(getCards)



    } catch(err) {
        console.log(`Oops! Error occurred! ${err}`)
    }

}

showCards()