import React from 'react';
import ReactStars from 'react-stars';

function TestimonialCard() {
  return (
    <div className='flex flex-col bg-white p-6'>
      <h1 className=' text-xl mb-6'>Great Platform</h1>
      <div className=' flex w-96 gap-4'>
        <div className='flex flex-none items-center justify-center  w-12 h-12 bg-green-500 rounded-full text-2xl'>
          “
        </div>
        <div className='flex flex-col'>
          <p className=' text-sm'>
            {' '}
            You learn today and earn tomorrow. The roots of education are bitter
            but the fruits are sweet. If you learn today you can lead tomorrow.
            See What our students are saying.You learn today and earn tomorrow.
            The roots of education are bitter but the fruits are sweet. If you
            learn today you can lead tomorrow. See What our students are saying.
          </p>
          <div className='w-full h-1 bg-green-800 my-5'></div>
          <div className='flex gap-3'>
            <div className='flex-none w-12 h-12 bg-green-500 rounded-full'></div>
            <div>
              <div>Ismailawa Aliyu</div>
              <div>
                <ReactStars
                  count={5}
                  size={16}
                  value={3.5}
                  color2={'#ffd700'}
                  edit={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
