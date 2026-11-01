export interface Milestone {
  id: string;
  number: string;
  stage: string;
  kanji: string;
  kanjiLabel: string;
  title: string;
  subtitle: string;
  institution?: string;
  duration: string;
  status: "Completed ✓" | "Ongoing";
  isCompleted: boolean;
  description: string;
  skills: string[];
}

export const MILESTONES: Milestone[] = [
  {
    id: "undergrad",
    number: "01",
    stage: "UNDERGRADUATE DEGREE",
    kanji: "基",
    kanjiLabel: "DEGREE",
    title: "Bachelor of Science (BSc)",
    subtitle: "Sindhi College, Bengaluru",
    institution: "Sindhi College, Bengaluru",
    duration: "2022 – 2025",
    status: "Completed ✓",
    isCompleted: true,
    description:
      "Graduated with a Bachelor of Science degree from Sindhi College, Bengaluru. Built core foundations in computing fundamentals, problem-solving, and software concepts.",
    skills: ["Computer Science", "Programming Fundamentals", "Analytical Thinking", "Mathematics"],
  },
  {
    id: "internship",
    number: "02",
    stage: "INDUSTRY INTERNSHIP",
    kanji: "実",
    kanjiLabel: "INTERNSHIP",
    title: "Frontend Development Internship",
    subtitle: "Responsive UI & Web Application Engineering",
    duration: "2026",
    status: "Completed ✓",
    isCompleted: true,
    description:
      "Completed internship focusing on frontend development, responsive interfaces, component systems, and practical web application development.",
    skills: ["Frontend Development", "Responsive Interfaces", "Web Applications", "Component Systems"],
  },
  {
    id: "masters",
    number: "03",
    stage: "POSTGRADUATE PROGRAM",
    kanji: "学",
    kanjiLabel: "POSTGRAD",
    title: "MCA – Cybersecurity",
    subtitle: "GM University",
    institution: "GM University",
    duration: "2025 – Present",
    status: "Ongoing",
    isCompleted: false,
    description:
      "Master of Computer Applications at GM University specializing in cybersecurity, computing fundamentals, networks, databases, and secure software development.",
    skills: ["Cybersecurity", "Computing Fundamentals", "Network Architecture", "Database Systems"],
  },
  {
    id: "specialization",
    number: "04",
    stage: "CYBERSECURITY SPECIALIZATION",
    kanji: "継",
    kanjiLabel: "ACTIVE FOCUS",
    title: "Cybersecurity Learning",
    subtitle: "Network Traffic Analysis · Defensive Security · SOC",
    duration: "2025 – Present",
    status: "Ongoing",
    isCompleted: false,
    description:
      "Continuous specialization in network traffic analysis, defensive cybersecurity, SOC fundamentals, packet inspection, and practical security labs.",
    skills: ["Traffic Analysis", "Defensive Security", "SOC Fundamentals", "Security Labs"],
  },
];

export const SUMMARY_INDICATORS = [
  { count: "1", label: "BSc Degree", iconType: "graduation" },
  { count: "1", label: "MCA Program", iconType: "layers" },
  { count: "1", label: "Internship", iconType: "code" },
  { count: "2+", label: "Active Focus", iconType: "shield" },
];
