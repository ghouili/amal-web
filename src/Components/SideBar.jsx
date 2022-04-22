import React, { useContext, useState } from 'react'
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded';
import EventNoteRoundedIcon from '@mui/icons-material/EventNoteRounded';
import { useNavigate } from 'react-router-dom';

import { MainContext } from '../Hooks/Context/MainContext';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    // marginTop: '64px',
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const SideBar = () => {
  
  const navigate = useNavigate();
  const {sideBaropen, setSideBaropen} = useContext(MainContext);
  const theme = useTheme();


  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };

  const handleDrawerClose = () => {
    setSideBaropen(false);
  };

  return (
    <Box sx={{ display: 'flex', }}  >
      {/* <CssBaseline /> */}
      <Drawer variant="permanent" open={sideBaropen}  >
        
        {/* <Divider /> */}
        <List >
         {/*Link to dashboard //////////// */}
          <ListItemButton
            // key={text}
            sx={{
              minHeight: 48,
              justifyContent: sideBaropen ? 'initial' : 'center',
              px: 2.5,
            }}
            onClick={() => navigate('/')}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: sideBaropen ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              <HomeRoundedIcon />
            </ListItemIcon>
            <ListItemText primary='Dashboard' sx={{ opacity: sideBaropen ? 1 : 0 }} />
          </ListItemButton>
          
         {/*Link to emplois //////////// */}
          <ListItemButton
            // key={text}
            sx={{
              minHeight: 48,
              justifyContent: sideBaropen ? 'initial' : 'center',
              px: 2.5,
            }}
            onClick={() => navigate('/schedule')}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: sideBaropen ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              <EventNoteRoundedIcon />
            </ListItemIcon>
            <ListItemText primary='Schedules' sx={{ opacity: sideBaropen ? 1 : 0 }} />
          </ListItemButton>
         
         {/*Link to damande //////////// */}
          <ListItemButton
            // key={text}
            sx={{
              minHeight: 48,
              justifyContent: sideBaropen ? 'initial' : 'center',
              px: 2.5,
            }}
            onClick={() => navigate('/demande')}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: sideBaropen ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              <ArticleRoundedIcon />
            </ListItemIcon>
            <ListItemText primary='demande' sx={{ opacity: sideBaropen ? 1 : 0 }} />
          </ListItemButton>
          
        </List>
        {/* <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItemButton
              key={text}
              sx={{
                minHeight: 48,
                justifyContent: sideBaropen ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: sideBaropen ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} sx={{ opacity: sideBaropen ? 1 : 0 }} />
            </ListItemButton>
          ))}
        </List> */}
      </Drawer>
    </Box>
  );
}


export default SideBar