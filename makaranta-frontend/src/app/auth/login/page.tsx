'use client';
import React, { useState } from 'react';

import FormScreen from '@/components/FormScreen';
import ImageScreen from '@/components/ImageScreen';
import TextInput from '@/components/TextInput';

type LoginData = {
  email: string;
  password: string;
};

function Login() {
  const [loginData, setLoginData] = useState<LoginData>({
    email: '',
    password: '',
  });

  const loginHandler = () => {
    console.log(loginData);
  };

  return (
    <main className='flex min-h-screen'>
      <FormScreen
        title='Welcome back'
        subTitle=' Welcome back! Please enter your details'
        action='Sign in'
        isLogin={true}
        onSubmit={loginHandler}
      >
        <div className='flex flex-col gap-3'>
          <TextInput
            type='email'
            name='email'
            hint='Enter your email address'
            onChange={(data) =>
              setLoginData((state) => ({ ...state, email: data }))
            }
          />
          <TextInput
            type='password'
            name='password'
            hint='Enter your password'
            onChange={(data) =>
              setLoginData((state) => ({ ...state, password: data }))
            }
          />
        </div>
      </FormScreen>
      <ImageScreen src={'/images/login1.jpg'} />
    </main>
  );
}

export default Login;
