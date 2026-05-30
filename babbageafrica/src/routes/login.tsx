import { useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { AuthShell } from "@/components/babbage/AuthShell";
import { Github, Chrome, Eye, EyeOff, Loader2, Mail, Lock } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Login — Babbage Africa" }] }),
  component: LoginPage,
});

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return toast.error("Please fill in all fields");
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    toast.success("Welcome back!");
    navigate({ to: "/" });
  };

  return (
    <AuthShell title="Welcome back" subtitle="Sign in to continue your learning journey." footer={<>Don't have an account? <Link to="/signup" className="text-primary font-medium">Sign up</Link></>}>
      <form className="space-y-4" onSubmit={onSubmit}>
        <IconField icon={Mail} label="Email" type="email" value={email} onChange={setEmail} placeholder="you@email.com" />
        <IconField icon={Lock} label="Password" type={show ? "text" : "password"} value={password} onChange={setPassword} placeholder="••••••••" trailing={
          <button type="button" onClick={() => setShow((s) => !s)} className="text-muted-foreground hover:text-foreground" aria-label="Toggle password">
            {show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        } />
        <div className="flex items-center justify-between text-xs">
          <label className="flex items-center gap-2 text-muted-foreground"><input type="checkbox" className="accent-[oklch(0.62_0.24_295)]" /> Remember me</label>
          <a href="#" className="text-primary font-medium">Forgot password?</a>
        </div>
        <button disabled={loading} className="w-full py-3 rounded-xl bg-gradient-primary text-primary-foreground font-semibold hover:-translate-y-0.5 transition shadow-[0_0_30px_-6px_oklch(0.62_0.24_295/0.8)] disabled:opacity-60 inline-flex items-center justify-center gap-2">
          {loading ? <><Loader2 className="w-4 h-4 animate-spin" /> Signing in</> : "Sign in"}
        </button>
        <div className="flex items-center gap-3 text-xs text-muted-foreground"><span className="flex-1 h-px bg-border" />OR<span className="flex-1 h-px bg-border" /></div>
        <div className="grid grid-cols-2 gap-3">
          <button type="button" onClick={() => toast.info("Google sign-in coming soon")} className="flex items-center justify-center gap-2 py-2.5 rounded-xl glass text-sm hover:bg-primary/10 transition"><Chrome className="w-4 h-4" /> Google</button>
          <button type="button" onClick={() => toast.info("GitHub sign-in coming soon")} className="flex items-center justify-center gap-2 py-2.5 rounded-xl glass text-sm hover:bg-primary/10 transition"><Github className="w-4 h-4" /> GitHub</button>
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
