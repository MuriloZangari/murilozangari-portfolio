// src/app/components/Hero.tsx
import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col items-center gap-2 text-center border-b border-dashed border-gray-300 py-4 ">
      
      <Image
        src="/profile.jpg"
        alt="Murilo Zangari"
        width={96}
        height={96}
        className="rounded-md"
        priority
      />

      <h1 className="text-2xl font-bold text-gray-800 mt-4">Murilo Zangari</h1>
      <p className="text-gray-600">Software Engineer, PhD in Computer Science</p>
    </section>
  );
}

