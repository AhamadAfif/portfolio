export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  githubLink?: string;
  liveLink?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Digital Beedi Branch",
    description: "Enhancing Efficiency through Digitalization for Beedi Workers. A comprehensive system built to streamline operations and improve workflow management for beedi manufacturing branches.",
    techStack: ["Flask", "SQLite", "Python", "HTML", "CSS"],
    githubLink: "https://github.com/AhamadAfif",
    liveLink: "https://digitalbeedibranchvercel.vercel.app/",
    featured: true
  },
  {
    id: 2,
    title: "Car Rental System (Auto Rent)",
    description: "A comprehensive car rental management system that streamlines vehicle booking, availability tracking, and customer management. Features include real-time inventory management, booking scheduling, and user-friendly interface for seamless rental operations.",
    techStack: ["Python", "SQL", "Flask", "JavaScript"],
    githubLink: "https://github.com/AhamadAfif/AutoRent",
    featured: true
  },
  {
    id: 3,
    title: "India's GI-Tagged Products Visual Map",
    description: "An interactive geographical visualization showcasing India's Geographical Indication (GI) tagged products. Features an interactive map powered by Leaflet for exploring regional specialties.",
    techStack: ["Flask", "SQLite", "Leaflet", "JavaScript", "API Integration"],
    githubLink: "https://github.com/AhamadAfif",
    liveLink: "#",
    featured: true
  }
];