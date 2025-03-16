import React from "react";
import { Link } from "react-router-dom";
import tekadImage from "../assets/tekad.png";
import kaboImage from "../assets/kabo.png";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Tekadverse",
    category: "Landing Page",
    image: tekadImage,
  },
  {
    id: 2,
    title: "Kabo",
    category: "Landing Page",
    image: kaboImage,
  },
];

const Projects: React.FC = () => {
  return (
    <section className="container mx-auto px-6 py-12">
      {/* Header */}
      <div className="max-w-2xl mx-auto text-center mb-12">
        <p className="text-lg">
          Katrina Romulo is a multidisciplinary brand designer. She loves
          roasted vegetables, the Bay Area, and gouache painting (in that exact
          order).
        </p>
      </div>

      {/* Project List */}
      <div className="space-y-12">
        {projects.map((project, index) => (
          <div key={project.id} className="grid grid-cols-12 gap-4">
            {/* Numbering */}
            <div className="col-span-6 text-lg font-semibold">
              {String(index + 1).padStart(2, "0")}.
            </div>

            {/* Image & Details */}
            <div className="col-span-6">
                <Link to={`/project/${project.id}`}>
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-100 rounded-lg object-cover"
                />
                </Link>
              <p className="text-sm text-gray-500 mt-2">{project.category}</p>
              <h3 className="text-lg font-bold">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
