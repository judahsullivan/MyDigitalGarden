import {
  Text,
  FormControl,
  FormLabel,
  Button,
  Input,
  Textarea,
  useToast,
  VStack,
  useColorModeValue,
  Stack
} from '@chakra-ui/react';
import { useState } from 'react';
import { init } from '@emailjs/browser';
import emailjs from '@emailjs/browser';
import ConfettiExplosion from 'react-confetti-explosion';
import { MotionBox } from '../animations/motion/motion';
import { item } from '../animations/motion/transition';

const ContactForm = () => {
  const bg = useColorModeValue('blackAlpha.900', 'whiteAlpha.700');
  const color = useColorModeValue('whiteAlpha.700', 'blackAlpha.900');
  const errorBg = useColorModeValue('red.500', 'red.800');

  init('TodAmaFXVqvpfqAPo');

  const toast = useToast();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false); // State variable for form submission

  const clearInput = () => {
    setName('');
    setEmail('');
    setMessage('');
    setIsLoading(false);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    setIsLoading(true);

    emailjs
      .send('service_b0vj0ia', 'template_iwg0xrs', {
        from_name: name,
        from_email: email,
        message: message
      })
      .then(
        () => {
          clearInput();
          toast({
            position: 'bottom-left',
            render: () => (
              <Stack bg={bg} color={color} p={4} rounded="md">
                <VStack spacing={2} align="left">
                  <Text fontWeight={800}>Email sent.</Text>
                  <Text fontWeight={600}>
                    Awesome! Thank you for reaching out! I promise to get back to you as soon as
                    possible!
                  </Text>
                </VStack>
              </Stack>
            )
          });

          setIsSubmitted(true); // Set form submission state to true
        },
        (error) => {
          clearInput();

          toast({
            position: 'bottom-left',
            render: () => (
              <Stack p={4} bg={errorBg} color="white" rounded="md">
                <VStack spacing={2} align="left">
                  <Text fontWeight={800}>Email not sent.</Text>
                  <Text fontWeight={600}>{error.text}</Text>
                </VStack>
              </Stack>
            )
          });
        }
      );
  };

  return (
    <MotionBox variants={item} maxW="2xl" px={{ base: 5, md: 8 }}>
      <Stack spacing={6}>
        <VStack
          bg={useColorModeValue('#202023', '#f0e7db')}
          color={useColorModeValue('#f0e7db', '#202023')}
          as="form"
          spacing={8}
          w="100%"
          rounded="lg"
          boxShadow="lg"
          p={{ base: 5, sm: 10 }}
          onSubmit={handleSubmit} // Add form submission handler
        >
          <VStack spacing={4} w="100%">
            <Stack w="100%" spacing={3} direction={{ base: 'column', md: 'row' }}>
              {/* Name field */}
              <FormControl id="name">
                <FormLabel>Name</FormLabel>
                <Input
                  bg={useColorModeValue('#f0e7db', '#202023')}
                  color={useColorModeValue('#202023', '#f0e7db')}
                  type="text"
                  placeholder="Judah Sullivan"
                  rounded="md"
                  value={name} // Bind the value to the state variable
                  onChange={(e) => setName(e.target.value)} // Update the state variable on change
                />
              </FormControl>
              {/* Email field */}
              <FormControl isRequired id="email">
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  placeholder="johndoe@email.com"
                  rounded="md"
                  bg={useColorModeValue('#f0e7db', '#202023')}
                  color={useColorModeValue('#202023', '#f0e7db')}
                  value={email} // Bind the value to the state variable
                  onChange={(e) => setEmail(e.target.value)} // Update the state variable on change
                />
              </FormControl>
            </Stack>
            {/* Subject field */}
            {/* Message field */}
            <FormControl id="message">
              <FormLabel>Message</FormLabel>
              <Textarea
                size="lg"
                placeholder="Enter your message"
                rounded="md"
                bg={useColorModeValue('#f0e7db', '#202023')}
                color={useColorModeValue('#202023', '#f0e7db')}
                value={message} // Bind the value to the state variable
                onChange={(e) => setMessage(e.target.value)} // Update the state variable on change
              />
            </FormControl>
          </VStack>
          {/* Submit button */}
          <VStack w="100%">
            {isSubmitted && (
              <ConfettiExplosion duration={2200} colors={['black', 'white', 'gray']} />
            )}
            <Button
              aria-label="contact submission form"
              bg={useColorModeValue('#f0e7db', '#202023')}
              color={useColorModeValue('#202023', '#f0e7db')}
              _hover={{}}
              rounded="md"
              w={{ base: '100%', md: 'max-content' }}
              type="submit" // Add type as submit to trigger form submission
              isLoading={isLoading} // Show loading state when submitting
            >
              Send Message
            </Button>
          </VStack>
        </VStack>
      </Stack>
    </MotionBox>
  );
};

export default ContactForm;
