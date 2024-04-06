"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";

export default function Contact() {
  const { ref } = useSectionInView("Demo");

  return (
    <motion.section
      id="demo"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>
        <button className="animate-bounce">
        <Link href="/security">Go to demo</Link>
        </button>
        </SectionHeading>

    </motion.section>
  );
}
