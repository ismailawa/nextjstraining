import StatisticsSection from '@/components/StatisticsSection';
import HeroSection from '@/components/HeroSection';
import NavBar from '@/components/NavBar';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center'>
      <NavBar />
      <HeroSection />
      <StatisticsSection />
    </main>
  );
}
