"use client";

import { usePortfolio } from "@/context/PortfolioContext";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { X, Plus } from "lucide-react";

export function SkillsForm() {
  const { data, updateSkills } = usePortfolio();
  const [skillInput, setSkillInput] = useState("");

  const handleAddSkill = () => {
    if (skillInput.trim() && !data.skills.includes(skillInput.trim())) {
      updateSkills([...data.skills, skillInput.trim()]);
      setSkillInput("");
    }
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    updateSkills(data.skills.filter((skill) => skill !== skillToRemove));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddSkill();
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Skills & Tech Stack</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Add the technologies, languages, and tools you are proficient in.
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="skill">Add a Skill</Label>
          <div className="flex gap-2">
            <Input
              id="skill"
              placeholder="e.g. React, Python, UI Design"
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <Button type="button" onClick={handleAddSkill} variant="secondary">
              <Plus className="w-4 h-4 mr-2" />
              Add
            </Button>
          </div>
        </div>

        {data.skills.length > 0 ? (
          <div className="flex flex-wrap gap-2 p-4 rounded-lg border border-border/50 bg-muted/20 min-h-[100px] items-start">
            {data.skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm bg-background border flex items-center gap-1 group">
                {skill}
                <button
                  onClick={() => handleRemoveSkill(skill)}
                  className="rounded-full hover:bg-muted p-0.5 transition-colors text-muted-foreground hover:text-foreground"
                >
                  <X className="w-3 h-3" />
                </button>
              </Badge>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center p-8 rounded-lg border border-dashed border-border/50 text-muted-foreground text-sm">
            No skills added yet. Break down your expertise!
          </div>
        )}
      </div>
    </div>
  );
}
