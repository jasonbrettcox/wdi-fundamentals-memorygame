
var cards = [
{

rank: 'king',
suit: 'hearts',
path: 'images/king-of-hearts.png'
},
{

rank: 'king',
suit: 'diamonds',
path: 'images/king-of-diamonds.png'
},
{

rank: 'queen',
suit: 'diamonds',
path: 'images/queen-of-diamonds.png'
},
{

rank: 'queen',
suit: 'hearts',
path: 'images/queen-of-hearts.png'
},
];

var cardsInPlay = [];
// var cardOne = cards[0];
// var cardTwo = cards[1];
// cardsInPlay.push(cardOne);
// cardsInPlay.push(cardTwo);

function checkForMatch(){
	
	if (cardsInPlay[0].rank === cardsInPlay[1].rank) {

	alert ("It's a match!");
	 }else {
		alert ("Get a job you loser");
	}
}


function userFlipped(cardId) {
	
	console.log(cardId);

	// if (cardOne === cardsInPlay[0]){
	// 	console.log("user flipped queen");
	// }
	// if (cardTwo === cardsInPlay[1]) {
	// 	console.log("user flipped queen2");
	// }
	cardsInPlay.push(cards[cardId]);


	if (cardsInPlay.length === 2){
	console.log("There are two cards in play")
	checkForMatch();
	}
	 else {console.log("Pick another card");
	}
	
}

userFlipped(0);


userFlipped(1);



