import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education';

export default function Home() {
  return (
    <main className="min-h-screen flex justify-center px-4 sm:px-6 md:px-8">
      <div className="relative w-full max-w-[720px] py-2 border-x border-dashed border-gray-300">
        <Header />
        <Hero />
        <About />
        <Experience />
        <Education />
        {/* Add more sections as needed */}
      </div>
    </main>
  )
}
