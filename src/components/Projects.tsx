// src/components/Projects.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Project 1",
      description: "Deskripsi singkat tentang project 1 dan teknologi yang digunakan.",
      image: "project1.jpg",
      tags: ["React", "TypeScript", "Tailwind"]
    },
    {
      id: 2,
      title: "Project 2",
      description: "Deskripsi singkat tentang project 2 dan teknologi yang digunakan.",
      image: "project2.jpg",
      tags: ["Next.js", "Firebase", "Tailwind"]
    },
    {
      id: 3,
      title: "Project 3",
      description: "Deskripsi singkat tentang project 3 dan teknologi yang digunakan.",
      image: "project3.jpg",
      tags: ["React", "Node.js", "MongoDB"]
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-300"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="bg-gray-200 px-2 py-1 rounded text-xs">{tag}</span>
                  ))}
                </div>
                <div className="mt-4">
                  <Link to={`/project/${project.id}`} className="text-blue-600 hover:underline">
                    Lihat Detail
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;