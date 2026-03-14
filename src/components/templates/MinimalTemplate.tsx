import { PortfolioData } from "@/context/PortfolioContext";
import { Github, Linkedin, Twitter, Globe, Mail } from "lucide-react";

export function MinimalTemplate({ data }: { data: PortfolioData }) {
  const { personalInfo, skills, projects, experience, education, socialLinks } = data;

  return (
    <div className="min-h-full bg-white text-zinc-900 font-sans p-8 sm:p-12 md:p-24 max-w-4xl mx-auto space-y-24">
      {/* Hero */}
      <section className="space-y-6">
        <h1 className="text-4xl md:text-6xl font-light tracking-tight">
          {personalInfo.fullName || "Your Name"}
        </h1>
        <p className="text-xl md:text-2xl text-zinc-500 font-light">
          {personalInfo.profession || "Your Profession"}
        </p>
        <p className="max-w-2xl text-lg leading-relaxed text-zinc-600">
          {personalInfo.bio || "A short professional bio goes here."}
        </p>
        <div className="flex gap-4 pt-4">
          {socialLinks.github && <a href={socialLinks.github} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-zinc-900 transition-colors"><Github className="w-5 h-5"/></a>}
          {socialLinks.linkedin && <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-zinc-900 transition-colors"><Linkedin className="w-5 h-5"/></a>}
          {socialLinks.twitter && <a href={socialLinks.twitter} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-zinc-900 transition-colors"><Twitter className="w-5 h-5"/></a>}
          {socialLinks.website && <a href={socialLinks.website} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-zinc-900 transition-colors"><Globe className="w-5 h-5"/></a>}
          {personalInfo.email && <a href={`mailto:${personalInfo.email}`} className="text-zinc-400 hover:text-zinc-900 transition-colors"><Mail className="w-5 h-5"/></a>}
        </div>
      </section>

      {/* Experience */}
      {experience.length > 0 && (
        <section className="space-y-8">
          <h2 className="text-sm font-semibold tracking-widest text-zinc-400 uppercase">Experience</h2>
          <div className="space-y-12">
            {experience.map(exp => (
              <div key={exp.id} className="grid md:grid-cols-[1fr_3fr] gap-4 md:gap-8">
                <div className="text-zinc-500 text-sm mt-1">{exp.duration}</div>
                <div>
                  <h3 className="text-lg font-medium">{exp.role}</h3>
                  <div className="text-zinc-500 mb-4">{exp.company}</div>
                  <p className="text-zinc-600 leading-relaxed whitespace-pre-wrap">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <section className="space-y-8">
          <h2 className="text-sm font-semibold tracking-widest text-zinc-400 uppercase">Projects</h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {projects.map(proj => (
              <div key={proj.id} className="group">
                <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
                  {proj.title}
                  {proj.link && (
                    <a href={proj.link} target="_blank" rel="noreferrer" className="text-zinc-300 hover:text-zinc-900 transition-colors">
                      <Globe className="w-4 h-4" />
                    </a>
                  )}
                </h3>
                <p className="text-zinc-600 leading-relaxed text-sm">{proj.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <section className="space-y-8">
          <h2 className="text-sm font-semibold tracking-widest text-zinc-400 uppercase">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map(skill => (
              <span key={skill} className="px-3 py-1 bg-zinc-100 text-zinc-800 text-sm rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <section className="space-y-8">
          <h2 className="text-sm font-semibold tracking-widest text-zinc-400 uppercase">Education</h2>
          <div className="space-y-8">
            {education.map(edu => (
               <div key={edu.id} className="grid md:grid-cols-[1fr_3fr] gap-4 md:gap-8">
                 <div className="text-zinc-500 text-sm mt-1">{edu.year}</div>
                 <div>
                   <h3 className="text-lg font-medium">{edu.degree}</h3>
                   <div className="text-zinc-500">{edu.school}</div>
                 </div>
               </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
