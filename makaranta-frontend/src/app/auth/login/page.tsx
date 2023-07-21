import React from 'react';

import FormScreen from '@/components/FormScreen';
import ImageScreen from '@/components/ImageScreen';

function Login() {
  return (
    <main className='flex min-h-screen'>
      <FormScreen
        title='Welcome back'
        subTitle=' Welcome back! Please enter your details'
        action='Sign in'
      >
        <div className='flex flex-col gap-3'>
          <div className='flex flex-col gap-3 w-full'>
            <div>Email</div>
            <input
              type='email'
              name='email'
              required
              id='email'
              placeholder='Enter your email address'
              className='w-full ring-1 ring-gray-500 focus:ring-green-500 rounded-lg p-3 placeholder:text-lg text-xl'
            />
          </div>
          <div className='flex flex-col gap-3 w-full'>
            <div>Password</div>
            <input
              type='password'
              name='password'
              required
              id='password'
              placeholder='Enter your password'
              className='w-full ring-1 ring-gray-500 focus:ring-green-500 rounded-lg p-3 placeholder:text-lg text-xl'
            />
          </div>
        </div>
      </FormScreen>
      <ImageScreen src={'/images/login1.jpg'} />
    </main>
  );
}

export default Login;
