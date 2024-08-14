async function fetchData(){
    try {
        const pokemonName=document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        if(!response.ok){
            
            alert("Check the spelling")
        }
        const data = await response .json()
        const pokemonsprite=data.sprites.front_default;
        const imgElement = document.getElementById("pokemon_img")
        imgElement.src= pokemonsprite
        imgElement.style.display="block"
        
    } catch (error) {
        console.log(error)
        
    }
}
