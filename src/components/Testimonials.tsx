import Image from "next/image";
import { Compass, MessageCircle, ShieldCheck, Zap } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { StaggerGroup, StaggerItem } from "./StaggerReveal";

const PROMISES = [
  {
    icon: Compass,
    title: "Built around real problems, not guesses",
    description:
      "Every feature exists because an agency actually needed it — not because it looked good on a roadmap.",
  },
  {
    icon: Zap,
    title: "You won't be left to figure it out alone",
    description:
      "We set you up ourselves and stay hands-on until your team is fully running on AgentDesk.",
  },
  {
    icon: ShieldCheck,
    title: "Your data stays yours",
    description:
      "Export everything, anytime. Cancel anytime. Nothing about switching to AgentDesk is a one-way door.",
  },
  {
    icon: MessageCircle,
    title: "A direct line to the people building it",
    description:
      "Tell us what's missing and watch it show up in the product — not buried in a backlog for next year.",
  },
];

export function Testimonials() {
  return (
    <section id="why-us" className="relative overflow-hidden py-28">
      <Image
        src="/agent_desk_on_mobile.png"
        alt=""
        fill
        className="object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(251,245,230,0.25),rgba(251,245,230,0.9)_75%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            What you can expect
          </span>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Your growth, taken care of from day one
          </h2>
          <p className="mt-4 text-base text-muted">
            AgentDesk is built by a real estate operator and a team of software engineers —
            so what you get is shaped by how agencies actually run, not how software usually
            gets sold to them.
          </p>
        </ScrollReveal>

        <StaggerGroup className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROMISES.map((p) => (
            <StaggerItem key={p.title}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.18)] transition-transform hover:-translate-y-1 hover:shadow-[0_16px_32px_-12px_rgba(0,0,0,0.22)]">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg accent-gradient text-ink">
                  <p.icon size={18} strokeWidth={2.25} />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
                <p className="mt-1.5 flex-1 text-sm leading-relaxed text-foreground/70">
                  {p.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
