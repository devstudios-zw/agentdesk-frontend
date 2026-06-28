import Image from "next/image";
import { BarChart3, Building2, Globe, Inbox, KeyRound, Wallet } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { StaggerGroup, StaggerItem } from "./StaggerReveal";

const FEATURES = [
  {
    number: "01",
    icon: Building2,
    title: "Property Management",
    description:
      "List properties with photos, manage your full portfolio, and publish to your branded public website — all synced in real time.",
  },
  {
    number: "02",
    icon: Inbox,
    title: "Enquiry Management",
    description:
      "Capture every lead from your website. Track where each prospect stands and follow up before they go cold.",
  },
  {
    number: "03",
    icon: KeyRound,
    title: "Tenants & Leases",
    description:
      "Manage tenant records, lease terms, renewals, and move-outs — no spreadsheets, no missed dates.",
  },
  {
    number: "04",
    icon: Wallet,
    title: "Financial Oversight",
    description:
      "Track rent, commissions, and outstanding balances with agency-level financial reporting out of the box.",
  },
  {
    number: "05",
    icon: Globe,
    title: "Website Builder",
    description:
      "Launch a professional agency website in minutes. Choose a template, add your listings, and go live.",
  },
  {
    number: "06",
    icon: BarChart3,
    title: "Analytics",
    description:
      "Understand which properties get the most views, where your leads come from, and how your team is performing.",
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-16 sm:py-28">
      <div className="mx-2 sm:mx-3">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[#0a0a0a] px-6 py-12 sm:px-10 sm:py-20 lg:px-14">
          <Image
            src="/agent_desk_on_mobile_browser.png"
            alt=""
            fill
            className="object-cover opacity-50"
          />
          <div className="pointer-events-none absolute inset-0 bg-[#0a0a0a]/65" />
          <div className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[640px] -translate-x-1/2 rounded-full bg-accent/20 blur-[140px]" />

          <ScrollReveal className="relative mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              One system. Total control.
            </span>
            <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-white sm:mt-4 sm:text-3xl lg:text-4xl">
              Most agents are drowning in tools that were never built for them. AgentDesk was.
            </h2>
            <p className="mt-3 text-sm text-white/70 sm:mt-4 sm:text-base">
              Manage operations, track performance, and make smarter decisions from a single workspace.
            </p>
          </ScrollReveal>

          <StaggerGroup className="relative mt-8 grid grid-cols-2 gap-3 sm:mt-16 sm:gap-5 lg:grid-cols-3">
            {FEATURES.map((feature) => (
              <StaggerItem
                key={feature.number}
                className="flex flex-col rounded-2xl border border-white/10 bg-black/50 p-4 backdrop-blur-md transition-colors hover:border-accent/30 sm:p-6"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg accent-gradient text-ink sm:h-10 sm:w-10">
                  <feature.icon size={16} strokeWidth={2.25} className="sm:size-[18px]" />
                </div>
                <h3 className="mt-3 text-base font-semibold text-white sm:mt-4 sm:text-xl">{feature.title}</h3>
                <p className="mt-1 text-xs text-white/60 sm:mt-1.5 sm:text-sm">{feature.description}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
