"use client";

import { usePortfolio } from "@/context/PortfolioContext";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function PersonalInfoForm() {
  const { data, updatePersonalInfo } = usePortfolio();

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Personal Information</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Tell us about yourself. This will be the main introduction on your portfolio.
        </p>
      </div>

      <div className="grid gap-4">
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            id="fullName"
            placeholder="John Doe"
            value={data.personalInfo.fullName}
            onChange={(e) => updatePersonalInfo({ fullName: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="profession">Profession / Role</Label>
          <Input
            id="profession"
            placeholder="Full Stack Developer"
            value={data.personalInfo.profession}
            onChange={(e) => updatePersonalInfo({ profession: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            placeholder="john@example.com"
            value={data.personalInfo.email}
            onChange={(e) => updatePersonalInfo({ email: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="bio">Short Bio</Label>
          <Textarea
            id="bio"
            placeholder="I build scalable web applications and love creating intuitive user experiences..."
            className="h-32 resize-none"
            value={data.personalInfo.bio}
            onChange={(e) => updatePersonalInfo({ bio: e.target.value })}
          />
        </div>
      </div>
    </div>
  );
}
