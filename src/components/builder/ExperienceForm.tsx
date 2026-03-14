"use client";

import { usePortfolio } from "@/context/PortfolioContext";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";

export function ExperienceForm() {
  const { data, addExperience, updateExperience, removeExperience } = usePortfolio();
  const [isAdding, setIsAdding] = useState(false);
  const [newExp, setNewExp] = useState({ role: "", company: "", duration: "", description: "" });

  const handleSaveNew = () => {
    if (newExp.role && newExp.company) {
      addExperience(newExp);
      setNewExp({ role: "", company: "", duration: "", description: "" });
      setIsAdding(false);
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Work Experience</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Where have you worked? Add your professional history.
          </p>
        </div>
        {!isAdding && (
          <Button onClick={() => setIsAdding(true)} size="sm">
            <Plus className="w-4 h-4 mr-2" />
            Add Experience
          </Button>
        )}
      </div>

      <div className="space-y-6">
        {data.experience.map((exp) => (
          <div key={exp.id} className="p-4 border rounded-lg space-y-4 relative group bg-card">
            <Button
              variant="destructive"
              size="icon"
              className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8"
              onClick={() => removeExperience(exp.id)}
            >
              <Trash2 className="w-4 h-4" />
            </Button>
            
            <div className="grid gap-4 pr-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Role / Job Title</Label>
                  <Input
                    value={exp.role}
                    onChange={(e) => updateExperience(exp.id, { ...exp, role: e.target.value })}
                    placeholder="Senior Frontend Developer"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Company Name</Label>
                  <Input
                    value={exp.company}
                    onChange={(e) => updateExperience(exp.id, { ...exp, company: e.target.value })}
                    placeholder="Tech Corp Inc."
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Duration</Label>
                <Input
                  value={exp.duration}
                  onChange={(e) => updateExperience(exp.id, { ...exp, duration: e.target.value })}
                  placeholder="Jan 2021 - Present"
                />
              </div>
              <div className="space-y-2">
                <Label>Description</Label>
                <Textarea
                  value={exp.description}
                  onChange={(e) => updateExperience(exp.id, { ...exp, description: e.target.value })}
                  placeholder="Describe your responsibilities and achievements..."
                  className="h-20 resize-none"
                />
              </div>
            </div>
          </div>
        ))}

        {isAdding && (
          <div className="p-4 border border-primary/50 rounded-lg space-y-4 bg-muted/10 animate-in fade-in zoom-in-95">
            <h3 className="font-semibold text-sm">New Experience</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Role / Job Title</Label>
                <Input
                  value={newExp.role}
                  onChange={(e) => setNewExp({ ...newExp, role: e.target.value })}
                  placeholder="Senior Frontend Developer"
                />
              </div>
              <div className="space-y-2">
                <Label>Company Name</Label>
                <Input
                  value={newExp.company}
                  onChange={(e) => setNewExp({ ...newExp, company: e.target.value })}
                  placeholder="Tech Corp Inc."
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Duration</Label>
              <Input
                value={newExp.duration}
                onChange={(e) => setNewExp({ ...newExp, duration: e.target.value })}
                placeholder="Jan 2021 - Present"
              />
            </div>
            <div className="space-y-2">
              <Label>Description</Label>
              <Textarea
                value={newExp.description}
                onChange={(e) => setNewExp({ ...newExp, description: e.target.value })}
                placeholder="Describe your responsibilities and achievements..."
                className="h-20 resize-none"
              />
            </div>
            <div className="flex gap-2 justify-end pt-2">
              <Button variant="outline" onClick={() => setIsAdding(false)}>Cancel</Button>
              <Button onClick={handleSaveNew} disabled={!newExp.role || !newExp.company}>Save Experience</Button>
            </div>
          </div>
        )}

        {data.experience.length === 0 && !isAdding && (
          <div className="text-center p-8 border border-dashed rounded-lg text-muted-foreground">
            No experience added yet. Click &apos;Add Experience&apos; to build your timeline.
          </div>
        )}
      </div>
    </div>
  );
}
