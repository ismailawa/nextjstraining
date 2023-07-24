import React from 'react';
import Image from 'next/image';

function HeroSection() {
  return (
    <div className='flex w-full mt-20 lg:px-24'>
      <div className=' flex w-1/2 items-center relative'>
        <Image
          src={'/images/2.png'}
          alt='image'
          height={50}
          width={50}
          className='w-14 h-14 left-20  top-60 -z-40 absolute animate-move-up'
        />
        <Image
          src={'/images/5.png'}
          alt='image'
          height={50}
          width={50}
          className='w-14 h-14 right-56 bottom-56 -z-40 absolute animate-move-right'
        />
        <div className=' flex flex-col gap-4 w-[400px]'>
          <h1 className=' text-xl font-bold text-green-500'>
            Welcome to MyMakaranta
          </h1>
          <h1 className=' text-6xl font-bold'>
            Discover best classes for the best learning
          </h1>
          <p className=' text-sm font-normal text-[#667660]'>
            We designed Connections Academy to give students all across the
            nation a tuition-free online public school that lets them learn.
          </p>
          <div>
            <div
              className='
          flex 
          justify-center 
          items-center 
          py-3 text-lg 
          font-semibold 
          text-white 
          cursor-pointer 
          shadow-md 
          shadow-green-200 
          bg-green-500 w-52 mt-8'
            >
              Get started
            </div>
          </div>
        </div>
      </div>
      <div className='flex w-1/2 justify-center items-center h-[700px]'>
        <div className='flex relative w-[450px] h-[500px]'>
          <div className=' absolute h-52 w-52 z-40 bottom-20 -right-20 animate-move-up'>
            <Image src={'/images/7.png'} alt='image' fill />
          </div>
          <Image src={'/images/1.png'} alt='image' fill />
          <Image
            src={'/images/3.png'}
            alt='image'
            width={20}
            height={20}
            className=' w-10 h-10 absolute top-0 left-0 animate-move-right'
          />
          <Image
            src={'/images/4.png'}
            alt='image'
            width={20}
            height={20}
            className=' w-10 h-10 bottom-0 absolute animate-move-up'
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
