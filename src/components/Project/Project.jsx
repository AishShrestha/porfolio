import React from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Gym Tracker",
    description: "Gym Tracker is a web application designed to help users track and optimize their fitness journeys. It allows users to log workouts, monitor progress, create personalized routines, and manage weight, all within a secure and user-friendly platform.",
    link: "https://github.com/AishShrestha/Gym-tracker-",
    technologies: [
      {
        name: "Node.js",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        alt: "Node.js"
      },
      {
        name: "Express.js",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg",
        alt: "Express.js"
      },
      {
        name: "PostgreSQL",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        alt: "PostgreSQL"
      },
      {
        name: "Prisma ORM",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
        alt: "Prisma"
      },
      {
        name: "JWT",
        src: "https://imgs.search.brave.com/f7LHyewTi-QIq6Mg3SOV2MCdQhGXs3X53hjzAPe05eU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9qd3Qu/aW8vaW1nL3BpY19s/b2dvLnN2Zw",
        alt: "JWT"
      },
      {
        name: "Git",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        alt: "Git"
      },
      {
        name: "GitHub",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        alt: "GitHub"
      }
    ]
  },
  {
    title: "Book Review System",
    description: "Book Review System is a web application designed to help users review and rate books. It allows users to log reviews, monitor ratings, create personalized book lists, and manage their reading habits, all within a secure and user-friendly platform.",
    link: "https://github.com/AishShrestha/book-review",
    technologies: [
      {
        name: "NestJS",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",
        alt: "NestJS"
      },
      {
        name: "PostgreSQL",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        alt: "PostgreSQL"
      },
      {
        name: "JWT",
        src: "https://imgs.search.brave.com/f7LHyewTi-QIq6Mg3SOV2MCdQhGXs3X53hjzAPe05eU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9qd3Qu/aW8vaW1nL3BpY19s/b2dvLnN2Zw",
        alt: "JWT"
      },
      {
        name: "Google OAuth",
        src: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Google-favicon-2015.png",
        alt: "Google OAuth"
      },
      {
        name: "Facebook OAuth",
        src: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
        alt: "Facebook OAuth"
      },
      {
        name: "Swagger",
        src: "https://imgs.search.brave.com/mO3-T7PMbvhHOWcyYxJhiJG9m9ldeWZn3ZAiZ4YP2lU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9h/L2FiL1N3YWdnZXIt/bG9nby5wbmc",
        alt: "Swagger"
      },
      {
        name: "Docker",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        alt: "Docker"
      },
      {
        name: "Git",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        alt: "Git"
      },
      {
        name: "GitHub",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        alt: "GitHub"
      }
    ]
  }
];

function Project() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center min-h-screen px-5 py-5 gap-8">
      {/* Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-4xl font-bold text-blue-950 mb-5">Our Projects</h2>
      </div>

      <div className="w-full md:w-8/12 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Link
            key={index}
            to={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className=" bg-white rounded-lg border border-gray-300 shadow-xl p-6 sm:p-10 hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2"
          >
            <h3 className="text-2xl font-bold text-blue-800 mb-4">{project.title}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.technologies.map((tech, techIndex) => (
                <img
                  key={techIndex}
                  src={tech.src}
                  alt={tech.alt}
                  title={tech.name}
                  className="w-10 h-8 bg-gray-300 rounded-md hover:scale-110 transition-transform duration-300"
                />
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Project;
