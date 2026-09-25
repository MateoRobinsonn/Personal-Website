// Single source of truth for the site's content, kept in sync with
// public/Mateo-Robinson-Resume.pdf. Update here and every section re-renders.

export const profile = {
  name: 'Mateo Robinson',
  role: 'Software Engineer',
  tagline: 'CS student at the University of Washington building full-stack products end to end.',
  location: 'Seattle, WA',
  email: 'Mateor7@uw.edu',
  github: 'https://github.com/MateoRobinsonn',
  linkedin: 'https://linkedin.com/in/mateo-robinson',
  resumeUrl: `${import.meta.env.BASE_URL}Mateo-Robinson-Resume.pdf`,
}

export type Experience = {
  role: string
  org: string
  location: string
  period: string
  bullets: string[]
}

export const experience: Experience[] = [
  {
    role: 'Software Engineering Project',
    org: 'Perfect Pair Nonprofit — Spark Program',
    location: 'Remote',
    period: 'Aug 2026 – Sept 2026',
    bullets: [
      'Designed and implemented an automated document ingestion pipeline that detects new and modified files from Google Drive and prepares them for downstream retrieval and chatbot systems.',
      'Built file normalization workflows for Google Docs, Sheets, Slides, and PDFs, converting heterogeneous document formats into a standardized Markdown representation.',
      'Implemented Cloudflare R2 object storage and D1 metadata persistence for document contents, sync status, timestamps, source metadata, and processing failures.',
      'Designed a cron-triggered, queue-based architecture that processes documents independently, reducing per-invocation work and operating within Cloudflare Free plan CPU constraints.',
      'Implemented idempotent synchronization using Drive file IDs, deterministic R2 keys, and D1 database upserts to prevent duplicate records during retries and repeated processing.',
      'Added failure tracking and error persistence so unsuccessful document syncs could be surfaced, diagnosed, and retried instead of silently dropped.',
    ],
  },
  {
    role: 'Student Technician',
    org: 'University of Washington',
    location: 'Seattle, WA',
    period: 'Oct 2024 – Present',
    bullets: [
      'Diagnose and resolve hardware, software, audiovisual, and connectivity issues across production classroom systems used by students and faculty.',
      'Troubleshoot technical failures under time constraints, minimizing downtime during active classes and university events.',
      'Maintain and test computers, displays, projectors, audio systems, and supporting classroom infrastructure.',
      'Collaborate with technicians across campus to coordinate maintenance workflows, equipment logistics, and service requests.',
      'Assist with onboarding and training new technicians on troubleshooting procedures and technical systems.',
    ],
  },
]

export type Project = {
  name: string
  period: string
  stack: string[]
  description: string
  bullets: string[]
  links?: { label: string; href: string }[]
}

export const projects: Project[] = [
  {
    name: 'Intimo Y Casual',
    period: 'June 2025 – Present',
    stack: ['TypeScript', 'Next.js', 'Firebase', 'Tailwind CSS', 'WhatsApp API'],
    description:
      'A bilingual e-commerce platform used by real customers, consolidating product browsing, accounts, and ordering into a single storefront.',
    bullets: [
      'Developed and deployed a bilingual e-commerce platform used by real customers, consolidating product browsing, customer accounts, and ordering into a single storefront.',
      'Implemented Firebase authentication, authorization, and data storage to securely manage users, products, and customer orders.',
      'Designed and enforced Firebase security rules to protect customer and application data in production.',
      'Integrated a WhatsApp-based ordering workflow to streamline customer communication and reduce manual order coordination.',
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/MateoRobinsonn' }],
  },
  {
    name: 'GlobeGram',
    period: 'Jan 2025 – Mar 2025',
    stack: ['TypeScript', 'React Native', 'NestJS', 'PostgreSQL', 'Google Maps API', 'AI'],
    description:
      'A multi-user travel app with AI-powered itinerary recommendations and real-time, location-aware trip visualization.',
    bullets: [
      'Designed and implemented backend services and REST APIs supporting itinerary creation and management for a multi-user travel application.',
      'Developed AI-powered recommendation logic using user location, budget, and travel plans to generate personalized travel suggestions.',
      'Integrated Google Maps APIs to provide real-time, location-aware itinerary visualization.',
      'Automated testing and deployment workflows using GitHub Actions to support reliable and repeatable releases.',
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/hruif/TravelPartner' }],
  },
  {
    name: 'Flights',
    period: 'Mar 2024 – June 2024',
    stack: ['Java', 'Azure', 'SQL Server', 'PostgreSQL'],
    description:
      'A database-backed flight search and booking backend focused on query performance and maintainable OO design.',
    bullets: [
      'Designed and implemented backend services supporting flight search, filtering, and database-backed application workflows.',
      'Optimized database queries and indexing strategies, improving search performance by 40%.',
      'Applied object-oriented design principles to build a maintainable and extensible backend architecture.',
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/MateoRobinsonn' }],
  },
]

export const skills: { category: string; items: string[] }[] = [
  { category: 'Languages', items: ['Java', 'Python', 'C', 'C++', 'TypeScript', 'JavaScript', 'Swift', 'Dart', 'SQL'] },
  { category: 'Backend / Systems', items: ['Node.js', 'NestJS', 'REST APIs', 'PostgreSQL', 'SQL Server', 'Linux'] },
  { category: 'Frontend / Mobile', items: ['React', 'Next.js', 'React Native', 'SwiftUI', 'Flutter', 'Tailwind CSS'] },
  { category: 'Cloud / DevOps', items: ['Cloudflare Workers', 'R2', 'D1', 'Firebase', 'Azure', 'AWS', 'GitHub Actions', 'CI/CD'] },
  { category: 'APIs & Integrations', items: ['Google Maps API', 'Google Drive API', 'WhatsApp API'] },
  { category: 'Tools', items: ['Git', 'Xcode', 'GDB'] },
]

export const coursework = [
  'Data Structures & Algorithms',
  'Systems Programming',
  'Artificial Intelligence',
  'Computer Security',
  'Software Engineering',
]

export type EducationEntry = {
  school: string
  location: string
  degree: string
  period: string
}

export const education: EducationEntry[] = [
  {
    school: 'University of Washington',
    location: 'Seattle, WA',
    degree: "Bachelor of Science, Computer Science — Dean's List",
    period: 'Aug 2023 – June 2027',
  },
  {
    school: 'Pierce College Fort Steilacoom',
    location: 'Lakewood, WA',
    degree: "Associate of Science, General Transfer — Dean's List",
    period: 'Sept 2021 – June 2023',
  },
]
