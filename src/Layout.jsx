import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Technology from './components/Technology/Technology';
import Project from './components/Project/Project';


function Layout() {
  return (
    <div className="flex flex-col min-h-screen w-full"  style={{
      background: 'linear-gradient(135deg, #f0f4f8, #cfd9e4)',
    }}>
      <Header />
      <main className="flex-1">
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="technology">
          <Technology />
        </section>
        <section id="project">
          <Project />
        </section>
 

      </main>
      <Footer />
    </div>
  );
}

export default Layout;
