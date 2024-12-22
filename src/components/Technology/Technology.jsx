import React, { useState } from "react";

const Technology = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Front-End", "Back-End", "Database", "Tools"];

  const technologyImages = {
    "All": [
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", alt: "HTML" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", alt: "CSS" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", alt: "TypeScript" },
      { src: "https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png", alt: "Tailwind CSS" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", alt: "Node.js" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg", alt: "Express.js" },
      {src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",alt:"NestJS"},
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", alt: "PostgreSQL" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg", alt: "MySQL" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg", alt: "Prisma" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", alt: "Docker" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", alt: "Git" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", alt: "GitHub" },
      { src: "https://imgs.search.brave.com/mO3-T7PMbvhHOWcyYxJhiJG9m9ldeWZn3ZAiZ4YP2lU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9h/L2FiL1N3YWdnZXIt/bG9nby5wbmc", alt: "Swagger" },

    ],
    "Front-End": [
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", alt: "HTML" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", alt: "CSS" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", alt: "TypeScript" },
      { src: "https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png", alt: "Tailwind CSS" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React" },],
    "Back-End": [
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", alt: "Node.js" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg", alt: "Express.js" },
      {src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",alt:"NestJS"},
    ],
    "Database": [
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", alt: "PostgreSQL" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg", alt: "MySQL" },
    ],
    "Tools": [
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg", alt: "Prisma" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", alt: "Docker" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", alt: "Git" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", alt: "GitHub" },
      { src: "https://imgs.search.brave.com/TWA-Sw8D9h_wfmrpCQhQ1YTOP5-kRbBTV_DGmAm3jL0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/d29ybGR2ZWN0b3Js/b2dvLmNvbS9sb2dv/cy9wb3N0bWFuLnN2/Zw", alt: "Postman" },
      { src: "https://imgs.search.brave.com/mO3-T7PMbvhHOWcyYxJhiJG9m9ldeWZn3ZAiZ4YP2lU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9h/L2FiL1N3YWdnZXIt/bG9nby5wbmc", alt: "Swagger" },

    ]
  };

  return (
    <div className="container mx-auto flex flex-col items-center justify-center  px-5 py-5">
      {/* Category Buttons */}
      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setSelectedCategory(category)}
            className={`${
              selectedCategory === category
                ? "text-blue-700 border-blue-600 bg-white"
                : "text-3xl font-bold text-blue-950 mb-5 hover:bg-gradient-to-r from-blue-500 to-blue-700 hover:text-transparent hover:bg-clip-text "
            } focus:ring-4 focus:outline-none rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {technologyImages[selectedCategory].map((image, index) => (
          <div key={index} className="flex justify-center m-4 p-4 border border-gray-300 rounded-lg shadow-lg hover:scale-110 transition-transform duration-600">
            <img
              className="h-16 w-auto rounded-lg"
              src={image.src}
              alt={image.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technology;
