import { MotionBox } from '@/components/animations/motion/motion';
import { PageSlideFade, container } from '@/components/animations/motion/transition';
import ContactForm from '@/components/contacts/contactForm';
import PageLayout from '@/components/layouts/pageLayout';
import { Box, VStack } from '@chakra-ui/react';

export default function Contacts() {
  const title = 'Contacts☎️';
  const subtitle =
    'Want to get in Touch with me?🤳🏾 Just fill the form out I promise to get with as soon as possible!🤙🏾 Again thank you for your time and viewing my Digital Garden! Hope you visit again!🙏🏾 ';
  return (
    <PageLayout title={title}>
      <PageSlideFade>
        <VStack spacing={10}>
          <VStack w={'90%'} textAlign={'left'} align={'start'}>
            <Box fontSize={'3xl'} fontWeight={'bold'} textDecoration={'underline'}>
              {title}
            </Box>
            <Box>{subtitle}</Box>
          </VStack>
          <MotionBox variants={container} intial={'hidden'} animate={'visible'}>
            <ContactForm />
          </MotionBox>
        </VStack>
      </PageSlideFade>
    </PageLayout>
  );
}
