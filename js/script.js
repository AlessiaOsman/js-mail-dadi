/*Recupero elementi */
const computerParagraph = document.getElementById('computer');
console.log(computerParagraph);

const userParagraph = document.getElementById('user');
console.log(userParagraph);

const winnerParagraph = document.getElementById('winner');
console.log(winnerParagraph);

const button = document.getElementById('dice-button');
console.log(button);

const resetButton = document.getElementById('reset-button')
console.log(resetButton)

let winnerText = ''


button.addEventListener ('click', function(){
    
    const computerNumber = Math.floor(Math.random()*6 + 1);
    console.log(computerNumber);

    computerParagraph.innerText += computerNumber;

    const userNumber = Math.floor(Math.random()*6 + 1);
    console.log(userNumber);

    userParagraph.innerText += userNumber;

    if(computerNumber === userNumber){
        winnerText = 'Non ha vinto nessuno'
    } else if (computerNumber > userNumber){
        winnerText = 'Ha vinto il computer'
    } else if (computerNumber < userNumber) {
        winnerText = "Ha vinto l'utente"
    }

    winnerParagraph.innerText = winnerText

})

resetButton.addEventListener ('click', function(){
    computerParagraph.innerText += '';
    userParagraph.innerText += '';
})








