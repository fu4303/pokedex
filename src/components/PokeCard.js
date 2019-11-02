/** @jsx jsx */
import {jsx} from 'theme-ui';
import {Box, Flex, Text, Heading, Image} from '@theme-ui/components';

const typeBadgesColors = {
  normal: '#a4acaf',
  fighting: '#d56723',
  flying: '#3dc7ef',
  poison: '#b97fc9',
  ground: '#f7de3f',
  rock: '#a38c21',
  bug: '#729f3f',
  ghost: '#7b62a3',
  steel: '#9eb7b8',
  fire: '#fd7d24',
  water: '#4592c4',
  grass: '#9bcc50',
  electric: '#eed535',
  psychic: '#f366b9',
  ice: '#51c4e7',
  dragon: '#f16e57',
  dark: '#707070',
  fairy: '#fdb9e9',
};

function getTypeBadgeColor(name) {
  return typeBadgesColors[name] || '#000';
}

export default function PokeCard({pokemonSource}) {
  const pokemon = pokemonSource.read();

  if (!pokemon.sprites.front_default) {
    return null;
  }

  return (
    <Flex
      p={[4]}
      sx={{
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        cursor: 'pointer',
        transition: 'all .4s ease',
        background: '#fff',
        borderRadius: '8px',
        boxShadow:
          '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        '&:hover': {
          boxShadow: 'none',
          background: '#f7fafc',
        },
      }}>
      <Image
        src={pokemon.sprites.front_default}
        alt={`${pokemon.name} front sprite`}
        sx={{width: '100px', height: '100px'}}
      />
      <Heading as="h2"> {pokemon.name} </Heading>
      <Flex>
        {pokemon.types.map(({type, slot}) => (
          <Box
            sx={{
              color: '#fff',
              background: getTypeBadgeColor(type.name),
              fontWeight: 'bold',
              borderRadius: '4px',
            }}
            key={slot}
            p={[1]}
            mx={[1]}>
            <Text>{type.name}</Text>
          </Box>
        ))}
      </Flex>
    </Flex>
  );
}
