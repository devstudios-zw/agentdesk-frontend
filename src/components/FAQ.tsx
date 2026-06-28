"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { StaggerGroup, StaggerItem } from "./StaggerReveal";

const FAQS = [
  {
    q: "How long does it take to get set up?",
    a: "Most agencies are fully onboarded in under a day. Create your workspace, import your portfolio, and you're managing properties immediately — no implementation team required.",
  },
  {
    q: "Can I migrate my existing properties and tenants?",
    a: "Yes. You can import your portfolio, tenants and active leases directly, or our team can help you migrate from spreadsheets at no extra cost.",
  },
  {
    q: "Does AgentDesk replace our agency website?",
    a: "It can. The built-in website builder publishes your listings automatically and stays in sync with your portfolio, or you can keep your existing site and use AgentDesk just for operations.",
  },
  {
    q: "Is there a limit on properties or team members?",
    a: "No. Every plan scales with your portfolio and your team — you only pay for what your agency needs.",
  },
  {
    q: "Is my data secure?",
    a: "Yes. All data is encrypted in transit and at rest, with daily backups and role-based access control for your team.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-28">
      <div className="mx-auto max-w-3xl px-6">
        <ScrollReveal className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            FAQ
          </span>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Straight answers
          </h2>
        </ScrollReveal>

        <StaggerGroup className="mt-12 space-y-3" staggerDelay={0.06}>
          {FAQS.map((item, i) => (
            <StaggerItem key={item.q}>
              <div className="rounded-2xl border border-border bg-surface">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-medium">{item.q}</span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-muted transition-transform ${
                      open === i ? "rotate-180 text-accent" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm text-muted">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
