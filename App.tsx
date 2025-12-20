
import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Profile from './components/Profile';
import ProjectGallery from './components/ProjectGallery';
import Footer from './components/Footer';
import CreativeAssistant from './components/CreativeAssistant';

const App: React.FC = () => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Global scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Safety check for critical global variables
    const checkEnvironment = () => {
      try {
        console.log("App initialized in environment:", typeof process !== 'undefined' ? 'Node/Bundled' : 'Browser/ESM');
      } catch (e) {
        console.warn("Non-critical environment check failed:", e);
      }
    };
    
    checkEnvironment();
  }, []);

  if (hasError) {
    return (
      <div className="min-h-screen bg-[#f3f1ea] flex items-center justify-center p-6 text-center">
        <div>
          <h1 className="text-2xl font-bold text-ink mb-4">Something went wrong.</h1>
          <button 
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-ink text-white rounded-full uppercase tracking-widest text-xs"
          >
            Reload Page
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="w-full min-h-screen relative flex flex-col bg-[#f3f1ea]">
      <Hero />
      <Profile />
      <ProjectGallery />
      <Footer />
      {/* Added Creative Assistant for visitor interaction */}
      <CreativeAssistant />
    </main>
  );
};

export default App;
