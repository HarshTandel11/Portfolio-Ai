"use client";

import { usePortfolio } from "@/context/PortfolioContext";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";

export function ProjectsForm() {
  const { data, addProject, updateProject, removeProject } = usePortfolio();
  const [isAdding, setIsAdding] = useState(false);
  const [newProject, setNewProject] = useState({ title: "", description: "", link: "" });

  const handleSaveNew = () => {
    if (newProject.title && newProject.description) {
      addProject(newProject);
      setNewProject({ title: "", description: "", link: "" });
      setIsAdding(false);
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Projects</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Showcase your best work.
          </p>
        </div>
        {!isAdding && (
          <Button onClick={() => setIsAdding(true)} size="sm">
            <Plus className="w-4 h-4 mr-2" />
            Add Project
          </Button>
        )}
      </div>

      <div className="space-y-6">
        {data.projects.map((project) => (
          <div key={project.id} className="p-4 border rounded-lg space-y-4 relative group bg-card">
            <Button
              variant="destructive"
              size="icon"
              className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8"
              onClick={() => removeProject(project.id)}
            >
              <Trash2 className="w-4 h-4" />
            </Button>
            
            <div className="grid gap-4 pr-10">
              <div className="space-y-2">
                <Label>Project Title</Label>
                <Input
                  value={project.title}
                  onChange={(e) => updateProject(project.id, { ...project, title: e.target.value })}
                  placeholder="E-commerce Platform"
                />
              </div>
              <div className="space-y-2">
                <Label>Description</Label>
                <Textarea
                  value={project.description}
                  onChange={(e) => updateProject(project.id, { ...project, description: e.target.value })}
                  placeholder="Built a scalable e-commerce backend using..."
                  className="h-20 resize-none"
                />
              </div>
              <div className="space-y-2">
                <Label>Live Link / GitHub (Optional)</Label>
                <Input
                  value={project.link || ""}
                  onChange={(e) => updateProject(project.id, { ...project, link: e.target.value })}
                  placeholder="https://github.com/yourusername/project"
                />
              </div>
            </div>
          </div>
        ))}

        {isAdding && (
          <div className="p-4 border border-primary/50 rounded-lg space-y-4 bg-muted/10 animate-in fade-in zoom-in-95">
            <h3 className="font-semibold text-sm">New Project</h3>
            <div className="space-y-2">
              <Label>Project Title</Label>
              <Input
                value={newProject.title}
                onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                placeholder="E-commerce Platform"
              />
            </div>
            <div className="space-y-2">
              <Label>Description</Label>
              <Textarea
                value={newProject.description}
                onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                placeholder="Built a scalable e-commerce backend using..."
                className="h-20 resize-none"
              />
            </div>
            <div className="space-y-2">
              <Label>Live Link / GitHub (Optional)</Label>
              <Input
                value={newProject.link}
                onChange={(e) => setNewProject({ ...newProject, link: e.target.value })}
                placeholder="https://github.com/..."
              />
            </div>
            <div className="flex gap-2 justify-end pt-2">
              <Button variant="outline" onClick={() => setIsAdding(false)}>Cancel</Button>
              <Button onClick={handleSaveNew} disabled={!newProject.title || !newProject.description}>Save Project</Button>
            </div>
          </div>
        )}

        {data.projects.length === 0 && !isAdding && (
          <div className="text-center p-8 border border-dashed rounded-lg text-muted-foreground">
            No projects added yet. Click &apos;Add Project&apos; to list your work.
          </div>
        )}
      </div>
    </div>
  );
}
