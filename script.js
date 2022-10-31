const pokemonName = document.querySelector('.nome_pk')
const pokemonNum = document.querySelector('.num_pk')
const pokemonIMG = document.querySelector('.PK_image')


const fatPokemon = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${50}`)
        .then(resp => { return resp.json() })
        .then(pokemon => {
            pokemonName.innerHTML = pokemon.name;
            pokemonNum.innerHTML = pokemon.id;
            pokemonIMG.src = pokemon.sprites.versions['generation-v']['black-white'].animated.front_default
        });

}