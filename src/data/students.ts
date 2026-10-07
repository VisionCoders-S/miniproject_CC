type Student = {
  slug: string;
  name: string;
  role: string;
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
    bio: "Sarthak enjoys building useful web experiences, from polished interfaces to the APIs and data that power them. He is curious about turning everyday challenges into simple, practical products.",
    skills: ["JavaScript", "React", "Node.js", "Express", "MongoDB"],
    projects: [
      { name: "CampusConnect", desc: "A community hub for sharing campus events and student resources" },
      { name: "GreenTrack", desc: "A dashboard for tracking everyday sustainability goals" },
    ],
  },
];
