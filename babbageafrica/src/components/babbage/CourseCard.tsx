import { motion } from "framer-motion";
import { Star, Clock, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { Course } from "@/lib/babbage-data";

export function CourseCard({ course, index = 0 }: { course: Course; index?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -6 }}
      className="group glass rounded-3xl overflow-hidden flex flex-col hover:border-primary/50 transition-colors"
    >
      <Link to="/courses/$courseId" params={{ courseId: course.id }} className="relative aspect-[16/10] overflow-hidden block">
        <img src={course.image} alt={course.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        <span className="absolute top-3 left-3 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-gradient-primary text-primary-foreground">{course.category}</span>
        <div className="absolute top-3 right-3 flex items-center gap-1 text-xs glass px-2 py-1 rounded-full">
          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />{course.rating}
        </div>
      </Link>
      <div className="p-5 flex-1 flex flex-col">
        <Link to="/courses/$courseId" params={{ courseId: course.id }}>
          <h3 className="font-semibold text-lg leading-snug hover:text-primary transition-colors">{course.title}</h3>
        </Link>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{course.description}</p>
        <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{course.duration}</span>
        </div>
        <div className="mt-5 flex items-center justify-between pt-4 border-t border-border/40">
          <div>
            <div className="text-xs text-muted-foreground">Price</div>
            <div className="text-xl font-bold text-gradient">${course.price}</div>
          </div>
          <Link to="/enroll/$courseId" params={{ courseId: course.id }} className="inline-flex items-center gap-1 text-sm font-semibold px-4 py-2 rounded-full bg-primary/20 text-foreground hover:bg-gradient-primary hover:text-primary-foreground transition-all">
            Enroll <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}