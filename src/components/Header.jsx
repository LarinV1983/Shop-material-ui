import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

 function Header() {
	return (
		<AppBar position="static">
		<Toolbar>
			<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            SHOP
          </Typography>
          <IconButton color ='inherit'>
          	<ShoppingBasketIcon />
          </IconButton>
		</Toolbar>
		</AppBar>
	)
}
export default Header;