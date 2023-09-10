import React from 'react';
import ProductCard from './ProductCard';
const ProductsList = ({data}) => {
    const []

    return (
        <>
        {data?.map((item,index)=> (
                <ProductCard  item={item} key={index}/>
            ))
        }
        </>
    )
}

export default ProductsList;
