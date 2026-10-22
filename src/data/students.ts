type Student = {
  slug: string;
  name: string;
  role: string;
  photo: string;
  sampleContent?: boolean;
  github?: string;
  linkedin?: string;
  bio: string;
  skills: string[];
  projects: { name: string; desc: string }[];
};

export const students: Student[] = [
  {
    slug: "abhishek",
    name: "Abhishek Chandiwale",
    role: "Forward Deployed Engineer",
    photo: "/students/abhishek.jpg",
    github: "https://github.com/VisionCoders-S",
    linkedin: "https://www.linkedin.com/in/abhishekc96k/",
    bio: "Abhishek is an aspiring Forward Deployed Engineer passionate about cloud architecture, automation and intelligent systems.",
    skills: ["AWS", "Docker", "Terraform", "Kubernetes", "Python"],
    projects: [
      { name: "NebulaOps", desc: "Cloud automation platform" },
      { name: "AtlasAI", desc: "Enterprise AI assistant" },
    ],
  },
  {
    slug: "tejas",
    name: "Tejas Bhoskar",
    role: "React Expert & Web Developer",
    photo: "/students/tejas.jpg",
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/in/tejas-bhoskar-b611b3372/",
    bio: "Tejas focuses on modern React applications and user experiences.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind", "Node.js"],
    projects: [
      { name: "PixelForge", desc: "Design system builder" },
      { name: "FluxCommerce", desc: "Modern ecommerce platform" },
    ],
  },
  {
    slug: "sarthak-dhokale",
    name: "Sarthak Dhokale",
    role: "Full-Stack Developer & Product Builder",
    photo: "/students/sarthak-dhokale.jpg",
    bio: "Sarthak enjoys building useful web experiences, from polished interfaces to the APIs and data that power them. He is curious about turning everyday challenges into simple, practical products.",
    skills: ["JavaScript", "React", "Node.js", "Express", "MongoDB"],
    projects: [
      { name: "CampusConnect", desc: "A community hub for sharing campus events and student resources" },
      { name: "GreenTrack", desc: "A dashboard for tracking everyday sustainability goals" },
    ],
  },
  {
    slug: "neel-bihani",
    name: "Neel Bihani",
    role: "Software Developer & AI Enthusiast",
    photo: "/students/neel-bihani.jpg",
    sampleContent: true,
    linkedin: "https://www.linkedin.com/in/neel-bihani-933306316/",
    bio: "Neel enjoys exploring how thoughtful software and practical AI can make everyday tasks easier. He likes taking an idea from a rough sketch to a useful, polished web experience.",
    skills: ["Python", "React", "TypeScript", "Node.js", "Machine Learning"],
    projects: [
      { name: "StudyFlow", desc: "A study planner concept for organizing goals, notes, and revision sessions" },
      { name: "InsightLens", desc: "An AI-powered dashboard concept for turning datasets into clear summaries" },
    ],
  },
];
