/** @jsx jsx */
import {jsx} from 'theme-ui';
import {Card, Box, Flex, Text, Heading, Image} from '@theme-ui/components';

export default function PokeCard({pokemonSource}) {
  const pokemon = pokemonSource.read();

  if (!pokemon.sprites.front_default) {
    return null;
  }

  return (
    <Card p={[4]}>
      <Flex
        sx={{
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
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
                bg: `badges.${type.name}`,
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
    </Card>
  );
}
