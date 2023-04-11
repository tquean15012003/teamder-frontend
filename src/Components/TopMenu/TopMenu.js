import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { FiMenu } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { TOKEN, USERNAME } from '../../Settings/Settings'

const TopMenu = () => {

  const navigate = useNavigate()

  const logOut = () => {
    navigate('/', { replace: false })
    localStorage.removeItem(USERNAME)
    localStorage.removeItem(TOKEN)
    window.location.reload()
  }

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
        <MenuItem onClick={() => navigate('/changepassword', { replace: false })} >
          Change Password
        </MenuItem>
        <MenuItem>
          <a style={{width: "100%", height: "100%"}} href="https://forms.gle/QJjvvPHVaGWm7ewz8" target="_blank" rel="noreferrer">
            Feedback
          </a>
        </MenuItem>
        {/*only if user if logged in */}
        <MenuItem
          onClick={() => {
            logOut()
          }}
        >Logout</MenuItem>
      </MenuList>
    </Menu>
  )
}

export default TopMenu
