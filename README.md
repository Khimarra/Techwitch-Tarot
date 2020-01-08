# Techwitch Tarot

### _(AKA TaraTaroT)_

#### Note: first commits were directly through github as I edited README.md. First commit via git (with the specific git commit statement) was actually the 12th commit.

## App Description:
#### An online tarot (tarat) reader. Users can open the page and be provided with a basic 3-card spread with associated card meanings.

## API: 
<https://rws-cards-api.herokuapp.com/>

## API Snippet:
![JSON Snippet](https://res.cloudinary.com/dxvcs5ehh/image/upload/v1577993116/JSON_Snippet_kcufzx.jpg)

## Wireframes:
![Wireframes](https://res.cloudinary.com/dxvcs5ehh/image/upload/v1577992837/Wireframes_kyqvdt.jpg)

## MVP: - DONE
- Use RWS Tarot API to generate random tarot cards - DONE
- HTML page with 3 cards displayed and meanings underneath - DONE
- Cards (78 in a deck) are randomly generated each time page is reloaded - DONE
- CSS to make the page look nice - DONE
- Appropriate image displayed for each card - DONE
- Responsive design with at least 2 media queries - DONE

## Post-MVP:
- Cards start with backs up, flip when user clicks them - DONE
- Card flip animation - DONE
- Make sure cards can't repeat - DONE
- Full RWS description of card, not just meanings - DONE
- Add reverse-meanings - DONE
- Add "library" of cards user can look through - DONE
- Move card info to display layered on top of flipped cards instead of underneath (tooltip? image hover overlay?) - DONE
- Make JS DRYer so I don't have the same code repeated for each card - DONE
- Add "advice" page to help people understand tarot - DONE
- Add search bar or links so user can search for a specific card
- Use local storage to store readings

## Goals:
|  Day | Deliverable | Status
|---|---| ---|
|Jan 2rd| Project Prompt and Approval | Complete
|Jan 3rd| Wireframes, Priority Matrix, Whiteboarding | Complete
|Jan 4th| Core Application Structure (HTML, CSS, etc.) | Complete
|Jan 6th| actual code, get cards generating randomly | Complete
|Jan 7th| Initial Clickable Model (responsive)  | Complete
|Jan 8th| MVP | Complete
|Jan 9th| Present | Incomplete

## Priority Matrix:
![Priority-Matrix](https://res.cloudinary.com/dxvcs5ehh/image/upload/v1577992837/Priority_Matrix_bud7qp.jpg)

## Timeframes:
| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Building HTML | H | 4hrs | 4hrs | 0hrs |
| Working with API | H | 4hrs | 3hrs | 0hrs |
| Adding card images | H | 5hrs | 7hrs | 0hrs |
| Styling with 2+ media queries | H | 6hrs | 15hrs | 0hrs |
| Adding local storage | M | 2hrs | 0hrs | 0hrs |
| Card flip animation | M | 5hrs? | 2.5hrs | 0hrs |
| Adding additional card info | M | 3hrs | .3hrs | 0hrs |
| Adding card library | M | 5hrs | 3hrs | 0hrs |
| Adding search bar/card links | L | 3hrs | 0hrs | 0hrs |
| Total | H | 37hrs| 36hrs | 0hrs |

## Code Snippet

This is my main card randomizing logic. I was able to make this work for any card container I set up in the HTML, so now I am able to draw random cards, rightside up or upside down, wherever I put a card container! 

```
        cardText.forEach((item, i) => {

            let getCardInfo = getCards[Math.floor(Math.random() * Math.floor(totalCards))]
            let cardInfo = document.querySelectorAll('.info')
            cardInfo.innerHTML = ''
            let cardIndex = getCards.indexOf(getCardInfo)
            let cardName = document.createElement('div')
            let cardMeaning = document.createElement('div')
            let cardImage = document.createElement('img')

            
            function cardDirection() {
                return (Math.floor(Math.random() * 2))
            }
            
            if (cardDirection() === 0) {
                cardName.innerHTML = `Card: ${getCardInfo.name}`
                cardMeaning.innerHTML = `Interpretation: ${getCardInfo.meaning_up}`
                cardImage.src = getCardInfo.image
            } else {
                cardName.innerHTML = `Card: ${getCardInfo.name} reversed`
                cardMeaning.innerHTML = `Interpretation: ${getCardInfo.meaning_rev}`
                cardImage.src = getCardInfo.image
                cardImage.setAttribute('style', 'transform:rotateX(180deg);')
            }

            cardInfo[i].append(cardName)
            cardInfo[i].append(cardMeaning)
            imageContainers[i].append(cardImage)

            delete getCards[cardIndex]
            
        })
```

## Change Log
-Moved the card animation to MVP because the HTML structure would have been very different otherwise, making it much harder to implement after the fact.
-Changed layout from initial wireframe ever so slightly, making card info display on top of cards now, instead of below them on the page.
-I decided to make links in the card index page instead of a search bar because it will be easier for people to find what they're looking for without having to guess at the specific wording of each card name (because it can vary a bit from one deck to the next)