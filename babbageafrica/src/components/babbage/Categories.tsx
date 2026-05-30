import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Code2, Smartphone, Palette, Shield, Database, BrainCircuit, Cloud, Megaphone, Camera, FileSpreadsheet, Briefcase } from "lucide-react";
import { categoryGroups } from "@/lib/babbage-data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "Web Development": Code2,
  "Mobile App Development": Smartphone,
  "UI/UX Design": Palette,
  "Cybersecurity & Networking": Shield,
  "ERP & Business Systems": Database,
  "Data Science & Artificial Intelligence": BrainCircuit,
  "Cloud Computing & DevOps": Cloud,
  "Digital Marketing": Megaphone,
  "Creative Media": Camera,
  "Office & Productivity Skills": FileSpreadsheet,
  "Freelancing & Career Skills": Briefcase,
};

export function Categories() {
  return (
    <section className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Categories</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold">Choose your favourite <span className="text-gradient">course from top categories</span></h2>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categoryGroups.map((c, i) => {
            const Icon = iconMap[c.name] ?? Code2;
            return (
              <motion.div key={c.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} whileHover={{ y: -6 }} className="group relative glass rounded-3xl p-6 overflow-hidden hover:border-primary/60 transition">
                <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-primary/10 blur-2xl group-hover:bg-primary/30 transition" />
                <div className="relative flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-primary grid place-items-center group-hover:rotate-6 transition">
                    <Icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="text-5xl font-bold text-primary/20 group-hover:text-primary/40 transition">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="relative mt-6 text-xl font-semibold">{c.name}</h3>
                <p className="relative mt-2 text-sm text-muted-foreground">{c.count} course{c.count !== 1 ? "s" : ""}</p>
                <Link to="/courses" className="relative mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all">View More →</Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
