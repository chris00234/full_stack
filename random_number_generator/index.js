let randomNumber;
let userInput = document.getElementById('userInput');
let btn = document.getElementById('submit');
let rate = 0;
let total_trials = 0;
btn.onclick = () => {
    console.log(userInput.value);
}
document.getElementById('btn').onclick = () => {
    total_trials++;
    randomNumber = Math.floor(Math.random()*6) + 1;
    document.getElementById('label').textContent = randomNumber;
    if (randomNumber == userInput.value) {
        rate++;
        document.getElementById('result').textContent = 'You guessed correctly!\n Your success rate is ' + rate/total_trials*100 + '%';
    }
    else{
        document.getElementById('result').textContent = 'You guessed incorrectly!\n Your success rate is ' + rate/total_trials*100 + '%';
    }
}