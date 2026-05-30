import { useState } from "react";
import { createFileRoute, Link, notFound, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, Check, CreditCard, Loader2, ShieldCheck, Sparkles } from "lucide-react";
import { getCourseById } from "@/lib/babbage-data";
import { toast } from "sonner";

export const Route = createFileRoute("/enroll/$courseId")({
  head: ({ params }) => {
    const c = getCourseById(params.courseId);
    return { meta: [{ title: c ? `Enroll — ${c.title}` : "Enroll — Babbage Africa" }] };
  },
  loader: ({ params }) => {
    const course = getCourseById(params.courseId);
    if (!course) throw notFound();
    return { course };
  },
  component: EnrollPage,
});

function EnrollPage() {
  const { course } = Route.useLoaderData();
  const navigate = useNavigate();
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ fullName: "", email: "", phone: "", plan: "one-time", card: "", cvc: "", exp: "" });

  const next = (e: React.FormEvent) => { e.preventDefault(); setStep((s) => (s === 1 ? 2 : 3)); };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1400));
    setLoading(false);
    toast.success(`You're enrolled in ${course.title}!`, { description: "Check your email for next steps." });
    navigate({ to: "/courses/$courseId", params: { courseId: course.id } });
  };

  return (
    <main className="pt-24 pb-20 min-h-screen bg-hero">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/courses/$courseId" params={{ courseId: course.id }} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="w-4 h-4" /> Back to course
        </Link>

        <div className="mt-6 grid lg:grid-cols-[1fr_360px] gap-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass rounded-3xl p-6 sm:p-8">
            <div className="flex items-center gap-3 text-xs">
              {[1, 2, 3].map((n) => (
                <div key={n} className="flex items-center gap-2">
                  <div className={`w-7 h-7 rounded-full grid place-items-center font-semibold ${step >= n ? "bg-gradient-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>{step > n ? <Check className="w-3.5 h-3.5" /> : n}</div>
                  <span className={step >= n ? "text-foreground" : "text-muted-foreground"}>{n === 1 ? "Your info" : n === 2 ? "Plan" : "Payment"}</span>
                  {n < 3 && <div className="w-6 h-px bg-border" />}
                </div>
              ))}
            </div>

            <h1 className="mt-6 text-2xl sm:text-3xl font-bold">Enroll in <span className="text-gradient">{course.title}</span></h1>

            {step === 1 && (
              <form onSubmit={next} className="mt-6 space-y-4">
                <Field label="Full name" value={form.fullName} onChange={(v) => setForm({ ...form, fullName: v })} placeholder="Ada Okeke" />
                <Field label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} placeholder="you@email.com" />
                <Field label="Phone" type="tel" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} placeholder="+234 ..." required={false} />
                <button className="w-full mt-2 py-3 rounded-xl bg-gradient-primary text-primary-foreground font-semibold hover:-translate-y-0.5 transition">Continue</button>
              </form>
            )}

            {step === 2 && (
              <form onSubmit={next} className="mt-6 space-y-3">
                {[
                  { id: "one-time", label: "One-time payment", price: course.price, note: "Lifetime access, single payment" },
                  { id: "installments", label: "2 installments", price: Math.round(course.price / 2), note: "Pay in 2 monthly installments" },
                ].map((p) => (
                  <label key={p.id} className={`flex items-center justify-between gap-4 p-4 rounded-2xl border cursor-pointer transition ${form.plan === p.id ? "border-primary bg-primary/10" : "border-border glass"}`}>
                    <div className="flex items-center gap-3">
                      <input type="radio" name="plan" checked={form.plan === p.id} onChange={() => setForm({ ...form, plan: p.id })} className="accent-[oklch(0.62_0.24_295)]" />
                      <div>
                        <div className="font-semibold text-sm">{p.label}</div>
                        <div className="text-xs text-muted-foreground">{p.note}</div>
                      </div>
                    </div>
                    <div className="text-lg font-bold text-gradient">${p.price}</div>
                  </label>
                ))}
                <div className="flex gap-2 pt-2">
                  <button type="button" onClick={() => setStep(1)} className="flex-1 py-3 rounded-xl border border-border">Back</button>
                  <button className="flex-1 py-3 rounded-xl bg-gradient-primary text-primary-foreground font-semibold">Continue</button>
                </div>
              </form>
            )}

            {step === 3 && (
              <form onSubmit={submit} className="mt-6 space-y-4">
                <Field label="Cardholder name" value={form.fullName} onChange={(v) => setForm({ ...form, fullName: v })} />
                <Field label="Card number" value={form.card} onChange={(v) => setForm({ ...form, card: v })} placeholder="1234 5678 9012 3456" />
                <div className="grid grid-cols-2 gap-3">
                  <Field label="Expiry" value={form.exp} onChange={(v) => setForm({ ...form, exp: v })} placeholder="MM/YY" />
                  <Field label="CVC" value={form.cvc} onChange={(v) => setForm({ ...form, cvc: v })} placeholder="123" />
                </div>
                <p className="flex items-center gap-2 text-xs text-muted-foreground"><ShieldCheck className="w-4 h-4" /> Demo payment — no card is charged.</p>
                <div className="flex gap-2 pt-2">
                  <button type="button" onClick={() => setStep(2)} className="flex-1 py-3 rounded-xl border border-border">Back</button>
                  <button disabled={loading} className="flex-1 py-3 rounded-xl bg-gradient-primary text-primary-foreground font-semibold disabled:opacity-60 inline-flex items-center justify-center gap-2">
                    {loading ? <><Loader2 className="w-4 h-4 animate-spin" /> Processing</> : <><CreditCard className="w-4 h-4" /> Pay ${course.price}</>}
                  </button>
                </div>
              </form>
            )}
          </motion.div>

          <motion.aside initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass rounded-3xl p-6 h-fit">
            <div className="aspect-[16/10] rounded-2xl overflow-hidden">
              <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
            </div>
            <h2 className="mt-4 font-semibold">{course.title}</h2>
            <p className="mt-1 text-xs text-muted-foreground">{course.category} · {course.duration}</p>
            <div className="mt-4 pt-4 border-t border-border/40 space-y-2 text-sm">
              <Row label="Course" value={`$${course.price}`} />
              <Row label="Tax" value="$0" />
              <Row label="Total" value={`$${course.price}`} bold />
            </div>
            <div className="mt-4 inline-flex items-center gap-1.5 text-xs text-primary"><Sparkles className="w-3.5 h-3.5" /> 7-day money-back guarantee</div>
          </motion.aside>
        </div>
      </div>
    </main>
  );
}

function Field({ label, type = "text", value, onChange, placeholder, required = true }: { label: string; type?: string; value: string; onChange: (v: string) => void; placeholder?: string; required?: boolean }) {
  return (
    <label className="block">
      <span className="text-xs font-medium text-muted-foreground">{label}</span>
      <input value={value} onChange={(e) => onChange(e.target.value)} type={type} required={required} placeholder={placeholder} className="mt-1.5 w-full bg-input/60 border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition placeholder:text-muted-foreground" />
    </label>
  );
}

function Row({ label, value, bold }: { label: string; value: string; bold?: boolean }) {
  return (
    <div className={`flex justify-between ${bold ? "font-semibold text-base pt-2 border-t border-border/40" : "text-muted-foreground"}`}>
      <span>{label}</span><span className={bold ? "text-gradient" : ""}>{value}</span>
    </div>
  );
}
