import { Pagination } from 'antd';
import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
const PAGE_SIZE = 8

const ProductsList = ({data, pageSize,shouldShowPagination }) => {
    const [totalPage,setTotalPage] = useState(0);
    const [totalItems,setTotalItems] = useState(0);
    const [currentPage,setCurrentPage] = useState(1);
    const [dataShow,setDataShow] = useState([]);

    useEffect(() =>{
        const count = data.length;
        const pageCount = Math.ceil(count / PAGE_SIZE);
    
        setTotalItems(count);
        setTotalPage(pageCount);
        handlePageChange(1);
    },[data])

    const handlePageChange = (page)=>{
        setCurrentPage(page);
        
        const temp = data.slice((page-1)*PAGE_SIZE,page*PAGE_SIZE);
        setDataShow(temp);
    }



    return (
        <>
        {dataShow?.map((item,index)=> (
                <ProductCard  item={item} key={index}/>
            ))
        }
        {shouldShowPagination && <div className='d-flex justify-content-center'>
        <Pagination className='d-flex align-items-center' responsive={true} pageSize={5} total={totalItems} current={currentPage} onChange={(p,_)=>handlePageChange(p)}/>
        
        </div>}
        
        </>
    )
}

export default ProductsList;
