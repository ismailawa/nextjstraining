import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center'>
      <nav className='flex w-full h-20 px-4 lg:px-24 shadow'>
        <div className='flex w-full h-full bg-white items-center justify-between'>
          <Link href={'/'}>
            <div className='font-mono  text-2xl font-bold text-green-500'>
              MyMakaranka
            </div>
          </Link>
          <div className=' hidden lg:flex  gap-28'>
            <ul className='flex gap-14  items-center text-lg font-mono  font-semibold'>
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
              <Link href={'auth/login'}>
                <div className=' border-2 border-green-500 px-4 py-2 rounded-lg cursor-pointer w-28 text-center'>
                  Login
                </div>
              </Link>
              <Link href={'auth/register'}>
                <div className='bg-green-500 text-white px-4 py-2 rounded-lg cursor-pointer w-28 text-center'>
                  Signup
                </div>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </main>
  );
}
