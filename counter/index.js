const decrease = document.getElementById('decrement');
const increase = document.getElementById('increment');
const reset = document.getElementById('reset');
const countLabel = document.getElementById('countLabel');
let count = 0;

decrease.onclick = () => {
    count--;
    countLabel.textContent = count;
}
increase.onclick = () => {
    count++;
    countLabel.textContent = count;
}
reset.onclick = () => {
    count = 0;
    countLabel.textContent = count;
}