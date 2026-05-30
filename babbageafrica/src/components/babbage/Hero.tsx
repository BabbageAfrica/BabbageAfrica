import { motion } from "framer-motion";
import { ArrowRight, Play, Code2, Cpu, Cloud, Smartphone, Shield, Palette } from "lucide-react";
import { Link } from "@tanstack/react-router";
import heroStudent from "@/assets/hero-student.jpg";

const floatingIcons = [
  { Icon: Code2, x: "8%", y: "20%", delay: 0 },
  { Icon: Cpu, x: "85%", y: "15%", delay: 0.4 },
  { Icon: Cloud, x: "12%", y: "75%", delay: 0.8 },
  { Icon: Smartphone, x: "88%", y: "70%", delay: 0.2 },
  { Icon: Shield, x: "5%", y: "50%", delay: 0.6 },
  { Icon: Palette, x: "92%", y: "45%", delay: 1 },
];

export function Hero() {
  return (
    <section className="relative bg-hero pt-32 pb-20 overflow-hidden">
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[140px]" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-accent/20 blur-[140px]" />
      {floatingIcons.map(({ Icon, x, y, delay }, i) => (
        <motion.div
          key={i}
          className="absolute hidden lg:flex w-12 h-12 glass rounded-2xl items-center justify-center text-primary"
          style={{ left: x, top: y }}
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay, ease: "easeInOut" }}
        >
          <Icon className="w-5 h-5" />
        </motion.div>
      ))}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            New cohort enrolling now
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]">
            Build Your Skills,<br />
            <span className="text-gradient">Anytime, Anywhere.</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-xl">
            Babbage Africa is your business tech friend — practical online training in programming, design, cybersecurity, AI and more. Learn from experts and ship real projects.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/courses" className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground font-semibold shadow-[0_0_40px_-8px_oklch(0.62_0.24_295/0.8)] hover:-translate-y-0.5 transition-all">
              Explore Courses <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </Link>
            <Link to="/signup" className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass font-semibold hover:bg-primary/10 transition">
              <Play className="w-4 h-4" /> Get Started
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
            {[{k:"10k+",v:"Students"},{k:"50+",v:"Courses"},{k:"4.9★",v:"Rating"}].map((s) => (
              <div key={s.v} className="glass rounded-2xl p-3 text-center">
                <div className="text-xl font-bold text-gradient">{s.k}</div>
                <div className="text-xs text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
          <div className="absolute inset-0 bg-gradient-primary blur-3xl opacity-30 rounded-full" />
          <div className="relative glass rounded-3xl p-3 animate-pulse-glow">
            <img src={heroStudent} alt="Babbage Africa student" width={1024} height={1280} className="rounded-2xl w-full h-auto" />
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -left-4 bottom-12 glass rounded-2xl px-4 py-3 hidden sm:flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary grid place-items-center">
                <Code2 className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Now learning</div>
                <div className="text-sm font-semibold">React Development</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}