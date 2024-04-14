

const displayMessage = (message)=>{
    document.querySelector('.message').textContent = message

}
let secretNumber = Math.trunc(Math.random() * 20 +1)
let Score = 20
let highscore = 0


document.querySelector('.check').addEventListener('click',function(){
   const guess = Number((document.querySelector('.guess').value))
   console.log(guess, typeof guess)

   if(!guess){
   displayMessage('No number')
   } 
   
   
   else if(guess === secretNumber) {
    displayMessage('Correct Number')
    document.querySelector('.number').textContent = secretNumber
    document.querySelector('body').style.backgroundColor = '#60b347'
    document.querySelector('.number').style.width = '30rem'

    if (Score>highscore){
        highscore = Score
        document.querySelector('.highscore').textContent =highscore
    }
  
   }

   else if( guess !== secretNumber){
    if (Score>1){
        // document.querySelector('.message').textContent =
        // guess >secretNumber ? 'Too High' : 'Too low'
        displayMessage(guess >secretNumber ? 'Too High' : 'Too low')

        Score--
        document.querySelector('.score').textContent = Score;
    }
    else{
        displayMessage('You Losse the game')
        document.querySelector('.score').textContent = 0
        
    }
   } 
})


document.querySelector('.again').addEventListener('click',function()
{
    Score=20
    secretNumber = Math.trunc(Math.random() * 20 +1)
    displayMessage('Start Guesing......')
    document.querySelector('.score').textContent= Score
    document.querySelector('.number').textContent= '?';
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.guess').value=''
    document.querySelector('.number').style.width = '30rem'
    document.querySelector('.highscore').textContent

})