"use client";

import { usePortfolio } from "@/context/PortfolioContext";
import { MinimalTemplate } from "../templates/MinimalTemplate";
import { DeveloperTemplate } from "../templates/DeveloperTemplate";
import { CreativeTemplate } from "../templates/CreativeTemplate";
import { CleanTemplate } from "../templates/CleanTemplate";
import { MonochromeTemplate } from "../templates/MonochromeTemplate";

export function PreviewPane() {
  const { data } = usePortfolio();

  const renderTemplate = () => {
    switch (data.theme) {
      case "developer":
        return <DeveloperTemplate data={data} />;
      case "creative":
        return <CreativeTemplate data={data} />;
      case "clean":
        return <CleanTemplate data={data} />;
      case "monochrome":
        return <MonochromeTemplate data={data} />;
      case "minimal":
      default:
        return <MinimalTemplate data={data} />;
    }
  };

  return (
    <div className="w-full h-full bg-zinc-100 rounded-xl overflow-hidden border shadow-inner relative">
      <div className="absolute top-0 inset-x-0 h-10 bg-zinc-200 border-b flex items-center px-4 gap-2 z-10">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-amber-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="mx-auto bg-white/50 px-24 py-1 text-xs text-zinc-500 rounded-md font-medium">
          your-portfolio.app
        </div>
      </div>
      <div id="portfolio-preview" className="w-full h-full pt-10 overflow-y-auto custom-scrollbar">
        {renderTemplate()}
      </div>
    </div>
  );
}
