import React from 'react';
import ProductCard from './ProductCard';
import { useState } from 'react';
const PAGE_SIZE = 5 

const ProductsList = ({data}) => {
    const [totalPage,setTotalPage] = useState(0);
    const [totalItems,setTotalItems] = useState(0);
    const [currentPage,setCurrentPage] = useState();
    const [dataShow,setDataShow] = useState([]);
    useEffect(() => {
        effect
        return () => {
            cleanup
        };
    }, [input]);



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