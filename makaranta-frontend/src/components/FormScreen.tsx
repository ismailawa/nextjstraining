'use client';
import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import Link from 'next/link';
import { Outfit } from 'next/font/google';

const outfit = Outfit({ subsets: ['latin'] });

function FormScreen({
  title,
  subTitle,
  children,
  onSubmit,
  action,
  isLogin,
  isLoading,
}: any) {
  return (
    <div className={`flex flex-col w-full lg:w-1/2 p-6 ${outfit.className}`}>
      <Link href={'/'}>
        <p
          className={`text-3xl font-semibold text-green-500 ${outfit.className}`}
        >
          MyMakaranta
        </p>
      </Link>
      <div className='flex flex-1 justify-center items-center'>
        <div className='flex flex-col w-full lg:w-2/3 gap-5'>
          <p className=' text-3xl font-semibold'>{title}</p>
          <p className=' opacity-60 text-base'>{subTitle}</p>
          {children}
          <div className='flex justify-between items-center '>
            <div className='flex items-center gap-3'>
              <input
                type='checkbox'
                name='remember'
                id='remeber'
                className=' checked:text-green-500 rounded-sm'
              />
              <p>Remember me</p>
            </div>
            <div className=' text-green-500 cursor-pointer'>
              Forgot password
            </div>
          </div>
          <div
            className='w-full text-center  bg-green-500 text-white py-3 font-semibold rounded-lg cursor-pointer shadow-md shadow-green-200'
            onClick={onSubmit}
          >
            {isLoading ? 'loading...' : action}
          </div>
          <div className='flex  justify-center items-center w-full  py-3 font-semibold rounded-lg cursor-pointer border-2 border-green-500 gap-3'>
            <FcGoogle size={25} /> Sign in with Google
          </div>
          {isLogin ? (
            <div className='flex justify-center items-center gap-2 mt-4'>
              Dont have an account?
              <Link href={'/auth/register'}>
                <span className=' text-green-500 font-semibold cursor-pointer'>
                  Signup
                </span>
              </Link>
            </div>
          ) : (
            <div className='flex justify-center items-center gap-2 mt-4'>
              Already have an account?
              <Link href={'/auth/login'}>
                <span className=' text-green-500 font-semibold cursor-pointer'>
                  Login
                </span>
              </Link>
            </div>
          )}
        </div>
      </div>
      <p className=' text-gray-400'>@2023 meHub. Alright reserved</p>
    </div>
  );
}

export default FormScreen;
