/** @jsx jsx */
import {jsx} from 'theme-ui';
import {Heading, Flex} from '@theme-ui/components';

export default function NotFoundPage() {
  return (
    <Flex sx={{height: '100vh', justifyContent: 'center', alignItems: 'center'}}>
      <Heading as="h1"> 404 NOT FOUND </Heading>
    </Flex>
  );
}
