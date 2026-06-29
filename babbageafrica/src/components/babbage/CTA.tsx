import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[2rem] p-10 sm:p-14 text-center overflow-hidden glass animate-pulse-glow">
          <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-accent/30 blur-3xl" />
          <div className="relative">
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Get Started</span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold">Ready to transform <br />your skills into a <span className="text-gradient">career?</span></h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Join thousands of African learners building futures with Babbage Africa.</p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <Link to="/signup" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground font-semibold hover:-translate-y-0.5 transition">
                Start Learning <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/pricing" className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass font-semibold hover:bg-primary/10 transition">View Pricing</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}