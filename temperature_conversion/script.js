const textbox = document.getElementById('textbox');
const button = document.getElementById('button');
const result = document.getElementById('result');
const unit = document.getElementById('unit');
let tmp = 0;

function convert(){
    tmp = textbox.value;
    tmp = parseFloat(tmp);
    if(unit.value === 'Celsius'){
        tmp = (textbox.value * 9/5) + 32;
        result.textContent = tmp + '°F';
    }
    else{
        tmp = (textbox.value - 32) * 5/9;
        result.textContent = tmp + '°C';
    }
}