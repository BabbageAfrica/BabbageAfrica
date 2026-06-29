import { motion } from "framer-motion";
import { Globe, Users, Calendar, Award, Rocket } from "lucide-react";

const features = [
  { icon: Globe, title: "Learn Anywhere", desc: "100% online, mobile-first, learn from any device on any continent." },
  { icon: Users, title: "Expert Mentors", desc: "Get coached by industry pros who build software for a living." },
  { icon: Calendar, title: "Flexible Courses", desc: "Self-paced or cohort-based — fit learning around your life." },
  { icon: Award, title: "Certification", desc: "Earn shareable certificates that get noticed by employers." },
  { icon: Rocket, title: "Real Projects", desc: "Ship portfolio-worthy projects you can showcase day one." },
];

export function Features() {
  return (
    <section className="py-20 sm:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Why Babbage</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold">Why learners <span className="text-gradient">choose us</span></h2>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {features.map((f, i) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="glass rounded-3xl p-6 hover:-translate-y-1 transition">
              <div className="w-12 h-12 rounded-2xl bg-gradient-primary grid place-items-center glow">
                <f.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="mt-5 font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}