import axios from 'axios';
export const getAllProduct = async()=>{
    const res = await axios.get(`${process.env.REACT_API_API_URL}/products/`)
    return 
}