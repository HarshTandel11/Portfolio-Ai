import { PortfolioData } from "@/context/PortfolioContext";
import { Github, Linkedin, Twitter, Globe, Mail } from "lucide-react";

export function CleanTemplate({ data }: { data: PortfolioData }) {
  const { personalInfo, skills, projects, experience, education, socialLinks } = data;

  return (
    <div className="min-h-full bg-slate-50 text-slate-800 font-sans px-4 py-12 md:p-16 max-w-5xl mx-auto space-y-20">
      
      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-12 border-b border-slate-200">
        <div className="space-y-4 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            {personalInfo.fullName || "Your Name"}
          </h1>
          <h2 className="text-xl md:text-2xl text-slate-500 font-medium">
            {personalInfo.profession || "Your Profession"}
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed pt-2">
            {personalInfo.bio || "Write a brief introduction about yourself and your career goals here."}
          </p>
        </div>
        
        {/* Contact info card style */}
        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm min-w-[200px] shrink-0">
          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Contact</h3>
          <div className="space-y-3 text-sm font-medium text-slate-600">
            {personalInfo.email && (
               <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                 <Mail className="w-4 h-4 text-slate-400" /> Email Me
               </a>
            )}
            {socialLinks.github && (
               <a href={socialLinks.github} className="flex items-center gap-2 hover:text-slate-900 transition-colors">
                 <Github className="w-4 h-4 text-slate-400" /> GitHub
               </a>
            )}
            {socialLinks.linkedin && (
               <a href={socialLinks.linkedin} className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                 <Linkedin className="w-4 h-4 text-slate-400" /> LinkedIn
               </a>
            )}
            {socialLinks.twitter && (
               <a href={socialLinks.twitter} className="flex items-center gap-2 hover:text-sky-500 transition-colors">
                 <Twitter className="w-4 h-4 text-slate-400" /> Twitter
               </a>
            )}
            {socialLinks.website && (
               <a href={socialLinks.website} className="flex items-center gap-2 hover:text-emerald-600 transition-colors">
                 <Globe className="w-4 h-4 text-slate-400" /> Website
               </a>
            )}
          </div>
        </div>
      </header>

      {/* Main Content Grid */}
      <div className="grid md:grid-cols-3 gap-12 md:gap-16">
        
        {/* Left Column: Experience & Projects */}
        <div className="md:col-span-2 space-y-16">
          
          {experience.length > 0 && (
            <section>
              <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <span className="w-6 h-1 bg-blue-500 rounded-full" />
                Work Experience
              </h3>
              <div className="space-y-10">
                {experience.map(exp => (
                  <div key={exp.id}>
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2 gap-2">
                       <h4 className="text-xl font-semibold text-slate-800">{exp.role}</h4>
                       <span className="text-sm font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                         {exp.duration}
                       </span>
                    </div>
                    <div className="text-blue-600 font-medium mb-3">{exp.company}</div>
                    <p className="text-slate-600 leading-relaxed">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {projects.length > 0 && (
            <section>
              <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <span className="w-6 h-1 bg-emerald-500 rounded-full" />
                Featured Projects
              </h3>
              <div className="space-y-8">
                {projects.map(proj => (
                  <div key={proj.id} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-3">
                       <h4 className="text-xl font-semibold text-slate-800">{proj.title}</h4>
                       {proj.link && (
                         <a href={proj.link} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-600 bg-slate-50 p-2 rounded-full hover:bg-blue-50 transition-colors">
                           <Globe className="w-4 h-4" />
                         </a>
                       )}
                    </div>
                    <p className="text-slate-600 leading-relaxed">{proj.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Right Column: Skills & Education */}
        <div className="space-y-16">
          {skills.length > 0 && (
            <section>
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="w-4 h-1 bg-purple-500 rounded-full" />
                Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                  <span key={skill} className="bg-white border border-slate-200 text-slate-700 px-3 py-1.5 rounded-md text-sm font-medium hover:border-slate-300 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          )}

          {education.length > 0 && (
            <section>
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="w-4 h-1 bg-amber-500 rounded-full" />
                Education
              </h3>
              <div className="space-y-6 md:space-y-8">
                {education.map(edu => (
                  <div key={edu.id} className="relative pl-5 border-l-2 border-slate-200">
                    <div className="absolute w-2.5 h-2.5 bg-slate-300 rounded-full -left-[5.5px] top-1.5 ring-4 ring-slate-50" />
                    <h4 className="font-semibold text-slate-800 leading-tight">{edu.degree}</h4>
                    <div className="text-slate-500 text-sm mt-1">{edu.school}</div>
                    <div className="text-amber-600 text-sm font-medium mt-1">{edu.year}</div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
      
    </div>
  );
}
