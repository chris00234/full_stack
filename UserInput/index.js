let username;

document.getElementById('mysubmit').onclick = () => {
    username = document.getElementById('mytext').value;
    document.getElementById('h1').textContent = `Hello ${username}`;
}