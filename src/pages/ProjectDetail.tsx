// src/pages/ProjectDetail.tsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  demoLink: string;
  githubLink: string;
}

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Di sini Anda bisa mengambil data dari API atau menggunakan data statis
    // Contoh data statis:
    const dummyProjects: Project[] = [
      {
        id: 1,
        title: "Project 1",
        description: "Deskripsi singkat project 1",
        longDescription: "Deskripsi lengkap project 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "/project1.jpg",
        technologies: ["React", "TypeScript", "Tailwind CSS"],
        demoLink: "https://demo1.example.com",
        githubLink: "https://github.com/yourusername/project1"
      },
      {
        id: 2,
        title: "Project 2",
        description: "Deskripsi singkat project 2",
        longDescription: "Deskripsi lengkap project 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "/project2.jpg",
        technologies: ["Next.js", "Firebase", "Tailwind CSS"],
        demoLink: "https://demo2.example.com",
        githubLink: "https://github.com/yourusername/project2"
      },
      {
        id: 3,
        title: "Project 3",
        description: "Deskripsi singkat project 3",
        longDescription: "Deskripsi lengkap project 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "/project3.jpg",
        technologies: ["React", "Node.js", "MongoDB"],
        demoLink: "https://demo3.example.com",
        githubLink: "https://github.com/yourusername/project3"
      }
    ];

    const projectData = dummyProjects.find(p => p.id === parseInt(id || '0'));
    setProject(projectData || null);
    setLoading(false);
  }, [id]);

  if (loading) {
    return <div className="container mx-auto px-6 py-20">Loading...</div>;
  }

  if (!project) {
    return (
      <div className="container mx-auto px-6 py-20">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
          <p className="mb-6">The project you're looking for doesn't exist.</p>
          <Link to="/" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-20">
      <Link to="/" className="text-blue-600 hover:underline mb-8 inline-block">
        ← Back to Projects
      </Link>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="h-64 bg-gray-300 w-full"></div>
        
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <p className="text-gray-700">{project.longDescription}</p>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Technologies</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span key={index} className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href={project.demoLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Live Demo
            </a>
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-900"
            >
              GitHub Repository
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;