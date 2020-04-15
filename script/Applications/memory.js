// https://github.com/kubowania/memory-game
// source code is here !!!


document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
        {
            name: 'fries',
            img: '../../img/applications/memory/fries.png'
        },
        {
            name: 'cheeseburger',
            img: '../../img/applications/memory/cheeseburger.png'
        },
        {
            name: 'ice-cream',
            img: '../../img/applications/memory/ice-cream.png'
        },
        {
            name: 'pizza',
            img: '../../img/applications/memory/pizza.png'
        },
        {
            name: 'milkshake',
            img: '../../img/applications/memory/milkshake.png'
        },
        {
            name: 'hotdog',
            img: '../../img/applications/memory/hotdog.png'
        },
        {
            name: 'fries',
            img: '../../img/applications/memory/fries.png'
        },
        {
            name: 'cheeseburger',
            img: '../../img/applications/memory/cheeseburger.png'
        },
        {
            name: 'ice-cream',
            img: '../../img/applications/memory/ice-cream.png'
        },
        {
            name: 'pizza',
            img: '../../img/applications/memory/pizza.png'
        },
        {
            name: 'milkshake',
            img: '../../img/applications/memory/milkshake.png'
        },
        {
            name: 'hotdog',
            img: '../../img/applications/memory/hotdog.png'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const result = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    const cardsWon = []

    //create your board
    function createBoard() {
        for (let i = 1; i <= cardArray.length; i++) {
            var img = document.createElement('img');
            img.setAttribute('src', '../../img/applications/memory/blank.png');
            img.setAttribute("style","height:125px")
            img.setAttribute("class","w-100")
            img.setAttribute('data-id', i-1);
            img.addEventListener('click', flipCard);
            let box = document.querySelector(`#box${i}`);
            box.appendChild(img);
        }
    }

    //check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match')
            cards[optionOneId].setAttribute('src', '../../img/applications/memory/white.png')
            cards[optionTwoId].setAttribute('src', '../../img/applications/memory/white.png')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', '../../img/applications/memory/blank.png')
            cards[optionTwoId].setAttribute('src', '../../img/applications/memory/blank.png')
            alert('Sorry, try again');
        }
        cardsChosen = []
        cardsChosenId = []
        result.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length / 2) {
            result.textContent = 'Congratulations! You found them all!'
        }
    }

    //flip your card
    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()
})