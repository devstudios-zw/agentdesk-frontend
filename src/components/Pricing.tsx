"use client";

import { Check, ArrowRight } from "lucide-react";
import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { StaggerGroup, StaggerItem } from "./StaggerReveal";

const PLANS = [
  {
    name: "Basic",
    tagline: "For agencies getting started online.",
    monthly: 27,
    yearly: 19,
    setupFee: 250,
    cta: "Choose plan",
    href: "#get-started",
    features: [
      "Full-featured property management",
      "Unlimited properties",
      "Limited forms & teams",
      "Unlimited web hosting",
      "Custom domain & free SSL",
      "Live chat support",
    ],
  },
  {
    name: "Pro",
    tagline: "For agencies ready to grow and convert more leads.",
    monthly: 72,
    yearly: 54,
    setupFee: 250,
    featured: true,
    cta: "Choose plan",
    href: "#get-started",
    features: [
      "Everything in Basic",
      "Unlimited forms",
      "Enhanced security & live chat",
      "Email hosting",
      "SEO & Google Analytics setup",
      "Branding & discovery",
      "Limited landing page customization",
      "Limited document storage",
    ],
  },
  {
    name: "Custom",
    tagline: "For established agencies that need it all.",
    monthly: 399,
    yearly: 299,
    setupFee: null,
    fromPrice: true,
    cta: "Let's talk",
    href: "mailto:hello@agentdesk.co.zw",
    features: [
      "Everything in Pro",
      "Unlimited teams",
      "Priority support",
      "WhatsApp Business API integration",
      "Full landing page customization",
      "Paynow integration",
      "AI chat with your data",
      "Unlimited document storage",
    ],
  },
];

export function Pricing() {
  const [yearly, setYearly] = useState(true);

  return (
    <section id="pricing" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Membership
          </span>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Flexible plans for agencies at any stage.
          </h2>
          <p className="mt-4 text-muted">
            Every plan includes unlimited properties, hosting and a custom
            domain. Pick the level of support and features your agency needs.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.08} className="mt-10 flex items-center justify-center">
          <div className="inline-flex items-center gap-1 rounded-full border border-border bg-surface p-1">
            <button
              onClick={() => setYearly(false)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                !yearly ? "bg-accent text-ink" : "text-muted hover:text-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                yearly ? "bg-accent text-ink" : "text-muted hover:text-foreground"
              }`}
            >
              Yearly
              <span className="rounded-full bg-accent-2/15 px-2 py-0.5 text-[11px] font-bold text-accent-2">
                Save 25%
              </span>
            </button>
          </div>
        </ScrollReveal>

        <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {PLANS.map((plan) => {
            const price = yearly ? plan.yearly : plan.monthly;
            return (
              <StaggerItem key={plan.name}>
                <div
                  className={`flex h-full flex-col rounded-3xl border p-8 ${
                    plan.featured
                      ? "border-accent bg-surface shadow-[0_0_0_1px_rgba(201,168,76,0.3)]"
                      : "border-border bg-surface"
                  }`}
                >
                  {plan.featured && (
                    <span className="gold-shine mb-4 inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide text-ink">
                      Most popular
                    </span>
                  )}

                  <h3 className="text-lg font-semibold">{plan.name}</h3>
                  <p className="mt-1.5 text-sm text-muted">{plan.tagline}</p>

                  <div className="mt-6 flex items-baseline gap-1.5">
                    {plan.fromPrice && (
                      <span className="text-sm font-medium text-muted">From</span>
                    )}
                    <span className="text-4xl font-semibold tracking-tight">
                      ${price}
                    </span>
                    <span className="text-sm text-muted">/month</span>
                  </div>
                  <p className="mt-1.5 text-xs text-muted">
                    {plan.setupFee
                      ? `+ $${plan.setupFee} one-time setup fee`
                      : "No setup fee"}
                  </p>

                  <ul className="mt-7 flex-1 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm">
                        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent-2/15 text-accent-2">
                          <Check size={11} strokeWidth={3} />
                        </span>
                        <span className="text-foreground/90">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={plan.href}
                    className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:scale-[1.02] ${
                      plan.featured
                        ? "gold-shine text-ink"
                        : "border border-border hover:bg-surface-2"
                    }`}
                  >
                    {plan.cta}
                    {plan.featured && <ArrowRight size={16} />}
                  </a>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
