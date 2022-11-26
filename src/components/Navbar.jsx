import { Box, IconButton } from '@mui/material'
import InputBase from '@mui/material/InputBase'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import SearchIcon from '@mui/icons-material/Search'
import Typography from '@mui/material/Typography'

const Navbar = () => {
  return (
    <>
      <Box display='flex' justifyContent='space-between' p={2} bgcolor='transparent'>
        <Box display='flex'>
          <Typography color='#315e82' variant='h5'>Dashboard</Typography>
        </Box>
        <Box display='flex'>
          <IconButton type='button' sx={{ p: 1 }}>
            <SearchIcon sx={{ color: '#315e82' }} />
          </IconButton>
          <InputBase sx={{ ml: 2, flex: 1, borderRadius: 2, bgcolor: 'white', border: 1, borderColor: 'grey.400' }} placeholder='Search' />
          <IconButton>
            <PersonOutlinedIcon sx={{ color: '#315e82' }} />
          </IconButton>
          <IconButton>
            <NotificationsOutlinedIcon sx={{ color: '#315e82' }} />
          </IconButton>
          <IconButton>
            <SettingsOutlinedIcon sx={{ color: '#315e82' }} />
          </IconButton>
        </Box>
      </Box>
    </>
  )
}

export default Navbar
