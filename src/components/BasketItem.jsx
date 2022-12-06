import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const BasketItem = ({removeFromOrder, name, price, id, quantity}) => {
    return (
        <ListItem>
            {name} {price}руб x{quantity}
            <IconButton
                onClick={() => removeFromOrder(id)}
            >
                <CloseIcon />
            </IconButton>
        </ListItem>
    );
};

export default BasketItem;