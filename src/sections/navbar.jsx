import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

const LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/#about" },
  { label: "Offer", to: "/order" },
  { label: "Contact", to: "/" },
];

/* Blurs the focused element so the DaisyUI click-dropdown closes after a tap */
function closeMenu() {
  const active = document.activeElement;
  if (active && active !== document.body) active.blur();
}

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
        <Link to="/" className="group flex items-center gap-2 sm:gap-3">
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
        </Link>

        {/* desktop links */}
        <ul className="hidden items-center gap-4 md:flex lg:gap-6">
          {LINKS.map((link) => (
            <li key={link.label}>
              <Link
                to={link.to}
                className="text-sm font-bold text-ink transition-all duration-200 hover:-translate-y-0.5 hover:text-peach lg:text-base"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="h-2 w-2 rotate-45 bg-hotpink" aria-hidden="true" />
          <li>
            <Link
              to="/login"
              className="rounded-full border-2 border-ink px-4 py-1.5 text-sm font-bold text-ink transition-colors duration-200 hover:bg-peach lg:text-base"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/signup"
              className="rounded-full border-thick sticker-shadow sticker-press bg-peach px-4 py-1.5 font-display text-sm font-extrabold uppercase italic text-ink hover:bg-hotpink hover:text-cream"
            >
              Sign&nbsp;Up
            </Link>
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
                <Link
                  to={link.to}
                  onClick={closeMenu}
                  className="rounded-lg hover:bg-peach hover:text-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/login"
                onClick={closeMenu}
                className="rounded-lg border-2 border-ink bg-cream hover:bg-peach hover:text-ink"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                onClick={closeMenu}
                className="rounded-lg bg-hotpink text-cream hover:bg-hotpink hover:text-cream"
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
