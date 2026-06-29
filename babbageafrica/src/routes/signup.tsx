import { useMemo, useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { AuthShell } from "@/components/babbage/AuthShell";
import { Eye, EyeOff, Loader2, Mail, Lock, User, Github, Chrome } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/signup")({
  head: () => ({ meta: [{ title: "Sign up — Babbage Africa" }] }),
  component: SignupPage,
});

function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [agree, setAgree] = useState(false);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const strength = useMemo(() => {
    let s = 0;
    if (password.length >= 8) s++;
    if (/[A-Z]/.test(password)) s++;
    if (/[0-9]/.test(password)) s++;
    if (/[^A-Za-z0-9]/.test(password)) s++;
    return s; // 0-4
  }, [password]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password) return toast.error("Please fill all fields");
    if (password !== confirm) return toast.error("Passwords don't match");
    if (!agree) return toast.error("Please accept the terms");
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    toast.success("Account created — welcome to Babbage Africa!");
    navigate({ to: "/" });
  };

  const labels = ["Too weak", "Weak", "Okay", "Strong", "Excellent"];
  const colors = ["bg-destructive", "bg-destructive", "bg-yellow-500", "bg-primary", "bg-primary"];

  return (
    <AuthShell title="Create your account" subtitle="Join thousands of African learners building careers in tech." footer={<>Already a member? <Link to="/login" className="text-primary font-medium">Sign in</Link></>}>
      <form className="space-y-4" onSubmit={onSubmit}>
        <IconField icon={User} label="Full name" type="text" value={name} onChange={setName} placeholder="Ada Okeke" />
        <IconField icon={Mail} label="Email" type="email" value={email} onChange={setEmail} placeholder="you@email.com" />
        <IconField icon={Lock} label="Password" type={show ? "text" : "password"} value={password} onChange={setPassword} placeholder="At least 8 characters" trailing={
          <button type="button" onClick={() => setShow((s) => !s)} className="text-muted-foreground hover:text-foreground">
            {show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        } />
        {password && (
          <div>
            <div className="flex gap-1">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className={`h-1 flex-1 rounded-full ${i < strength ? colors[strength] : "bg-muted"}`} />
              ))}
            </div>
            <p className="mt-1 text-[11px] text-muted-foreground">{labels[strength]}</p>
          </div>
        )}
        <IconField icon={Lock} label="Confirm password" type={show ? "text" : "password"} value={confirm} onChange={setConfirm} placeholder="Repeat password" />
        <label className="flex items-start gap-2 text-xs text-muted-foreground">
          <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} className="mt-0.5 accent-[oklch(0.62_0.24_295)]" />
          I agree to the <a href="#" className="text-primary">Terms</a> and <a href="#" className="text-primary">Privacy Policy</a>.
        </label>
        <button disabled={loading} className="w-full py-3 rounded-xl bg-gradient-primary text-primary-foreground font-semibold hover:-translate-y-0.5 transition shadow-[0_0_30px_-6px_oklch(0.62_0.24_295/0.8)] disabled:opacity-60 inline-flex items-center justify-center gap-2">
          {loading ? <><Loader2 className="w-4 h-4 animate-spin" /> Creating account</> : "Create account"}
        </button>
        <div className="flex items-center gap-3 text-xs text-muted-foreground"><span className="flex-1 h-px bg-border" />OR<span className="flex-1 h-px bg-border" /></div>
        <div className="grid grid-cols-2 gap-3">
          <button type="button" onClick={() => toast.info("Google sign-up coming soon")} className="flex items-center justify-center gap-2 py-2.5 rounded-xl glass text-sm hover:bg-primary/10 transition"><Chrome className="w-4 h-4" /> Google</button>
          <button type="button" onClick={() => toast.info("GitHub sign-up coming soon")} className="flex items-center justify-center gap-2 py-2.5 rounded-xl glass text-sm hover:bg-primary/10 transition"><Github className="w-4 h-4" /> GitHub</button>
        </div>
      </form>
    </AuthShell>
  );
}

function IconField({ icon: Icon, label, type, value, onChange, placeholder, trailing }: { icon: React.ComponentType<{ className?: string }>; label: string; type: string; value: string; onChange: (v: string) => void; placeholder?: string; trailing?: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs font-medium text-muted-foreground">{label}</span>
      <div className="mt-1.5 relative">
        <Icon className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <input value={value} onChange={(e) => onChange(e.target.value)} type={type} placeholder={placeholder} className="w-full bg-input/60 border border-border rounded-xl pl-10 pr-10 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition placeholder:text-muted-foreground" />
        {trailing && <span className="absolute right-3 top-1/2 -translate-y-1/2">{trailing}</span>}
      </div>
    </label>
  );
}
