import Header from './components/layout/Header';
import Hero from './components/sections/Hero';

export default function Home() {
  return (
    <main className="min-h-screen flex justify-center px-4 sm:px-6 md:px-8">
      <div className="relative w-full max-w-[720px] py-6 border-x border-dashed border-gray-300">
        <Header />
        <Hero />
      </div>
    </main>
  )
}
