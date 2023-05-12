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
  Avatar
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { AiFillProfile, AiOutlineGithub, AiTwotoneThunderbolt } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdTimeline } from 'react-icons/md';
import ThemeToggleButton from './theme-toggle-button';
import ResumeButton from './resumebutton';
import { MagicLink } from '../shared/magic';
import { MotionMagicLink } from '../shared/magic';
import { FaDev } from 'react-icons/fa';
import { BsJournalBookmark } from 'react-icons/bs';
import SVGLogo from './svglogo';
import { MotionBox } from '../animations/motion/motion';

const webLinks = [
  { name: 'Projects', path: '/projects' },
  { name: 'Tech-Stack', path: '/techStack' },
  { name: 'Digital-Garden', path: '/garden' }
];

const mobileLinks = [
  { name: 'Projects', path: '/projects' },
  { name: 'Tech-Stack', path: '/techStack' },
  { name: 'Digital-Garden', path: '/Garden' }
];

interface NavLinkProps {
  index?: number;
  name: string;
  path: string;
  linkColor: string;
  onClose: () => void;
}

interface MenuLinkProps {
  name: string;
  path: string;
  color: string;
  bg: string;
  rPath: string;
  onClose: () => void;
}

const MenuLink = (props: MenuLinkProps) => {
  interface IconsObj {
    [key: string]: JSX.Element;
  }

  const iconsObj: IconsObj = {
    '/about': <Icon as={AiFillProfile} size={18} color={props.color} />,
    '/projects': <Icon as={MdTimeline} size={18} color={props.color} />,
    '/techStack': <Icon as={AiTwotoneThunderbolt} size={18} color={props.color} />,
    '/': <Icon as={FaDev} size={18} color={props.color} />
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
      py={1}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      _hover={{
        color: useColorModeValue('#202023', 'whiteAlpha.500'),
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
    bg: useColorModeValue('gray.200', 'gray.700')
  };
  return (
    <MotionBox
      align={'center'}
      bg={useColorModeValue('whiteAlpha.700', 'blackAlpha.200')}
      px={6}
      boxShadow={'lg'}
      position={'fixed'}
      p={2}
      zIndex={99}
      css={{
        backdropFilter: 'blur(15px)'
      }}
      w={'100%'}
    >
      <Flex justify={'space-between'} align={'center'} maxW={'container.lg'} mx={'auto'}>
        <MotionMagicLink
          href={'/'}
          borderWidth={'2'}
          whileHover={{ scale: 1.1 }}
          maxW={'100%'}
          whileTap={{ scale: 0.9 }}
          letterSpacing={'tighter'}
        >
          Sullivan
        </MotionMagicLink>
        <HStack as={'nav'} spacing={3} display={{ base: 'none', md: 'flex' }}>
          {webLinks.map((link, index) => (
            <NavLink
              key={index}
              name={link.name}
              path={link.path}
              onClose={onClose}
              linkColor={''}
            />
          ))}
        </HStack>
        <Flex align={'center'}>
          <Menu autoSelect={false} isLazy>
            {({ isOpen, onClose }) => (
              <>
                <MenuButton
                  display={{ base: 'inline-block', md: 'none' }}
                  as={Button}
                  mr={2}
                  variant="options"
                  color={useColorModeValue('red.500', 'messenger.500')}
                  size="sm"
                  alignSelf={'center'}
                  lineHeight="inherit"
                  fontSize={'1em'}
                  rounded={'md'}
                >
                  <Icon
                    alignSelf={'center'}
                    as={GiHamburgerMenu}
                    transition={'all .25s ease-in-out'}
                    transform={isOpen ? 'rotate(180deg)' : ''}
                  />
                </MenuButton>
                <MenuList
                  zIndex={5}
                  bg={useColorModeValue('rgb(255, 255, 255)', 'rgb(26, 32, 44)')}
                  border="none"
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
                      color={''}
                    />
                  ))}
                </MenuList>
              </>
            )}
          </Menu>
          <HStack spacing={2}>
            <ResumeButton />
            <ThemeToggleButton />
          </HStack>
        </Flex>
      </Flex>
    </MotionBox>
  );
}
