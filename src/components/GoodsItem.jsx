import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

const GoodsItem = ({ name, price, setOrder, id, poster }) => {

    return (
        <Grid item xs={12} md={4}>
            <Card>
            <CardMedia
                image={poster}
                component="img"
                alt={name}
                title={name}
                sx={{height: 140}}
                />
                <CardContent>                    
            <Typography variant="h6" component="div">
                  {name}
            </Typography>
            <Typography  variant="body1" component="div">
                Цена: {price} руб.
            </Typography>
                </CardContent>
                <CardActions>
                  <Button variant="contained"
                        onClick={() =>
                            setOrder({
                                id: id,
                                name: name,
                                price: price,
                            })
                        }
                    >
                        Купить
                </Button> 
              </CardActions>
            </Card>
        </Grid>
    );
};

export default GoodsItem;