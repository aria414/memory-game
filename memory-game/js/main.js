
/*
let cards = ["queen", "queen", "king", "king"];
let cardsInPlay = [];
let cardOne = cards[0];

cardsInPlay.push(cardOne);

console.log("User Flipped: " + cardsInPlay[0]);

let cardTwo = cards[2];

cardsInPlay.push(cardTwo);

console.log("User Flipped: " + cardsInPlay[1]);

if(cardsInPlay.length === 2){
	if(cards[0] === cardsInPlay[0]) {
		alert("You found a match!");
	}
}

*/

const cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	}		
];

function flipCard (){
	//console.log("User flipped " + cards[0].rank);
	//let cardsInPlay = []
	//cardsInPlay.push(cards[0]);

	let cardID = this.getAttribute('data-id');
	let cardImg = cards[cardID].cardImage;
	console.log(cardImg);

	//go to each image element and by the card id, set the source to the card image.
	document.getElementsByTagName("img")[cardID].setAttribute("src", cardImg);
}

//Within the createBoard function, loop through the cards array.
//For each card, use createElement to create an img element and store it in a variable cardElement.
//Use setAttribute() method on cardElement to add a src attribute of "images/back.png".
// Next, use the setAttribute() method on cardElement  again. Set the card's 'data-id' attribute to be the current index of the card array, i (no quotes). Now, we can track which card it is.
//NOTE: data- attributes are meant to store data about an element that is not tied to a style.


function createBoard (){
	for (let i = 0; i < cards.length; i++) {
   		let cardElement = document.createElement('img');
   		cardElement.setAttribute('src', 'images/back.png');
   		cardElement.setAttribute('data-id', i);
   		cardElement.addEventListener("click", flipCard); 
   		document.getElementById('game-board').appendChild(cardElement);
	}
}

createBoard();
