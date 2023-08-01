import React from 'react';
import Image from 'next/image';
import {
  AiOutlineUser,
  AiOutlineStar,
  AiOutlineDollarCircle,
} from 'react-icons/ai';

function CourseCard() {
  return (
    <div className='flex flex-col p-6  bg-white rounded-xl gap-8 shadow-2xl cursor-pointer transition ease-in-out  hover:shadow-none duration-300'>
      <div className=' bg-green-100 rounded-xl w-full h-56 relative overflow-hidden'>
        <Image src='/images/courses.jpeg' alt='image' fill className='' />
      </div>
      <div className='flex flex-col gap-4'>
        <div className='bg-green-100 w-fit p-2'>Programming</div>
        <p className='text-xl font-semibold'>
          Introduction to software Development
        </p>
        <div className='flex gap-4 my-8'>
          <div className='flex items-center  gap-3'>
            <div className=' rounded-full p-3 bg-green-100 text-green-700'>
              <AiOutlineUser size={20} color='green' />
            </div>
            <div>500+</div>
          </div>
          <div className='flex items-center  gap-3'>
            <div className=' rounded-full p-3 bg-yellow-100 text-green-700'>
              <AiOutlineStar size={20} className=' text-yellow-600' />
            </div>
            <div>4.5</div>
          </div>
          <div className='flex items-center  gap-3'>
            <div className=' rounded-full p-3 bg-red-100 text-green-700'>
              <AiOutlineDollarCircle size={20} className=' text-red-600' />
            </div>
            <div>1500</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
