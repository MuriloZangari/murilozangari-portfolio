'use client'

import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-lg border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo or Name */}
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Murilo Zangari
        </Link>

        {/* Navigation links */}
        <nav className="flex gap-6 text-sm font-medium text-neutral-700">
          <Link
            href="#work"
            className="hover:underline underline-offset-4 transition"
          >
            Work
          </Link>
          <Link
            href="#contact"
            className="hover:underline underline-offset-4 transition"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}
