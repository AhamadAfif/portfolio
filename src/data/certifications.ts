import degreeCertificate from "../assets/degree-certificate.webp";
import rDataViz from "../assets/cert-r-data-visualization.webp";
import dataSciencePython from "../assets/cert-data-science-python.webp";

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
    id: 0,
    title: "Bachelor of Engineering – Computer Science & Engineering (Data Science)",
    issuer: "Visvesvaraya Technological University, Belagavi",
    date: "October 2026",
    image: degreeCertificate
  },
  {
    id: 1,
    title: "Getting Started with Data Visualization in R",
    issuer: "Johns Hopkins University via Coursera",
    date: "Oct 12, 2025",
    verifyLink: "https://coursera.org/verify/U8KRXKLZA1WK",
    image: rDataViz
  },
  {
    id: 2,
    title: "Data Science with Python",
    issuer: "ArIES IIT Roorkee via Coincent",
    date: "May 18, 2023",
    verifyLink: "https://coincent.ai/verify-certificate",
    image: dataSciencePython
  }
];
