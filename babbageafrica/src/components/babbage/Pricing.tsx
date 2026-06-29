import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

const plans = [
  { name: "Starter", price: 29, desc: "For curious beginners", features: ["Access to 5 starter courses", "Community access", "Email support", "Course certificates"], highlight: false },
  { name: "Premium", price: 69, desc: "Most popular — for serious learners", features: ["Access to ALL courses", "1:1 mentor sessions", "Live cohort workshops", "Verified certificates", "Project reviews"], highlight: true },
  { name: "Pro", price: 149, desc: "For career switchers", features: ["Everything in Premium", "Career coaching", "Portfolio review", "Job referral network", "Priority mentor access"], highlight: false },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Pricing</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold">Boost your skills, <span className="text-gradient">expand your mind</span></h2>
          <p className="mt-4 text-muted-foreground">Simple, transparent pricing. Cancel anytime.</p>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3 items-stretch">
          {plans.map((p, i) => (
            <motion.div key={p.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`relative rounded-3xl p-8 flex flex-col ${p.highlight ? "bg-gradient-primary text-primary-foreground shadow-[0_0_60px_-10px_oklch(0.62_0.24_295/0.7)] lg:-translate-y-4 scale-[1.02]" : "glass"}`}>
              {p.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-semibold bg-foreground text-background inline-flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Most Popular
                </span>
              )}
              <h3 className="text-xl font-bold">{p.name}</h3>
              <p className={`mt-1 text-sm ${p.highlight ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{p.desc}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-5xl font-bold">${p.price}</span>
                <span className={`text-sm ${p.highlight ? "text-primary-foreground/80" : "text-muted-foreground"}`}>/mo</span>
              </div>
              <ul className="mt-6 space-y-3 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className={`w-4 h-4 mt-0.5 shrink-0 ${p.highlight ? "" : "text-primary"}`} />{f}
                  </li>
                ))}
              </ul>
              <button className={`mt-8 w-full py-3 rounded-full font-semibold transition hover:-translate-y-0.5 ${p.highlight ? "bg-background text-foreground hover:bg-background/90" : "bg-gradient-primary text-primary-foreground"}`}>
                Choose {p.name}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}