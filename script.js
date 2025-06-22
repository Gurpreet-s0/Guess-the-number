let randNumber;
function getRandom(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}
let totalAttempts = 0
let attemptsLeft = 5
let againBtn = document.getElementById("againBtn")
let h2 = document.getElementById("message");
randNumber = getRandom(1, 100);
function checkGuess() {
    againBtn.style.display="none"
    
    console.log(randNumber);
    const guessedNumber = Number(document.getElementById("guessnumber").value);
    totalAttempts++
    
    if(guessedNumber<1 || guessedNumber>100 || guessedNumber == 0){
        h2.textContent="enter a number between 1 and 100"
    }
    
  else if (guessedNumber < randNumber) {
    attemptsLeft--
    h2.textContent = `📉 Too low!  your attempts left: ${attemptsLeft}`;
    
    
  } else if (guessedNumber > randNumber) {
    attemptsLeft--
    h2.textContent = `📈 Too high!  your attempts left: ${attemptsLeft}`;
    
    
  } else {
    h2.textContent = `🎉 Correct! You guessed it in ${totalAttempts} attempts`;
  }

  if(attemptsLeft == 0){
    endGame()
  }
  else{

  }
  document.getElementById("guessnumber").value = "";
  console.log(guessedNumber);
}


function endGame(){
    h2.textContent = `💥 You Lost! The number was ${randNumber} your total attempsts are ${totalAttempts}`;
    againBtn.style.display="inline-block"
    totalAttempts = 0
    attemptsLeft = 5
randNumber = getRandom(1, 100);

}
// function reset(){
     
// }