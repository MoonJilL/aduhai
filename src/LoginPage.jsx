import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Check, Eye, EyeOff, LogIn, X } from "lucide-react";

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

export default function LoginPage() {
  const navigate = useNavigate();
  const timerRef = useRef(null);
  const [form, setForm] = useState({ email: "", password: "" });
  const [remember, setRemember] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState(null); // { kind: "error" | "success", text }

  useEffect(() => () => clearTimeout(timerRef.current), []);

  const update = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email.trim() || !form.password.trim()) {
      setStatus({ kind: "error", text: "Email and password are both required." });
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      setStatus({ kind: "error", text: "That email looks off — give it another try." });
      return;
    }
    setStatus({ kind: "success", text: "Welcome back! Redirecting you home…" });
    timerRef.current = setTimeout(() => navigate("/"), 1100);
  };

  return (
    <div className="relative grid min-h-screen place-items-center overflow-x-clip bg-lavender px-4 py-20 font-body">
      {/* floating ambient shapes */}
      <div className="pointer-events-none absolute inset-0 select-none" aria-hidden="true">
        <div className="absolute -left-8 top-16 h-24 w-24 rotate-12 bg-hotpink opacity-25" />
        <div className="absolute -right-10 bottom-20 h-32 w-32 -rotate-12 bg-ink opacity-15" />
        <div className="absolute right-16 top-10 h-32 w-32 rounded-full border-8 border-cream opacity-25" />
        <div className="absolute -bottom-16 -left-14 h-48 w-48 rounded-full border-4 border-dashed border-ink opacity-20 anim-spin-slow" />
        <div className="absolute bottom-24 right-8 hidden h-12 w-12 rounded-full bg-peach opacity-50 md:block" />
        <Star className="absolute left-10 top-1/3 h-9 w-9 fill-peach sticker-shadow-svg anim-float" />
        <Star className="absolute right-1/4 top-16 h-7 w-7 fill-salmon sticker-shadow-svg anim-float-slow" />
        <span className="absolute left-1/4 bottom-14 h-6 w-6 rounded-full border-thick sticker-shadow bg-peach" />
      </div>

      {/* centered sticker card */}
      <div className="anim-rise relative w-full max-w-md">
        {/* corner decorations stuck to the card */}
        <div className="pointer-events-none absolute -right-5 -top-7 select-none" aria-hidden="true">
          <Star className="h-14 w-14 fill-peach sticker-shadow-svg anim-spin-slow" />
        </div>
        <span
          className="pointer-events-none absolute -left-3 top-1/3 h-7 w-7 rounded-full border-thick sticker-shadow bg-hotpink"
          aria-hidden="true"
        />

        <div className="rounded-3xl border-thick sticker-shadow bg-cream p-8 sm:p-10">
          <p className="inline-flex -rotate-2 items-center gap-2 rounded-full border-thick sticker-shadow bg-peach px-4 py-1.5">
            <Star className="h-3.5 w-3.5 shrink-0 fill-ink" />
            <span className="font-display text-xs font-extrabold uppercase italic tracking-widest text-ink">
              Members only
            </span>
          </p>

          <h1 className="mt-6 font-display text-4xl font-extrabold uppercase italic leading-none text-transparent text-outline sm:text-5xl">
            Welcome Back
          </h1>
          <p className="mt-4 text-sm font-medium leading-relaxed text-ink/70">
            Log in to grab the good stuff, track your orders and hoard stickers.
          </p>

          <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5">
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
                  placeholder="••••••••"
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

            <label className="flex cursor-pointer items-center gap-3">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="checkbox checkbox-hotpink border-thick h-5 w-5 rounded-md"
              />
              <span className="text-sm font-semibold text-ink">Keep me logged in</span>
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
              className="btn sticker-press w-full rounded-full border-thick sticker-shadow bg-peach px-8 py-3 font-display text-base font-extrabold uppercase italic tracking-wide text-ink hover:bg-hotpink hover:text-cream"
            >
              <LogIn className="h-5 w-5" strokeWidth={3} />
              Login
            </button>
          </form>

          <div className="mt-7 flex items-center gap-3" aria-hidden="true">
            <span className="h-1 w-8 rounded-full bg-ink" />
            <Star className="h-4 w-4 fill-salmon" />
            <span className="h-2.5 w-2.5 rounded-full border-2 border-ink bg-peach" />
            <span className="h-1 flex-1 rounded-full bg-ink" />
          </div>

          <p className="mt-6 text-center text-sm font-semibold text-ink">
            Don&rsquo;t have an account?{" "}
            <Link
              to="/signup"
              className="font-extrabold text-hotpink underline decoration-ink decoration-2 underline-offset-4 transition-colors duration-200 hover:text-ink hover:decoration-hotpink"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
