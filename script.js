const pokemonName = document.querySelector('.nome_pk')
const pokemonNum = document.querySelector('.num_pk')
const pokemonIMG = document.querySelector('.PK_image')
let primeiro = 1
const form = document.querySelector('.form')
const input = document.querySelector('.busca')
const frente = document.querySelector('.btn-next')
const tras = document.querySelector('.btn-prev')
const peso = document.querySelector('.peso_pk')
const tipo = document.querySelector('.tipo_pk')
const tipoimg = document.querySelector('.tipoIcon')

var icones = [
    {
        "bug":'./assets/GO_Bug.png',
        "dank":'./assets/GO_Dark.png',
        "dragon":'./assets/GO_Dragon.png',
        "electric":'./assets/GO_Eletric.png',
        "fairy":'./assets/GO_Fairy.png',
        "fighting":'./assets/GO_Fighting.png',
        "fire":'./assets/GO_Fire.png',
        "flying":'./assets/GO_Flying.png',
        "ghost":'./assets/GO_Ghost.png',
        "grass":'./assets/GO_Grass.png',
        "ground":'./assets/GO_Ground.png',
        "ice":'./assets/GO_Ice.png',
        "normal":'./assets/GO_Normal.png',
        "poison":'./assets/GO_Poison.png',
        "psychic":'./assets/GO_Psychic.png',
        "rock":'./assets/GO_Rock.png',
        "steel":'./assets/GO_Steel.png',
        "water":'./assets/GO_Water.png',
    }
]

const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if (APIResponse.status === 200) {
        const data = await APIResponse.json();
        return data;
    }
}

const renderPokemon = async (pokemon) => {
    pokemonIMG.src = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/029b8bd9-cb5a-41e4-9c7e-ee516face9bb/dayo3ow-7ac86c31-8b2b-4810-89f2-e6134caf1f2d.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAyOWI4YmQ5LWNiNWEtNDFlNC05YzdlLWVlNTE2ZmFjZTliYlwvZGF5bzNvdy03YWM4NmMzMS04YjJiLTQ4MTAtODlmMi1lNjEzNGNhZjFmMmQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ooubhxjHp9PIMhVxvCFHziI6pxDAS8glXPWenUeomWs'
    pokemonName.innerHTML = 'Carregando...'
    pokemonNum.innerHTML = ''
    peso.innerHTML = '...'
    tipo.innerHTML = '...'
    const data = await fetchPokemon(pokemon)


    if (data) {
        pokemonName.innerHTML = data.name;
        pokemonNum.innerHTML = data.id;
        pokemonIMG.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
        input.value = '';
        searchPokemon = data.id;
        primeiro = data.id
        peso.innerHTML = data.weight;
        tipo.innerHTML = data.types['0'].type.name;
    } else {
        pokemonName.innerHTML = 'Não encontrado'
        pokemonNum.innerHTML = '';
        pokemonIMG.src = 'https://i.gifer.com/origin/28/2860d2d8c3a1e402e0fc8913cd92cd7a_w200.gif'
    }
}

const iconPk = async (pk) =>{
    console.log('ok')
    icones.forEach(icone =>{
        if(data === 'bug'){
            tipoimg.src = icone.bug
        }
    })
}
// const rendericon = async (pokemon) => {
//     console.log('aqui')
//     const data = await fetchPokemon(pokemon)

//     if (data.types['0'].type.name == 'bug') {
//         console.log('ok')
//         tipoimg.src = 'https://1.bp.blogspot.com/-BtSgzxBk5_w/YBsQTh_EheI/AAAAAAAAsBc/C84X453AW9YUVM3F6HTSRyfd0DUNGa5qwCLcBGAsYHQ/s20/GO_Bug.webp://1.https://1.bp.blogspot.com/-BtSgzxBk5_w/YBsQTh_EheI/AAAAAAAAsBc/C84X453AW9YUVM3F6HTSRyfd0DUNGa5qwCLcBGAsYHQ/s20/GO_Bug.webp.blogspot.com/-pZSTY06dKwU/YBsQVkBQBoI/AAAAAAAAsCA/VM5Ccp2O2F8FqAnO09fl-bJ1qFTm75txgCLcBGAsYHQ/s20/GO_Grass.webp'
//     }
//     else if (data.types['0'].type.name == 'dark') {
//         tipoimg.src = './assets/GO_Dark.png'
//     }
//     else if (data.types['0'].type.name == 'dragon') {
//         tipoimg.src = 'https://https://1.bp.blogspot.com/-3cXS0z749gA/YBsQTijxT5I/AAAAAAAAsBk/JUzSVT9AO4EynsdOq4_CZl044uwoL0s4ACLcBGAsYHQ/s20/GO_Dragon.webp.bp.blogspot.com/-pZSTY06dKwU/YBsQVkBQBoI/AAAAAAAAsCA/VM5Ccp2O2F8FqAnO09fl-bJ1qFTm75txgCLcBGAsYHQ/s20/GO_Grass.webp'
//     }
//     else if (data.types['0'].type.name == 'electric') {
//         tipoimg.src = 'https://1.https://1.bp.blogspot.com/-n_ROwkZv-f4/YBsQURu0OCI/AAAAAAAAsBo/v6_80nw3UGcyHTLK_Yu_tde2xGXP3pWlQCLcBGAsYHQ/s20/GO_Electric.webp.blogspot.com/-pZSTY06dKwU/YBsQVkBQBoI/AAAAAAAAsCA/VM5Ccp2O2F8FqAnO09fl-bJ1qFTm75txgCLcBGAsYHQ/s20/GO_Grass.webp'
//     } else if (data.types['0'].type.name == 'fairy') {
//         tipoimg.src = 'https://1.bp.blogspot.com/-Oo205G1b3Qo/YBsQUUbYOOI/AAAAAAAAsBs/douwL2OWPvMv-0qCbwqOKgFmQ9fsoxlLQCLcBGAsYHQ/s20/GO_Fairy.webp://1.bp.blogspot.com/-pZSTY06dKwU/YBsQVkBQBoI/AAAAAAAAsCA/VM5Ccp2O2F8FqAnO09fl-bJ1qFTm75txgCLcBGAsYHQ/s20/GO_Grass.webp'
//     } else if (data.types['0'].type.name == 'fighting') {
//         tipoimg.src = 'https://1.bp.blogspot.com/-_0WO-3ba2PI/YBsQUrMyl6I/AAAAAAAAsBw/t1tjjJsvb304PxUJGPH0vmPFdUyuqv8tACLcBGAsYHQ/s20/GO_Fighting.webp://1.bp.blogspot.com/-pZSTY06dKwU/YBsQVkBQBoI/AAAAAAAAsCA/VM5Ccp2O2F8FqAnO09fl-bJ1qFTm75txgCLcBGAsYHQ/s20/GO_Grass.webp'
//     } else if (data.types['0'].type.name == 'fire') {
//         tipoimg.src = 'https://https://1.bp.blogspot.com/-zCIyUFTjdgE/YBsQUw5cRII/AAAAAAAAsB0/wbsWTRsbWlokpFDwWrY_c14Rii43kByWACLcBGAsYHQ/s20/GO_Fire.webp.bp.blogspot.com/-pZSTY06dKwU/YBsQVkBQBoI/AAAAAAAAsCA/VM5Ccp2O2F8FqAnO09fl-bJ1qFTm75txgCLcBGAsYHQ/s20/GO_Grass.webp'
//     } else if (data.types['0'].type.name == 'flying') {
//         tipoimg.src = 'https://https://1.bp.blogspot.com/-JUhKrpq3Hjk/YBsQU5uNImI/AAAAAAAAsB4/fzmPD3bVcnYuNaACbqcYcVdjy_eT2GhXwCLcBGAsYHQ/s20/GO_Flying.webp.bp.blogspot.com/-pZSTY06dKwU/YBsQVkBQBoI/AAAAAAAAsCA/VM5Ccp2O2F8FqAnO09fl-bJ1qFTm75txgCLcBGAsYHQ/s20/GO_Grass.webp'
//     } else if (data.types['0'].type.name == 'ghost') {
//         tipoimg.src = 'https://1.bp.blogspot.com/-5_3AXik_qNk/YBsQVBpAXtI/AAAAAAAAsB8/06k-B7LI-AY1KlJUymBrCfo6N55N4H-KACLcBGAsYHQ/s20/GO_Ghost.webp://1.bp.blogspot.com/-pZSTY06dKwU/YBsQVkBQBoI/AAAAAAAAsCA/VM5Ccp2O2F8FqAnO09fl-bJ1qFTm75txgCLcBGAsYHQ/s20/GO_Grass.webp'
//     } else if (data.types['0'].type.name == 'grass') {
//         tipoimg.src = './assets/GO_Dark.png'
//     } else if (data.types['0'].type.name == 'ground') {
//         tipoimg.src = 'https://1.bp.blogspot.com/-n2i3LPtPblE/YBsQVveh7MI/AAAAAAAAsCE/RzGuS7ve0IcnU8aVpkK95QQ5msFpkppqwCLcBGAsYHQ/s20/GO_Ground.webp://1.bp.blogspot.com/-pZSTY06dKwU/YBsQVkBQBoI/AAAAAAAAsCA/VM5Ccp2O2F8FqAnO09fl-bJ1qFTm75txgCLcBGAsYHQ/s20/GO_Grass.webp'
//     } else if (data.types['0'].type.name == 'ice') {
//         tipoimg.src = 'https://1.bp.blogspot.com/-3o0tZnL_cRQ/YBsQVy60fKI/AAAAAAAAsCI/2A2KXqE95aAznaSzhO-mmy0F8E-Kw_lgwCLcBGAsYHQ/s20/GO_Ice.webp://1.bp.blogspot.com/-pZSTY06dKwU/YBsQVkBQBoI/AAAAAAAAsCA/VM5Ccp2O2F8FqAnO09fl-bJ1qFTm75txgCLcBGAsYHQ/s20/GO_Grass.webp'
//     } else if (data.types['0'].type.name == 'normal') {
//         tipoimg.src = 'https://1.bp.blogspot.com/-L-ZsxQngxLc/YBsQWOk89WI/AAAAAAAAsCM/y2A83Y_dezkoau-SkrjJV0_tC76qz82WwCLcBGAsYHQ/s20/GO_Normal.webp://1.bp.blogspot.com/-pZSTY06dKwU/YBsQVkBQBoI/AAAAAAAAsCA/VM5Ccp2O2F8FqAnO09fl-bJ1qFTm75txgCLcBGAsYHQ/s20/GO_Grass.webp'
//     } else if (data.types['0'].type.name == 'poison') {
//         tipoimg.src = 'https://1.bp.blogspot.com/-ZE4Zql1J55s/YBsQWPTK5vI/AAAAAAAAsCQ/C900Z9sZ1AkrxaEz3y2jNX3yJivyft7JQCLcBGAsYHQ/s20/GO_Poison.webp://1.bp.blogspot.com/-pZSTY06dKwU/YBsQVkBQBoI/AAAAAAAAsCA/VM5Ccp2O2F8FqAnO09fl-bJ1qFTm75txgCLcBGAsYHQ/s20/GO_Grass.webp'
//     } else if (data.types['0'].type.name == 'psychic') {
//         tipoimg.src = 'https://1.bp.blogspot.com/-NKxsCQIl2aw/YBsQWdiqdlI/AAAAAAAAsCU/r6jDf5gaTzAhMPpNxEuYegw4D7rS8H0CgCLcBGAsYHQ/s20/GO_Psychic.webp://1.bp.blogspot.com/-pZSTY06dKwU/YBsQVkBQBoI/AAAAAAAAsCA/VM5Ccp2O2F8FqAnO09fl-bJ1qFTm75txgCLcBGAsYHQ/s20/GO_Grass.webp'
//     } else if (data.types['0'].type.name == 'rock') {
//         tipoimg.src = 'https://1.bp.blogspot.com/--mlKlB1CQww/YBsQW-XvPRI/AAAAAAAAsCY/QWsfnRfNbi0pC1CoPVUeMy2Vxp-EMLiXwCLcBGAsYHQ/s20/GO_Rock.webp://1.bp.blogspot.com/-pZSTY06dKwU/YBsQVkBQBoI/AAAAAAAAsCA/VM5Ccp2O2F8FqAnO09fl-bJ1qFTm75txgCLcBGAsYHQ/s20/GO_Grass.webp'
//     } else if (data.types['0'].type.name == 'steel') {
//         tipoimg.src = 'https://1.bp.blogspot.com/-WRZUM8RyH7k/YBsQWxjQWCI/AAAAAAAAsCc/G3x3shnM8UATeS7c1d57KmKWwr2-_TfAwCLcBGAsYHQ/s20/GO_Steel.webp://1.bp.blogspot.com/-pZSTY06dKwU/YBsQVkBQBoI/AAAAAAAAsCA/VM5Ccp2O2F8FqAnO09fl-bJ1qFTm75txgCLcBGAsYHQ/s20/GO_Grass.webp'
//     } else if (data.types['0'].type.name == 'water') {
//         tipoimg.src = 'https://1.bp.blogspot.com/-LxiwLLVOkAk/YBsQW1NqZMI/AAAAAAAAsCg/r2jwg4P3m54QO8OcF1r6jC6Q1WBK3M7mQCLcBGAsYHQ/s20/GO_Water.webp://1.bp.blogspot.com/-pZSTY06dKwU/YBsQVkBQBoI/AAAAAAAAsCA/VM5Ccp2O2F8FqAnO09fl-bJ1qFTm75txgCLcBGAsYHQ/s20/GO_Grass.webp'
//     }
// }


form.addEventListener('submit', (event) => {
    event.preventDefault();
    renderPokemon(input.value.toLowerCase());
});

tras.addEventListener('click', () => {
    if (primeiro > 1) {
        primeiro -= 1
        renderPokemon(primeiro)
    }
})

frente.addEventListener('click', () => {
    primeiro += 1
    renderPokemon(primeiro)
})



renderPokemon(primeiro)
