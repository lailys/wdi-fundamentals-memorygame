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
var totalGame = 0
var totalScore = 0


for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement("img");
    cardElement.setAttribute("src", "images/back.png");
    cardElement.setAttribute('data-id', i);
    cardElement.setAttribute('class', cards[i].rank);
    cardElement.addEventListener('click', flipCard)
    document.getElementById("images").appendChild(cardElement)
}
document.getElementById("reset").addEventListener('click', reset)

function reset() {
    document.location.reload()
}

function checkForMatch() {

    totalGame++;
    document.getElementById("games").innerHTML = totalGame;
    var alertElement = document.createElement("p");
    alertElement.setAttribute('id', 'alert');
    document.getElementById("alert-bar").appendChild(alertElement)

    if (cardsInPlay[0].getAttribute('data-id') !== cardsInPlay[1].getAttribute('data-id')) {
        if (cardsInPlay[0].getAttribute('class') === cardsInPlay[1].getAttribute('class')) {
            totalScore++;
            document.getElementById("score").innerHTML = totalScore;
            document.getElementById("alert").innerHTML = "You found a match!";

        } else {
            document.getElementById("alert").innerHTML = "Sorry, try again.";
        }
    }


    for (var i = 0; i < 2; i++) {
        cardsInPlay[i].setAttribute("src", "images/back.png");
    }


    setTimeout(function () {
        document.getElementById("alert-bar").removeChild(alertElement);

    }, 1500);

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