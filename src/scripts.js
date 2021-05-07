// IIFE

let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  // function for push pokemons

  function add(pokemon) {
    if (
      typeof pokemon === 'object' &&
      'name' in pokemon &&
      'detailsUrl' in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log('pokemon is not correct');
    }
  }

  // Return a pokemonList

  function getAll() {
    return pokemonList;
  }

  // pokemonList & pokemonItems

  function addListItem(pokemon) {
    let pokemonList = document.querySelector('.list-group');
    let listItem = document.createElement('li');
    listItem.classList.add('list-group-item');

    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('button');
    button.setAttribute('data-target', '#exampleModal');
    button.setAttribute('data-toggle', 'modal');

    listItem.appendChild(button);
    pokemonList.appendChild(listItem);
    button.addEventListener('click', function () {
      showDetails(pokemon);
    });
  }

  // Fetch pokemon list from API

  function loadList() {
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url,
          };
          add(pokemon);
        });
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  // Fetch pokemon details from API

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        item.imageUrlFront = details.sprites.front_default;
        item.imageUrlBack = details.sprites.back_default;
        item.height = details.height;
        item.weight = details.weight;
        item.types = [];
        for (var i = 0; i < details.types.length; i++) {
          item.types.push(details.types[i].type.name);
        }
        item.abilities = [];
        // eslint-disable-next-line no-redeclare
        for (var i = 0; i < details.abilities.length; i++) {
          item.abilities.push(details.abilities[i].ability.name);
        }
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  // Display pokemons

  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function () {
      showModal(item);
    });
  }

  // Show the modal

  function showModal(item) {
    let modalBody = $('.modal-body');
    let modalTitle = $('.modal-title');
    // eslint-disable-next-line no-unused-vars
    let modalHeader = $('.modal-header');

    modalTitle.empty();
    modalBody.empty();

    let nameElement = $('<h1>' + item.name + '</h1>');
    let imageElementFront = $('<img class="modal-img" style="width:50%">');
    imageElementFront.attr('src', item.imageUrlFront);
    let imageElementBack = $('<img class="modal-img" style="width:50%">');
    imageElementBack.attr('src', item.imageUrlBack);
    let heightElement = $('<p>' + 'height : ' + item.height + '</p>');
    let weightElement = $('<p>' + 'weight : ' + item.weight + '</p>');
    let typesElement = $('<p>' + 'types : ' + item.types + '</p>');
    let abilitiesElement = $('<p>' + 'abilities : ' + item.abilities + '</p>');

    modalTitle.append(nameElement);
    modalBody.append(imageElementFront);
    modalBody.append(imageElementBack);
    modalBody.append(heightElement);
    modalBody.append(weightElement);
    modalBody.append(typesElement);
    modalBody.append(abilitiesElement);
  }

  // Return

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
  };
})();

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});

// Search for pokemons

    // eslint-disable-next-line no-unused-vars
    function myFunction() {
      var input, filter, ul, li, a, i, txtValue;
      input = document.getElementById('searchBar');
      filter = input.value.toUpperCase();
      ul = document.getElementById('list-group');
      li = ul.getElementsByTagName('li');
      for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName('button')[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = '';
        } else {
          li[i].style.display = 'none';
        }
      }
    }