"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ChevronDown, Mail } from "lucide-react";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100vh] items-center overflow-hidden"
    >
      {/* Background video — the one visual */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 -z-20">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&q=80"
          className="h-full w-full object-cover"
        >
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </motion.div>

      <div className="mx-auto w-full max-w-7xl px-6 pt-32 pb-20">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="text-5xl font-semibold leading-[1.05] tracking-tight text-white drop-shadow-lg sm:text-6xl lg:text-[4.2rem]"
          >
            Build an agency
            <br />
            <span className="accent-gradient-text">that runs itself.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="mt-6 max-w-lg text-lg text-white/90 drop-shadow"
          >
            Properties, tenants, leases, rent collection and your agency
            website — in one workspace. No more inbox chaos. No more
            spreadsheets. No more chasing your team for an update.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <a
              href="#get-started"
              id="get-started"
              className="gold-shine group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-[1.03]"
            >
              Claim your workspace
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            {/* <a
              href="mailto:hello@agentdesk.co.zw"
              className="glass inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              <Mail size={18} />
              Contact us
            </a> */}
          </motion.div>

        </div>
      </div>

      <motion.div
        style={{ opacity }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-x-0 bottom-6 flex justify-center text-white/70"
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
}
