import React from 'react';
import ProductCard from './ProductCard';
const ProductsList = ({data}) => {
    return (
        <>
        {
            data.map(item=> (
                <ProductCard />
            ))
        }
    )
}

export default ProductsList;
