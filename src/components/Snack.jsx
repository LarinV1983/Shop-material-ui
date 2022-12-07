import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

 function Snack({isOpen, handleClose}) {
	return (
	<Snackbar open={isOpen} autoHideDuration={3000} onClose={handleClose}>
  <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
    ТОВАР ДОБАВЛЕН В КОРЗИНУ
  </Alert>
</Snackbar>
	)
}
export default Snack;