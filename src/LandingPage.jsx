import Navbar from "./sections/navbar.jsx";
import HeroSection from "./sections/hero.jsx";

/* Small Memphis squiggle used as a page decoration */
function Squiggle({ className }) {
  return (
    <svg viewBox="0 0 120 24" fill="none" className={className} aria-hidden="true">
      <polyline
        points="2,18 14,6 26,18 38,6 50,18 62,6 74,18 86,6 98,18 110,6 118,14"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function LandingPage() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-x-clip bg-lavender px-4 py-16 font-body sm:px-6 lg:px-10">
      {/* ------- ambient geometric field (edges of the page) ------- */}
      <div className="pointer-events-none absolute inset-0 select-none" aria-hidden="true">
        {/* rotated squares / diamonds */}
        <div className="absolute -left-8 top-14 h-28 w-28 rotate-12 bg-hotpink opacity-25" />
        <div className="absolute -right-10 bottom-12 h-36 w-36 -rotate-12 bg-ink opacity-15" />
        <div className="absolute bottom-28 left-12 hidden h-10 w-10 rotate-45 bg-cream opacity-40 md:block" />
        <div className="absolute right-24 top-10 hidden h-8 w-8 rotate-45 bg-ink opacity-20 lg:block" />

        {/* circles */}
        <div className="absolute right-6 top-6 h-40 w-40 rounded-full border-8 border-cream opacity-25" />
        <div className="absolute -bottom-24 -left-20 h-56 w-56 rounded-full border-4 border-dashed border-ink opacity-20 anim-spin-slow" />
        <div className="absolute bottom-16 right-10 hidden h-16 w-16 rounded-full bg-peach opacity-40 md:block" />

        {/* floating dot + squiggle */}
        <div className="absolute left-6 top-1/2 hidden h-7 w-7 rounded-full bg-cream opacity-40 anim-float lg:block" />
        <Squiggle className="absolute bottom-10 left-1/3 hidden w-36 text-cream opacity-30 lg:block" />
      </div>

      {/* ------- centered hero card ------- */}
      <div className="relative w-full max-w-7xl">
        <Navbar />
        <HeroSection />

        <footer
          id="contact"
          className="mt-10 flex flex-col items-center justify-between gap-2 px-2 text-xs font-semibold uppercase tracking-widest text-cream sm:flex-row"
        >
          <p className="opacity-80">© 2026 Graphic Company — loud since 1984</p>
          <a
            href="mailto:hello@graphic.studio"
            className="transition-colors duration-200 hover:text-peach"
          >
            hello@graphic.studio
          </a>
        </footer>
      </div>
    </div>
  );
}
