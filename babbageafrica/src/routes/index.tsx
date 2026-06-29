import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/babbage/Hero";
import { CoursesSection } from "@/components/babbage/CoursesSection";
import { Categories } from "@/components/babbage/Categories";
import { Features } from "@/components/babbage/Features";
import { Testimonials } from "@/components/babbage/Testimonials";
import { Pricing } from "@/components/babbage/Pricing";
import { FAQ } from "@/components/babbage/FAQ";
import { Blog } from "@/components/babbage/Blog";
import { CTA } from "@/components/babbage/CTA";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main>
      <Hero />
      <Features />
      <CoursesSection limit={6} />
      <Categories />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Blog />
      <CTA />
    </main>
  );
}
