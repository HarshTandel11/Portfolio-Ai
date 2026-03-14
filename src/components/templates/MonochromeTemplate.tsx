import { PortfolioData } from "@/context/PortfolioContext";
import { Github, Linkedin, Twitter, Globe, Mail } from "lucide-react";

export function MonochromeTemplate({ data }: { data: PortfolioData }) {
  const { personalInfo, skills, projects, experience, education, socialLinks } = data;

  return (
    <div className="min-h-full bg-zinc-900 text-zinc-100 font-sans p-6 sm:p-12 lg:p-24 selection:bg-zinc-100 selection:text-zinc-900">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <header className="mb-24">
          <div className="inline-block px-3 py-1 border border-zinc-700 rounded-full text-xs font-medium tracking-widest uppercase mb-8 text-zinc-400">
            Portfolio
          </div>
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tighter mb-4">
            {personalInfo.fullName || "Your Name"}
          </h1>
          <p className="text-2xl text-zinc-400 font-medium tracking-tight mb-8">
            {personalInfo.profession || "Your Profession"}
          </p>
          <div className="text-lg text-zinc-300 leading-relaxed max-w-2xl border-l-4 border-zinc-700 pl-6 py-2">
            {personalInfo.bio || "A short professional bio goes here."}
          </div>
          
          <div className="flex flex-wrap gap-4 pt-12">
            {personalInfo.email && (
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 text-sm font-medium hover:text-white transition-colors">
                <Mail className="w-4 h-4" /> Email
              </a>
            )}
            {socialLinks.github && (
              <a href={socialLinks.github} className="flex items-center gap-2 text-sm font-medium hover:text-white transition-colors">
                <Github className="w-4 h-4" /> Github
              </a>
            )}
            {socialLinks.linkedin && (
              <a href={socialLinks.linkedin} className="flex items-center gap-2 text-sm font-medium hover:text-white transition-colors">
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
            )}
            {socialLinks.twitter && (
              <a href={socialLinks.twitter} className="flex items-center gap-2 text-sm font-medium hover:text-white transition-colors">
                <Twitter className="w-4 h-4" /> Twitter
              </a>
            )}
            {socialLinks.website && (
              <a href={socialLinks.website} className="flex items-center gap-2 text-sm font-medium hover:text-white transition-colors">
                <Globe className="w-4 h-4" /> Website
              </a>
            )}
          </div>
        </header>

        {/* Divider */}
        <hr className="border-zinc-800 mb-20" />

        {/* Experience & Education */}
        <div className="grid md:grid-cols-2 gap-20 mb-20">
          {experience.length > 0 && (
            <section>
              <h2 className="text-sm font-bold tracking-widest uppercase text-zinc-500 mb-10">Experience</h2>
              <div className="space-y-12">
                {experience.map(exp => (
                  <div key={exp.id} className="relative">
                    <div className="text-zinc-500 text-sm mb-2 font-mono">{exp.duration}</div>
                    <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                    <div className="text-zinc-400 font-medium mb-4">{exp.company}</div>
                    <p className="text-zinc-400 leading-relaxed">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {education.length > 0 && (
            <section>
              <h2 className="text-sm font-bold tracking-widest uppercase text-zinc-500 mb-10">Education</h2>
              <div className="space-y-12">
                {education.map(edu => (
                  <div key={edu.id} className="relative">
                    <div className="text-zinc-500 text-sm mb-2 font-mono">{edu.year}</div>
                    <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                    <div className="text-zinc-400 font-medium">{edu.school}</div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Skills */}
        {skills.length > 0 && (
          <section className="mb-20">
            <h2 className="text-sm font-bold tracking-widest uppercase text-zinc-500 mb-10">Skills</h2>
            <div className="flex flex-wrap gap-3">
              {skills.map(skill => (
                <span key={skill} className="px-4 py-2 bg-zinc-800 text-zinc-100 rounded text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Divider */}
        <hr className="border-zinc-800 mb-20" />

        {/* Projects */}
        {projects.length > 0 && (
          <section className="mb-24">
            <h2 className="text-xl font-bold tracking-tight mb-10">Featured Works</h2>
            <div className="space-y-16">
              {projects.map(proj => (
                <div key={proj.id} className="group cursor-pointer">
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4 gap-4">
                    <h3 className="text-2xl font-bold group-hover:underline underline-offset-8 decoration-2 decoration-zinc-700 transition-all">
                      {proj.title}
                    </h3>
                    {proj.link && (
                      <a href={proj.link} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-zinc-100 flex items-center gap-2 text-sm font-mono transition-colors">
                        View Project <Globe className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                  <p className="text-zinc-400 leading-relaxed text-lg max-w-3xl">{proj.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <footer className="pt-8 border-t border-zinc-800 text-zinc-500 text-sm flex justify-between">
          <span>{new Date().getFullYear()}</span>
          <span>Generated</span>
        </footer>
      </div>
    </div>
  );
}
