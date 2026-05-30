import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import courseWeb from "@/assets/course-web.jpg";
import courseUiux from "@/assets/course-uiux.jpg";
import courseData from "@/assets/course-data.jpg";

const posts = [
  { img: courseWeb, date: "May 12, 2026", title: "How to Land Your First Remote Tech Job from Africa" },
  { img: courseUiux, date: "Apr 28, 2026", title: "5 UI/UX Principles That Make Apps Feel Premium" },
  { img: courseData, date: "Apr 15, 2026", title: "Why Power BI Is the Fastest Path Into Data Careers" },
];

export function Blog() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Insights</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold">Explore our latest <span className="text-gradient">blogs & articles</span></h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((p, i) => (
            <motion.article key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} whileHover={{ y: -6 }} className="glass rounded-3xl overflow-hidden group">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-5">
                <div className="text-xs text-primary font-semibold">{p.date}</div>
                <h3 className="mt-2 font-semibold leading-snug">{p.title}</h3>
                <button className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all">Read more <ArrowRight className="w-3.5 h-3.5" /></button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}