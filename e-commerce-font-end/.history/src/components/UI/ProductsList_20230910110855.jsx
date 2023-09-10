import React from 'react';
import ProductCard from './ProductCard';
import { useState } from 'react';
const ProductsList = ({data}) => {
    const [totalPage,setTotalPage] = useState(0);
    const [totalPage,setTotalPage] = useState(0);


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
