"use client";

import { usePortfolio } from "@/context/PortfolioContext";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";

export function EducationForm() {
  const { data, addEducation, updateEducation, removeEducation } = usePortfolio();
  const [isAdding, setIsAdding] = useState(false);
  const [newEdu, setNewEdu] = useState({ degree: "", school: "", year: "" });

  const handleSaveNew = () => {
    if (newEdu.degree && newEdu.school) {
      addEducation(newEdu);
      setNewEdu({ degree: "", school: "", year: "" });
      setIsAdding(false);
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Education</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Include your academic background or certifications.
          </p>
        </div>
        {!isAdding && (
          <Button onClick={() => setIsAdding(true)} size="sm">
            <Plus className="w-4 h-4 mr-2" />
            Add Education
          </Button>
        )}
      </div>

      <div className="space-y-6">
        {data.education.map((edu) => (
          <div key={edu.id} className="p-4 border rounded-lg relative group bg-card">
            <Button
              variant="destructive"
              size="icon"
              className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8"
              onClick={() => removeEducation(edu.id)}
            >
              <Trash2 className="w-4 h-4" />
            </Button>
            
            <div className="grid gap-4 pr-10">
              <div className="space-y-2">
                <Label>Degree / Certification</Label>
                <Input
                  value={edu.degree}
                  onChange={(e) => updateEducation(edu.id, { ...edu, degree: e.target.value })}
                  placeholder="B.Sc. in Computer Science"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>School / Institution</Label>
                  <Input
                    value={edu.school}
                    onChange={(e) => updateEducation(edu.id, { ...edu, school: e.target.value })}
                    placeholder="University Name"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Year (e.g., 2018 - 2022)</Label>
                  <Input
                    value={edu.year}
                    onChange={(e) => updateEducation(edu.id, { ...edu, year: e.target.value })}
                    placeholder="2018 - 2022"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}

        {isAdding && (
          <div className="p-4 border border-primary/50 rounded-lg space-y-4 bg-muted/10 animate-in fade-in zoom-in-95">
            <h3 className="font-semibold text-sm">New Education</h3>
            <div className="space-y-2">
              <Label>Degree / Certification</Label>
              <Input
                value={newEdu.degree}
                onChange={(e) => setNewEdu({ ...newEdu, degree: e.target.value })}
                placeholder="B.Sc. in Computer Science"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>School / Institution</Label>
                <Input
                  value={newEdu.school}
                  onChange={(e) => setNewEdu({ ...newEdu, school: e.target.value })}
                  placeholder="University Name"
                />
              </div>
              <div className="space-y-2">
                <Label>Year (e.g., 2018 - 2022)</Label>
                <Input
                  value={newEdu.year}
                  onChange={(e) => setNewEdu({ ...newEdu, year: e.target.value })}
                  placeholder="2018 - 2022"
                />
              </div>
            </div>
            <div className="flex gap-2 justify-end pt-2">
              <Button variant="outline" onClick={() => setIsAdding(false)}>Cancel</Button>
              <Button onClick={handleSaveNew} disabled={!newEdu.degree || !newEdu.school}>Save Education</Button>
            </div>
          </div>
        )}

        {data.education.length === 0 && !isAdding && (
          <div className="text-center p-8 border border-dashed rounded-lg text-muted-foreground">
            No education added yet. Click &apos;Add Education&apos; below.
          </div>
        )}
      </div>
    </div>
  );
}
