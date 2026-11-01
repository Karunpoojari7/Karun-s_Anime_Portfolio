"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { disciplines, Discipline } from "./disciplinesData";
import DisciplineCard from "./DisciplineCard";
import DisciplineModal from "./DisciplineModal";

export default function NinjutsuSpecializations() {
  const [selectedDiscipline, setSelectedDiscipline] = useState<Discipline | null>(null);

  return (
    <section id="technical-arsenal" className="section-wrap py-20 relative">
      {/* Background subtle radial ambient glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-30"
        style={{
          background:
            "radial-gradient(circle 500px at 50% 40%, rgba(225, 29, 46, 0.12), transparent 70%)",
        }}
      />

      {/* SECTION HEADER */}
      <div className="max-w-2xl mb-12 sm:mb-14">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="eyebrow"
        >
          NINJUTSU SPECIALIZATIONS
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Three paths. <em>One mindset.</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-sm sm:text-base text-neutral-300 font-sans mt-3.5 leading-relaxed"
        >
          Different disciplines. One philosophy: observe deeply, think strategically, and build intelligently.
        </motion.p>
      </div>

      {/* THREE INTERACTIVE CHAKRA SEAL DISCIPLINE CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-stretch">
        {disciplines.map((discipline, index) => (
          <DisciplineCard
            key={discipline.id}
            discipline={discipline}
            index={index}
            onOpen={() => setSelectedDiscipline(discipline)}
          />
        ))}
      </div>

      {/* FULL TRAINING SCROLL MODAL */}
      <DisciplineModal
        discipline={selectedDiscipline}
        onClose={() => setSelectedDiscipline(null)}
      />
    </section>
  );
}

