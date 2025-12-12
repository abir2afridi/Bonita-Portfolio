import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Profile from './components/Profile';
import ProjectGallery from './components/ProjectGallery';
import CreativeAssistant from './components/CreativeAssistant';
import Footer from './components/Footer';

const App: React.FC = () => {
  // Simple "noise" effect via CSS class applied to body in index.html,
  // but we can also manage global styles or scroll behaviors here if needed.
  
  useEffect(() => {
     // Smooth scroll behavior for anchor links
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <main className="w-full min-h-screen relative flex flex-col bg-[#f3f1ea]">
      <Hero />
      <Profile />
      <ProjectGallery />
      <Footer />
      <CreativeAssistant />
    </main>
  );
};

export default App;