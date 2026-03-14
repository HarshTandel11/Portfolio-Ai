import { PortfolioData } from "@/context/PortfolioContext";
import { Github, Linkedin, Globe, Terminal, Code2 } from "lucide-react";

export function DeveloperTemplate({ data }: { data: PortfolioData }) {
  const { personalInfo, skills, projects, experience, education, socialLinks } = data;

  return (
    <div className="min-h-full bg-slate-950 text-slate-300 font-mono p-6 sm:p-10 max-w-5xl mx-auto space-y-16">
      
      {/* Hero */}
      <section className="space-y-6 border-l-2 border-emerald-500/50 pl-6">
        <div className="flex items-center gap-2 text-emerald-400 mb-4">
          <Terminal className="w-5 h-5" />
          <span className="text-sm">~/portfolio/index</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-100">
          <span className="text-emerald-500">const</span> name = &quot;{personalInfo.fullName || "undefined"}&quot;;
        </h1>
        <p className="text-xl text-slate-400">
          <span className="text-blue-400">let</span> role = &quot;{personalInfo.profession || "null"}&quot;;
        </p>
        <div className="max-w-xl text-slate-400 leading-relaxed bg-slate-900/50 p-4 rounded-md border border-slate-800">
          <span className="text-slate-500">{`/* `}</span>
          {personalInfo.bio || "No bio provided"}
          <span className="text-slate-500">{` */`}</span>
        </div>
        <div className="flex gap-4 pt-2">
          {socialLinks.github && <a href={socialLinks.github} className="text-slate-500 hover:text-emerald-400 transition-colors hidden sm:block">github.com/...</a>}
          {socialLinks.github && <a href={socialLinks.github} className="text-slate-500 hover:text-emerald-400 transition-colors sm:hidden"><Github className="w-5 h-5"/></a>}
          
          {socialLinks.linkedin && <a href={socialLinks.linkedin} className="text-slate-500 hover:text-blue-400 transition-colors hidden sm:block">linkedin.com/...</a>}
          {socialLinks.linkedin && <a href={socialLinks.linkedin} className="text-slate-500 hover:text-blue-400 transition-colors sm:hidden"><Linkedin className="w-5 h-5"/></a>}
          
          {personalInfo.email && <a href={`mailto:${personalInfo.email}`} className="text-slate-500 hover:text-yellow-400 transition-colors border border-slate-800 px-3 py-1 rounded hover:border-yellow-400/50">Contact</a>}
        </div>
      </section>

      {/* Skills */}
      {skills.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-200 flex items-center gap-2">
            <span className="text-emerald-500">#</span> Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map(skill => (
              <span key={skill} className="px-3 py-1 bg-slate-900 border border-slate-800 text-emerald-400 text-sm rounded-md">
                {skill}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-slate-200 flex items-center gap-2">
            <span className="text-emerald-500">#</span> Experience
          </h2>
          <div className="space-y-8">
            {experience.map(exp => (
              <div key={exp.id} className="relative pl-6 border-l border-slate-800 space-y-2">
                <div className="absolute w-3 h-3 bg-slate-900 border-2 border-emerald-500 rounded-full -left-[6.5px] top-1.5" />
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2">
                  <h3 className="text-lg font-medium text-slate-200">{exp.role}</h3>
                  <span className="text-emerald-500/80 text-sm">@ {exp.company}</span>
                </div>
                <div className="text-slate-500 text-sm">{exp.duration}</div>
                <p className="text-slate-400 leading-relaxed text-sm">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-slate-200 flex items-center gap-2">
            <span className="text-emerald-500">#</span> Projects
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {projects.map(proj => (
              <div key={proj.id} className="bg-slate-900/50 p-5 rounded-lg border border-slate-800 hover:border-emerald-500/50 transition-colors group">
                <div className="flex justify-between items-start mb-4">
                  <Code2 className="w-8 h-8 text-emerald-500/50 group-hover:text-emerald-400 transition-colors" />
                  {proj.link && (
                    <a href={proj.link} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-slate-200">
                      <Globe className="w-5 h-5" />
                    </a>
                  )}
                </div>
                <h3 className="text-lg font-medium text-slate-200 mb-2">{proj.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{proj.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-slate-200 flex items-center gap-2">
            <span className="text-emerald-500">#</span> Education
          </h2>
          <div className="space-y-6">
            {education.map(edu => (
               <div key={edu.id} className="bg-slate-900/30 p-4 rounded border border-slate-800/50 flex justify-between items-center sm:items-start flex-col sm:flex-row gap-2">
                 <div>
                   <h3 className="font-medium text-slate-200">{edu.degree}</h3>
                   <div className="text-slate-500 text-sm">{edu.school}</div>
                 </div>
                 <div className="text-emerald-500/60 text-sm font-medium bg-slate-900 px-2 py-1 rounded">
                   {edu.year}
                 </div>
               </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
