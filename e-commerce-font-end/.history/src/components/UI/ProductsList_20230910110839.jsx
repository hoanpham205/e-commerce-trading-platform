import React from 'react';
import ProductCard from './ProductCard';
const ProductsList = ({data}) => {
    const [totalPage,setTotalPage] = useSta

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
