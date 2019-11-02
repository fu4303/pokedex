export function fetchPokeData({limit = 21, offset = 0} = {}) {
  let pokemonsPromise = fetchPokemons({limit, offset});

  return {
    pokemons: wrapPromise(pokemonsPromise),
  };
}

function fetchPokemons({limit, offset}) {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`,
      );
      const pokemons = await res.json();

      const data = pokemons.results.map(pokemon => {
        const id = pokemon.url.split('/').reverse()[1];
        let pokemonsPromise = fetchPokemon(id);
        return {id, source: wrapPromise(pokemonsPromise)};
      });

      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
}

function fetchPokemon(id) {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const pokemon = await res.json();
      resolve(pokemon);
    } catch (error) {
      reject(error);
    }
  });
}

function wrapPromise(promise) {
  let status = 'pending';
  let result;
  let suspender = promise.then(
    r => {
      status = 'success';
      result = r;
    },
    e => {
      status = 'error';
      result = e;
    },
  );
  return {
    read() {
      if (status === 'pending') {
        throw suspender;
      } else if (status === 'error') {
        throw result;
      } else if (status === 'success') {
        return result;
      }
    },
  };
}
