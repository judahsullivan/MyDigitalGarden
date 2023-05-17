import {
  Box,
  HStack,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  Button,
  useColorModeValue,
  useDisclosure,
  Icon,
  Text,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { AiFillProfile, AiTwotoneThunderbolt } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdTimeline } from 'react-icons/md';
import ThemeToggleButton from './theme-toggle-button';
import ResumeButton from './resumebutton';
import { MagicLink } from '../shared/magic';
import { MotionMagicLink } from '../shared/magic';
import { FaBlog } from 'react-icons/fa';
import { MotionBox } from '../animations/motion/motion';

const webLinks = [
  { name: 'Projects', path: '/projects' },
  { name: 'Tech-Stack', path: '/techStack' },
  { name: 'Blog', path: '/blog' }
];

const mobileLinks = [
  { name: 'Projects', path: '/projects' },
  { name: 'Tech-Stack', path: '/techStack' },
  { name: 'Blog', path: '/blog' }
];

interface NavLinkProps {
  index?: number;
  name: string;
  path: string;
  onClose: () => void;
}

interface MenuLinkProps {
  name: string;
  path: string;
  bg: string;
  rPath: string;
  onClose: () => void;
}

const MenuLink = (props: MenuLinkProps) => {
  interface IconsObj {
    [key: string]: JSX.Element;
  }

  const iconsObj: IconsObj = {
    '/about': <Icon as={AiFillProfile} size={18} />,
    '/projects': <Icon as={MdTimeline} size={18} />,
    '/techStack': <Icon as={AiTwotoneThunderbolt} size={18}  />,
    '/blog': <Icon as={FaBlog} size={18} />
  };

  return (
    <MagicLink passHref href={props.path} onClick={() => props.onClose()}>
      <MenuItem>
        <HStack align={'center'} ml={4}>
          {iconsObj[props.path]}
          <Text>{props.name}</Text>
        </HStack>
      </MenuItem>
    </MagicLink>
  );
};

const NavLink = (props: NavLinkProps) => {
  return (
    <MotionMagicLink
      href={props.path}
      px={3}
      color={useColorModeValue('#f0e7db', '#202023')}
      py={1}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      _hover={{
        borderRadius: 'md'
      }}
    >
      {props.name}
    </MotionMagicLink>
  );
};

interface MenuLinkProps {
  name: string;
  path: string;
  rPath: string;
  onClose: () => void;
}

export default function Navbar() {
  const router = useRouter();
  const { onClose } = useDisclosure();

  const menuProps = {
      bg: useColorModeValue('#f0e7db', '#202023')
  };
  return (
    <MotionBox
      align={'center'}
      px={6}
      boxShadow={'lg'}
      bg={useColorModeValue('#202023', '#f0e7db')}
      color={useColorModeValue('#f0e7db', '#202023')}
      position={'fixed'}
      fontWeight={800}
      p={2}
      zIndex={99}
      w={'100%'}
    >
      <Flex
       justify={'space-between'} px={2} align={'center'} maxW={'container.lg'} mx={'auto'}>
        <MotionMagicLink
          href={'/'}
          borderWidth={'2'}
          whileHover={{ scale: 1.1 }}
          maxW={'100%'}
          whileTap={{ scale: 0.9 }}
          letterSpacing={'tighter'}
        >
          JSullivan
        </MotionMagicLink>
        <HStack as={'nav'} spacing={3} display={{ base: 'none', md: 'flex' }}>
          {webLinks.map((link, index) => (
            <NavLink
              key={index}
              name={link.name}
              path={link.path}
              onClose={onClose}
            />
          ))}
        </HStack>
        <Flex
        align={'center'} 
        >
        
          <Menu autoSelect={false} isLazy>
            {({ isOpen, onClose }) => (
              <Flex  align={"center"} justify={'center'}>
              <ThemeToggleButton />
              <ResumeButton />
                <MenuButton
                  display={{ base: 'inline-block', md: 'none' }}
                  as={Button}
                  variant="options"
                  mt={1}

                >
                  <Icon
                    as={GiHamburgerMenu}
                    transition={'all .25s ease-in-out'}
                    transform={isOpen ? 'rotate(180deg)' : ''}
                  />
                </MenuButton>
                <MenuList
                  zIndex={5}
                  bg={useColorModeValue('rgb(255, 255, 255)', 'rgb(26, 32, 44)')}
                  border="none"
                  color={useColorModeValue('#202023', '#f0e7db')}
                  boxShadow={useColorModeValue(
                    '2px 4px 6px 2px rgba(160, 174, 192, 0.6)',
                    '2px 4px 6px 2px rgba(9, 17, 28, 0.6)'
                  )}
                >
                  {mobileLinks.map((link, index) => (
                    <MenuLink
                      key={index}
                      path={link.path}
                      name={link.name}
                      onClose={onClose}
                      bg={menuProps.bg}
                      rPath={router.pathname}
                    />
                  ))}
                </MenuList>
              </Flex>
            )}
          </Menu>
        </Flex>
      </Flex>
    </MotionBox>
  );
}
