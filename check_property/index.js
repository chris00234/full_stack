const checkbox = document.getElementById('check');
const visabtn = document.getElementById('visaBtn');
const masterbtn = document.getElementById('masterBtn');
const paypalbtn = document.getElementById('paypalBtn');
const submit = document.getElementById('submit');
const subResult = document.getElementById('subResult');
const paymentResult = document.getElementById('paymentResult');

submit.onclick = () =>{
    if ((checkbox.checked)){
        subResult.textContent = 'You have accepted the terms and conditions';
    }
    else{
        subResult.textContent = 'You must accept the terms and conditions';
    }
    if (visabtn.checked){
        paymentResult.textContent = 'You have chosen Visa';
    }
    else if (masterbtn.checked){
        paymentResult.textContent = 'You have chosen Mastercard';
    }
    else if (paypalbtn.checked){
        paymentResult.textContent = 'You have chosen Paypal';
    }
    else{
        paymentResult.textContent = 'You must choose a payment method';
    }
}

