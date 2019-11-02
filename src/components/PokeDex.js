/** @jsx jsx */
import {jsx} from 'theme-ui';
import {Suspense, SuspenseList} from 'react';
import {Grid} from '@theme-ui/components';

import PokeCardLoader from './PokeCardLoader';
import PokeCard from './PokeCard';

export default function PokeDex({source}) {
  const pokemons = source.pokemons.read();
  return (
    <Grid m={4} columns={[2, 2, 4]} gap={4}>
      <SuspenseList revealOrder="forwards">
        {pokemons.map(pokemon => {
          return (
            <Suspense key={pokemon.id} fallback={<PokeCardLoader />}>
              <PokeCard pokemonSource={pokemon.source} />
            </Suspense>
          );
        })}
      </SuspenseList>
    </Grid>
  );
}
