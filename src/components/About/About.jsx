import React from 'react';

function About() {
  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-center min-h-screen px-5 py-5">
      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl font-bold text-blue-950 mb-5">About Me</h2>
        <p className="text-blue-950 mb-5">
          I am a third-year student at Banepa NIST, pursuing a Bachelor's degree in Computer Science and Information Technology (CSIT). While my expertise lies in backend development, where I specialize in technologies like{' '}
          <span className="bg-gradient-to-r from-blue-500 to-blue-900 text-transparent bg-clip-text">NestJS</span> and <span className="bg-gradient-to-r from-blue-500 to-blue-900 text-transparent bg-clip-text">Express.js</span>, I am currently expanding my skill set by diving into frontend development.
        </p>
        <p className="text-blue-950 mb-5">
          I am open to both full-time and part-time opportunities as a{' '}
          <span className="bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text">Backend Developer</span>. With a strong foundation in building scalable and efficient APIs, a passion for technology, and a problem-solving mindset, I strive to deliver impactful solutions. If you're seeking a dedicated developer who is always eager to learn and grow, feel free to reach out—I’d be delighted to collaborate!
        </p>
      </div>
    </div>
  );
}

export default About;
