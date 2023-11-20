import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mens_kurta } from '../../Data/Mens_kurta';

const BestSellingProducts = () => {



    return (
        <div>
            <h2 className='font-semibold text-xl uppercase mb-6  p-2'>best selling products</h2>
            <div className='grid grid-cols-8 gap-y-8 justify-items-center mb-12'>
                {Mens_kurta?.map(product => <Link to={`product/${product.id}`} key={product.id} className='col-span-full md:col-span-3 lg:col-span-2 shadow-lg rounded-md md:w-[292px]'>
                    <div className='w-full h-48 mx-auto'>
                        <img src={product.imageUrl} alt="" className='w-full h-full object-cover object-right-top rounded-t-md' />
                    </div>
                    <div className='pl-2 mt-2 pb-3'>
                        <h2 className='text-lg overflow-y-auto font-semibold'>{product.title}</h2>
                        <h2 className='text-blue-500 my-1'>{product.brand}</h2>
                        <p className=''><span className='text-lg font-semibold line-through text-orange-400 mr-5'>TK. {product.price}</span> <span className='text-lg font-semibold text-green-500'>TK. {product.discountPrice}</span></p>
                        <p className=''>{product.color}</p>
                    </div>
                </Link>)}
            </div>
        </div>
    );
};

export default BestSellingProducts;