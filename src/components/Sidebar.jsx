import { useState } from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'
import 'react-pro-sidebar/dist/css/styles.css'
import { Link } from 'react-router-dom'
import { Box, IconButton, Typography } from '@mui/material'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import DatasetOutlinedIcon from '@mui/icons-material/DatasetOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'

const Item = ({ title, to, icon, selected, setSelected }) => {
  return (
    <MenuItem active={selected === title} onClick={() => setSelected(title)} icon={icon}>
      <Typography color='#315e82'>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  )
}

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [selected, setSelected] = useState('Dashboard')

  return (
    <>
      <Box sx={{
        '& .pro-sidebar-inner': {
          bgcolor: '#f8f9fa'
        },
        '& .pro-icon-wrapper': {
          bgcolor: 'transparent'
        },
        '& .pro-inner-item': {
          padding: ' 5px 35px 5px 20px'
        },
        '& .pro-inner-item:hover': {
          color: '#868dfb'
        },
        '& .pro-menu-item.active': {
          color: '#6870fa'
        }
      }}
      >
        <ProSidebar background-color='#3d3e94' collapsed={isCollapsed}>
          <Menu>
            <MenuItem onClick={() => setIsCollapsed(!isCollapsed)} icon={isCollapsed ? <MenuOutlinedIcon bgcolor='#f8f9fa' /> : undefined} style={{ margin: '10px 0 20 px 0', bgcolor: '#f8f9fa' }}>
              {!isCollapsed && (
                <Box display='flex' justifyContent='right' ml='15px'>
                  <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                    <MenuOutlinedIcon />
                  </IconButton>
                </Box>
              )}
            </MenuItem>
            {/* {!isCollapsed && (
              <Box mb='20px'>
                <Box display='flex' justifyContent='center' alignItems='center'>
                  <img src='https://raw.githubusercontent.com/ed-roh/react-admin-dashboard/master/public/assets/user.png' width='100px' height='100px' style={{ cursor: 'pointer', borderRadius: '50%' }} />
                </Box>
                <Box textAlign='center'>
                  <Typography variant='h5' fontWeight='bold' sx={{ m: '10px 0 0 0' }}>Ivan Alarcon</Typography>
                </Box>
              </Box>
            )} */}
            <Box paddingLeft={isCollapsed ? undefined : '10%'}>
              <Typography variant='h7' color='#a3a3a3' sx={{ m: '15px 0 5px 20px' }}>Menu</Typography>
              <Item title='Home' to='/' icon={<HomeOutlinedIcon sx={{ color: '#315e82' }} />} selected={selected} setSelected={setSelected} />
              <Item title='Profile' to='/profile' icon={<PersonOutlinedIcon sx={{ color: '#315e82' }} />} selected={selected} setSelected={setSelected} />
              <SubMenu title='Datasets'>
                <Item title='Dataset 1' to='/dataset-1' icon={<DatasetOutlinedIcon sx={{ color: '#315e82' }} />} selected={selected} setSelected={setSelected} />
                <Item title='Dataset 2' to='/dataset-2' icon={<DatasetOutlinedIcon sx={{ color: '#315e82' }} />} selected={selected} setSelected={setSelected} />
              </SubMenu>
              <Item title='About' to='/about' icon={<InfoOutlinedIcon sx={{ color: '#315e82' }} />} selected={selected} setSelected={setSelected} />
            </Box>
            <Box paddingLeft={isCollapsed ? undefined : '10%'}>
              <Typography variant='h7' color='#a3a3a3' sx={{ m: '15px 0 5px 20px' }}>Annotations</Typography>
              <Item title='Category' to='/category' icon={<AnalyticsOutlinedIcon sx={{ color: '#315e82' }} />} selected={selected} setSelected={setSelected} />
              <Item title='Area' to='/area' icon={<AnalyticsOutlinedIcon sx={{ color: '#315e82' }} />} selected={selected} setSelected={setSelected} />
              <Item title='Position' to='/position' icon={<AnalyticsOutlinedIcon sx={{ color: '#315e82' }} />} selected={selected} setSelected={setSelected} />
              <Item title='Occupancy' to='/occupancy' icon={<AnalyticsOutlinedIcon sx={{ color: '#315e82' }} />} selected={selected} setSelected={setSelected} />
              <Item title='Measure' to='/measure' icon={<AnalyticsOutlinedIcon sx={{ color: '#315e82' }} />} selected={selected} setSelected={setSelected} />
              <Typography variant='h7' color='#a3a3a3' sx={{ m: '15px 0 5px 20px' }}>Images</Typography>
              <Item title='Brightness' to='/brightness' icon={<AnalyticsOutlinedIcon sx={{ color: '#315e82' }} />} selected={selected} setSelected={setSelected} />
              <Item title='Hue' to='/hue' icon={<AnalyticsOutlinedIcon sx={{ color: '#315e82' }} />} selected={selected} setSelected={setSelected} />
              <Item title='Saturation' to='/saturation' icon={<AnalyticsOutlinedIcon sx={{ color: '#315e82' }} />} selected={selected} setSelected={setSelected} />
              <Item title='Noise' to='/noise' icon={<AnalyticsOutlinedIcon sx={{ color: '#315e82' }} />} selected={selected} setSelected={setSelected} />
              <Item title='Blur' to='/blur' icon={<AnalyticsOutlinedIcon sx={{ color: '#315e82' }} />} selected={selected} setSelected={setSelected} />
            </Box>
          </Menu>
        </ProSidebar>
      </Box>
    </>
  )
}

export default Sidebar
