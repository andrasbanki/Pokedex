/* IIFE */ 

let pokemonRepository = (function () {
  let pokemonList = [
    {
      name: 'Bulbasaur',
      height: 0.7,
      type: ['Grass', 'Poison']  
    },
    {
      name: 'Charmander',
      height: 0.6,
      type: ['Fire']
    },
    {
      name: 'Squirtle',
      height: 0.5,
      type: ['Water']
    },
  ];

  function getAll() {
    return pokemonList;
  }

  function add(pokemon) {
    if(typeof pokemon === 'object') {
    pokemonList.push(pokemon);
  }
  }

  function addListItem(pokemon) {
    let pokemonList = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
    let button = document.createElement('button');

    button.innerText = pokemon.name;
    button.classList.add('button-class');
    button.addEventListener('click', function() {
      showDetails(pokemon);
    })
    
    listItem.appendChild(button);
    pokemonList.appendChild(listItem);
  }

  function showDetails(pokemon) {
    console.log(pokemon);
  }  

  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    showDetails: showDetails
  };
})();

pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});