// Centralized raw data source — build_plan.md Section 3
// All UI components MUST pull from this file. Do not hardcode data in components.

export const profileData = {
  name: "Rayhan Hanun",
  role: "Fullstack Web Developer | Technology Innovation",
  heroTypingSequence: [
    "> ACCESS GRANTED: RAYHAN HANUN // FULL-STACK ENGINEER",
    3000,
    "> INITIALIZING PORTFOLIO MODULES...",
    2000,
    "> SYSTEMS ANALYSIS | AI APPLICATIONS | IoT/ROBOTICS",
    3000,
  ] as const,
} as const;

export const academicData = [
  {
    institution: "University of AMIKOM Yogyakarta",
    degree: "Bachelor of Information System",
    period: "2024 - Present",
  },
  {
    institution: "Vocational High School of SMTI Yogyakarta",
    degree: "Mechatronics Engineering",
    period: "2018 - 2022",
  },
] as const;

export const experienceData = [
  {
    title: "Business Development",
    company: "Arthanta Finance",
    duration: "2026 Jun - Present",
    desc: "Analyze market trends through comprehensive research, identify growth opportunities, and implement strategic initiatives to expand the company's reach.",
    accent: "green" as const,
  },
  {
    title: "Chief Technology Officer",
    company: "BINA BUMI",
    duration: "2025 Apr - 2025 Oct",
    desc: "Spearheaded technical direction and product development. Engineered IoT-based hardware architectures and scalable software solutions to drive environmental sustainability.",
    accent: "pink" as const,
  },
  {
    title: "Logistics Operator",
    company: "PT. Astra Daihatsu Motor",
    duration: "2021 Aug - 2024 Jan",
    desc: "Managed end-to-end inventory flow and industrial material operations. Optimized warehouse logistics to ensure seamless supply chain efficiency and production readiness.",
    accent: "yellow" as const,
  },
  {
    title: "Mechanical Technician",
    company: "Solo Mechatronic Indonesia",
    duration: "2020 Nov - 2021 May",
    desc: "Provided comprehensive technical support and complex industrial troubleshooting. Maintained mechanical systems to ensure optimal operational uptime and strict safety compliance.",
    accent: "green" as const,
  },
] as const;

export const techStack = [
  "Laravel",
  "React",
  "Next.js",
  "JavaScript",
  "Tailwind CSS",
  "MySQL",
  "Python",
  "Arduino",
] as const;

export const focusAreas = [
  "Full-Stack Development",
  "Digital Transformation",
  "Systems Analysis",
  "IoT / Robotics",
] as const;

export const softSkillsData = [
  "Communication",
  "Leadership",
  "Problem Solving",
  "Adaptability",
  "Critical Thinking",
  "Time Management",
] as const;

export const projectsData = [
  {
    title: "BINA BUMI SIGMA Plastic Gathering Machine",
    desc: "Led technical direction and product concept development as CTO. Engineered an IoT-based robotic machine focused on practical environmental solutions, handling end-to-end hardware architecture and system planning.",
    tags: ["IoT", "Robotics", "Systems Analysis"],
    image: "/projects/sigma.png",
    accent: "green" as const,
    link: "https://binabumi.rkhyg.my.id/",
  },
  {
    title: "Rent & Go Car Rental Platform",
    desc: "Developed a comprehensive full-stack commercial platform for premium car rentals. Engineered a scalable architecture to handle dynamic fleet catalogs, transparent pricing systems, and streamlined booking workflows.",
    tags: ["React", "Laravel", "MySQL", "Tailwind CSS"],
    image: "/projects/rentngo.png",
    accent: "pink" as const,
    link: "https://rentngo.my.id",
  }
] as const;

export const achievementsData = [
  {
    title: "Runner-up NextGen Sciences Techpreneur Battle 2025",
    issuer: "NextGen Sciences Techpreneur Battle 2025",
    desc: "Contributed to technical concept development and pitched a technology-based solution to the judging panel.",
    image: "/achievements/nextgen-2025.jpg",
    accent: "green" as const,
  },
  {
    title: "Merit Winner Amikom ICT Award (AMICTA) 2025",
    issuer: "AMICTA 2025",
    desc: "Awarded as Merit Winner in the Digital Business category for developing an innovative digital business solution.",
    image: "/achievements/amicta-2025.jpeg",
    accent: "pink" as const,
  },
  {
    title: "3rd Place Amikom ICT Award (AMICTA) 2026",
    issuer: "AMICTA 2026",
    desc: "Secured 3rd place in the Information System Application category for developing an innovative platform.",
    image: "/achievements/amicta-2026-final.jpg",
    accent: "yellow" as const,
  },
] as const;
