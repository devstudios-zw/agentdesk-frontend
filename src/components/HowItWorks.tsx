"use client";

import { Rocket, Building2, Handshake } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { StaggerGroup, StaggerItem } from "./StaggerReveal";

const STEPS = [
  {
    icon: Rocket,
    title: "Create your agency",
    description:
      "Sign up, add your agency details, and invite your team. Takes about 3 minutes.",
  },
  {
    icon: Building2,
    title: "Add your properties",
    description:
      "Import or create listings with photos, pricing, and availability. Your site updates automatically.",
  },
  {
    icon: Handshake,
    title: "Close deals faster",
    description:
      "Manage every enquiry, lease, and payment from one clean dashboard — no jumping between apps.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative">
      <div className="accent-gradient relative mx-2 rounded-3xl px-6 pb-32 pt-24 text-center text-white sm:mx-3">
        <ScrollReveal className="mx-auto max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
            How it works
          </span>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Up and running in minutes.
          </h2>
        </ScrollReveal>
      </div>

      <StaggerGroup className="relative mx-auto -mt-24 grid max-w-7xl grid-cols-1 gap-6 px-4 sm:grid-cols-3 sm:px-6">
        {STEPS.map((step, i) => {
          const Icon = step.icon;
          return (
            <StaggerItem key={step.title}>
              <div className="relative rounded-2xl border border-border bg-white px-6 pb-8 pt-10 text-center shadow-xl">
                <div className="accent-gradient absolute -top-5 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full text-sm font-semibold text-white shadow-md">
                  {i + 1}
                </div>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-surface-2">
                  <Icon className="h-7 w-7 text-accent-2" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-tight">{step.title}</h3>
                <p className="mt-3 text-sm text-muted">{step.description}</p>
              </div>
            </StaggerItem>
          );
        })}
      </StaggerGroup>

      <div className="h-24" />
    </section>
  );
}
