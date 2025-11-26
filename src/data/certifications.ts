export interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  verifyLink?: string;
  image?: string;
}

export const certifications: Certification[] = [
  {
    id: 1,
    title: "Getting Started with Data Visualization in R",
    issuer: "Johns Hopkins University via Coursera",
    date: "Oct 12, 2025",
    verifyLink: "https://coursera.org/verify/U8KRXKLZA1WK",
    image: "figma:asset/00fda565303e3df51b9b74534fb9e4242e937d9e.png"
  },
  {
    id: 2,
    title: "Data Science with Python",
    issuer: "ArIES IIT Roorkee via Coincent",
    date: "May 18, 2023",
    verifyLink: "https://coincent.ai/verify-certificate",
    image: "figma:asset/3be81454c081b93b4779dc493f54fbaceb83f393.png"
  }
];
