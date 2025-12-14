import React, { useState } from 'react';
import { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';
import ProjectModal from './ProjectModal';

const projects: Project[] = [
  {
    id: '1',
    title: 'GOALS FOR BLACK',
    category: 'Social Media',
    image: 'https://picsum.photos/id/20/800/600',
    size: 'medium',
    description: 'A social media campaign focused on minimalist aesthetics and bold typography to drive engagement for a luxury lifestyle brand.',
    gallery: ['https://picsum.photos/id/20/800/800', 'https://picsum.photos/id/26/800/600', 'https://picsum.photos/id/48/800/1000']
  },
  {
    id: '2',
    title: 'FOUNDATIONS OF PERSONAL BRANDING',
    category: 'Course Cover',
    image: 'https://picsum.photos/id/64/800/400',
    size: 'wide',
    dark: true,
    description: 'Key visual identity for an online masterclass. The design uses high contrast and negative space to suggest authority and clarity.',
    gallery: ['https://picsum.photos/id/64/1200/600', 'https://picsum.photos/id/1/800/800']
  },
  {
    id: '3',
    title: 'HEALTH AND WELLNESS',
    category: 'Editorial',
    image: 'https://picsum.photos/id/96/600/400',
    size: 'small',
    description: 'Magazine layout design featuring clean typography and organic imagery to promote holistic well-being.',
  },
  {
    id: '4',
    title: 'DISCUSSION POINTS',
    category: 'Presentation',
    image: 'https://picsum.photos/id/119/600/400',
    size: 'small',
    dark: true,
    description: 'A corporate presentation deck designed to turn dry data into compelling visual stories using infographics and bold layouts.',
  },
  {
    id: '5',
    title: 'BUSINESS GOALS',
    category: 'Review & Forecast',
    image: 'https://picsum.photos/id/180/400/300',
    size: 'small',
    dark: true,
  },
  {
    id: '6',
    title: 'ADDRESSING CHALLENGES',
    category: 'Report',
    image: 'https://picsum.photos/id/201/400/300',
    size: 'small',
  }
];

const photographyProjects: Project[] = [
    { id: 'p1', title: 'SAVE THE DATE', category: 'Wedding', image: 'https://picsum.photos/id/250/600/400' },
    { id: 'p2', title: 'LOVE NOTES', category: 'Stationery', image: 'https://picsum.photos/id/360/600/400' },
    { id: 'p3', title: 'PRODUCT', category: 'Packaging', image: 'https://picsum.photos/id/400/600/400' },
    { id: 'p4', title: 'INVITATION', category: 'Event', image: 'https://picsum.photos/id/445/600/400' },
];

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const isDark = project.dark;
  return (
    <div 
      onClick={() => onClick(project)}
      className={`group relative overflow-hidden cursor-pointer ${
        project.size === 'wide' ? 'md:col-span-2' : 
        project.size === 'medium' ? 'md:col-span-1 md:row-span-2' : 'col-span-1'
      } ${isDark ? 'bg-stone-900 text-white' : 'bg-[#e8e6e1] text-ink'} p-4 transition-all duration-500 hover:shadow-2xl`}
    >
      <div className="flex justify-between items-start mb-4 z-10 relative">
        <div>
          <h3 className={`font-bold text-lg md:text-xl uppercase leading-tight ${isDark ? 'text-white' : 'text-stone-800'}`}>
            {project.title}
          </h3>
           <p className={`text-xs uppercase mt-1 ${isDark ? 'text-stone-400' : 'text-stone-500'}`}>{project.category}</p>
        </div>
        <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 ${isDark ? 'border-white/30 bg-white/10' : 'border-black/10 bg-black/5'}`}>
          <ArrowUpRight className={`w-4 h-4 ${isDark ? 'text-white' : 'text-black'}`} />
        </div>
      </div>

      <div className="w-full aspect-video overflow-hidden mt-2 relative">
         <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
         />
         {/* Overlay effect */}
         <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity ${isDark ? 'bg-white' : 'bg-black'}`}></div>
      </div>
    </div>
  );
};

const ProjectGallery: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const graphicCategories = Array.from(new Set(projects.map(p => p.category)));
  const filterCategories = ['All', ...graphicCategories, 'Photography'];

  const filteredGraphicProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);
  
  const showGraphicSection = filteredGraphicProjects.length > 0;
  // Show photography only if 'All' or explicitly 'Photography'
  const showPhotographySection = activeFilter === 'All' || activeFilter === 'Photography';

  return (
    <section className="w-full bg-paper py-16 px-6 md:px-12 relative min-h-screen">
      
      {/* Modal Overlay */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}

      {/* Filter Bar */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {filterCategories.map(cat => (
            <button 
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`text-xs md:text-sm font-bold uppercase tracking-widest px-5 py-2 rounded-full transition-all duration-300 border ${
                  activeFilter === cat 
                  ? 'bg-ink text-white border-ink shadow-lg transform scale-105' 
                  : 'bg-transparent text-stone-500 border-stone-300 hover:border-ink hover:text-ink'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Graphic Design Section */}
      {showGraphicSection && (
        <div className="max-w-7xl mx-auto mb-20 animate-in fade-in duration-500">
          <h2 className="text-sm font-bold uppercase tracking-widest text-stone-400 mb-8 border-b border-stone-300 pb-2">
              Selected Graphic Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredGraphicProjects.map((p) => (
              <ProjectCard 
                key={p.id} 
                project={p} 
                onClick={setSelectedProject}
              />
            ))}
          </div>
        </div>
      )}

      {/* Photography Section */}
      {showPhotographySection && (
        <div className="max-w-7xl mx-auto animate-in fade-in duration-500">
         <h2 className="text-sm font-bold uppercase tracking-widest text-stone-400 mb-8 border-b border-stone-300 pb-2">
            Photography & Styling
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {photographyProjects.map((p) => (
                <div 
                  key={p.id} 
                  className="group cursor-pointer"
                  onClick={() => setSelectedProject(p)}
                >
                    <div className="overflow-hidden mb-3 relative">
                         <img 
                            src={p.image} 
                            alt={p.title} 
                            className="w-full aspect-[3/2] object-cover hover:scale-105 transition-transform duration-700 filter brightness-90 hover:brightness-100" 
                         />
                         <div className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <ArrowUpRight size={18} className="text-ink" />
                         </div>
                    </div>
                    <div className="flex justify-between items-center border-t border-stone-300 pt-2">
                        <span className="font-serif italic text-xl text-stone-800">{p.title}</span>
                        <span className="text-xs uppercase text-stone-500">{p.category}</span>
                    </div>
                </div>
            ))}
        </div>
      </div>
      )}

      {!showGraphicSection && !showPhotographySection && (
         <div className="max-w-7xl mx-auto text-center py-20 text-stone-400">
            No projects found in this category.
         </div>
      )}

    </section>
  );
};

export default ProjectGallery;