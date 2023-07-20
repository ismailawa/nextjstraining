import React from 'react';
import Image from 'next/image';

function page() {
  return (
    <main className='flex min-h-screen'>
      <div className='flex flex-col w-1/2 bg-slate-500'>
        <div>Makaranta</div>
        <div className='flex flex-1 justify-center items-center'>form</div>
        <div>Powered by MeHub</div>
      </div>
      <div className=' lg:flex  w-1/2 hidden bg-gray-300 relative'>
        <Image
          src={'/images/login1.jpg'}
          alt='login'
          objectFit='cover'
          width='1000'
          height={1000}
        />
      </div>
    </main>
  );
}

export default page;
