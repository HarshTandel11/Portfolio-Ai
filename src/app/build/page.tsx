"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PersonalInfoForm } from "@/components/builder/PersonalInfoForm";
import { SkillsForm } from "@/components/builder/SkillsForm";
import { ProjectsForm } from "@/components/builder/ProjectsForm";
import { ExperienceForm } from "@/components/builder/ExperienceForm";
import { EducationForm } from "@/components/builder/EducationForm";
import { SocialLinksForm } from "@/components/builder/SocialLinksForm";
import { PreviewPane } from "@/components/preview/PreviewPane";
import { usePortfolio } from "@/context/PortfolioContext";
import { exportAsJSON, exportAsHTML } from "@/lib/exportUtils";
import { ArrowLeft, ArrowRight, LayoutTemplate, Download, Share2, Code } from "lucide-react";
import Link from "next/link";
import { Progress } from "@/components/ui/progress";

const steps = [
  { id: "personal", title: "Personal Info", component: PersonalInfoForm },
  { id: "skills", title: "Skills", component: SkillsForm },
  { id: "experience", title: "Experience", component: ExperienceForm },
  { id: "projects", title: "Projects", component: ProjectsForm },
  { id: "education", title: "Education", component: EducationForm },
  { id: "social", title: "Social Links", component: SocialLinksForm },
];

export default function BuildPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const { data, setTheme } = usePortfolio();

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const progress = ((currentStep + 1) / steps.length) * 100;
  
  const CurrentStepComponent = steps[currentStep].component;

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-background">
      {/* Header */}
      <header className="h-16 flex items-center justify-between px-6 border-b shrink-0 bg-card z-10">
        <div className="flex items-center gap-4">
          <Link href="/" className="font-bold text-lg hidden sm:block">PortfoliAI</Link>
          <div className="h-4 w-px bg-border hidden sm:block" />
          <span className="text-sm font-medium text-muted-foreground">
            Step {currentStep + 1} of {steps.length}: {steps[currentStep].title}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="hidden sm:flex" onClick={() => {
            // cycle theme for now
            const themes: ("minimal" | "developer" | "creative" | "clean" | "monochrome")[] = ["minimal", "clean", "monochrome", "developer", "creative"];
            const nextIdx = (themes.indexOf(data.theme) + 1) % themes.length;
            setTheme(themes[nextIdx]);
          }}>
            <LayoutTemplate className="w-4 h-4 mr-2" />
            Theme: {data.theme.charAt(0).toUpperCase() + data.theme.slice(1)}
          </Button>
          <Button size="sm" variant="secondary" className="hidden sm:flex" onClick={() => exportAsJSON(data)}>
            <Code className="w-4 h-4 mr-2" />
            Save JSON
          </Button>
          <Button size="sm" onClick={() => {
            // Very simple export taking the innerHTML of the preview pane.
            // Ideally we'd use ReactDOMServer.renderToString, but this is a quick MVP client-side export.
            const previewElement = document.getElementById("portfolio-preview");
            if (previewElement) {
              exportAsHTML(data, previewElement.innerHTML);
            } else {
              alert("Could not load preview HTML.");
            }
          }}>
            <Download className="w-4 h-4 mr-2" />
            Export HTML
          </Button>
        </div>
      </header>

      {/* Progress Bar */}
      <Progress value={progress} className="h-1 rounded-none bg-muted/50" />

      {/* Main Content Area */}
      <main className="flex-1 flex overflow-hidden">
        {/* Editor Sidebar */}
        <div className="w-full lg:w-[450px] xl:w-[500px] flex flex-col border-r bg-card/50 shadow-sm shrink-0">
          <div className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar">
            <CurrentStepComponent />
          </div>

          <div className="p-4 md:p-6 border-t bg-card flex justify-between items-center shrink-0">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={currentStep === 0}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <Button
              onClick={handleNext}
              disabled={currentStep === steps.length - 1}
            >
              Next Step
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>

        {/* Live Preview Pane */}
        <div className="flex-1 hidden lg:flex flex-col p-6 bg-muted/30 overflow-hidden">
          <div className="flex items-center justify-between mb-4 px-2">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              Live Preview
            </h3>
            <div className="flex gap-2 text-sm text-muted-foreground bg-background px-3 py-1 rounded-full border shadow-sm">
              <LayoutTemplate className="w-4 h-4" />
              {data.theme.charAt(0).toUpperCase() + data.theme.slice(1)} Mode
            </div>
          </div>
          <div className="flex-1 rounded-xl overflow-hidden shadow-2xl border border-border/50 ring-1 ring-white/10">
             <PreviewPane />
          </div>
        </div>
      </main>
    </div>
  );
}
