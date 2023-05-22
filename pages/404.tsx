import { MotionBox } from '@/components/animations/motion/motion';
import PageLayout from '@/components/layouts/pageLayout';
import { Divider, Heading, Text, Link, Button, VStack } from '@chakra-ui/react';

function NotFound() {
  return (
    <PageLayout title={'Page Not Found'}>
      <VStack spacing={15} h={'420px'} maxH={'full'}>
        <Heading as="h1">Not found</Heading>
        <Text>
          The Page you are looking for is either underconstruction or either cant be found.{' '}
        </Text>
        <Text>If issue persist please Contact me!</Text>
        <Divider my={6} />
        <MotionBox my={6} align="center">
          <Link href="/">
            <Button aria-label="return home" colorScheme="teal">
              Return to home
            </Button>
          </Link>
        </MotionBox>
      </VStack>
    </PageLayout>
  );
}

export default NotFound;
