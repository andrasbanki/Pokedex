//Array includes a list of Pokémon with some details.

let pokemonList = [
  {
    name: 'Bulbasaur',
    height: 0.7,
    types: ['grass', 'poison']  
  },
  {
    name: 'Charmander',
    height: 0.6,
    types: ['fire']
  },
  {
    name: 'Squirtle',
    height: 0.5,
    types: ['water']
  }
];

/*This loop is to print a list of Pokémon with name, and height.
  Print the largest one with a message: "Wow, this is the biggest one!"*/

for (let i = 0; i < pokemonList.length; i++) {
  if (pokemonList[i].height >= 0.7) {
    document.write (pokemonList[i].name + ' (height: ' + pokemonList[i].height + ') - Wow, this is the biggest one!' + '<br>');
  } else {
    document.write (pokemonList[i].name + ' (height: ' + pokemonList[i].height + ') ' + '<br>');
  }
}
