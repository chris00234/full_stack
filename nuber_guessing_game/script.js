const min_num = 1;
const max_num = 100;
const answer = Math.floor(Math.random() * (max_num - min_num) + min_num);

let attempts = 0;
let guess;
let running = true;

while (running) {
    guess = window.prompt("Guess a number between " + min_num + " and " + max_num + ":");
    guess = Number(guess);

    if (isNaN(guess)) {
        window.alert("Please enter a valid number.");
    }
    else if(guess < min_num || guess > max_num){
        window.alert("Please enter a number between " + min_num + " and " + max_num + ".");
    }
    else{
        attempts++;
        if (guess < answer){
            window.alert("Higher!");
        }
        else if (guess > answer){
            window.alert("Lower!");
        }
        else{
            window.alert("Congratulations! You guessed the number in " + attempts + " attempts.");
            running = false;
        }
    }
}