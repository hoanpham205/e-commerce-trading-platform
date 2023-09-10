import {Pagination} from 'antd';
import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
const PAGE_SIZE = 5 

const ProductsList = ({data}) => {
    const [totalPage,setTotalPage] = useState(0);
    const [totalItems,setTotalItems] = useState(0);
    const [currentPage,setCurrentPage] = useState(1);
    const [dataShow,setDataShow] = useState([]);

    useEffect(() =>{
        
    },[])

    const handlePageChange = (page)=>{

    }



    return (
        <>
        {dataShow?.map((item,index)=> (
                <ProductCard  item={item} key={index}/>
            ))
        }
        <Pagination pageSize={5} total={totalItems} current={currentPage}/>
        </>
    )
}

export default ProductsList;
