import { PortfolioData } from "@/context/PortfolioContext";
import { ArrowUpRight } from "lucide-react";

export function CreativeTemplate({ data }: { data: PortfolioData }) {
  const { personalInfo, skills, projects, experience, education, socialLinks } = data;

  return (
    <div className="min-h-full bg-[#E5DFD3] text-[#1A1A1A] font-serif p-6 sm:p-12 md:p-20 max-w-6xl mx-auto overflow-hidden">
      
      {/* Header / Hero - Custom Graphic Designer Layout */}
      <header className="flex flex-col items-center justify-center text-center space-y-8 mb-32 pt-12 relative min-h-[50vh]">
        
        {/* Abstract decorative elements bridging the custom "Portfolio" look */}
        <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center justify-center">
            
          {/* Main "Portfolio" text with integrated graphics simulating the image */}
          <div className="relative flex items-end justify-center w-full">
            
            {/* Left simulated hand */}
            <div className="absolute -left-4 sm:-left-12 lg:-left-24 top-0 -rotate-12 w-24 h-32 md:w-32 md:h-40 bg-[url('data:image/svg+xml;utf8,&lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; viewBox=&quot;0 0 100 100&quot;&gt;&lt;path fill=&quot;%23ccc&quot; d=&quot;M30,80 L40,40 C42,30 48,25 55,25 C62,25 65,30 65,40 L60,80 Z&quot;/&gt;&lt;path fill=&quot;%23333&quot; d=&quot;M30,80 L60,80 L65,100 L25,100 Z&quot;/&gt;&lt;/svg&gt;')] bg-no-repeat bg-contain opacity-80 mix-blend-multiply z-10 hidden sm:block"></div>
            
            <h1 className="text-6xl sm:text-8xl md:text-[9rem] font-black tracking-tighter text-[#111] leading-none flex items-end relative z-0">
               <span>P</span>
               <span>o</span>
               <span>r</span>
               <span>t</span>
               <span className="relative flex flex-col items-center mx-1">
                 {/* Pen nib replacing 'f'/'i' top */}
                 <svg className="w-12 h-16 md:w-16 md:h-24 absolute -top-16 md:-top-24 text-[#111]" viewBox="0 0 24 24" fill="currentColor">
                   <path d="M12 2L19 14L15 22H9L5 14L12 2ZM12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11Z"/>
                   <rect x="7" y="19" width="10" height="2" fill="white" />
                 </svg>
                 {/* Arc line connecting across */}
                 <svg className="absolute -top-32 md:-top-48 w-[200%] h-32 md:h-48 left-1/2 -translate-x-1/2 overflow-visible" fill="none" stroke="#111" strokeWidth="3">
                   <path d="M-100,150 Q50,-50 100,150" />
                 </svg>
                 f
               </span>
               <span className="relative">
                 <span className="absolute -top-6 md:-top-10 left-1/2 -translate-x-1/2 text-2xl md:text-4xl">☻</span>
                 o
               </span>
               <span>l</span>
               <span className="relative">
                 i
                 <span className="absolute -top-8 -right-8 text-xl md:text-2xl font-sans rotate-12 font-bold transform origin-bottom-left">2024</span>
               </span>
               <span>o</span>
            </h1>

            {/* Right simulated hand */}
            <div className="absolute -right-4 sm:-right-8 lg:-right-20 bottom-0 rotate-12 w-24 h-32 md:w-32 md:h-40 bg-[url('data:image/svg+xml;utf8,&lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; viewBox=&quot;0 0 100 100&quot;&gt;&lt;path fill=&quot;%23ccc&quot; d=&quot;M70,80 L60,40 C58,30 52,25 45,25 C38,25 35,30 35,40 L40,80 Z&quot;/&gt;&lt;path fill=&quot;%23333&quot; d=&quot;M40,80 L70,80 L75,100 L35,100 Z&quot;/&gt;&lt;/svg&gt;')] bg-no-repeat bg-contain opacity-80 mix-blend-multiply z-10 hidden sm:block"></div>
            
            {/* Undeline connecting from left */}
            <div className="absolute bottom-4 -left-[50vw] right-2/3 h-1 bg-[#111] -z-10"></div>
            {/* Dashed line connecting from right */}
            <svg className="absolute -bottom-24 -right-12 w-64 h-32 overflow-visible hidden sm:block" fill="none" stroke="#111" strokeWidth="4" strokeDasharray="8 8">
              <path d="M0,0 Q100,100 200,-50" />
            </svg>
          </div>

          <div className="mt-8 flex flex-col items-center">
            <div className="px-8 py-3 border-4 border-[#111] rounded-full text-2xl font-bold bg-transparent text-[#111] uppercase tracking-wider relative">
              {personalInfo.profession || "Graphic Designer"}
            </div>
            <p className="mt-8 text-xl md:text-2xl text-[#111]/80 font-sans max-w-2xl text-center">
              Hi, I&apos;m <span className="font-bold">{personalInfo.fullName || "Your Name"}</span>. {personalInfo.bio || "Crafting digital experiences that merge art, technology, and human emotion."}
            </p>
          </div>
        </div>
        
        <div className="flex gap-6 pt-8 font-sans uppercase tracking-widest text-sm font-bold text-[#111]">
          {socialLinks.github && <a href={socialLinks.github} className="hover:text-blue-600 transition-colors border-b-2 border-transparent hover:border-[#111]">Github</a>}
          {socialLinks.linkedin && <a href={socialLinks.linkedin} className="hover:text-blue-600 transition-colors border-b-2 border-transparent hover:border-[#111]">LinkedIn</a>}
          {socialLinks.twitter && <a href={socialLinks.twitter} className="hover:text-blue-600 transition-colors border-b-2 border-transparent hover:border-[#111]">Twitter</a>}
          {personalInfo.email && <a href={`mailto:${personalInfo.email}`} className="hover:text-blue-600 transition-colors border-b-2 border-transparent hover:border-[#111]">Email</a>}
        </div>
      </header>

      {/* Projects Gallery */}
      {projects.length > 0 && (
        <section className="mb-32">
          <div className="flex items-center justify-between mb-12 border-b-4 border-[#111] pb-4">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">Selected Works</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-16">
            {projects.map((proj, idx) => (
              <div 
                key={proj.id} 
                className={`group cursor-pointer ${idx % 2 === 1 ? 'md:mt-32' : ''}`}
              >
                <div className="aspect-[4/3] bg-[#d5cfc1] rounded-2xl overflow-hidden relative mb-6 border-4 border-transparent group-hover:border-[#111] transition-colors">
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-[#111]/10 backdrop-blur-sm">
                    {proj.link && (
                      <a href={proj.link} target="_blank" rel="noreferrer" className="w-20 h-20 bg-[#111] rounded-full flex items-center justify-center text-[#E5DFD3] shadow-xl hover:scale-110 transition-transform">
                        <ArrowUpRight className="w-8 h-8" />
                      </a>
                    )}
                  </div>
                </div>
                <h3 className="text-3xl font-black uppercase tracking-tight mb-3">{proj.title}</h3>
                <p className="text-[#111]/70 font-sans text-lg leading-relaxed">{proj.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="grid md:grid-cols-2 gap-16 md:gap-24 mb-32">
        {/* Experience */}
        {experience.length > 0 && (
          <section>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-8 border-b-4 border-[#111] pb-4">History</h2>
            <div className="space-y-12">
              {experience.map(exp => (
                <div key={exp.id} className="group border-l-4 border-transparent hover:border-[#111] pl-6 transition-colors">
                  <div className="font-sans text-[#111]/60 font-bold tracking-widest text-sm mb-2">{exp.duration}</div>
                  <h3 className="text-2xl font-black uppercase mb-1">{exp.role}</h3>
                  <div className="text-[#111]/50 italic mb-4 font-serif text-lg">{exp.company}</div>
                  <p className="text-[#111]/80 font-sans leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Skills & Education */}
        <div className="space-y-16">
          {skills.length > 0 && (
            <section>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-8 border-b-4 border-[#111] pb-4">Expertise</h2>
              <div className="flex flex-wrap gap-3">
                {skills.map(skill => (
                  <span key={skill} className="px-5 py-2.5 bg-[#111] text-[#E5DFD3] font-sans text-sm tracking-widest uppercase font-bold rounded-full hover:scale-105 transition-transform cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          )}

          {education.length > 0 && (
            <section>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-8 border-b-4 border-[#111] pb-4">Education</h2>
              <div className="space-y-8">
                {education.map(edu => (
                  <div key={edu.id} className="border-l-4 border-[#111]/20 pl-6 py-2 hover:border-[#111] transition-colors">
                    <h3 className="text-xl font-black uppercase">{edu.degree}</h3>
                    <div className="text-[#111]/60 font-sans mt-1">{edu.school}</div>
                    <div className="font-sans text-[#111]/80 font-bold mt-2">{edu.year}</div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
      
      {/* Footer */}
      <footer className="text-center py-12 border-t-4 border-[#111] font-sans font-bold uppercase tracking-widest text-[#111]/40 text-sm mt-32">
        <p>Generated by PortfoliAI</p>
      </footer>
    </div>
  );
}
