import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Check, Eye, EyeOff, UserPlus, X } from "lucide-react";

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

const inputCls =
  "w-full rounded-xl border-thick sticker-shadow bg-cream px-4 py-2.5 text-sm text-ink placeholder:text-ink/40 transition-colors duration-200 focus:border-hotpink focus:outline-none";

const labelCls =
  "mb-1.5 block font-display text-xs font-extrabold uppercase italic tracking-widest text-ink";

export default function SignUpPage() {
  const navigate = useNavigate();
  const timerRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const [terms, setTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState(null); // { kind: "error" | "success", text }

  useEffect(() => () => clearTimeout(timerRef.current), []);

  const update = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.password || !form.confirm) {
      setStatus({ kind: "error", text: "Every field is required — no shortcuts." });
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      setStatus({ kind: "error", text: "That email looks off — give it another try." });
      return;
    }
    if (form.password.length < 6) {
      setStatus({ kind: "error", text: "Password needs at least 6 characters." });
      return;
    }
    if (form.password !== form.confirm) {
      setStatus({ kind: "error", text: "Passwords don't match — try again." });
      return;
    }
    if (!terms) {
      setStatus({ kind: "error", text: "Please accept the terms to join the club." });
      return;
    }
    setStatus({ kind: "success", text: "Account created! Taking you to login…" });
    timerRef.current = setTimeout(() => navigate("/login"), 1200);
  };

  return (
    <div className="relative grid min-h-screen place-items-center overflow-x-clip bg-lavender px-4 py-20 font-body">
      {/* floating ambient shapes */}
      <div className="pointer-events-none absolute inset-0 select-none" aria-hidden="true">
        <div className="absolute -right-8 top-14 h-24 w-24 -rotate-12 bg-salmon opacity-40" />
        <div className="absolute -left-10 bottom-16 h-32 w-32 rotate-12 bg-ink opacity-15" />
        <div className="absolute left-12 top-12 h-28 w-28 rounded-full border-8 border-cream opacity-25" />
        <div className="absolute -bottom-14 -right-12 h-48 w-48 rounded-full border-4 border-dashed border-ink opacity-20 anim-spin-slow" />
        <div className="absolute bottom-28 left-10 hidden h-12 w-12 rounded-full bg-hotpink opacity-40 md:block" />
        <Star className="absolute right-12 top-1/3 h-9 w-9 fill-peach sticker-shadow-svg anim-float" />
        <Star className="absolute left-1/4 top-14 h-7 w-7 fill-hotpink sticker-shadow-svg anim-float-slow" />
        <span className="absolute right-1/4 bottom-12 h-6 w-6 rounded-full border-thick sticker-shadow bg-peach" />
      </div>

      {/* centered sticker card */}
      <div className="anim-rise relative w-full max-w-md">
        {/* corner decorations stuck to the card */}
        <div className="pointer-events-none absolute -left-6 -top-6 select-none" aria-hidden="true">
          <Star className="h-12 w-12 fill-salmon sticker-shadow-svg anim-spin-slow" />
        </div>
        <span
          className="pointer-events-none absolute -right-3 bottom-1/4 h-7 w-7 rounded-full border-thick sticker-shadow bg-peach"
          aria-hidden="true"
        />

        <div className="rounded-3xl border-thick sticker-shadow bg-cream p-8 sm:p-10">
          <p className="inline-flex rotate-1 items-center gap-2 rounded-full border-thick sticker-shadow bg-hotpink px-4 py-1.5">
            <Star className="h-3.5 w-3.5 shrink-0 fill-cream" />
            <span className="font-display text-xs font-extrabold uppercase italic tracking-widest text-cream">
              Fresh faces wanted
            </span>
          </p>

          <h1 className="mt-6 font-display text-4xl font-extrabold uppercase italic leading-none text-transparent text-outline sm:text-5xl">
            Join Us
          </h1>
          <p className="mt-4 text-sm font-medium leading-relaxed text-ink/70">
            One account, all the drops. Early access, member prices and a birthday
            sticker pack.
          </p>

          <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5">
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
              <span className={labelCls}>Password</span>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={form.password}
                  onChange={update("password")}
                  placeholder="At least 6 characters"
                  className={`${inputCls} pr-11`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-ink/50 transition-colors duration-200 hover:text-hotpink"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" strokeWidth={2.5} />
                  ) : (
                    <Eye className="h-5 w-5" strokeWidth={2.5} />
                  )}
                </button>
              </div>
            </label>

            <label className="block">
              <span className={labelCls}>Confirm password</span>
              <input
                type={showPassword ? "text" : "password"}
                value={form.confirm}
                onChange={update("confirm")}
                placeholder="Same one, again"
                className={inputCls}
              />
            </label>

            <label className="flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                checked={terms}
                onChange={(e) => setTerms(e.target.checked)}
                className="checkbox checkbox-hotpink border-thick mt-0.5 h-5 w-5 rounded-md"
              />
              <span className="text-sm font-semibold leading-snug text-ink">
                I accept the terms and agree to receive extremely loud newsletters.
              </span>
            </label>

            {status && (
              <div
                role="alert"
                className={`flex items-center gap-2.5 rounded-xl border-thick px-4 py-3 text-sm font-bold ${
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
              className="btn sticker-press w-full rounded-full border-thick sticker-shadow bg-hotpink px-8 py-3 font-display text-base font-extrabold uppercase italic tracking-wide text-cream hover:bg-ink hover:text-cream"
            >
              <UserPlus className="h-5 w-5" strokeWidth={3} />
              Sign Up
            </button>
          </form>

          <div className="mt-7 flex items-center gap-3" aria-hidden="true">
            <span className="h-1 w-8 rounded-full bg-ink" />
            <Star className="h-4 w-4 fill-peach" />
            <span className="h-2.5 w-2.5 rotate-45 border-2 border-ink bg-salmon" />
            <span className="h-1 flex-1 rounded-full bg-ink" />
          </div>

          <p className="mt-6 text-center text-sm font-semibold text-ink">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-extrabold text-hotpink underline decoration-ink decoration-2 underline-offset-4 transition-colors duration-200 hover:text-ink hover:decoration-hotpink"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
