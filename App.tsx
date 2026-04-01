import React, { useState, useEffect, useRef, ReactNode } from 'react';
import { ArrowRight, ArrowLeft, Instagram, Linkedin, ChevronDown } from 'lucide-react';
import { Project, ViewState } from './types';
import { projects, uniqueBrands } from './data';

// --- Components ---

// 1. Page Transition Wrapper
const PageTransition = ({ children, className = "" }: { children?: ReactNode; className?: string }) => (
  <div className={`animate-fade-enter ${className}`}>
    {children}
  </div>
);

// 2. Navbar
interface NavbarProps {
  currentView: ViewState;
  navigateTo: (view: ViewState) => void;
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, navigateTo, scrolled }) => (
  <nav className={`fixed top-0 left-0 w-full z-40 bg-white/95 backdrop-blur-sm transition-all duration-300 ${scrolled ? 'border-b border-gray-100 py-4' : 'py-8'}`}>
    <div className="max-w-[1400px] mx-auto px-6 flex justify-between items-center">
      <button 
        onClick={() => navigateTo('home')} 
        className="text-sm font-bold tracking-widest uppercase hover:text-gray-600 transition-colors z-50"
      >
        Ilkin Ibrahimov
      </button>
      
      <div className="flex space-x-12 text-xs font-bold uppercase tracking-widest z-50">
        <button 
          onClick={() => navigateTo('about')} 
          className={`hover:text-gray-500 transition-colors relative group ${currentView === 'about' ? 'text-black' : 'text-gray-400'}`}
        >
          About
          <span className={`absolute -bottom-2 left-0 w-full h-[1px] bg-black transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${currentView === 'about' ? 'scale-x-100' : ''}`}></span>
        </button>
        <button 
          onClick={() => navigateTo('works')} 
          className={`hover:text-gray-500 transition-colors relative group ${currentView === 'works' || currentView === 'project-detail' ? 'text-black' : 'text-gray-400'}`}
        >
          Works
          <span className={`absolute -bottom-2 left-0 w-full h-[1px] bg-black transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${currentView === 'works' || currentView === 'project-detail' ? 'scale-x-100' : ''}`}></span>
        </button>
      </div>
    </div>
  </nav>
);

// 3. HomeView
const HomeView: React.FC<{ navigateTo: (view: ViewState) => void }> = ({ navigateTo }) => (
  <PageTransition className="relative w-full min-h-screen flex items-center bg-white pt-20 pb-20">
    <div className="max-w-[1400px] mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      
      {/* Left: Typography */}
      <div className="order-2 md:order-1">
        <div className="flex items-center gap-4 mb-8 md:mb-12">
            <span className="h-[1px] w-12 bg-black"></span>
            <span className="text-xs font-mono font-medium tracking-widest text-gray-500 uppercase">Portfolio 2024</span>
        </div>
        
        <h1 className="text-6xl lg:text-8xl font-bold tracking-tighter mb-8 text-black leading-[0.9]">
          DIGITAL<br />
          MINDS<br />
          <span className="text-gray-400">DESIGN.</span>
        </h1>
        
        <div className="max-w-md space-y-6">
          <p className="text-lg md:text-xl font-light text-gray-600 leading-relaxed">
            I am <span className="text-black font-medium">Ilkin Ibrahimov</span>, an AI Architect bridging the gap between human intuition and machine intelligence.
          </p>
          
          <div className="pt-4">
            <button 
              onClick={() => navigateTo('works')}
              className="group flex items-center gap-4 text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:text-gray-600"
            >
              <span className="border-b border-black pb-1 group-hover:border-gray-600">View Projects</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Right: Hero Image */}
      <div className="order-1 md:order-2 h-[50vh] md:h-[70vh] relative overflow-hidden bg-gray-100">
         <img 
          src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1200" 
          alt="AI Digital Art" 
          className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 hover:scale-105 transition-transform duration-[2s]"
         />
         <div className="absolute bottom-6 left-6 text-white mix-blend-difference">
           <span className="text-xs font-bold uppercase tracking-widest">Generative / Diffusion / Code</span>
         </div>
      </div>
    </div>

    {/* Scroll Indicator */}
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
      <ChevronDown className="w-6 h-6 text-gray-300" />
    </div>
  </PageTransition>
);

// 4. AboutView
const AboutView: React.FC = () => (
  <PageTransition className="pt-40 px-6 max-w-[1400px] mx-auto min-h-screen pb-20">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
      {/* Image Section */}
      <div className="md:col-span-5">
        <div className="aspect-[3/4] bg-gray-50 relative overflow-hidden group">
          <img 
            // Converted Drive Link for direct view
            src="https://drive.google.com/uc?export=view&id=1d2yedoIPPCT44QSzk6t6ZGHzR_rww540" 
            alt="Ilkin Ibrahimov" 
            className="w-full h-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="md:col-span-7 flex flex-col justify-between py-2">
        <div>
          <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-8">Profile</h2>
          <div className="space-y-8 text-2xl md:text-3xl text-black leading-tight font-light">
            <p>
              My name is <span className="font-medium">Ilkin Ibrahimov</span>. I stand at the convergence of algorithmic precision and human intuition. Based in between digital spaces, I help agencies and brands navigate the chaotic waters of Generative AI.
            </p>
            <p className="text-gray-400">
              With a background in traditional graphic design and a deep expertise in Large Language Models and Diffusion pipelines, I don't just prompt engines; I architect visual systems.
            </p>
          </div>
        </div>

        <div className="mt-12 md:mt-0 pt-12 border-t border-gray-100 grid grid-cols-2 gap-8">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-4 text-gray-400">Contact</h3>
            <a href="mailto:hello@ilkin.com" className="block text-lg hover:text-gray-500 transition-colors">hello@ilkin.com</a>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-4 text-gray-400">Connect</h3>
            <div className="flex gap-4 text-gray-900">
              <a href="#" className="hover:text-gray-500 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-gray-500 transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </PageTransition>
);

// Helper for Project Item in Works View
const WorkItem: React.FC<{ project: Project; onClick: () => void }> = ({ project, onClick }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(e => console.log("Auto-play prevented", e));
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div 
      onClick={onClick}
      className="group cursor-pointer grid grid-cols-1 md:grid-cols-12 gap-12 items-start border-t border-gray-100 pt-12 transition-colors duration-500"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Left Col: Info */}
      <div className="md:col-span-4 flex flex-col justify-between h-full order-2 md:order-1">
         <div className="mb-8">
           <div className="h-6 mb-8 opacity-40 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0">
              <img src={project.logo} alt={project.brand} className="h-full object-contain object-left" />
           </div>
           <h3 className="text-3xl font-medium mb-4 group-hover:translate-x-2 transition-transform duration-300">{project.title}</h3>
           <p className="text-gray-500 text-base leading-relaxed">{project.description.substring(0, 100)}...</p>
         </div>

         <div className="grid grid-cols-2 gap-y-6 text-sm mt-auto">
           <div>
             <span className="block text-[10px] text-gray-400 uppercase tracking-widest mb-1">Brand</span>
             <span className="font-medium">{project.brand}</span>
           </div>
           <div>
             <span className="block text-[10px] text-gray-400 uppercase tracking-widest mb-1">Agency</span>
             <span className="font-medium">{project.agency}</span>
           </div>
           <div>
             <span className="block text-[10px] text-gray-400 uppercase tracking-widest mb-1">Date</span>
             <span className="font-medium">{project.date}</span>
           </div>
           <div>
             <span className="block text-[10px] text-gray-400 uppercase tracking-widest mb-1">Team</span>
             <span className="font-medium">{project.team.length} Members</span>
           </div>
         </div>
         
         <div className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 text-black">
           View Case Study <ArrowRight size={14} />
         </div>
      </div>

      {/* Right Col: Image/Video */}
      <div className="md:col-span-8 order-1 md:order-2">
        <div className="aspect-[16/9] bg-gray-50 overflow-hidden relative">
          <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-all duration-500 z-20 pointer-events-none"></div>
          
          {/* Static Image */}
          <img 
            src={project.images[0]} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 grayscale group-hover:grayscale-0 z-10"
          />

          {/* Video Preview (Overlay) */}
          {project.videoUrl && (
            <video 
              ref={videoRef}
              src={project.videoUrl} 
              muted 
              loop 
              playsInline 
              className="absolute inset-0 w-full h-full object-cover z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
          )}
        </div>
      </div>
    </div>
  );
};

// 5. WorksView
interface WorksViewProps {
  openProject: (project: Project) => void;
  brandData: Project[];
}

const WorksView: React.FC<WorksViewProps> = ({ openProject, brandData }) => (
  <PageTransition className="pt-40 px-6 max-w-[1400px] mx-auto min-h-screen">
    
    {/* Brand Logos / Trusted By Section */}
    <div className="mb-24 pb-12 border-b border-gray-100">
       <div className="flex justify-between items-end mb-12">
          <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400">Trusted By</h2>
       </div>
       <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-12 items-center opacity-60">
          {brandData.map((project, index) => (
            <div key={index} className="flex justify-center group">
              <img 
                src={project.logo} 
                alt={project.brand} 
                className="h-8 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100" 
                title={project.brand}
              />
            </div>
          ))}
       </div>
    </div>

    <div className="flex items-baseline justify-between mb-16">
      <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400">Selected Works</h2>
      <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Index {projects.length.toString().padStart(2, '0')}</span>
    </div>
    
    <div className="flex flex-col gap-24 pb-32">
      {projects.map((project) => (
        <WorkItem key={project.id} project={project} onClick={() => openProject(project)} />
      ))}
    </div>
  </PageTransition>
);

// 6. ProjectDetailView
const ProjectDetailView: React.FC<{ project: Project; navigateTo: (view: ViewState) => void }> = ({ project, navigateTo }) => (
  <PageTransition className="bg-white min-h-screen absolute top-0 left-0 w-full z-30">
    {/* Detail Navbar */}
    <div className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur z-30 border-b border-gray-100 px-6 py-6">
      <div className="max-w-[1400px] mx-auto flex justify-between items-center">
        <button 
          onClick={() => navigateTo('works')}
          className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest hover:text-gray-500 transition-colors"
        >
          <ArrowLeft size={14} /> All Works
        </button>
        <div className="hidden md:flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
          <span className="text-xs font-bold uppercase tracking-widest text-gray-900">
            {project.brand}
          </span>
        </div>
      </div>
    </div>

    <div className="pt-40 px-6 max-w-[1400px] mx-auto pb-24">
      {/* Header Block */}
      <div className="mb-16">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight max-w-4xl text-black">{project.title}</h1>
          <div className="mt-8 md:mt-2">
             <img src={project.logo} alt={project.brand} className="h-8 w-auto opacity-100 grayscale" />
          </div>
        </div>

        {/* Featured Video Player */}
        {project.videoUrl && (
          <div className="w-full aspect-video bg-black mb-16">
            <video 
              src={project.videoUrl} 
              controls 
              className="w-full h-full object-cover"
              poster={project.images[0]}
            />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 border-t border-black pt-12">
          <div className="md:col-span-8">
            <p className="text-2xl leading-relaxed text-gray-900 font-light">{project.description}</p>
          </div>
          
          <div className="md:col-span-4 space-y-10 pl-0 md:pl-12 md:border-l border-gray-100">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Agency</h4>
                <p className="text-lg font-medium">{project.agency}</p>
              </div>
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Date</h4>
                <p className="text-lg font-medium">{project.date}</p>
              </div>
            </div>
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Team</h4>
              <ul className="text-base space-y-2">
                {project.team.map((member, i) => (
                  <li key={i} className="flex items-center gap-2">
                      {member}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="space-y-24">
        {project.images.map((img, index) => (
          <div key={index} className="w-full">
             <img src={img} alt={`Detail ${index + 1}`} className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700" />
          </div>
        ))}
      </div>

      {/* Next Project Mockup */}
      <div className="mt-40 border-t border-gray-100 pt-20 text-center">
         <button 
           onClick={() => navigateTo('works')}
           className="group inline-flex flex-col items-center"
         >
           <span className="text-xs font-bold uppercase tracking-widest mb-6 text-gray-400">Next Step</span>
           <span className="text-4xl md:text-6xl font-bold tracking-tight group-hover:opacity-50 transition-opacity">Back to Index</span>
         </button>
      </div>
    </div>
  </PageTransition>
);

// --- Main Application ---
const App = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home'); 
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (view: ViewState) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentView(view);
    if (view !== 'project-detail') setSelectedProject(null);
  };

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setCurrentView('project-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-white text-black font-sans selection:bg-black selection:text-white min-h-screen">
      <style>{`
        @keyframes fadeEnter {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-enter {
          animation: fadeEnter 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
      
      {currentView !== 'project-detail' && (
        <Navbar currentView={currentView} navigateTo={navigateTo} scrolled={scrolled} />
      )}
      
      {currentView === 'home' && <HomeView navigateTo={navigateTo} />}
      {currentView === 'about' && <AboutView />}
      {currentView === 'works' && <WorksView openProject={openProject} brandData={uniqueBrands} />}
      {currentView === 'project-detail' && selectedProject && (
        <ProjectDetailView project={selectedProject} navigateTo={navigateTo} />
      )}
    </div>
  );
};

export default App;