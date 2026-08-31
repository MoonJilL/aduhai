import { Menu } from "lucide-react";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Offer", href: "#offer" },
  { label: "Contact", href: "#contact" },
];

/* White abstract triangle + circle mark inside the navy square */
function LogoMark() {
  return (
    <svg viewBox="0 0 32 32" className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true">
      <path
        d="M7 24 L16 7 L25 24 Z"
        fill="none"
        stroke="#FAF9F6"
        strokeWidth="2.8"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="20" r="3.6" fill="#FAF9F6" />
    </svg>
  );
}

export default function Navbar() {
  return (
    <header className="absolute -top-7 left-2 right-2 z-30 sm:left-6 sm:right-6 lg:left-10 lg:right-10">
      <nav
        aria-label="Main"
        className="relative mx-auto flex max-w-5xl items-center justify-between gap-2 rounded-full border-thick sticker-shadow bg-cream py-2.5 pl-3 pr-4 sm:py-3 sm:pl-4 sm:pr-6"
      >
        {/* orange dots glued to both ends of the pill */}
        <span
          className="absolute -left-2.5 top-1/2 h-5 w-5 -translate-y-1/2 rounded-full border-thick sticker-shadow bg-peach"
          aria-hidden="true"
        />
        <span
          className="absolute -right-2.5 top-1/2 h-5 w-5 -translate-y-1/2 rounded-full border-thick sticker-shadow bg-peach"
          aria-hidden="true"
        />

        {/* logo: navy square + thin bordered wordmark box */}
        <a href="#home" className="group flex items-center gap-2 sm:gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-ink transition-transform duration-200 group-hover:-rotate-6 sm:h-11 sm:w-11">
            <LogoMark />
          </span>
          <span className="rounded-md border-2 border-ink bg-cream px-2.5 py-1 leading-tight">
            <span className="block font-display text-sm font-extrabold italic uppercase tracking-tight text-ink sm:text-base">
              Graphic
            </span>
            <span className="text-micro block font-semibold uppercase text-ink opacity-70">
              Company&nbsp;Logo
            </span>
          </span>
        </a>

        {/* desktop links */}
        <ul className="hidden items-center gap-5 md:flex lg:gap-7">
          {LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm font-bold text-ink transition-all duration-200 hover:-translate-y-0.5 hover:text-peach lg:text-base"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="h-2 w-2 rotate-45 bg-hotpink" aria-hidden="true" />
          <li>
            <a
              href="#contact"
              className="text-sm font-bold text-ink underline decoration-hotpink decoration-4 underline-offset-4 transition-all duration-200 hover:-translate-y-0.5 hover:text-peach hover:decoration-peach lg:text-base"
            >
              Sign&nbsp;Up
            </a>
          </li>
        </ul>

        {/* mobile: DaisyUI dropdown */}
        <div className="dropdown dropdown-end md:hidden">
          <div
            tabIndex={0}
            role="button"
            aria-label="Open menu"
            className="btn btn-sm h-10 min-h-10 w-10 rounded-full border-thick sticker-shadow bg-peach p-0 text-ink hover:bg-salmon"
          >
            <Menu className="h-5 w-5" strokeWidth={3} />
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content z-50 mt-4 w-56 rounded-xl border-thick sticker-shadow bg-cream p-2 font-bold text-ink"
          >
            {LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="rounded-lg hover:bg-peach hover:text-ink">
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" className="rounded-lg bg-hotpink text-cream hover:bg-hotpink">
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
