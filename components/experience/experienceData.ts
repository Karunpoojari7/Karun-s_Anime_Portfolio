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
    title: "BSc – Computer Science",
    subtitle: "Sindhi College, Bengaluru",
    institution: "Sindhi College, Bengaluru",
    duration: "2022 – 2025",
    status: "Completed ✓",
    isCompleted: true,
    description:
      "Completed my undergraduate education in Computer Science, building a foundation in programming, computing concepts and problem-solving.",
    skills: ["Programming Basics", "Data Structures", "Analytical Thinking", "Mathematics"],
  },
  {
    id: "internship",
    number: "02",
    stage: "INDUSTRY EXPERIENCE",
    kanji: "実",
    kanjiLabel: "INTERNSHIP",
    title: "Frontend Development Internship",
    subtitle: "Building responsive web applications & UI systems",
    duration: "2026",
    status: "Completed ✓",
    isCompleted: true,
    description:
      "Gained practical experience in frontend development, working on responsive user interfaces and web application development.",
    skills: ["React", "JavaScript", "Responsive Design", "Component Architecture", "Git"],
  },
  {
    id: "masters",
    number: "03",
    stage: "MASTER'S PROGRAM",
    kanji: "学",
    kanjiLabel: "POSTGRAD",
    title: "MCA – Cybersecurity",
    subtitle: "GM University",
    institution: "GM University",
    duration: "2025 – Present",
    status: "Ongoing",
    isCompleted: false,
    description:
      "Pursuing postgraduate studies focused on cybersecurity, computing systems, network security and secure software development.",
    skills: ["Cybersecurity", "Network Architecture", "Database Systems", "Software Engineering"],
  },
  {
    id: "specialization",
    number: "04",
    stage: "CYBERSECURITY SPECIALIZATION",
    kanji: "継",
    kanjiLabel: "CURRENT",
    title: "Cybersecurity",
    subtitle: "Security Analysis · Threat Detection · SOC",
    duration: "2025 – Present",
    status: "Ongoing",
    isCompleted: false,
    description:
      "Developing practical cybersecurity skills through network traffic analysis, packet inspection, SOC fundamentals and defensive security labs.",
    skills: ["Wireshark", "TShark", "TCP/IP", "DNS Analysis", "SOC Fundamentals"],
  },
];

export const SUMMARY_INDICATORS = [
  { count: "1", label: "Degree", iconType: "graduation" },
  { count: "1", label: "MCA", iconType: "layers" },
  { count: "1", label: "Internship", iconType: "code" },
  { count: "2+", label: "Active Focus", iconType: "shield" },
];
