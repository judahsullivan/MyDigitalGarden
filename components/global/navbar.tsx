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

} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { AiFillContacts, AiTwotoneThunderbolt } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import { ImProfile } from 'react-icons/im'
import { MdTimeline } from 'react-icons/md'
import ThemeToggleButton from './theme-toggle-button'
import { MagicLink,MotionMagicLink } from '../shared/magic'
import ResumeButton from './resumebutton'
import { BsStack } from 'react-icons/bs'
import { ImBlog } from 'react-icons/im'
import {MotionBox} from '../animations/motion/motion'

const webLinks = [

  { name: 'Projects', path: '/projects' },
  { name: 'Tech-Stack', path: '/techStack' },
  { name: 'Garden', path: '/garden' },
  { name: 'Contact', path: '/contact' },
]


const mobileLinks = [

  { name: 'Projects', path: '/projects' },
  { name: 'Tech-Stack', path: '/techStack' },
  { name: 'Garden', path: '/garden' },
  { name: 'Contact', path: '/contact' },

]


interface NavLinkProps {
  index?: number;
  name: string;
  path: string;
  onClose: () => void;
}

interface MenuLinkProps {
  name: string;
  path: string;
  rPath: string;
  onClose: () => void;
}


const MenuLink = (props: MenuLinkProps) => {
  const iconsObj: any = {
    '/projects': <Icon as={MdTimeline} size={18}  />,
    '/garden': <Icon as={ImBlog} size={18}  />,
    '/contact': <Icon as={AiFillContacts} size={18}  />,
    '/techStack': <Icon as={BsStack} size={18}  />,
  };

  return (
    <MagicLink
      href={props.path} passHref
      onClick={() => props.onClose()}>
        <MenuItem 
          bg={useColorModeValue( '#202023','#f0e7db')}
        >
          <HStack
          align={'center'}
          ml={4}>
            {iconsObj[props.path] }
            <Text
           >{props.name}</Text>
          </HStack>
        </MenuItem>
    </MagicLink>
  );
};

const NavLink = (props: NavLinkProps) => {

  return (
    <MagicLink
      href={props.path}
      passHref
      px={3}
      py={1}
      _hover={{
      color: useColorModeValue('#202023', '#f0e7db'),
        borderRadius: 'md'
      }}
    >
    <MotionBox>
      {props.name}
    </MotionBox>
    </MagicLink>
  )
}

interface MenuLinkProps {
  name: string;
  path: string;
  rPath: string;
  onClose: () => void;

}

export default function Navbar() {
 const menucolor=useColorModeValue( '#202023','#f0e7db')

  const router = useRouter();
  const { onClose } = useDisclosure();

  return (

    <Box
      color={useColorModeValue( '#f0e7db','#202023')}
      bg={menucolor}
      px={6}
      boxShadow={'lg'}
      position={'fixed'}
      alignContent={'center'}
      p={2}
      zIndex={99}
      css={{
        backdropFilter: 'blur(7px)'
      }}

      w={'full'}
    >
      <Flex
        justify={'space-between'}
        align={'center'}
        mx={'auto'}

      >
        <MotionMagicLink
          align={'center'}
          padding={2}
          href={"/"}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: .9 }}
        _hover={{
          bg: useColorModeValue( 'whiteAlpha.900','blackAlpha.800'),
          color: useColorModeValue('#202023', '#f0e7db'),
        borderRadius: 'md'
      }}
        >
          <Text letterSpacing={-1}>
            Judah Sullivan
          </Text>
        </MotionMagicLink>
        <HStack
          as={'nav'}
          spacing={3}
          display={{ base: 'none', md: 'flex' }}
        >
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
        justify={'center'} 
        align={'center'}>
        <ResumeButton  />
        <ThemeToggleButton />
          <Menu autoSelect={false} 
          isLazy
          >
            {({ isOpen, onClose }) => (
              <>
                <MenuButton
                  display={{ base: 'inline-block', md: 'none' }}
                  as={Button}
                  aria-label='Menu Button'
                  variant="options"
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
                  bg={menucolor}
                  zIndex={5}
                >
                  {mobileLinks.map((link, index) => (
                    <MenuLink
                      key={index}
                      path={link.path}
                      name={link.name}
                      onClose={onClose}
                      rPath={router.pathname}
                    />
                  ))}
                </MenuList>
              </>
            )}
          </Menu>
        </Flex>
      </Flex>
    </Box>



  )
}
