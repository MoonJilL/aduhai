import { ArrowRight, Sparkles } from "lucide-react";

/* Four-point Memphis sparkle */
function Star({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M12 1.5 L14.7 9.3 L22.5 12 L14.7 14.7 L12 22.5 L9.3 14.7 L1.5 12 L9.3 9.3 Z"
        fill="currentColor"
        stroke="#2B3040"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Squiggle({ className }) {
  return (
    <svg viewBox="0 0 120 26" fill="none" className={className} aria-hidden="true">
      <polyline
        points="3,20 15,6 27,20 39,6 51,20 63,6 75,20 87,6 99,20 111,6 117,13"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* Halftone-style dot grid */
function DotGrid({ className }) {
  const dots = [];
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 4; c++) {
      dots.push(<circle key={`${r}-${c}`} cx={10 + c * 22} cy={10 + r * 22} r="4.2" />);
    }
  }
  return (
    <svg viewBox="0 0 88 88" className={className} fill="currentColor" aria-hidden="true">
      {dots}
    </svg>
  );
}

const TICKER_WORDS = [
  "Branding",
  "Poster Art",
  "Web Design",
  "Packaging",
  "Motion",
  "Type Systems",
  "Art Direction",
];

function TickerRun({ hidden }) {
  return (
    <span className="flex items-center gap-8 pr-8" aria-hidden={hidden || undefined}>
      {TICKER_WORDS.map((word) => (
        <span key={word} className="flex items-center gap-8">
          <span>{word}</span>
          <Star className="h-4 w-4 shrink-0 fill-ink" />
        </span>
      ))}
    </span>
  );
}

export default function HeroSection() {
  return (
    <section
      id="home"
      className="hero-min relative flex flex-col overflow-hidden rounded-3xl border-thick card-shadow"
    >
      {/* ---------- background layers ---------- */}
      <div className="pointer-events-none absolute inset-0 select-none" aria-hidden="true">
        <div className="split-left absolute inset-0 bg-panel-indigo" />
        <div className="split-right absolute inset-0 bg-panel-teal" />
        <div className="split-line absolute inset-0 bg-ink" />
      </div>

      {/* small collage pieces visible on mobile (top-right teal wedge) */}
      <div
        className="pointer-events-none absolute right-4 top-24 select-none lg:hidden"
        aria-hidden="true"
      >
        <div className="anim-float">
          <Star className="h-12 w-12 fill-peach sticker-shadow-svg" />
        </div>
      </div>
      <div
        className="pointer-events-none absolute right-14 top-44 select-none lg:hidden"
        aria-hidden="true"
      >
        <div className="h-14 w-14 rounded-full border-thick sticker-shadow bg-salmon" />
      </div>

      {/* ---------- content ---------- */}
      <div className="relative z-10 grid flex-1 gap-12 px-6 pb-14 pt-32 sm:px-10 lg:grid-cols-2 lg:gap-6 lg:px-14 lg:pb-16 lg:pt-36 xl:px-20">
        {/* left: message */}
        <div id="about" className="max-w-xl">
          <div className="anim-rise inline-block">
            <span className="inline-flex -rotate-2 items-center gap-2 rounded-full border-thick sticker-shadow bg-peach px-4 py-2">
              <Star className="h-4 w-4 shrink-0 fill-ink" />
              <span className="font-display text-xs font-extrabold uppercase italic tracking-widest text-ink">
                Retro design studio — est. 1984
              </span>
            </span>
          </div>

          <h1
            className="anim-rise mt-8 font-display text-5xl font-extrabold uppercase italic leading-none text-cream text-outline sm:text-6xl xl:text-7xl"
            style={{ animationDelay: "90ms" }}
          >
            Bold design
            <br />
            for <span className="text-peach">loud</span>
            <br />
            brands.
          </h1>

          <p
            className="anim-rise mt-7 max-w-md text-base leading-relaxed text-cream sm:text-lg"
            style={{ animationDelay: "180ms" }}
          >
            We paste flat color over boring ideas. Posters, identities and websites
            with hard edges, hard shadows and zero apologies — built to be seen from
            across the street.
          </p>

          <div
            className="anim-rise mt-9 flex flex-wrap items-center gap-5"
            style={{ animationDelay: "270ms" }}
          >
            <a
              href="#contact"
              className="btn rounded-full border-thick sticker-shadow sticker-press bg-hotpink px-8 font-display text-sm font-extrabold uppercase italic tracking-wide text-cream hover:bg-ink hover:text-cream sm:text-base"
            >
              Start a project
              <ArrowRight className="h-5 w-5" strokeWidth={3} />
            </a>
            <a
              href="#offer"
              className="btn rounded-full border-thick sticker-shadow sticker-press bg-cream px-8 font-display text-sm font-extrabold uppercase italic tracking-wide text-ink hover:bg-peach hover:text-ink sm:text-base"
            >
              <Sparkles className="h-5 w-5" strokeWidth={3} />
              See the offer
            </a>
          </div>

          {/* tiny proof stickers */}
          <div
            className="anim-rise mt-11 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "360ms" }}
          >
            <span className="rotate-1 rounded-full border-thick sticker-shadow bg-cream px-4 py-1.5 font-display text-xs font-extrabold uppercase italic text-ink">
              250+ projects
            </span>
            <span className="-rotate-2 rounded-full border-thick sticker-shadow bg-hotpink px-4 py-1.5 font-display text-xs font-extrabold uppercase italic text-cream">
              14 design awards
            </span>
            <span className="rotate-2 rounded-full border-thick sticker-shadow bg-peach px-4 py-1.5 font-display text-xs font-extrabold uppercase italic text-ink">
              100% hand-made
            </span>
          </div>
        </div>

        {/* right: Memphis collage on the teal panel */}
        <div className="relative hidden select-none lg:block" aria-hidden="true">
          {/* hollow outline word */}
          <p className="anim-rise absolute right-0 top-0 font-display text-8xl font-extrabold uppercase italic leading-none text-transparent text-outline xl:text-9xl">
            Studio
          </p>

          {/* big salmon circle + triangle core */}
          <div className="absolute right-8 top-28 xl:right-14">
            <div className="anim-float-slow flex h-64 w-64 items-center justify-center rounded-full border-thick sticker-shadow bg-salmon">
              <svg viewBox="0 0 100 100" className="h-28 w-28">
                <path
                  d="M50 12 L90 82 L10 82 Z"
                  fill="#FAF9F6"
                  stroke="#2B3040"
                  strokeWidth="5"
                  strokeLinejoin="round"
                />
                <circle cx="50" cy="62" r="11" fill="#F24567" stroke="#2B3040" strokeWidth="4" />
              </svg>
            </div>
          </div>

          {/* cream triangle, top-left of panel */}
          <div className="absolute left-4 top-20 rotate-12">
            <svg viewBox="0 0 100 100" className="h-24 w-24 sticker-shadow-svg">
              <path
                d="M50 10 L92 86 L8 86 Z"
                fill="#FAF9F6"
                stroke="#2B3040"
                strokeWidth="5"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* spinning peach star */}
          <div className="absolute right-2 top-6">
            <Star className="h-16 w-16 fill-peach sticker-shadow-svg anim-spin-slow" />
          </div>

          {/* hot pink squiggle */}
          <div className="absolute left-0 top-1/2 -rotate-6">
            <Squiggle className="w-44 text-hotpink" />
          </div>

          {/* poster sticker card */}
          <div className="absolute bottom-28 left-14 rotate-6">
            <div className="anim-rise rounded-xl border-thick sticker-shadow bg-hotpink px-5 py-4" style={{ animationDelay: "300ms" }}>
              <p className="font-display text-lg font-extrabold uppercase italic leading-none text-cream">
                New drop
              </p>
              <p className="mt-1.5 text-xs font-semibold uppercase tracking-widest text-cream opacity-90">
                Poster series — vol. 4
              </p>
              <Star className="mt-3 h-5 w-5 fill-peach" />
            </div>
          </div>

          {/* cream dot grid */}
          <DotGrid className="absolute bottom-10 right-12 h-24 w-24 text-cream" />

          {/* loose ink dot + spinning peach square */}
          <div className="absolute bottom-44 right-40 h-8 w-8 rounded-full bg-ink" />
          <div className="absolute bottom-8 left-6">
            <div className="h-10 w-10 rotate-45 border-thick sticker-shadow bg-peach anim-spin-slow" />
          </div>
        </div>
      </div>

      {/* ---------- offer ticker ---------- */}
      <div
        id="offer"
        className="ticker relative z-10 overflow-hidden border-top-thick bg-peach py-3.5"
      >
        <div className="anim-marquee flex w-max items-center whitespace-nowrap font-display text-sm font-extrabold uppercase italic tracking-wider text-ink sm:text-base">
          <TickerRun />
          <TickerRun hidden />
        </div>
      </div>
    </section>
  );
}
