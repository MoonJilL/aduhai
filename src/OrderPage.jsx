import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Coffee,
  Minus,
  Plus,
  Shirt,
  Sticker,
  X,
} from "lucide-react";
import Navbar from "./sections/navbar.jsx";
import Footer from "./sections/footer.jsx";

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

const INITIAL_ITEMS = [
  { id: 1, name: "T-Shirt", tag: "Heavy cotton", price: 29, qty: 1, block: "bg-panel-indigo", icon: Shirt },
  { id: 2, name: "Sticker Pack", tag: "32 die-cut designs", price: 9, qty: 2, block: "bg-salmon", icon: Sticker },
  { id: 3, name: "Mug", tag: "350 ml of fuel", price: 15, qty: 1, block: "bg-panel-teal", icon: Coffee },
];

const PAYMENT_METHODS = ["Credit Card", "PayPal", "Bank Transfer", "Cash on Delivery"];

const inputCls =
  "w-full rounded-xl border-thick sticker-shadow bg-cream px-4 py-2.5 text-sm text-ink placeholder:text-ink/40 transition-colors duration-200 focus:border-hotpink focus:outline-none";

const labelCls =
  "mb-1.5 block font-display text-xs font-extrabold uppercase italic tracking-widest text-ink";

export default function OrderPage() {
  const [items, setItems] = useState(INITIAL_ITEMS);
  const [form, setForm] = useState({ name: "", email: "", address: "", payment: PAYMENT_METHODS[0] });
  const [status, setStatus] = useState(null); // { kind: "error" | "success", text }
  const [placed, setPlaced] = useState(null); // { id }

  const changeQty = (id, delta) =>
    setItems((prev) =>
      prev.map((it) => (it.id === id ? { ...it, qty: Math.max(1, it.qty + delta) } : it))
    );

  const removeItem = (id) => {
    setItems((prev) => prev.filter((it) => it.id !== id));
    setStatus(null);
  };

  const subtotal = items.reduce((sum, it) => sum + it.price * it.qty, 0);
  const shipping = items.length === 0 || subtotal >= 50 ? 0 : 6;
  const total = subtotal + shipping;

  const update = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (items.length === 0) {
      setStatus({ kind: "error", text: "Your stash is empty — add something first!" });
      return;
    }
    if (!form.name.trim() || !form.email.trim() || !form.address.trim()) {
      setStatus({ kind: "error", text: "Please fill in your name, email and address." });
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      setStatus({ kind: "error", text: "That email looks off — give it another try." });
      return;
    }
    setStatus(null);
    setPlaced({ id: "GC-" + String(Date.now()).slice(-6) });
  };

  return (
    <div className="relative min-h-screen overflow-x-clip bg-lavender font-body">
      {/* floating navbar pill */}
      <div className="relative mx-auto mt-9 w-full max-w-7xl px-4 sm:px-6 lg:px-10">
        <Navbar />
      </div>

      <main className="relative mx-auto w-full max-w-6xl px-4 pb-24 pt-12 sm:px-6 lg:px-10">
        {/* ambient decorations */}
        <div className="pointer-events-none absolute inset-0 select-none" aria-hidden="true">
          <div className="absolute -left-6 top-40 h-20 w-20 rotate-12 bg-hotpink opacity-25" />
          <div className="absolute -right-8 top-24 h-28 w-28 rounded-full border-8 border-cream opacity-25" />
          <div className="absolute bottom-24 -left-4 h-32 w-32 rounded-full border-4 border-dashed border-ink opacity-20 anim-spin-slow" />
          <Star className="absolute right-10 top-8 h-12 w-12 fill-peach sticker-shadow-svg anim-float" />
          <Star className="absolute left-8 top-1/2 h-8 w-8 fill-salmon sticker-shadow-svg anim-float-slow" />
          <span className="absolute right-6 top-1/2 h-6 w-6 rounded-full border-thick sticker-shadow bg-peach" />
          <span className="absolute bottom-16 right-24 h-8 w-8 rotate-45 border-thick sticker-shadow bg-salmon opacity-80" />
        </div>

        {/* page header */}
        <div className="relative flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="inline-flex -rotate-2 items-center gap-2 rounded-full border-thick sticker-shadow bg-peach px-4 py-2">
              <Star className="h-4 w-4 shrink-0 fill-ink" />
              <span className="font-display text-xs font-extrabold uppercase italic tracking-widest text-ink">
                Checkout — almost yours
              </span>
            </span>
            <h1 className="mt-6 font-display text-5xl font-extrabold uppercase italic leading-none text-cream text-outline sm:text-6xl">
              Order Page
            </h1>
          </div>
          <Link
            to="/"
            className="sticker-press inline-flex items-center gap-2 rounded-full border-thick sticker-shadow bg-cream px-5 py-2.5 font-display text-sm font-extrabold uppercase italic text-ink hover:bg-peach"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={3} />
            Keep shopping
          </Link>
        </div>

        {/* two-column layout */}
        <div className="relative mt-12 grid gap-10 lg:grid-cols-5">
          {/* ---------- LEFT: order summary ---------- */}
          <section className="anim-rise rounded-3xl border-thick sticker-shadow bg-cream p-6 sm:p-8 lg:col-span-3">
            <div className="flex items-center justify-between gap-4">
              <h2 className="font-display text-2xl font-extrabold uppercase italic text-ink">
                Your Stash
              </h2>
              <span className="rounded-full border-thick sticker-shadow bg-hotpink px-3.5 py-1 font-display text-sm font-extrabold italic text-cream">
                {items.reduce((n, it) => n + it.qty, 0)} items
              </span>
            </div>

            <div className="mt-6 space-y-4">
              {items.length === 0 ? (
                <div className="rounded-xl border-4 border-dashed border-ink/40 px-6 py-12 text-center">
                  <p className="font-display text-xl font-extrabold uppercase italic text-ink">
                    Your stash is empty
                  </p>
                  <p className="mt-2 text-sm font-medium text-ink/70">
                    The good stuff lives on the landing page.
                  </p>
                  <Link
                    to="/#products"
                    className="btn sticker-press mt-6 rounded-full border-thick sticker-shadow bg-peach px-6 font-display text-sm font-extrabold uppercase italic text-ink hover:bg-salmon"
                  >
                    Browse products
                  </Link>
                </div>
              ) : (
                items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.id}
                      className="flex flex-wrap items-center gap-4 rounded-xl border-thick bg-cream p-4 transition-transform duration-200 hover:-translate-y-0.5 sm:flex-nowrap"
                    >
                      <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border-thick ${item.block}`}>
                        <Icon className="h-6 w-6 text-cream" strokeWidth={2.5} />
                      </span>

                      <div className="min-w-0 flex-1">
                        <p className="font-display text-base font-extrabold uppercase italic leading-tight text-ink">
                          {item.name}
                        </p>
                        <p className="text-xs font-medium text-ink/70">
                          {item.tag} — ${item.price} each
                        </p>
                      </div>

                      {/* qty stepper */}
                      <div className="flex items-center gap-2.5">
                        <button
                          type="button"
                          aria-label={`Decrease ${item.name} quantity`}
                          onClick={() => changeQty(item.id, -1)}
                          disabled={item.qty <= 1}
                          className="sticker-press flex h-8 w-8 items-center justify-center rounded-full border-thick sticker-shadow bg-cream text-ink hover:bg-peach disabled:pointer-events-none disabled:opacity-40"
                        >
                          <Minus className="h-4 w-4" strokeWidth={3} />
                        </button>
                        <span className="w-7 text-center font-display text-lg font-extrabold italic text-ink">
                          {item.qty}
                        </span>
                        <button
                          type="button"
                          aria-label={`Increase ${item.name} quantity`}
                          onClick={() => changeQty(item.id, 1)}
                          className="sticker-press flex h-8 w-8 items-center justify-center rounded-full border-thick sticker-shadow bg-cream text-ink hover:bg-peach"
                        >
                          <Plus className="h-4 w-4" strokeWidth={3} />
                        </button>
                      </div>

                      <span className="w-16 text-right font-display text-lg font-extrabold italic text-ink">
                        ${item.price * item.qty}
                      </span>

                      <button
                        type="button"
                        aria-label={`Remove ${item.name} from order`}
                        onClick={() => removeItem(item.id)}
                        className="sticker-press flex h-8 w-8 items-center justify-center rounded-full border-thick sticker-shadow bg-hotpink text-cream hover:bg-ink"
                      >
                        <X className="h-4 w-4" strokeWidth={3} />
                      </button>
                    </div>
                  );
                })
              )}
            </div>

            {items.length > 0 && (
              <div className="mt-6 flex items-center justify-between border-top-thick pt-5">
                <span className="text-sm font-bold uppercase tracking-widest text-ink/70">
                  Subtotal
                </span>
                <span className="font-display text-xl font-extrabold italic text-ink">
                  ${subtotal}
                </span>
              </div>
            )}
          </section>

          {/* ---------- RIGHT: checkout form ---------- */}
          <section
            className="anim-rise rounded-3xl border-thick sticker-shadow bg-cream p-6 sm:p-8 lg:col-span-2"
            style={{ animationDelay: "120ms" }}
          >
            {placed ? (
              <div className="flex flex-col items-center py-8 text-center">
                <span className="flex h-20 w-20 items-center justify-center rounded-full border-thick sticker-shadow bg-panel-teal">
                  <Check className="h-10 w-10 text-cream" strokeWidth={3} />
                </span>
                <h2 className="mt-7 font-display text-4xl font-extrabold uppercase italic leading-none text-transparent text-outline">
                  Order placed!
                </h2>
                <p className="mt-4 text-sm font-medium leading-relaxed text-ink/70">
                  Order <span className="font-extrabold text-ink">{placed.id}</span> is
                  confirmed. A receipt is on its way to{" "}
                  <span className="font-extrabold text-ink">{form.email}</span>.
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <Star className="h-5 w-5 fill-peach" />
                  <Star className="h-4 w-4 fill-hotpink" />
                  <Star className="h-5 w-5 fill-salmon" />
                </div>
                <Link
                  to="/"
                  className="btn sticker-press mt-8 rounded-full border-thick sticker-shadow bg-ink px-7 font-display text-sm font-extrabold uppercase italic tracking-wide text-cream hover:bg-hotpink hover:text-cream"
                >
                  Back to home
                  <ArrowRight className="h-4 w-4" strokeWidth={3} />
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <h2 className="font-display text-3xl font-extrabold uppercase italic leading-none text-transparent text-outline">
                  Checkout
                </h2>

                <div className="mt-7 space-y-5">
                  <label className="block">
                    <span className={labelCls}>Full name</span>
                    <input
                      type="text"
                      value={form.name}
                      onChange={update("name")}
                      placeholder="Ada Lovelace"
                      className={inputCls}
                    />
                  </label>

                  <label className="block">
                    <span className={labelCls}>Email</span>
                    <input
                      type="email"
                      value={form.email}
                      onChange={update("email")}
                      placeholder="ada@loudmail.com"
                      className={inputCls}
                    />
                  </label>

                  <label className="block">
                    <span className={labelCls}>Shipping address</span>
                    <textarea
                      rows={3}
                      value={form.address}
                      onChange={update("address")}
                      placeholder="Street, city, zip — the whole thing"
                      className={`${inputCls} resize-none`}
                    />
                  </label>

                  <label className="block">
                    <span className={labelCls}>Payment method</span>
                    <select value={form.payment} onChange={update("payment")} className={`select ${inputCls} pr-10`}>
                      {PAYMENT_METHODS.map((method) => (
                        <option key={method} value={method}>
                          {method}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                {/* totals */}
                <div className="mt-7 space-y-2.5 text-sm font-semibold text-ink/70">
                  <div className="flex items-center justify-between">
                    <span>Subtotal</span>
                    <span className="font-display font-extrabold italic text-ink">${subtotal}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Shipping</span>
                    {shipping === 0 ? (
                      <span className="rounded-full border-2 border-ink bg-panel-teal px-2.5 py-0.5 text-xs font-extrabold uppercase text-cream">
                        Free
                      </span>
                    ) : (
                      <span className="font-display font-extrabold italic text-ink">${shipping}</span>
                    )}
                  </div>
                </div>

                {/* grand total sticker */}
                <div className="mt-5 flex items-center justify-between rounded-xl border-thick bg-cream px-4 py-3.5">
                  <span className="font-display text-sm font-extrabold uppercase italic tracking-wide text-ink">
                    Grand total
                  </span>
                  <span className="rotate-1 rounded-xl border-thick sticker-shadow bg-peach px-4 py-2 font-display text-2xl font-extrabold italic text-ink">
                    ${total}
                  </span>
                </div>

                {status && (
                  <div
                    role="alert"
                    className={`mt-5 flex items-center gap-2.5 rounded-xl border-thick px-4 py-3 text-sm font-bold ${
                      status.kind === "error" ? "bg-hotpink text-cream" : "bg-panel-teal text-ink"
                    }`}
                  >
                    {status.kind === "error" ? (
                      <X className="h-5 w-5 shrink-0" strokeWidth={3} />
                    ) : (
                      <Check className="h-5 w-5 shrink-0" strokeWidth={3} />
                    )}
                    {status.text}
                  </div>
                )}

                <button
                  type="submit"
                  className="btn sticker-press mt-7 w-full rounded-full border-thick sticker-shadow bg-hotpink px-8 py-3 font-display text-base font-extrabold uppercase italic tracking-wide text-cream hover:bg-ink hover:text-cream"
                >
                  Place order
                  <ArrowRight className="h-5 w-5" strokeWidth={3} />
                </button>

                <p className="mt-4 text-center text-xs font-semibold uppercase tracking-widest text-ink/60">
                  Free shipping over $50 · 30-day returns
                </p>
              </form>
            )}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
