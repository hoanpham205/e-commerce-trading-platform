import React from 'react';
import ProductCard from './ProductCard';
import { useState } from 'react';
import { useEffect } from 'react';
const PAGE_SIZE = 5 

const ProductsList = ({data}) => {
    const [totalPage,setTotalPage] = useState(0);
    const [totalItems,setTotalItems] = useState(0);
    const [currentPage,setCurrentPage] = useState();
    const [dataShow,setDataShow] = useState([]);
    useEffect(() =>{
        setTotalItems(data.lenght);
        const count = data.length;
        const pageCount = Math.ceil(count / PAGE_SIZE);
        
    })



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
