export const SKILLS_DATA = [
    {
        cat: "FRONTEND", color: "#a855f7", topBg: "linear-gradient(90deg,#7c3aed,#a855f7)",
        items: [{ name: "React / Next.js", pct: 95 }, { name: "TypeScript", pct: 91 }, { name: "CSS / Tailwind", pct: 93 }, { name: "Framer Motion", pct: 80 }],
        fillBg: "linear-gradient(90deg,#7c3aed,#a855f7)", glow: "rgba(168,85,247,0.4)"
    },
    {
        cat: "BACKEND", color: "#ec4899", topBg: "linear-gradient(90deg,#ec4899,#fb7185)",
        items: [{ name: "Node.js / Express", pct: 90 }, { name: "PostgreSQL / Prisma", pct: 86 }, { name: "GraphQL / tRPC", pct: 82 }, { name: "Python / FastAPI", pct: 77 }],
        fillBg: "linear-gradient(90deg,#ec4899,#fb7185)", glow: "rgba(236,72,153,0.4)"
    },
    {
        cat: "CLOUD & DEVOPS", color: "#f472b6", topBg: "linear-gradient(90deg,#7c3aed,#ec4899)",
        items: [{ name: "AWS / GCP / Vercel", pct: 82 }, { name: "Docker / Kubernetes", pct: 80 }, { name: "CI/CD Pipelines", pct: 88 }, { name: "Redis / BullMQ", pct: 78 }],
        fillBg: "linear-gradient(90deg,#7c3aed,#ec4899)", glow: "rgba(168,85,247,0.3)"
    },
];

export const PROJECTS = [
    { name: "LunaAI", desc: "AI writing assistant with context-aware suggestions, real-time collaboration, and a custom markdown editor.", tags: ["Next.js", "OpenAI", "Supabase", "tRPC"], emoji: "🌙", bg: "linear-gradient(135deg,rgba(124,58,237,0.18),rgba(236,72,153,0.12))" },
    { name: "Vortex Store", desc: "High-performance e-commerce platform with 3D product viewer, one-click checkout, and AI recommendations.", tags: ["React", "Three.js", "Stripe", "PostgreSQL"], emoji: "🌀", bg: "linear-gradient(135deg,rgba(236,72,153,0.18),rgba(251,113,133,0.12))" },
    { name: "PulseBoard", desc: "Real-time analytics dashboard with live WebSocket feeds, customizable widgets, and easy team sharing.", tags: ["Vue 3", "WebSocket", "D3.js", "Redis"], emoji: "📊", bg: "linear-gradient(135deg,rgba(168,85,247,0.15),rgba(124,58,237,0.18))" },
    { name: "Codex Collab", desc: "Browser-based collaborative IDE with video, live code execution, and an AI pair-programming assistant.", tags: ["React", "WebRTC", "Monaco", "Docker"], emoji: "🤝", bg: "linear-gradient(135deg,rgba(251,113,133,0.14),rgba(236,72,153,0.18))" },
    { name: "Glacier CMS", desc: "Headless CMS with visual block editor, multi-locale support, and auto-generated REST + GraphQL APIs.", tags: ["TypeScript", "GraphQL", "Postgres", "S3"], emoji: "🏔️", bg: "linear-gradient(135deg,rgba(124,58,237,0.18),rgba(168,85,247,0.14))" },
    { name: "NomadMap", desc: "Community platform for remote workers — city guides, co-working spaces, and visa info in one place.", tags: ["Next.js", "Mapbox", "Prisma", "Algolia"], emoji: "🗺️", bg: "linear-gradient(135deg,rgba(236,72,153,0.14),rgba(168,85,247,0.16))" },
];

export const EXP = [
    { period: "2023 — PRESENT", role: "Senior Full Stack Engineer", org: "Luminary Labs, San Francisco", desc: "Lead a team of 6 engineers building a B2B SaaS platform. Architected a microservices migration that cut API latency by 65% and increased deployment frequency 4×.", badges: ["React", "Node.js", "AWS", "Kubernetes", "PostgreSQL"] },
    { period: "2021 — 2023", role: "Full Stack Developer", org: "Axiom Software, New York", desc: "Built and scaled customer-facing features for a fintech startup with 200K+ users. Owned the payment processing pipeline and real-time notification system.", badges: ["Next.js", "TypeScript", "Stripe", "Redis", "GraphQL"] },
    { period: "2019 — 2021", role: "Frontend Developer", org: "Pixel & Co. Agency, Remote", desc: "Delivered 20+ client projects across e-commerce, media, and SaaS. Specialised in performant React SPAs and interactive data visualisations.", badges: ["React", "Vue.js", "D3.js", "Figma", "GSAP"] },
];

export const EDU = [
    { period: "2015 — 2019", role: "B.Sc. Computer Science", org: "University of California, Berkeley", desc: "Graduated with Honours. Thesis on distributed systems and consensus algorithms. Teaching Assistant for Data Structures & Algorithms for two years.", badges: ["Algorithms", "Systems Design", "Machine Learning", "Distributed Computing"] },
    { period: "2022", role: "AWS Solutions Architect — Associate", org: "Amazon Web Services", desc: "Certified in designing cost-efficient, fault-tolerant, and scalable distributed systems on AWS.", badges: ["Cloud Architecture", "IAM", "EC2", "S3", "RDS"] },
    { period: "2023", role: "Advanced TypeScript & System Design", org: "Frontend Masters", desc: "Completed advanced curriculum covering type-level programming, design patterns, and scalable frontend architecture.", badges: ["TypeScript", "Design Patterns", "Performance", "Testing"] },
];