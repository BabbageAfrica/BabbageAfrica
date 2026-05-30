import { Link } from "@tanstack/react-router";
import { Facebook, Twitter, Instagram, Linkedin, Github, Sparkles, Send } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-border/40 bg-[oklch(0.1_0.03_285)]">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-primary grid place-items-center">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-lg font-semibold">Babbage <span className="text-gradient">Africa</span></span>
          </Link>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Your business tech friend. We help individuals and businesses grow through technology training, software solutions and ERP systems.
          </p>
          <div className="flex gap-3 mt-5">
            {[Facebook, Twitter, Instagram, Linkedin, Github].map((Icon, i) => (
              <a key={i} href="#" aria-label="social" className="w-9 h-9 grid place-items-center rounded-full glass hover:bg-primary/20 hover:-translate-y-0.5 transition">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground">Home</Link></li>
            <li><Link to="/courses" className="hover:text-foreground">Courses</Link></li>
            <li><Link to="/pricing" className="hover:text-foreground">Pricing</Link></li>
            <li><Link to="/faq" className="hover:text-foreground">FAQ</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Courses</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-foreground">Programming</a></li>
            <li><a href="#" className="hover:text-foreground">UI/UX Design</a></li>
            <li><a href="#" className="hover:text-foreground">Cybersecurity</a></li>
            <li><a href="#" className="hover:text-foreground">Data Science & AI</a></li>
            <li><a href="#" className="hover:text-foreground">Digital Marketing</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Newsletter</h4>
          <p className="text-sm text-muted-foreground mb-3">Get fresh courses and tech tips in your inbox.</p>
          <form onSubmit={(e) => e.preventDefault()} className="flex glass rounded-full p-1 pr-1">
            <input type="email" required placeholder="you@email.com" className="flex-1 bg-transparent px-4 py-2 text-sm outline-none placeholder:text-muted-foreground" />
            <button className="px-3 rounded-full bg-gradient-primary text-primary-foreground grid place-items-center hover:scale-105 transition">
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-border/40 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Babbage Technologies — Your Business Tech Friend.
      </div>
    </footer>
  );
}