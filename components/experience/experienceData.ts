export interface Milestone {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  duration: string;
  status: "Completed ✓" | "Ongoing";
  isCompleted: boolean;
}

export const MILESTONES: Milestone[] = [
  {
    id: "cybersecurity",
    category: "CYBERSECURITY SPECIALIZATION",
    title: "Cybersecurity",
    subtitle: "Security Analysis · Threat Detection · SOC",
    duration: "2025 – Present",
    status: "Ongoing",
    isCompleted: false,
  },
  {
    id: "masters",
    category: "MASTER'S PROGRAM",
    title: "MCA – Computer Applications",
    subtitle: "GM University",
    duration: "2025 – Present",
    status: "Ongoing",
    isCompleted: false,
  },
  {
    id: "internship",
    category: "INDUSTRY EXPERIENCE",
    title: "Frontend Development Internship",
    subtitle: "Building responsive web applications & UI systems",
    duration: "2026",
    status: "Completed ✓",
    isCompleted: true,
  },
  {
    id: "undergrad",
    category: "UNDERGRADUATE DEGREE",
    title: "BSc – Computer Science",
    subtitle: "Sindhi College, Bengaluru",
    duration: "2022 – 2025",
    status: "Completed ✓",
    isCompleted: true,
  },
];

export const SUMMARY_INDICATORS = [
  { count: "1", label: "Degree", iconType: "graduation" },
  { count: "1", label: "MCA", iconType: "layers" },
  { count: "1", label: "Internship", iconType: "code" },
  { count: "2+", label: "Active Focus", iconType: "shield" },
];
