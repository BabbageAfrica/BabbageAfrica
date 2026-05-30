import { createFileRoute } from "@tanstack/react-router";
import { FAQ } from "@/components/babbage/FAQ";
import { CTA } from "@/components/babbage/CTA";

export const Route = createFileRoute("/faq")({
  head: () => ({ meta: [{ title: "FAQ — Babbage Africa" }] }),
  component: () => (<main className="pt-20 bg-hero"><FAQ /><CTA /></main>),
});