const cards = [{
        rank: "queen",
        suit: "heart",
        cardImage: "images/queen-of-hearts.png"

    },
    {
        rank: "queen",
        suit: "dimonds",
        cardImage: "images/queen-of-diamonds.png"

    },
    {
        rank: "king",
        suit: "heart",
        cardImage: "images/king-of-hearts.png"

    },
    {
        rank: "king",
        suit: "dimonds",
        cardImage: "images/king-of-diamonds.png"

    },


]
var cardsInPlay = []
var marked = []
var i = 0


for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement("img");
    cardElement.setAttribute("src", "images/back.png");
    cardElement.setAttribute('data-id', i);
    cardElement.setAttribute('class', cards[i].rank);
    cardElement.addEventListener('click', flipCard)
    document.getElementById("images").appendChild(cardElement)
}


function checkForMatch() {


    if (cardsInPlay[0].getAttribute('data-id') !== cardsInPlay[1].getAttribute('data-id')) {
        cardsInPlay[0].getAttribute('class') === cardsInPlay[1].getAttribute('class') ? alert("You found a match!") : alert("Sorry, try again.")
    }

    for (var i = 0; i < 2; i++) {
        cardsInPlay[i].setAttribute("src", "images/back.png");
    }

    cardsInPlay = []



}


function flipCard() {


    this.setAttribute("src", cards[this.getAttribute('data-id')].cardImage)
    
    cardsInPlay.push(this)

    setTimeout(function () {

        if (cardsInPlay.length === 2) {
            checkForMatch()
        }
    }, 1000);


}