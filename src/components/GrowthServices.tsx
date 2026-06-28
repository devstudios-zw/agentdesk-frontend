import Image from "next/image";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { StaggerGroup, StaggerItem } from "./StaggerReveal";

const SERVICES = [
  {
    badge: "Live in 7 days",
    title: "Professional Website",
    tagline: "Your first impression. Your 24/7 salesperson.",
    tags: ["Property listings", "Enquiry forms", "Mobile-first", "SEO-ready"],
    cta: "Choose a plan",
    href: "#pricing",
    primary: true,
  },
  {
    badge: "Included in every plan",
    title: "Property Dashboard",
    tagline: "Run your whole agency from one screen.",
    tags: ["Listings & leads", "Deal pipeline", "Team access", "Real-time reporting"],
    cta: "Book a demo",
    href: "#get-started",
    primary: false,
  },
];

export function GrowthServices() {
  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0b0f0e] p-8 sm:p-12">
            <Image
              src="/agent_desk_what_we_offer_background.png"
              alt=""
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#0b0f0e]/55" />
            <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-[280px_1fr]">
              <div className="min-w-0">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  What we offer
                </span>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
                  Growth services
                </h2>
                <p className="mt-3 text-sm text-white/80">
                  Strategic solutions designed to improve your brand, attract
                  the right clients, and turn attention into action.
                </p>

                <div className="mt-9 border-t border-white/10 pt-6">
                  <h3 className="text-sm font-semibold text-white">
                    Built around your goals
                  </h3>
                  <p className="mt-2 text-sm text-white/80">
                    From first impression to final conversion, every part of
                    the experience is crafted to support your business
                    growth.
                  </p>
                </div>
              </div>

              <div className="min-w-0">
                <div className="mx-auto flex w-fit max-w-full flex-wrap items-center gap-2.5 rounded-2xl border border-accent-2/40 bg-accent-2/20 px-5 py-4 text-sm font-semibold text-white">
                  <ShieldCheck size={18} className="shrink-0 text-accent-2" />
                  <span className="break-words">Your website live in 7 days — or your money back.</span>
                </div>

                <StaggerGroup className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {SERVICES.map((service) => (
                    <StaggerItem
                      key={service.title}
                      className="flex flex-col rounded-2xl border border-white/10 bg-[#0b0f0e]/65 p-6 backdrop-blur-md"
                    >
                      <span className="inline-flex w-fit items-center rounded-full bg-accent-2/15 px-3 py-1 text-xs font-bold text-accent-2">
                        {service.badge}
                      </span>
                      <h3 className="mt-4 text-xl font-semibold text-white">
                        {service.title}
                      </h3>
                      <p className="mt-1.5 text-sm text-white/60">{service.tagline}</p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <a
                        href={service.href}
                        className={`mt-7 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-transform hover:scale-[1.02] ${
                          service.primary
                            ? "bg-accent text-ink"
                            : "border border-white/15 text-white hover:bg-white/10"
                        }`}
                      >
                        {service.cta}
                        {service.primary && <ArrowRight size={16} />}
                      </a>
                    </StaggerItem>
                  ))}
                </StaggerGroup>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
