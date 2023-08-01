import React from 'react';
import TestimonialCard from './TestimonialCard';

function TestimoniesSection() {
  return (
    <div className='w-full '>
      <div className='flex justify-between  px-24 py-10 '>
        <div className=' text-5xl font-semibold'>
          What our students are <br />
          saying about us
        </div>
        <p className='opacity-50'>
          You learn today and earn tomorrow. The roots of education are bitter{' '}
          <br /> but the fruits are sweet. If you learn today you can lead
          tomorrow. See
          <br /> What our students are saying.
        </p>
      </div>
      <div className='flex px-24 overflow-scroll w-full gap-8 mb-24  scrollbar-hide'>
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </div>
  );
}

export default TestimoniesSection;
