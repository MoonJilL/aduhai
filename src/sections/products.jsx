import { Link } from "react-router-dom";
import {
  ArrowRight,
  Coffee,
  HardHat,
  Image,
  Shirt,
  ShoppingBag,
  Sticker,
} from "lucide-react";

/* Four-point Memphis sparkle (same mark as the hero) */
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

const PRODUCTS = [
  {
    name: "T-Shirt",
    tag: "Heavy cotton, loud chest print",
    price: 29,
    icon: Shirt,
    block: "bg-panel-indigo",
    tilt: "-rotate-1",
  },
  {
    name: "Tote Bag",
    tag: "Carry the whole vibe around",
    price: 19,
    icon: ShoppingBag,
    block: "bg-panel-teal",
    tilt: "rotate-1",
  },
  {
    name: "Sticker Pack",
    tag: "32 die-cut studio designs",
    price: 9,
    icon: Sticker,
    block: "bg-salmon",
    tilt: "-rotate-1",
  },
  {
    name: "Mug",
    tag: "350 ml of pure fuel",
    price: 15,
    icon: Coffee,
    block: "bg-peach",
    tilt: "rotate-1",
  },
  {
    name: "Cap",
    tag: "Six-panel, flat brim, zero chill",
    price: 24,
    icon: HardHat,
    block: "bg-panel-indigo",
    tilt: "-rotate-1",
  },
  {
    name: "Poster",
    tag: "A2 archival print, vol. 4",
    price: 12,
    icon: Image,
    block: "bg-panel-teal",
    tilt: "rotate-1",
  },
];

export default function ProductsSection() {
  return (
    <section id="products" className="relative overflow-x-clip py-20 sm:py-24">
      {/* section-level decorations */}
      <div className="pointer-events-none absolute inset-0 select-none" aria-hidden="true">
        <DotGrid className="absolute left-6 top-16 h-24 w-24 text-cream opacity-30" />
        <div className="absolute right-10 top-8 hidden h-10 w-10 rotate-45 bg-hotpink opacity-30 lg:block" />
        <div className="absolute bottom-10 left-14 hidden h-14 w-14 rounded-full border-4 border-dashed border-cream opacity-25 anim-spin-slow lg:block" />
        <Star className="absolute bottom-24 right-8 h-10 w-10 fill-peach opacity-60 anim-float" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* section header */}
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div className="max-w-2xl">
            <div className="anim-rise inline-block">
              <span className="inline-flex -rotate-2 items-center gap-2 rounded-full border-thick sticker-shadow bg-peach px-4 py-2">
                <Star className="h-4 w-4 shrink-0 fill-ink" />
                <span className="font-display text-xs font-extrabold uppercase italic tracking-widest text-ink">
                  Graphic Merch
                </span>
              </span>
            </div>
            <h2 className="anim-rise mt-6 font-display text-5xl font-extrabold uppercase italic leading-none text-cream text-outline sm:text-6xl">
              Our Products
            </h2>
            <p className="anim-rise mt-6 max-w-xl text-base leading-relaxed text-cream sm:text-lg">
              Screen-printed, die-cut and dishwasher-proof. Six staples straight off
              the studio floor — grab them before this drop sells out.
            </p>
          </div>

          <div className="anim-rise hidden -rotate-3 md:block">
            <span className="inline-flex items-center gap-2 rounded-xl border-thick sticker-shadow bg-cream px-5 py-3">
              <Star className="h-5 w-5 shrink-0 fill-hotpink" />
              <span className="font-display text-sm font-extrabold uppercase italic text-ink">
                Free shipping over $50
              </span>
            </span>
          </div>
        </div>

        {/* product grid */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product, i) => {
            const Icon = product.icon;
            return (
              <div key={product.name} className="anim-rise" style={{ animationDelay: `${i * 70}ms` }}>
                <article
                  className={`group h-full overflow-hidden rounded-3xl border-thick sticker-shadow sticker-press bg-cream ${product.tilt} hover:rotate-0`}
                >
                  {/* flat colored block with the big white icon */}
                  <div className={`relative flex h-40 items-center justify-center sm:h-44 ${product.block}`}>
                    <Icon
                      className="h-16 w-16 text-cream transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110"
                      strokeWidth={2.5}
                    />
                    <span className="absolute left-3 top-3 h-4 w-4 rotate-45 border-2 border-cream opacity-70" />
                    <span className="absolute bottom-3 right-3 h-3 w-3 rounded-full bg-cream opacity-70" />
                  </div>

                  {/* card body */}
                  <div className="flex flex-col gap-5 p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-display text-xl font-extrabold uppercase italic leading-tight text-ink">
                          {product.name}
                        </h3>
                        <p className="mt-1.5 text-xs font-medium text-ink/70">{product.tag}</p>
                      </div>
                      <span className="shrink-0 rotate-2 rounded-full border-thick sticker-shadow bg-peach px-3 py-1 font-display text-sm font-extrabold italic text-ink">
                        ${product.price}
                      </span>
                    </div>

                    <Link
                      to="/order"
                      className="btn w-full rounded-full border-thick sticker-shadow sticker-press bg-ink px-6 font-display text-sm font-extrabold uppercase italic tracking-wide text-cream hover:bg-hotpink hover:text-cream"
                    >
                      Order now
                      <ArrowRight className="h-4 w-4" strokeWidth={3} />
                    </Link>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
