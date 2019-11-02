/** @jsx jsx */
import {jsx} from 'theme-ui';
import React, {useState, useTransition} from 'react'; // eslint-disable-line no-unused-vars
import {Suspense} from 'react';
import {Button, Heading, Flex, Select} from '@theme-ui/components';

import PokeDex from '../../components/PokeDex';
import {fetchPokeData} from '../../api';

const intialLimit = 20;
const intialSource = fetchPokeData({limit: intialLimit});

export default function Home() {
  const [source, setSource] = useState(intialSource);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(intialLimit);
  const [startTransition, isPending] = useTransition({
    timeoutMs: 4000,
  });

  return (
    <>
      <Suspense fallback={null}>
        <Flex sx={{m: 4, justifyContent: 'space-between'}}>
          <Heading as="h2"> Pokemons </Heading>
          <Flex sx={{alignItems: 'center'}}>
            <Select
              value={limit}
              sx={{width: '4rem'}}
              onChange={e => {
                startTransition(() => {
                  const newLimit = Number(e.target.value);
                  setLimit(newLimit);
                  setSource(fetchPokeData({limit: newLimit, offset}));
                });
              }}
              bg="#fff"
              mx={2}
              name="per">
              <option value={20}>20</option>
              <option value={40}>40</option>
              <option value={60}>60</option>
              <option value={80}>80</option>
              <option value={100}>100</option>
            </Select>
            <Button
              disabled={isPending}
              onClick={() => {
                startTransition(() => {
                  const newOffset = offset + limit;
                  setOffset(newOffset);
                  setSource(fetchPokeData({limit, offset: newOffset}));
                });
              }}>
              Next Page {isPending ? '(Loading...)' : ''}
            </Button>
          </Flex>
        </Flex>
        <PokeDex source={source} />
      </Suspense>
    </>
  );
}
