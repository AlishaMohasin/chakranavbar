import { Flex,Heading,Box,Button,Spacer,ButtonGroup,Menu,MenuItem,MenuList,MenuButton,Link} from '@chakra-ui/react'
import React from 'react'
import theme from './style'

const Navbar = () => {
  return (
    <div>
      <Box font='theme' boxShadow='xs' p='6' rounded='md' bg='white'>
      <Flex  justify="space-around" minWidth='max-content' alignItems='center' gap="4">
          <Heading size='sm'>LOGO</Heading>
          
          <Menu isLazy>
  <MenuButton>Inspiration</MenuButton>
  <MenuList>
    {/* MenuItems are not rendered unless Menu is open */}
    <MenuItem>Explore design work</MenuItem>
    <MenuItem>New and Noteworthy</MenuItem>
  
  </MenuList>
</Menu>

          <Menu isLazy>
  <MenuButton>Find work</MenuButton>
  <MenuList>
    {/* MenuItems are not rendered unless Menu is open */}
              <MenuItem>Job Board
               
               
              </MenuItem>
    <MenuItem>Freelance Projects</MenuItem>
  
  </MenuList>
</Menu>

 
          <Button colorScheme='teal' variant='ghost'>
 Learn Design
</Button>
 
 
  <Button colorScheme='teal' variant='ghost'>
  Hire Designers
          </Button>
     


          <Spacer/>
          
          <ButtonGroup gap='2'>
          <Link>Sign in</Link>
    <Button colorScheme='pink'>Sign up</Button>
  </ButtonGroup>
 </Flex>
  
  </Box>
     
     
     
 











    
      </div>
  )
}

export default Navbar