/* Added IIFE*/ 

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
    if(typeof pokemon === 'object'){
    pokemonList.push(pokemon);
  }
  }

  return {
    getAll: getAll,
    add: add
  };
})();

/* Added forEach loop */

pokemonRepository.getAll().forEach(function (pokemon) {
  document.write(pokemon.name + ':  height: ' + pokemon.height + ', type: ' + pokemon.type + '<br>');
  });