import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check, Clock, Star, ArrowLeft, BookOpen, Award, Users } from "lucide-react";
import { getCourseById, courses } from "@/lib/babbage-data";

export const Route = createFileRoute("/courses/$courseId")({
  head: ({ params }) => {
    const c = getCourseById(params.courseId);
    return {
      meta: [
        { title: c ? `${c.title} — Babbage Africa` : "Course — Babbage Africa" },
        { name: "description", content: c?.description ?? "Premium tech course." },
      ],
    };
  },
  loader: ({ params }) => {
    const course = getCourseById(params.courseId);
    if (!course) throw notFound();
    return { course };
  },
  notFoundComponent: () => (
    <main className="pt-32 pb-20 text-center">
      <h1 className="text-3xl font-bold">Course not found</h1>
      <Link to="/courses" className="mt-4 inline-block text-primary">Back to courses</Link>
    </main>
  ),
  component: CourseDetailPage,
});

function CourseDetailPage() {
  const { course } = Route.useLoaderData();
  const related = courses.filter((c) => c.category === course.category && c.id !== course.id).slice(0, 3);

  return (
    <main className="pt-24 pb-20 bg-hero min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/courses" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition">
          <ArrowLeft className="w-4 h-4" /> Back to courses
        </Link>

        <div className="mt-6 grid lg:grid-cols-3 gap-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="lg:col-span-2 space-y-8">
            <div className="relative aspect-[16/9] rounded-3xl overflow-hidden">
              <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <span className="absolute top-4 left-4 text-xs font-semibold px-3 py-1.5 rounded-full bg-gradient-primary text-primary-foreground">{course.category}</span>
            </div>

            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">{course.title}</h1>
              <p className="mt-4 text-lg text-muted-foreground">{course.description}</p>
              <div className="mt-6 flex flex-wrap gap-4 text-sm">
                <span className="inline-flex items-center gap-1.5 glass rounded-full px-3 py-1.5"><Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />{course.rating} rating</span>
                <span className="inline-flex items-center gap-1.5 glass rounded-full px-3 py-1.5"><Clock className="w-3.5 h-3.5" />{course.duration}</span>
                <span className="inline-flex items-center gap-1.5 glass rounded-full px-3 py-1.5"><Award className="w-3.5 h-3.5" />{course.level}</span>
                <span className="inline-flex items-center gap-1.5 glass rounded-full px-3 py-1.5"><Users className="w-3.5 h-3.5" />Cohort & self-paced</span>
              </div>
            </div>

            {course.modules && course.modules.length > 0 && (
              <section className="glass rounded-3xl p-6 sm:p-8">
                <h2 className="text-2xl font-bold flex items-center gap-2"><BookOpen className="w-5 h-5 text-primary" /> What you'll learn</h2>
                <div className="mt-6 grid sm:grid-cols-2 gap-3">
                  {course.modules.map((m: string) => (
                    <div key={m} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 mt-0.5 text-primary shrink-0" /> {m}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {course.outcomes && course.outcomes.length > 0 && (
              <section className="glass rounded-3xl p-6 sm:p-8">
                <h2 className="text-2xl font-bold">Career outcomes</h2>
                <ul className="mt-6 space-y-3">
                  {course.outcomes.map((o: string) => (
                    <li key={o} className="flex items-start gap-2 text-sm"><Check className="w-4 h-4 mt-0.5 text-primary shrink-0" />{o}</li>
                  ))}
                </ul>
              </section>
            )}
          </motion.div>

          <motion.aside initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="space-y-6 lg:sticky lg:top-24 self-start">
            <div className="glass rounded-3xl p-6">
              <div className="text-sm text-muted-foreground">One-time price</div>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="text-4xl font-bold text-gradient">${course.price}</span>
                <span className="text-sm text-muted-foreground line-through">${course.price + 50}</span>
              </div>
              <Link to="/enroll/$courseId" params={{ courseId: course.id }} className="mt-6 w-full inline-flex justify-center py-3 rounded-full bg-gradient-primary text-primary-foreground font-semibold shadow-[0_0_30px_-6px_oklch(0.62_0.24_295/0.8)] hover:-translate-y-0.5 transition">Enroll now</Link>
              <ul className="mt-6 space-y-2.5 text-sm">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" />Lifetime access</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" />Verified certificate</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" />Mentor support</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" />Real-world projects</li>
              </ul>
            </div>
          </motion.aside>
        </div>

        {related.length > 0 && (
          <section className="mt-20">
            <h2 className="text-2xl font-bold">Related courses</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <Link key={r.id} to="/courses/$courseId" params={{ courseId: r.id }} className="glass rounded-2xl overflow-hidden hover:border-primary/50 transition group">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={r.image} alt={r.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">{r.title}</h3>
                    <p className="mt-1 text-xs text-muted-foreground line-clamp-2">{r.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
