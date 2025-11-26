import { motion } from "motion/react";
import { Award, ExternalLink } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { certifications } from "../data/certifications";
import certImage1 from "figma:asset/00fda565303e3df51b9b74534fb9e4242e937d9e.png";
import certImage2 from "figma:asset/3be81454c081b93b4779dc493f54fbaceb83f393.png";

const certImageMap: Record<string, string> = {
  "figma:asset/00fda565303e3df51b9b74534fb9e4242e937d9e.png":
    certImage1,
  "figma:asset/3be81454c081b93b4779dc493f54fbaceb83f393.png":
    certImage2,
};

export function Certifications() {
  return (
    <section
      id="certifications"
      className="py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-gray-900 dark:text-white mb-4">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Professional certifications and courses completed to
            enhance my skills
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col hover:shadow-xl transition-shadow bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
                {cert.image && (
                  <div className="relative h-64 w-full overflow-hidden rounded-t-lg">
                    <img
                      src={
                        certImageMap[cert.image] || cert.image
                      }
                      alt={cert.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                      <Award
                        className="text-blue-600 dark:text-blue-400"
                        size={24}
                      />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-gray-900 dark:text-white text-lg">
                        {cert.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 dark:text-gray-400 mt-1">
                        {cert.issuer}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="flex-grow">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Completed: {cert.date}
                  </p>
                </CardContent>

                {cert.verifyLink && (
                  <CardFooter>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-gray-800"
                      asChild
                    >
                      <a
                        href={cert.verifyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <ExternalLink size={16} />
                        Verify Certificate
                      </a>
                    </Button>
                  </CardFooter>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}