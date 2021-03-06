import React,{ useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';


const settings = ['Profile', 'Settings', 'Logout'];

const Nav = () => {

  const [anchorElUser, setAnchorElUser] = useState(null);

 
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" className='navbar-top'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >           
            <div className="navbar-brand">
                <Link to="/" className="nav-link">
                  <img  src={logo} height={55} alt="" />
                </Link>
            </div>
          </Typography>
            <Box sx={{display: { xs: 'flex'} }} className="offset-8">
             <Link to="#" className="nav-link" id="envel" >
                <i className="fa fa-envelope text-white mt-2"></i>
              </Link>
             <Link to="#" className="nav-link" id="bell" >
                <i className="fa fa-bell text-white mt-2"></i> 
              </Link>
            <Link to="#" className="nav-link" id="task" >
              <i className="fa fa-tasks text-white mt-2"></i> 
            </Link>
            </Box>
          <Box sx={{ flexGrow: 0 }} id="setting">
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <i className="fa fa-user text-white mt-2"></i>  <i className="fa fa-caret-down text-white mt-2"></i>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu} 
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu} >
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Nav;
