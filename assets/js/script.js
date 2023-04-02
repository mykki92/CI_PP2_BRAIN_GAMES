const cards = document.querySelectorAll('.game-card');

//card flip
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;

function flipCard () {
    if (lockBoard) return;
    if (this === firstCard) return;
    this.classList.add('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
   }

   secondCard = this;

   checkForMatch();
}

//check for matching cards referencing their data frameworks
function checkForMatch() {
    if (firstCard.dataset.framework === secondCard.dataset.framework) {
      disableCards();
      return;
    }
 
    unflipCards();
 }