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
    role: 'Software Engineer',
    org: 'Perfect Pair, Spark Program',
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
      'Troubleshoot technical failures under time constraints, identifying root causes and restoring classroom technology while minimizing downtime.',
      'Maintain, test, and support computers, displays, projectors, audio equipment, and related campus technology infrastructure.',
      'Collaborate with technicians on campus-wide maintenance workflows and equipment logistics while assisting with onboarding and training new team members.',
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
      'A bilingual e-commerce platform used by real customers to browse products, manage accounts, and place orders.',
    bullets: [
      'Developed and deployed a bilingual e-commerce platform used by real customers to browse products, manage accounts, and place orders.',
      'Implemented Firebase authentication, authorization, data storage, and security rules to securely manage users and customer orders.',
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
      'Designed backend services and REST APIs supporting itinerary creation and management for a multi-user travel application.',
      'Developed AI-powered recommendation logic using user location, budget, and travel plans to generate personalized suggestions.',
      'Integrated Google Maps APIs for location-aware itinerary visualization and GitHub Actions for automated testing and deployment.',
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
      'Applied object-oriented design principles to develop a maintainable backend architecture.',
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/MateoRobinsonn' }],
  },
]

export const skills: { category: string; items: string[] }[] = [
  { category: 'Languages', items: ['Java', 'Python', 'C', 'C++', 'TypeScript', 'JavaScript', 'Swift', 'Dart', 'SQL'] },
  { category: 'Frameworks', items: ['React', 'Next.js', 'React Native', 'SwiftUI', 'Flutter', 'Node.js', 'NestJS', 'Tailwind CSS'] },
  { category: 'Data / Cloud', items: ['PostgreSQL', 'SQL Server', 'Firebase', 'Cloudflare Workers', 'R2', 'D1', 'Azure', 'AWS'] },
  {
    category: 'Tools',
    items: ['Git', 'Linux', 'REST APIs', 'GitHub Actions', 'CI/CD', 'Google Drive API', 'Google Maps API', 'WhatsApp API', 'Xcode', 'GDB'],
  },
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
