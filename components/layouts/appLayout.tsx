import { Box } from '@chakra-ui/react';
import Navbar from '../global/navbar';
import Footer from '../global/footer';
import { Fragment } from 'react';

function AppLayout(props: any) {
  return (
    <Fragment>
      <Navbar />
      <Box
        overflow={'hidden'}
        p={4}
        textAlign="center"
        fontSize="xl"
        w={'100%'}
        maxW={950}
        mx="auto"
        my={'auto'}
      >
        <Box pt={'4rem'}>{props.children}</Box>
      </Box>
      <Footer />
    </Fragment>
  );
}

export default AppLayout;
