/*Recupero elementi */
const computerParagraph = document.getElementById('computer');
console.log(computerParagraph);

const userParagraph = document.getElementById('user');
console.log(userParagraph);

const winnerParagraph = document.getElementById('winner');
console.log(winnerParagraph);

const button = document.getElementById('dice-button');
console.log(button);

textNumber = "E' uscito il numero "
textWinner = "Ha vinto "

button.addEventListener ('click', function(){
    
    const computerNumber = Math.floor(Math.random()*6 + 1)
    console.log(computerNumber)

    const userNumber = Math.floor(Math.random()*6 + 1)
    console.log(userNumber)

})
