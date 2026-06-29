import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import heroStudent from "@/assets/hero-student.jpg";
import type { ReactNode } from "react";

export function AuthShell({ title, subtitle, children, footer }: { title: string; subtitle: string; children: ReactNode; footer: ReactNode }) {
  return (
    <main className="min-h-screen grid lg:grid-cols-2 bg-hero relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 p-5 z-10">
        <Link to="/" className="inline-flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-gradient-primary grid place-items-center">
            <Sparkles className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-semibold">Babbage <span className="text-gradient">Africa</span></span>
        </Link>
      </div>
      <div className="hidden lg:block relative">
        <img src={heroStudent} alt="" className="absolute inset-0 w-full h-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-tr from-background via-background/30 to-transparent" />
        <div className="absolute bottom-12 left-12 right-12">
          <p className="text-3xl font-bold leading-tight">Learn. Build. <span className="text-gradient">Launch.</span></p>
          <p className="mt-3 text-muted-foreground max-w-sm">Premium tech training designed for the next generation of African builders.</p>
        </div>
      </div>
      <div className="relative flex items-center justify-center p-6 sm:p-10">
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-primary/30 blur-3xl" />
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative glass rounded-3xl p-8 sm:p-10 w-full max-w-md animate-pulse-glow">
          <h1 className="text-2xl sm:text-3xl font-bold">{title}</h1>
          <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>
          <div className="mt-8 space-y-4">{children}</div>
          <div className="mt-6 text-sm text-center text-muted-foreground">{footer}</div>
        </motion.div>
      </div>
    </main>
  );
}

export function Field({ label, type = "text", placeholder, required = true }: { label: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <label className="block">
      <span className="text-xs font-medium text-muted-foreground">{label}</span>
      <input type={type} required={required} placeholder={placeholder} className="mt-1.5 w-full bg-input/60 border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition placeholder:text-muted-foreground" />
    </label>
  );
}