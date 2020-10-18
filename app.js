const cards = document.querySelectorAll('.memoryCard')

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;


function flipCard() {
    if (lockBoard) return;

    this.classList.add('flip')

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
    } else {
        hasFlippedCard = false
        secondCard = this;

        chackForMath()
    }
 }



function chackForMath() {
    let isMatch = firstCard.dataset.fram === secondCard.dataset.fram


        isMatch ? disableCards() : unflipCards(); 
   } 

   function disableCards() {
    firstCard.removeEventListener('click', flipCard)
    secondCard.removeEventListener('click', flipCard)
   }

   function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip')

        lockBoard = false;
    }, 1500)

}

(function suffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random()* 12);
        card.style.order = randomPos;
    })
})()



cards.forEach(x => x.addEventListener('click', flipCard))