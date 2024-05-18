const myBox = document.getElementById('myBox');
const myButton = document.getElementById('myButton');


myButton.addEventListener('click', (event) => {
    myBox.style.backgroundColor = 'tomato';
    myBox.textContent = 'Clicked';
});

myButton.addEventListener('mouseover', (event) => {
    myBox.style.backgroundColor = 'yellow';
    myBox.textContent = 'Hovered';
});

myButton.addEventListener('mouseout', (event) => {
    myBox.style.backgroundColor = 'aquamarine';
    myBox.textContent = 'Click Me';
});
