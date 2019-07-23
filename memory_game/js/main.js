
const cards=[
{
  rank:"queen"  ,
 suit:"heart",
 cardImage:"images/queen-of-hearts.png"
  
},
{
    rank:"queen"  ,
   suit:"dimonds",
   cardImage:"images/queen-of-diamonds.png"
    
  },
  {
    rank:"king"  ,
   suit:"heart",
   cardImage:"images/king-of-hearts.png"
    
  },
  {
    rank:"king"  ,
   suit:"dimonds",
   cardImage:"images/king-of-diamonds.png"
    
  },


]
const cardsInPlay=[]



function checkForMatch(){

 if(cardsInPlay.length>1){
cardsInPlay[0]=== cardsInPlay[1]?alert("You found a match!"):alert("Sorry, try again.") 
 }

}


function flipCard(cardId){
   
console.log("User flipped " + cards[cardId].rank)
console.log("User flipped " + cards[cardId].cardImage)
cardsInPlay.push(cards[cardId].rank)
console.log(cardsInPlay)
checkForMatch()

}

flipCard(0)
flipCard(3)