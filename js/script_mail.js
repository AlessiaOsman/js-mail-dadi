/*Creo array*/

mailList = [
    'pippo.pippo@gmail.com',
    'pluto.pluto@gmail.com',
    'paperino.paperino@gmail.com'
]

console.table(mailList)

/*Recupero elementi*/

const inputEmail = document.getElementById('email-input')
console.log(inputEmail)

const checkButton = document.getElementById('check-input')
console.log(checkButton)

const errorAlert = document.getElementById('error-alert')
console.log(errorAlert)
const successAlert = document.getElementById('success-alert')
console.log(successAlert)

const userEmail = inputEmail.value.trim()

checkButton.addEventListener ('click', function (){

    for (let i = 0; i<=3; i++){
        if (userEmail === mailList[i]){
            successAlert.classList.remove('d-none')
        } else if (userEmail !== mailList[i]) {
            errorAlert.classList.remove('d-none')
        }
    } 
})
