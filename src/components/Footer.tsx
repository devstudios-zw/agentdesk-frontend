import Link from "next/link";
import { LogoMark } from "@/components/Logo";
import { StaggerGroup, StaggerItem } from "@/components/StaggerReveal";

const COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "How it works", href: "/#how-it-works" },
      { label: "Pricing", href: "/#pricing" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Why us", href: "/#why-us" },
      { label: "Contact", href: "mailto:hello@agentdesk.co.zw" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy policy", href: "/privacy" },
      { label: "Terms of service", href: "/terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <StaggerGroup className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <StaggerItem>
            <Link href="/#top" className="flex items-center font-semibold tracking-tight">
              <LogoMark size={32} />
            </Link>
            <p className="mt-4 max-w-xs text-sm text-white/60">
              You didn&apos;t build your agency to get buried in busy work. This
              is your platform to manage, grow, and scale — on your terms.
            </p>
            <a
              href="mailto:hello@agentdesk.co.zw"
              className="mt-4 inline-block text-sm text-white/60 hover:text-white"
            >
              hello@agentdesk.co.zw
            </a>
          </StaggerItem>

          {COLUMNS.map((col) => (
            <StaggerItem key={col.title}>
              <div className="text-sm font-semibold">{col.title}</div>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-white/60 hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/60 sm:flex-row">
          <span>© 2026 AgentDesk. All rights reserved.</span>
          <span>Harare, Zimbabwe</span>
          <a
            href="https://devstudios.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 text-white/60 hover:text-white"
          >
            By DevStudios
          </a>
        </div>
      </div>
    </footer>
  );
}
