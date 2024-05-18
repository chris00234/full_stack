// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
// .then(response => {
//     if(!response.ok){
//         throw new Error("can not fetch the data");
//     }
//     return response.json();
// })
// .then(data => console.log(data.weight))
// .catch(error => console.log(error));
async function fetchData(){
    try{
        const pokemon = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        if(!response.ok){
            throw new Error("can not fetch the data");
        }
        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");
        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
    }catch(error){
        console.log(error);
    }
}