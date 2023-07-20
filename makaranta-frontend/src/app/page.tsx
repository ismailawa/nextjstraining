import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center'>
      <nav className='flex w-full h-20 px-4 lg:px-24 shadow-md'>
        <div className='flex w-full h-full bg-white items-center justify-between'>
          <div className=' text-2xl font-bold text-green-500'>MAKARANTA</div>
          <div className=' hidden lg:flex gap-10'>
            <ul className='flex gap-3 text-lg items-center'>
              <li className=' cursor-pointer hover:text-green-500 transition ease-in-out'>
                Course
              </li>
              <li className=' cursor-pointer hover:text-green-500 transition ease-in-out'>
                Subject
              </li>
              <li className=' cursor-pointer hover:text-green-500 transition ease-in-out'>
                Instructors
              </li>
              <li className=' cursor-pointer hover:text-green-500 transition ease-in-out'>
                Quiz
              </li>
            </ul>
            <Link href={'auth/login'}>
              <div className='bg-green-500 text-white px-4 py-2 rounded-lg cursor-pointer'>
                Login
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  );
}
