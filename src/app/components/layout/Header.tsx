export default function Header() {
  return (
    <header className="flex justify-between items-center text-sm px-4 md:px-6 text-gray-600 border-b border-dashed border-gray-300 pb-3">
      <a
        href="https://linkedin.com/in/murilozangari"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 hover:opacity-80"
        aria-label="LinkedIn"
      >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            fill="#0077B5"
            className="w-4 h-4"
            >
            <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.61 0 53.79 0 24.07 24.09 0 53.79 0s53.79 24.07 53.79 53.79c0 29.82-24.09 54.31-53.79 54.31zM447.9 448h-92.4V302.4c0-34.7-.7-79.4-48.4-79.4-48.5 0-55.9 37.9-55.9 77v148h-92.6V148.9h88.9v40.8h1.3c12.4-23.4 42.5-48.1 87.5-48.1 93.5 0 110.7 61.5 110.7 141.3V448z" />
        </svg>
        LinkedIn Profile
      </a>
      <span className="text-xs md:text-sm">murilo.zangari@gmail.com</span>
    </header>
  );
}
