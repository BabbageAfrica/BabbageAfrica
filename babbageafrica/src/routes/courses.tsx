import { createFileRoute } from "@tanstack/react-router";
import { CoursesSection } from "@/components/babbage/CoursesSection";
import { Categories } from "@/components/babbage/Categories";

export const Route = createFileRoute("/courses")({
  head: () => ({ meta: [{ title: "Courses — Babbage Africa" }, { name: "description", content: "Browse all premium tech courses on Babbage Africa." }] }),
  component: () => (<main className="pt-20 bg-hero"><CoursesSection /><Categories /></main>),
});