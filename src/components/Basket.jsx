import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import BasketItem from './BasketItem';
import Typography from '@mui/material/Typography';

const Basket = ({
		order=[], 
		removeFromOrder,
	 	cartOpen,
	 	closeCart=Function.prototype}) => {
	return (
		<Drawer anchor="right"
		open={cartOpen}
		onClose={closeCart}
		>
			<List sx={{width: 400}}>
				<ListItem>
					<ListItemIcon>
						<ShoppingBasketIcon />
					</ListItemIcon>
					<ListItemText primary="Корзина" />
				</ListItem>
				<Divider />
				{!order.length ? (
					<ListItem> КОРЗИНА ПУСТАЯ </ListItem>
					) : (
					<>
					{order.map((item) => (
						<BasketItem key={item.name} removeFromOrder={removeFromOrder} {...item} />
						))}
					<Divider />
					<ListItem>
						<Typography>
							 Общая стоимость:{' '}
                {order.reduce((acc, item) => {
                    return acc + item.price * item.quantity;
                }, 0)}{' '}
                рублей.
						</Typography>
					</ListItem>
					</>		
					)}
			</List>
		</Drawer>
	);
}

export default Basket;