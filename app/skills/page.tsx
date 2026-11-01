"use client";

import React from "react";
import ShinobiSkillTree from "@/components/skills/ShinobiSkillTree";

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-red-900 selection:text-white">
      {/* Cinematic Shinobi Skill Tree Environment */}
      <ShinobiSkillTree />
    </main>
  );
}
