import React, { useEffect } from 'react';
import data from './category.json'
import { Link } from 'react-router-dom';

const Category = () => {


    return (
        <div>
            <h2 className='font-semibold text-xl uppercase mb-6 p-2'>All Category</h2>
            <div className='grid grid-cols-6 md:space-x-6 justify-items-center mb-12'>
                {
                    data?.map(category => <Link to={`category/${category.id}`} className='col-span-1 p-1 lg:p-3 overflow-hidden  shadow-md rounded-sm ' key={category.id}>
                        <div className='rounded-full w-12 h-12 lg:w-24 lg:h-24'>
                            <img className='w-full h-full rounded-full object-cover' src={category.thumbnail} alt="" />
                        </div>
                        <div>
                            <h2 className='text-center mt-1 font-semibold'>{category.title}</h2>
                        </div>
                    </Link>)
                }
            </div>
        </div>
    );
};

export default Category;