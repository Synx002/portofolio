import React from "react";

interface ExperienceItem {
  company: string;
  position: string;
  description: string;
  location: string;
}

const experiences: ExperienceItem[] = [
  {
    company: "My Tax Indonesia",
    position: "IT Staff",
    description: "I manage internal website maintenance, ensuring functionality, security, and compliance with the latest technologies. I develop new features to enhance usability, troubleshoot and fix bugs to maintain optimal performance, and optimize site speed and efficiency for a better user experience.",
    location: "Cikarang - Jawa Barat",
  },
  {
    company: "Tekadverse",
    position: "UI Engineer",
    description: "I designed and optimized landing pages to increase conversion rates through strategic content placement and effective CTAs. I enhanced user experience with intuitive, responsive designs using HTML, CSS, and JavaScript, incorporating Bootstrap / Tailwind for consistency. I also improved page performance, including load times and SEO, while analyzing metrics to refine and enhance effectiveness continuously.",
    location: "Surakarta - Jawa Tengah",
  },
];

const Experience: React.FC = () => {
  return (
    <section className="container mx-auto px-6">
      <h1 className="text-3xl font-normal text-center mb-8">Experience</h1>
      <div className="flex flex-col gap-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-4 border-t pt-4"
          >
            <div className="flex flex-col md:flex-row justify-between md:basis-1/2">
              <p className="text-lg font-semibold">{exp.company}</p>
              <p className="text-gray-600">{exp.position}</p>
            </div>
            <div className="flex flex-col md:flex-row justify-between md:basis-1/2">
              <p className="max-w-md text-gray-700">{exp.description}</p>
              <p className="text-sm text-gray-500 md:text-right">
                {exp.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
