'use client';
import React, { useState } from 'react';
import useSWR, { Fetcher, SWRResponse } from 'swr';
import FormScreen from '@/components/FormScreen';
import ImageScreen from '@/components/ImageScreen';
import TextInput from '@/components/TextInput';

type SignupData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

function Register() {
  const [signupData, setSignupData] = useState<SignupData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [isLoading, setIsloading] = useState<boolean>(false);

  const fetcher = async (url: any, data: any) => {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) return await res.json();

    const json = await res.json();
    return json.data;
  };

  const signupHandler = async () => {
    setIsloading(true);
    try {
      const result = await fetcher(
        'http://localhost:5001/api/auth/register',
        signupData
      );
      console.log(result);
      setIsloading(false);
    } catch (error) {}
    setIsloading(false);
  };

  return (
    <main className='flex min-h-screen w-full'>
      <FormScreen
        title='Welcome to MyMakaranta'
        subTitle='Welcome kindly Signup to access awesome contents'
        action='Sign up'
        isLogin={false}
        onSubmit={signupHandler}
        isLoading={isLoading}
      >
        <div className='flex flex-col gap-3'>
          <TextInput
            label='First Name'
            type='text'
            name='firstName'
            hint='Enter your first name'
            onChange={(data) =>
              setSignupData((state) => ({ ...state, firstName: data }))
            }
          />
          <TextInput
            label='Last Name'
            type='text'
            name='lastName'
            hint='Enter your last name'
            onChange={(data) =>
              setSignupData((state) => ({ ...state, lastName: data }))
            }
          />
          <TextInput
            label='Email'
            type='email'
            name='email'
            hint='Enter your email address'
            onChange={(data) =>
              setSignupData((state) => ({ ...state, email: data }))
            }
          />
          <TextInput
            label='Password'
            type='password'
            name='password'
            hint='Enter your password'
            onChange={(data) =>
              setSignupData((state) => ({ ...state, password: data }))
            }
          />
        </div>
      </FormScreen>
      <ImageScreen src={'/images/signup1.jpg'} />
    </main>
  );
}

export default Register;
