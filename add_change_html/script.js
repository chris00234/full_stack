const newH1 = document.createElement('h1');
newH1.textContent = "This is a new h1";
newH1.id ="myH1";
newH1.style.color = "red";
newH1.style.textAlign = "center";
// document.body.prepend(newH1);
document.getElementById('box1').append(newH1);
document.body.insertBefore(newH1, document.getElementById('box2'));