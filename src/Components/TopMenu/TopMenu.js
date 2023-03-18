import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { FiMenu } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

const TopMenu = () => {
  const navigate = useNavigate()
  return (
    <Menu>
      <MenuButton
        pos='fixed'
        right='30'
        top='0'
        pt='30px'
        transition='all 0.2s'
      >
        <FiMenu fontSize='30px' />
      </MenuButton>
      <MenuList>
        <MenuItem
          onClick={() => navigate('/changepassword', { replace: false })}
        >
          Change Password
        </MenuItem>
        {/*only if user if logged in */}
        <MenuItem
          onClick={() => navigate('/', { replace: false })}
        >Logout</MenuItem>
      </MenuList>
    </Menu>
  )
}

export default TopMenu
