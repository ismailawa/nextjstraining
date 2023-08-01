'use client';

import StatisticsSection from '@/components/StatisticsSection';
import HeroSection from '@/components/HeroSection';
import NavBar from '@/components/NavBar';
import CategoriesSection from '@/components/CategoriesSection';
import CoursesSection from '@/components/CoursesSection';
import TestimoniesSection from '@/components/TestimoniesSection';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center bg-gray-50'>
      <NavBar />
      <HeroSection />
      <StatisticsSection />
      <CategoriesSection />
      <CoursesSection />
      <TestimoniesSection />
    </main>
  );
}
