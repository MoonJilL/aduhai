import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Twitter,
} from "lucide-react";

/* White abstract triangle + circle mark inside the navy square */
function LogoMark() {
  return (
    <svg viewBox="0 0 32 32" className="h-6 w-6" aria-hidden="true">
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

/* Four-point Memphis sparkle */
function Star({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M12 1.5 L14.7 9.3 L22.5 12 L14.7 14.7 L12 22.5 L9.3 14.7 L1.5 12 L9.3 9.3 Z"
        fill="currentColor"
      />
    </svg>
  );
}

/* Concentric salmon quarter-circle arcs with ink outlines, anchored bottom-left */
function QuarterArcs({ className }) {
  return (
    <svg viewBox="0 0 160 160" className={className} aria-hidden="true">
      <path d="M0 160 L160 160 A160 160 0 0 0 0 0 Z" fill="#D88490" stroke="#2B3040" strokeWidth="5" />
      <path d="M0 160 L106 160 A106 106 0 0 0 0 54 Z" fill="#F24567" stroke="#2B3040" strokeWidth="5" />
      <path d="M0 160 L54 160 A54 54 0 0 0 0 106 Z" fill="#D88490" stroke="#2B3040" strokeWidth="5" />
    </svg>
  );
}

const QUICK_LINKS = [
  { label: "Home", to: "/" },
  { label: "Our Products", to: "/#products" },
  { label: "Order", to: "/order" },
  { label: "Login", to: "/login" },
  { label: "Sign Up", to: "/signup" },
];

const SOCIALS = [
  { icon: Instagram, label: "Instagram" },
  { icon: Facebook, label: "Facebook" },
  { icon: Twitter, label: "Twitter" },
  { icon: MessageCircle, label: "Chat with us" },
];

export default function Footer() {
  return (
    <footer id="contact" className="border-top-thick bg-hotpink">
      {/* pink band with corner arcs */}
      <div className="relative overflow-hidden">
        <QuarterArcs className="pointer-events-none absolute bottom-0 left-0 h-32 w-32 select-none sm:h-44 sm:w-44 lg:h-52 lg:w-52" />
        <div className="pointer-events-none absolute bottom-0 right-0 -scale-x-100 select-none">
          <QuarterArcs className="h-32 w-32 sm:h-44 sm:w-44 lg:h-52 lg:w-52" />
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 px-4 pb-28 pt-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-10">
          {/* 1 — logo + tagline */}
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-ink">
                <LogoMark />
              </span>
              <span className="rounded-md border-2 border-ink bg-cream px-2.5 py-1 leading-tight">
                <span className="block font-display text-base font-extrabold italic uppercase tracking-tight text-ink">
                  Graphic
                </span>
                <span className="text-micro block font-semibold uppercase text-ink opacity-70">
                  Company&nbsp;Logo
                </span>
              </span>
            </div>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-cream">
              Loud graphics, hard shadows, zero apologies. The merch arm of Graphic
              Company — printed in small batches since 1984.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <Star className="h-5 w-5 fill-peach" />
              <Star className="h-3.5 w-3.5 fill-cream" />
              <Star className="h-5 w-5 fill-ink" />
            </div>
          </div>

          {/* 2 — quick links */}
          <nav aria-label="Footer">
            <h3 className="font-display text-lg font-extrabold uppercase italic text-ink">
              Explore
            </h3>
            <ul className="mt-5 space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="inline-block text-sm font-bold text-cream transition-all duration-200 hover:translate-x-1.5 hover:text-peach"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* 3 — contact info */}
          <div>
            <h3 className="font-display text-lg font-extrabold uppercase italic text-ink">
              Contact
            </h3>
            <ul className="mt-5 space-y-4 text-sm font-semibold text-cream">
              <li>
                <a
                  href="mailto:hello@graphic.studio"
                  className="group flex items-center gap-3 transition-colors duration-200 hover:text-peach"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-thick bg-ink text-cream transition-transform duration-200 group-hover:-rotate-12">
                    <Mail className="h-4 w-4" strokeWidth={2.5} />
                  </span>
                  hello@graphic.studio
                </a>
              </li>
              <li>
                <a
                  href="tel:+15550198417"
                  className="group flex items-center gap-3 transition-colors duration-200 hover:text-peach"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-thick bg-ink text-cream transition-transform duration-200 group-hover:-rotate-12">
                    <Phone className="h-4 w-4" strokeWidth={2.5} />
                  </span>
                  +1 (555) 019-8417
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-thick bg-ink text-cream">
                  <MapPin className="h-4 w-4" strokeWidth={2.5} />
                </span>
                42 Memphis Ave, Suite 84
              </li>
            </ul>
          </div>

          {/* 4 — social icons in teal circles */}
          <div>
            <h3 className="font-display text-lg font-extrabold uppercase italic text-ink">
              Follow the noise
            </h3>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              {SOCIALS.map((social) => {
                const Icon = social.icon;
                return (
                  <button
                    key={social.label}
                    type="button"
                    aria-label={social.label}
                    title={social.label}
                    className="sticker-press flex h-11 w-11 items-center justify-center rounded-full border-thick sticker-shadow bg-panel-teal text-ink hover:bg-peach"
                  >
                    <Icon className="h-5 w-5" strokeWidth={2.5} />
                  </button>
                );
              })}
            </div>
            <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-cream/80">
              New drops every friday
            </p>
          </div>
        </div>
      </div>

      {/* navy copyright bar */}
      <div className="border-top-thick bg-ink py-4">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-2 px-4 text-xs font-semibold uppercase tracking-widest text-cream sm:flex-row sm:px-6 lg:px-10">
          <p>© 2026 Graphic Company — all rights reserved</p>
          <p className="flex items-center gap-2">
            Made loud in Memphis
            <Star className="h-3.5 w-3.5 fill-peach" />
          </p>
        </div>
      </div>
    </footer>
  );
}
