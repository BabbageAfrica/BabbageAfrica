import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "What is Babbage Africa?", a: "Babbage Africa is the online learning arm of Babbage Technologies — practical tech training designed for African students, professionals and businesses." },
  { q: "Who can use Babbage?", a: "Anyone: complete beginners, students, working professionals, and teams who want to upskill in modern technology." },
  { q: "What types of courses are available?", a: "Programming, web & mobile development, UI/UX, cybersecurity, data science & AI, cloud & DevOps, digital marketing, and creative skills." },
  { q: "Are the courses beginner friendly?", a: "Yes. Most courses start from the basics and grow into advanced, project-based work, so you can join at any level." },
  { q: "Can I learn Babbage from my phone or tablet?", a: "Absolutely. Every course is fully mobile-responsive and works smoothly on phones, tablets and laptops." },
  { q: "Do I need to know how to code first?", a: "Not at all. Many of our learners begin with zero coding experience and graduate building real apps." },
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">FAQ</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold">Frequently asked <span className="text-gradient">questions</span></h2>
        </div>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="glass rounded-2xl px-5 border-border/40 data-[state=open]:border-primary/50">
              <AccordionTrigger className="text-left font-medium hover:no-underline">{f.q}</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}