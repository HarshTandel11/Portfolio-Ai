"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export type Project = {
  id: string;
  title: string;
  description: string;
  link?: string;
};

export type Experience = {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string;
};

export type Education = {
  id: string;
  degree: string;
  school: string;
  year: string;
};

export type PortfolioData = {
  personalInfo: {
    fullName: string;
    profession: string;
    bio: string;
    email: string;
  };
  socialLinks: {
    linkedin: string;
    github: string;
    website: string;
    twitter: string;
  };
  skills: string[];
  projects: Project[];
  experience: Experience[];
  education: Education[];
  theme: "developer" | "creative" | "minimal" | "clean" | "monochrome";
};

const defaultData: PortfolioData = {
  personalInfo: {
    fullName: "",
    profession: "",
    bio: "",
    email: "",
  },
  socialLinks: {
    linkedin: "",
    github: "",
    website: "",
    twitter: "",
  },
  skills: [],
  projects: [],
  experience: [],
  education: [],
  theme: "minimal",
};

interface PortfolioContextType {
  data: PortfolioData;
  updatePersonalInfo: (info: Partial<PortfolioData["personalInfo"]>) => void;
  updateSocialLinks: (links: Partial<PortfolioData["socialLinks"]>) => void;
  updateSkills: (skills: string[]) => void;
  addProject: (project: Omit<Project, "id">) => void;
  updateProject: (id: string, project: Omit<Project, "id">) => void;
  removeProject: (id: string) => void;
  addExperience: (exp: Omit<Experience, "id">) => void;
  updateExperience: (id: string, exp: Omit<Experience, "id">) => void;
  removeExperience: (id: string) => void;
  addEducation: (edu: Omit<Education, "id">) => void;
  updateEducation: (id: string, edu: Omit<Education, "id">) => void;
  removeEducation: (id: string) => void;
  setTheme: (theme: PortfolioData["theme"]) => void;
  setAllData: (data: PortfolioData) => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export function PortfolioProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<PortfolioData>(defaultData);

  const updatePersonalInfo = (info: Partial<PortfolioData["personalInfo"]>) => {
    setData((prev) => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, ...info },
    }));
  };

  const updateSocialLinks = (links: Partial<PortfolioData["socialLinks"]>) => {
    setData((prev) => ({
      ...prev,
      socialLinks: { ...prev.socialLinks, ...links },
    }));
  };

  const updateSkills = (skills: string[]) => {
    setData((prev) => ({ ...prev, skills }));
  };

  const addProject = (project: Omit<Project, "id">) => {
    setData((prev) => ({
      ...prev,
      projects: [...prev.projects, { ...project, id: Date.now().toString() }],
    }));
  };

  const updateProject = (id: string, project: Omit<Project, "id">) => {
    setData((prev) => ({
      ...prev,
      projects: prev.projects.map((p) => (p.id === id ? { ...project, id } : p)),
    }));
  };

  const removeProject = (id: string) => {
    setData((prev) => ({
      ...prev,
      projects: prev.projects.filter((p) => p.id !== id),
    }));
  };

  const addExperience = (exp: Omit<Experience, "id">) => {
    setData((prev) => ({
      ...prev,
      experience: [...prev.experience, { ...exp, id: Date.now().toString() }],
    }));
  };

  const updateExperience = (id: string, exp: Omit<Experience, "id">) => {
    setData((prev) => ({
      ...prev,
      experience: prev.experience.map((e) => (e.id === id ? { ...exp, id } : e)),
    }));
  };

  const removeExperience = (id: string) => {
    setData((prev) => ({
      ...prev,
      experience: prev.experience.filter((e) => e.id !== id),
    }));
  };

  const addEducation = (edu: Omit<Education, "id">) => {
    setData((prev) => ({
      ...prev,
      education: [...prev.education, { ...edu, id: Date.now().toString() }],
    }));
  };

  const updateEducation = (id: string, edu: Omit<Education, "id">) => {
    setData((prev) => ({
      ...prev,
      education: prev.education.map((e) => (e.id === id ? { ...edu, id } : e)),
    }));
  };

  const removeEducation = (id: string) => {
    setData((prev) => ({
      ...prev,
      education: prev.education.filter((e) => e.id !== id),
    }));
  };

  const setTheme = (theme: PortfolioData["theme"]) => {
    setData((prev) => ({ ...prev, theme }));
  };

  const setAllData = (newData: PortfolioData) => {
    setData(newData);
  };

  return (
    <PortfolioContext.Provider
      value={{
        data,
        updatePersonalInfo,
        updateSocialLinks,
        updateSkills,
        addProject,
        updateProject,
        removeProject,
        addExperience,
        updateExperience,
        removeExperience,
        addEducation,
        updateEducation,
        removeEducation,
        setTheme,
        setAllData,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (context === undefined) {
    throw new Error("usePortfolio must be used within a PortfolioProvider");
  }
  return context;
}
