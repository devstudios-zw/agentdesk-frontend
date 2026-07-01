import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export function CTA() {
  return (
    <section className="relative px-6 py-24">
      <ScrollReveal className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl border border-border px-8 py-24 text-center sm:px-16">
          <Image
            src="/agent_desk_agency.png"
            alt=""
            fill
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_50%_40%,rgba(10,10,10,0.85),rgba(10,10,10,0.55)_60%,rgba(10,10,10,0.3))]" />
          <div className="absolute left-1/2 top-0 -z-0 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-[120px]" />
          <h2 className="relative text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Your agency deserves better than spreadsheets.
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-white/70">
            Set up your workspace in minutes and join the agencies already
            running leaner, faster and bigger with AgentDesk.
          </p>
          <div className="relative mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#get-started"
              className="gold-shine group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-[1.03]"
            >
              Claim your workspace
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="mailto:hello@agentdesk.co.zw"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/20"
            >
              Talk to us
            </a>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
