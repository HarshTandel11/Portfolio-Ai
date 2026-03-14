import { PortfolioData } from "../context/PortfolioContext";

export function exportAsJSON(data: PortfolioData) {
  const jsonString = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonString], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${data.personalInfo.fullName.replace(/\s+/g, '_').toLowerCase() || 'portfolio'}_data.json`;
  a.click();
  URL.revokeObjectURL(url);
}

// In a real production app we'd use a backend service to bundle a Next.js or React app.
// Here we provide a simple HTML export that relies on Tailwind CDN.
export function exportAsHTML(data: PortfolioData, htmlContent: string) {
  const template = `
<!DOCTYPE html>
<html lang="en" class="dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.personalInfo.fullName || "Portfolio"}</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://unpkg.com/lucide@latest"></script>
    <style>
      body { margin: 0; font-family: system-ui, -apple-system, sans-serif; }
    </style>
    <script>
      tailwind.config = {
        darkMode: 'class',
        theme: {
          extend: {}
        }
      }
    </script>
</head>
<body class="bg-background text-foreground antialiased min-h-screen">
    ${htmlContent}
    <script>
      lucide.createIcons();
    </script>
</body>
</html>
  `.trim();

  const blob = new Blob([template], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `portfolio.html`;
  a.click();
  URL.revokeObjectURL(url);
}
