import React from 'react'
import './ProductCard.css'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ item }) => {
    const navigate = useNavigate();
    return (
        <div onClick={()=>navigate(`/product/${item.id}`)} className='productCard w-[15rem] m-3 transition-all cursor-pointer'>
            <div className='h-[20rem]'>
                <img className='h-full w-full object-cover object-left-top' src={item.imageUrl} alt="" />
            </div>
            <div className='textPart bg-white p-3'>
                <div>
                    <p className='font-bold opacity-60'>
                        {item.brand}
                    </p>
                    <p>
                       {item.title}
                    </p>
                </div>
                <div className='font-semibold flex items-center space-x-2'>
                    <p className='font-semibold '>Tk. {item.discountPrice}</p>
                    <p className='line-through opacity-50'>Tk. {item.price}</p>
                    <p className='text-green-600'>{item.discountPresent}% OFF</p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard