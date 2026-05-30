import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { courses, categories } from "@/lib/babbage-data";
import { CourseCard } from "./CourseCard";
import { motion } from "framer-motion";

export function CoursesSection({ limit }: { limit?: number }) {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<string>("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = courses.filter((c) => {
      const matchesCat = cat === "All" || c.category === cat;
      const matchesQ = !q || c.title.toLowerCase().includes(q) || c.description.toLowerCase().includes(q);
      return matchesCat && matchesQ;
    });
    return limit ? list.slice(0, limit) : list;
  }, [query, cat, limit]);

  return (
    <section id="courses" className="relative py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Our Courses</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold">Explore our <span className="text-gradient">Best Courses</span></h2>
          <p className="mt-4 text-muted-foreground">Hand-crafted curriculum across programming, design, AI, cloud and more — built for the next generation of African tech talent.</p>
        </motion.div>
        <div className="mt-10 flex flex-col gap-4">
          <div className="glass rounded-full flex items-center px-4 py-2 max-w-xl mx-auto w-full">
            <Search className="w-4 h-4 text-muted-foreground" />
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search courses, skills, tools..." className="flex-1 bg-transparent px-3 py-1.5 text-sm outline-none placeholder:text-muted-foreground" />
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((c) => (
              <button key={c} onClick={() => setCat(c)} className={`text-xs sm:text-sm px-4 py-1.5 rounded-full border transition-all ${cat === c ? "bg-gradient-primary text-primary-foreground border-transparent shadow-[0_0_24px_-6px_oklch(0.62_0.24_295/0.8)]" : "border-border glass text-muted-foreground hover:text-foreground"}`}>
                {c}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((c, i) => (<CourseCard key={c.id} course={c} index={i} />))}
        </div>
        {filtered.length === 0 && (<p className="mt-12 text-center text-muted-foreground">No courses match your search.</p>)}
      </div>
    </section>
  );
}