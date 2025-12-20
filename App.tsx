
import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Profile from './components/Profile';
import ProjectGallery from './components/ProjectGallery';
import Footer from './components/Footer';
import CreativeAssistant from './components/CreativeAssistant';

const App: React.FC = () => {
  useEffect(() => {
    // Smooth scrolling for the entire document
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <main className="w-full min-h-screen relative flex flex-col bg-[#f3f1ea]">
      <Hero />
      <Profile />
      <ProjectGallery />
      <Footer />
      {/* Fix: Added the CreativeAssistant component to the main layout */}
      <CreativeAssistant />
    </main>
  );
};

export default App;
