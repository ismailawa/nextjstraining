import React from 'react';
import { TfiPencilAlt } from 'react-icons/tfi';

function CategoryCard() {
  
  return (
    <div className='flex p-6  bg-white rounded-xl gap-6 shadow-xl cursor-pointer transition ease-in-out hover:shadow-none duration-300'>
      <div className=' p-10 bg-green-100 rounded-xl'>
        <TfiPencilAlt size={30} color='green' />
      </div>
      <div className='flex flex-col justify-center gap-4'>
        <h1 className=' text-2xl font-semibold'>Design & Development</h1>
        <p className=' text-lg opacity-50'>250+ courses available</p>
      </div>
    </div>
  );
}

export default CategoryCard;
