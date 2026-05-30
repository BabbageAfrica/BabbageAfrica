import { createFileRoute } from "@tanstack/react-router";
import { Pricing } from "@/components/babbage/Pricing";
import { FAQ } from "@/components/babbage/FAQ";

export const Route = createFileRoute("/pricing")({
  head: () => ({ meta: [{ title: "Pricing — Babbage Africa" }] }),
  component: () => (<main className="pt-20 bg-hero"><Pricing /><FAQ /></main>),
});