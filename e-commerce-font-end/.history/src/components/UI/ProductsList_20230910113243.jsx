import Pagination from 'rc-pagination';
import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
const PAGE_SIZE = 5 

const ProductsList = ({data}) => {
    const [totalPage,setTotalPage] = useState(0);
    const [totalItems,setTotalItems] = useState(0);
    const [currentPage,setCurrentPage] = useState(1);
    const [dataShow,setDataShow] = useState([]);

    useEffect(() =>{
        const count = data.length;
        const pageCount = Math.ceil(count / PAGE_SIZE);
        console.log(pageCount);

        setTotalItems(data.lenght);
        setTotalPage(pageCount);
        setCurrentPage(1);
    

        const temp = data.slice((currentPage-1)*PAGE_SIZE,currentPage*PAGE_SIZE);
        setDataShow(temp);
        console.log(temp);
    },[])



    return (
        <>
        {dataShow?.map((item,index)=> (
                <ProductCard  item={item} key={index}/>
            ))
        }
        <Pagination pageSize={5} total={totalItems} current={c}/>
        </>
    )
}

export default ProductsList;
