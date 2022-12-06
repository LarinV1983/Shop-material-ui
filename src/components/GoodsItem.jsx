import React from 'react';
import Grid from '@mui/material/Grid';

const GoodsItem = ({ name, price, setOrder, id }) => {

    return (
        <Grid item xs={12} md={4}>
            <div className='card'>
                <img
                    src={`https://via.placeholder.com/300x150.png?text=${name.slice(
                        0,
                        12
                    )}`}
                    className='card-img-top'
                    alt={name}
                />
                <div className='card-body'>
                    <h5 className='card-title'>{name}</h5>
                    <p className='card-text'>Цена: {price} руб.</p>
                    <button
                        className='btn btn-primary'
                        onClick={() =>
                            setOrder({
                                id: id,
                                name: name,
                                price: price,
                            })
                        }
                    >
                        Купить
                    </button>
                </div>
            </div>
        </Grid>
    );
};

export default GoodsItem;