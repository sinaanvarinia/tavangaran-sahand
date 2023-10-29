import { Hero } from '@/components/hero/Hero'
import Navbar from '@/components/navbar/Navbar'

export default function Home() {
  return (
    <main className="flex flex-col items-center">
    
      <Navbar />
      <Hero />
    </main>
  );
}
