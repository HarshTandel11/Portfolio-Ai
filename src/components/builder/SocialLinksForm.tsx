"use client";

import { usePortfolio } from "@/context/PortfolioContext";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Github, Linkedin, Twitter, Globe } from "lucide-react";

export function SocialLinksForm() {
  const { data, updateSocialLinks } = usePortfolio();

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Social Links</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Connect your online presence to your portfolio.
        </p>
      </div>

      <div className="grid gap-6">
        <div className="space-y-2">
          <Label htmlFor="github" className="flex items-center gap-2">
            <Github className="w-4 h-4" /> GitHub
          </Label>
          <Input
            id="github"
            placeholder="https://github.com/yourusername"
            value={data.socialLinks.github}
            onChange={(e) => updateSocialLinks({ github: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="linkedin" className="flex items-center gap-2">
            <Linkedin className="w-4 h-4 text-blue-500" /> LinkedIn
          </Label>
          <Input
            id="linkedin"
            placeholder="https://linkedin.com/in/yourusername"
            value={data.socialLinks.linkedin}
            onChange={(e) => updateSocialLinks({ linkedin: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="twitter" className="flex items-center gap-2">
            <Twitter className="w-4 h-4 text-sky-500" /> Twitter / X
          </Label>
          <Input
            id="twitter"
            placeholder="https://twitter.com/yourusername"
            value={data.socialLinks.twitter}
            onChange={(e) => updateSocialLinks({ twitter: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="website" className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-green-500" /> Personal Website / Linktree
          </Label>
          <Input
            id="website"
            placeholder="https://yourwebsite.com"
            value={data.socialLinks.website}
            onChange={(e) => updateSocialLinks({ website: e.target.value })}
          />
        </div>
      </div>
    </div>
  );
}
