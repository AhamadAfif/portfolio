export interface Skill {
  name: string;
  category: string;
}

export const skillCategories = [
  {
    category: "Programming Languages",
    skills: ["Python", "JavaScript", "R", "SQL", "HTML", "CSS"]
  },
  {
    category: "Frameworks & Libraries",
    skills: ["Flask", "React", "Leaflet"]
  },
  {
    category: "Data & ML",
    skills: ["Data Visualization", "Machine Learning"]
  },
  {
    category: "Tools & Others",
    skills: ["Git", "Figma", "VS Code", "R Studio", "API Integration", "SQLite"]
  }
];
