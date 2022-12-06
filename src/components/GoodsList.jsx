import React from 'react';
import GoodsItem from './GoodsItem';
import Grid from '@mui/material/Grid';

const GoodsList = ({ goods, setOrder }) => {

    return (<Grid container spacing={3}>
                {goods.map((item) => (
                    <GoodsItem key={item.id} setOrder={setOrder} {...item} />
                ))}
            </Grid>

    );
};

export default GoodsList;