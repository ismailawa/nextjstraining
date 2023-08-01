import React from 'react';
import { VscBook } from 'react-icons/vsc';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { LuUsers } from 'react-icons/lu';

function StatisticsSection() {
  return (
    <div className='flex w-full  lg:px-24 my-10'>
      <div className=' flex w-full bg-green-50 p-10 justify-between rounded-xl'>
        <div className='flex items-center gap-6 rounded-xl'>
          <div className=' p-8 bg-white'>
            <VscBook size={60} className=' text-blue-400' />
          </div>
          <div className='flex flex-col gap-4'>
            <h1 className=' text-5xl text-green-600 font-bold'>10K+</h1>
            <h1 className=' text-2xl font-medium'>TOTAL COURSES</h1>
          </div>
        </div>
        <div className='flex items-center gap-6 rounded-xl'>
          <div className=' p-8 bg-white'>
            <FaChalkboardTeacher size={60} className=' text-orange-400' />
          </div>
          <div className='flex flex-col gap-4'>
            <h1 className=' text-5xl text-green-600 font-bold'>500+</h1>
            <h1 className=' text-2xl font-medium'>EXPERT MENTORS</h1>
          </div>
        </div>
        <div className='flex items-center gap-6 rounded-xl'>
          <div className=' p-8 bg-white'>
            <LuUsers size={60} className=' text-purple-500' />
          </div>
          <div className='flex flex-col gap-4'>
            <h1 className=' text-5xl text-green-600 font-bold'>300K+</h1>
            <h1 className=' text-2xl font-medium'>STUDENTS GLOBALLY</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatisticsSection;
