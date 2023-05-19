import {
  chakra,
  Heading,
  Box,
  Link,
  Text,
  Icon,
  Tooltip,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Button,
  ModalFooter,
  useDisclosure,
  Avatar,
  VStack,
} from '@chakra-ui/react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { MotionBox } from '../../animations/motion/motion';
import {list} from '@/components/animations/motion/transition'

const FeatureCard = ({ title, color, image, content, label, href }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <MotionBox   variants={list} >
      <VStack
        bg={useColorModeValue('#202023', '#f0e7db')}
        color={useColorModeValue('#f0e7db', '#202023')}
        p={2}
        h={190}
        maxW={200}
        rounded="lg"
        _hover={{
          boxShadow: useColorModeValue(
            '0 4px 6px rgba(160, 174, 192, 0.6)',
            '0 4px 6px rgba(9, 17, 28, 0.4)'
          )
        }}
      >
        <Avatar src={image} bgColor={`${color}.200`} p={2} rounded={'full'} />
        <Box  lineHeight={1} fontSize="lg" letterSpacing={3} fontWeight="black" py={4}>
          {title}
        </Box>
        <Tooltip label={label}>
          <Button
            bg={useColorModeValue('#f0e7db', '#202023')}
            color={useColorModeValue('#202023', '#f0e7db')}
            onClick={onOpen}
          >
            Read More
          </Button>
        </Tooltip>
      </VStack>
      <Modal isOpen={isOpen} onClose={onClose} size={'sm'} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <Avatar src={image} size={'md'} mb={6} rounded={'full'} />
              <Heading fontSize="md" fontWeight="bold" mb={4}>
                {title}
              </Heading>
              <Text fontSize="sm">{content}</Text>
              <Link href={href}>
                <Icon mt={3} as={FaExternalLinkAlt} />
              </Link>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </MotionBox>
  );
};

export default FeatureCard;
