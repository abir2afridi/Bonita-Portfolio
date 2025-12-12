import React, { useEffect } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-stone-900/90 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-6xl h-full max-h-[90vh] bg-[#f3f1ea] shadow-2xl overflow-hidden flex flex-col md:flex-row animate-in fade-in zoom-in-95 duration-300 border border-stone-300">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-50 w-10 h-10 bg-white/80 backdrop-blur rounded-full flex items-center justify-center hover:bg-stone-900 hover:text-white transition-colors duration-300"
        >
          <X size={20} />
        </button>

        {/* Left: Scrollable Content */}
        <div className="w-full md:w-1/2 h-full overflow-y-auto p-8 md:p-12 custom-scrollbar">
          <div className="flex flex-col h-full">
            <span className="text-xs font-bold tracking-[0.2em] text-stone-400 uppercase mb-4">{project.category}</span>
            <h2 className="text-4xl md:text-5xl font-black text-ink uppercase leading-[0.9] mb-8 tracking-tight">
              {project.title}
            </h2>

            <div className="w-full h-px bg-stone-300 mb-8"></div>

            <div className="prose prose-stone text-stone-600 mb-12">
              <p className="text-lg leading-relaxed">
                {project.description || "A comprehensive exploration of visual identity and structural layout. This project focuses on the balance between negative space and typographic density to create a compelling narrative."}
              </p>
              <p>
                The challenge was to maintain a minimalist aesthetic while conveying complex information. By utilizing a strict grid system and a limited color palette, we achieved a timeless look that resonates with the target audience.
              </p>
            </div>

            {/* Project Meta */}
            <div className="grid grid-cols-2 gap-6 mb-12">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">Year</h4>
                <p className="font-serif italic text-xl">2023</p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">Role</h4>
                <p className="font-serif italic text-xl">Art Direction</p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">Client</h4>
                <p className="font-serif italic text-xl">Studio Alpha</p>
              </div>
            </div>

            <div className="mt-auto pt-8">
               <button className="group flex items-center gap-2 text-ink text-sm font-bold uppercase tracking-widest hover:text-accent transition-colors">
                  Next Project <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
               </button>
            </div>
          </div>
        </div>

        {/* Right: Image Gallery (Scrollable) */}
        <div className="w-full md:w-1/2 h-full bg-stone-200 overflow-y-auto custom-scrollbar">
           <div className="flex flex-col">
              {/* Main Cover */}
              <img src={project.image} alt={project.title} className="w-full h-auto object-cover" />
              
              {/* Gallery Images */}
              {project.gallery && project.gallery.length > 0 ? (
                project.gallery.map((img, idx) => (
                  <img key={idx} src={img} alt={`Gallery ${idx}`} className="w-full h-auto object-cover border-t border-white/20" />
                ))
              ) : (
                <>
                  {/* Fallback generated images if no gallery provided */}
                  <img src={`https://picsum.photos/seed/${project.id}a/800/1000`} alt="Detail 1" className="w-full h-auto object-cover" />
                  <img src={`https://picsum.photos/seed/${project.id}b/800/600`} alt="Detail 2" className="w-full h-auto object-cover" />
                  <img src={`https://picsum.photos/seed/${project.id}c/800/800`} alt="Detail 3" className="w-full h-auto object-cover" />
                </>
              )}
           </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectModal;