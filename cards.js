var cardDeck = [];
var numOfCards = 52;
cardDeck[0] = "ace_of_hearts";
cardDeck[1] = "2_of_hearts";
cardDeck[2] = "3_of_hearts";
cardDeck[3] = "4_of_hearts";
cardDeck[4] = "5_of_hearts";
cardDeck[5] = "6_of_hearts";
cardDeck[6] = "7_of_hearts";
cardDeck[7] = "8_of_hearts";
cardDeck[8] = "9_of_hearts";
cardDeck[9] = "10_of_hearts";
cardDeck[10] = "jack_of_hearts";
cardDeck[11] = "queen_of_hearts";
cardDeck[12] = "king_of_hearts";
cardDeck[13] = "ace_of_spades";
cardDeck[14] = "2_of_spades";
cardDeck[15] = "3_of_spades";
cardDeck[16] = "4_of_spades";
cardDeck[17] = "5_of_spades";
cardDeck[18] = "6_of_spades";
cardDeck[19] = "7_of_spades";
cardDeck[20] = "8_of_spades";
cardDeck[21] = "9_of_spades";
cardDeck[22] = "10_of_spades";
cardDeck[23] = "jack_of_spades";
cardDeck[24] = "queen_of_spades";
cardDeck[25] = "king_of_spades";
cardDeck[26] = "ace_of_diamonds";
cardDeck[27] = "2_of_diamonds";
cardDeck[28] = "3_of_diamonds";
cardDeck[29] = "4_of_diamonds";
cardDeck[30] = "5_of_diamonds";
cardDeck[31] = "6_of_diamonds";
cardDeck[32] = "7_of_diamonds";
cardDeck[33] = "8_of_diamonds";
cardDeck[34] = "9_of_diamonds";
cardDeck[35] = "10_of_diamonds";
cardDeck[36] = "jack_of_diamonds";
cardDeck[37] = "queen_of_diamonds";
cardDeck[38] = "king_of_diamonds";
cardDeck[39] = "ace_of_clubs";
cardDeck[40] = "2_of_clubs";
cardDeck[41] = "3_of_clubs";
cardDeck[42] = "4_of_clubs";
cardDeck[43] = "5_of_clubs";
cardDeck[44] = "6_of_clubs";
cardDeck[45] = "7_of_clubs";
cardDeck[46] = "8_of_clubs";
cardDeck[47] = "9_of_clubs";
cardDeck[48] = "10_of_clubs";
cardDeck[49] = "jack_of_clubs";
cardDeck[50] = "queen_of_clubs";
cardDeck[51] = "king_of_clubs";

let drawnCards = [];
let removedCards = [];
const playerCards = document.getElementById('receivedCards');
const trashPile = document.getElementById('discardPile');
const notificationDiv = document.getElementById('disCardMessage');
const drawButton = document.getElementById('dealButton');
const clearButton = document.getElementById('resetButton');

function getRemainingCards() {
    return cardDeck.filter(card => !drawnCards.includes(card) && !removedCards.includes(card));
}

function pickRandomCard(remainingCards) {
    const randomIndex = Math.floor(Math.random() * remainingCards.length);
    return remainingCards[randomIndex];
}

function createCardImage(card) {
    const cardImage = document.createElement('img');
    cardImage.src = `cardds/${card}.png`;
    cardImage.id = card;
    cardImage.classList.add('disCard');
    cardImage.draggable = true;
    cardImage.addEventListener('dragstart', onDragStart);

    cardImage.style.width = '100px';
    cardImage.style.height = 'auto';

    return cardImage;
}

function drawCards() {
    playerCards.innerHTML = '';
    drawnCards = [];

    const remainingCards = getRemainingCards();
    const cardsToDraw = Math.min(4, remainingCards.length);

    for (let i = 0; i < cardsToDraw; i++) {
        const card = pickRandomCard(remainingCards);
        drawnCards.push(card);
        const cardImage = createCardImage(card);
        playerCards.appendChild(cardImage);
    }
}

function onDragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
}

function clearGame() {
    playerCards.innerHTML = '';
    trashPile.innerHTML = '<h3>Discard Pile</h3>';
    drawnCards = [];
    removedCards = [];
    notificationDiv.innerHTML = '';
}

function handleDrop(event) {
    event.preventDefault();
    const cardId = event.dataTransfer.getData('text/plain');
    const cardImage = document.getElementById(cardId);
    
    if (cardImage) {
        trashPile.appendChild(cardImage);
        cardImage.draggable = false;
        removedCards.push(cardId);
        drawnCards = drawnCards.filter(card => card !== cardId);
    }
}

drawButton.addEventListener('click', drawCards);
clearButton.addEventListener('click', clearGame);

trashPile.addEventListener('dragover', (event) => {
    event.preventDefault();
});

trashPile.addEventListener('drop', handleDrop);
clearGame();
