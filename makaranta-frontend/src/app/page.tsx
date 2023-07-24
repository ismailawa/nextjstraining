import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center'>
      <nav className='flex w-full h-20 px-4 lg:px-24 shadow fixed z-1000 bg-white  '>
        <div className='flex w-full h-full bg-white items-center justify-between'>
          <Link href={'/'}>
            <div className='font-mono  text-2xl font-bold text-green-500'>
              MyMakaranka
            </div>
          </Link>
          <div className=' hidden lg:flex  gap-28'>
            <ul className='flex gap-14  items-center text-base font-mono  font-semibold'>
              <li className=' cursor-pointer hover:text-green-500 transition ease-in-out'>
                Categories
              </li>
              <li className=' cursor-pointer hover:text-green-500 transition ease-in-out'>
                Courses
              </li>
              <li className=' cursor-pointer hover:text-green-500 transition ease-in-out'>
                Instructors
              </li>
              <li className=' cursor-pointer hover:text-green-500 transition ease-in-out'>
                News
              </li>
            </ul>
            <div className='flex gap-5 justify-center items-center text-lg'>
              <Link href={'/auth/login'}>
                <div className=' border-2 border-green-500 px-4 py-2 rounded-sm cursor-pointer w-28 text-center'>
                  Login
                </div>
              </Link>
              <Link href={'/auth/register'}>
                <div className='bg-green-500 text-white px-4 py-2 rounded-sm cursor-pointer w-28 text-center'>
                  Signup
                </div>
              </Link>
            </div>
          </div>
        </div>
      </nav>
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
            <h1 className=' text-6xl font-bold'>
              Discover best classes for the best learning
            </h1>
            <p className=' text-sm font-normal text-[#667660]'>
              We designed Connections Academy to give students all across the
              nation a tuition-free online public school that lets them learn.
            </p>
            <div>
              <div className='flex justify-center items-center py-3 text-lg font-semibold text-white cursor-pointer shadow-md shadow-green-200 bg-green-500 w-52'>
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
    </main>
  );
}
