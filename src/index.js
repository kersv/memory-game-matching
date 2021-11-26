document.addEventListener('DOMContentLoaded', () => {
    // card options
    const cardArray = [
        {
            name: 'fries',
            img: 'src/images/fries.png',
        },
        {
            name: 'cheeseburger',
            img: 'src/images/cheeseburger.png'
        },
        {
            name: 'ice-cream',
            img: 'src/images/ice-cream.png'
        },
        {
            name: 'pizza',
            img: 'src/images/pizza.png'
        },
        {
            name: 'milkshake',
            img: 'src/images/milkshake.png'
        },
        {
            name: 'hotdog',
            img: 'src/images/hotdog.png'
        },
        {
            name: 'fries',
            img: 'src/images/fries.png',
        },
        {
            name: 'cheeseburger',
            img: 'src/images/cheeseburger.png'
        },
        {
            name: 'ice-cream',
            img: 'src/images/ice-cream.png'
        },
        {
            name: 'pizza',
            img: 'src/images/pizza.png'
        },
        {
            name: 'milkshake',
            img: 'src/images/milkshake.png'
        },
        {
            name: 'hotdog',
            img: 'src/images/hotdog.png'
        },
    ]

    cardArray.sort(() => 0.5 - Math.random())
    console.log(cardArray)
    
    
    const grid = document.querySelector('.grid')
    const scoreDisplay = document.querySelector('#result')
    
    
    function createBoard() {
        for(let i = 0; i < cardArray.length; i++){
            // create element
            const card = document.createElement('img')
            // set element
            card.setAttribute('src', 'src/images/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            // append Child
            grid.appendChild(card)
        }
    }
    
    createBoard()

    // store flipped cards
    let flippedCards = []
    let flippedCardsId = []
    let cardsWon = []
    
    function flipCard() {
        // get Id of the card that was pressed on
        let cardId = this.getAttribute('data-id')
        // return object of Id in the array
        console.log(cardArray[cardId].name)
        // push all cards that were flipped into new array 
        flippedCards.push(cardArray[cardId].name)
        // pushing all cards id that were flipped into new array
        flippedCardsId.push(cardId)
        // change the card's image upon flip
        this.setAttribute('src', cardArray[cardId].img)
        // display flipped cards array 
        if(flippedCards.length === 2){
            setTimeout(checkForMatch, 500)
        }
        console.log(flippedCards)
    }
    
    function checkForMatch(){
        // grab all the images 
        const cards = document.querySelectorAll('img')
        const guessedOneId = flippedCardsId[0]
        const guessedTwoId = flippedCardsId[1]
        
        
        if(guessedOneId === guessedTwoId){
            alert('PRESSED SAME CARD')
            cards[guessedOneId].setAttribute('src', 'src/images/blank.png')
            cards[guessedTwoId].setAttribute('src', 'src/images/blank.png')
        }
        else if(flippedCards[0] === flippedCards[1]){
            alert('MATCH')
            cards[guessedOneId].setAttribute('src', 'src/images/white.png')
            cards[guessedTwoId].setAttribute('src', 'src/images/white.png')
            cards[guessedOneId].removeEventListener('click', flipCard)
            cards[guessedTwoId].removeEventListener('click', flipCard)
            cardsWon.push(flippedCards)
        }
        else{
            alert('NOT A MATCH')
            cards[guessedOneId].setAttribute('src', 'src/images/blank.png')
            cards[guessedTwoId].setAttribute('src', 'src/images/blank.png')
            
        }
        flippedCards = []
        flippedCardsId = []
        scoreDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length / 2){
            scoreDisplay.textContent = 'Congrats you won!'
        }
        console.log(flippedCards)
        console.log(cardsWon)
    }
})
