"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Code, Palette, Laptop } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="px-6 py-4 flex items-center justify-between border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="bg-primary/20 p-2 rounded-lg">
            <Sparkles className="w-5 h-5 text-primary" />
          </div>
          <span className="font-bold text-xl tracking-tight">PortfoliAI</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <Link href="#features" className="hover:text-foreground transition-colors">Features</Link>
          <Link href="#templates" className="hover:text-foreground transition-colors">Templates</Link>
          <Link href="#how-it-works" className="hover:text-foreground transition-colors">How it Works</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/build">
            <Button size="sm" className="hidden sm:flex rounded-full px-6">
              Create yours
            </Button>
          </Link>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center">
        {/* Hero Section */}
        <section className="w-full relative overflow-hidden flex flex-col items-center justify-center pt-24 pb-32 px-6">
          {/* Background Gradients */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-20 pointer-events-none">
            <div className="absolute inset-0 bg-primary/30 rounded-full blur-[100px] mix-blend-screen" />
            <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-500/30 rounded-full blur-[100px] mix-blend-screen" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/30 rounded-full blur-[100px] mix-blend-screen" />
          </div>

          <div className="z-10 flex flex-col items-center text-center max-w-3xl space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20"
            >
              <Sparkles className="w-4 h-4" />
              <span>AI-Powered Generation</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-extrabold tracking-tight"
            >
              Your professional portfolio, <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
                built in seconds.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
            >
              Skip the coding and design work. Just enter your details, and our AI will generate a beautiful, responsive portfolio website tailored perfectly to your profession.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <Link href="/build" className="w-full sm:w-auto">
                <Button size="lg" className="w-full rounded-full px-8 text-base h-14 group">
                  Generate Portfolio
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full px-8 text-base h-14">
                View Templates
              </Button>
            </motion.div>
          </div>

          {/* Simple Mockup showcase */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-20 relative w-full max-w-5xl aspect-[16/9] rounded-xl border border-border/50 bg-background/50 shadow-2xl backdrop-blur-sm overflow-hidden flex items-center justify-center p-8"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-background/40 to-muted/20" />
            <div className="relative w-full h-full border border-border/50 rounded-lg bg-card shadow-lg flex flex-col overflow-hidden">
               <div className="h-10 border-b border-border/50 flex items-center px-4 gap-2 bg-muted/30">
                 <div className="w-3 h-3 rounded-full bg-red-500/80" />
                 <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                 <div className="w-3 h-3 rounded-full bg-green-500/80" />
               </div>
               <div className="flex-1 p-8 grid grid-cols-2 gap-8 opacity-60">
                  <div className="space-y-4">
                    <div className="h-8 w-32 bg-muted rounded-md" />
                    <div className="h-32 w-full bg-muted rounded-md" />
                    <div className="h-12 w-48 bg-primary/20 rounded-md" />
                  </div>
                  <div className="space-y-4">
                    <div className="h-48 w-full bg-muted rounded-md" />
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-24 bg-muted rounded-md" />
                      <div className="h-24 bg-muted rounded-md" />
                    </div>
                  </div>
               </div>
            </div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-24 px-6 bg-muted/30">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Built for modern professionals</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Everything you need to showcase your work beautifully, without the hassle of building it from scratch.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background p-8 rounded-2xl border border-border hover:border-primary/50 transition-colors">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-display font-semibold text-xl mb-3">No Coding Required</h3>
                <p className="text-muted-foreground leading-relaxed">Simply fill out a form with your details, skills, and projects, and our AI constructs a semantic, beautiful layout.</p>
              </div>

              <div className="bg-background p-8 rounded-2xl border border-border hover:border-primary/50 transition-colors">
                <div className="h-12 w-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6">
                  <Palette className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="text-display font-semibold text-xl mb-3">Multiple Templates</h3>
                <p className="text-muted-foreground leading-relaxed">Choose from Developer, Creative, and Minimal styles to match your personal brand perfectly.</p>
              </div>

              <div className="bg-background p-8 rounded-2xl border border-border hover:border-primary/50 transition-colors">
                <div className="h-12 w-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6">
                  <Laptop className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-display font-semibold text-xl mb-3">Responsive Design</h3>
                <p className="text-muted-foreground leading-relaxed">Your generated portfolio looks stunning out of the box on mobile devices, tablets, and high-resolution displays.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="py-8 px-6 border-t border-border/40 flex flex-col md:flex-row items-center justify-between text-muted-foreground text-sm">
        <p>© 2026 PortfoliAI. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link href="#" className="hover:text-foreground">Terms</Link>
          <Link href="#" className="hover:text-foreground">Privacy</Link>
        </div>
      </footer>
    </div>
  );
}
