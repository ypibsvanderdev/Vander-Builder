"use client";

import React, { useState } from "react";
import { 
  Plus, 
  Terminal, 
  Code2, 
  Play, 
  Settings, 
  ChevronRight, 
  Search,
  MessageSquare,
  Sparkles,
  Zap,
  Globe,
  Database,
  ShieldCheck,
  TrendingUp,
  LayoutGrid,
  Menu,
  X,
  Copy,
  Check,
  ExternalLink
} from "lucide-react";
import Editor from "@monaco-editor/react";
import { motion, AnimatePresence } from "framer-motion";

export default function VanderBuilder() {
  const [activeTab, setActiveTab] = useState("app.tsx");
  const [view, setView] = useState("editor"); // editor, visual, preview
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  // Elite Simulated State
  const [isDeploying, setDeploying] = useState(false);
  const [deploymentUrl, setDeploymentUrl] = useState<string | null>(null);

  const mockFiles = ["layout.tsx", "page.tsx", "globals.css", "api/route.ts"];

  const handleDeploy = () => {
    setDeploying(true);
    setTimeout(() => {
        setDeploying(false);
        setDeploymentUrl("vander-workout-tracker.vercel.app");
    }, 2500);
  };

  return (
    <div className="flex h-screen w-full flex-col bg-background text-foreground overflow-hidden">
      {/* ⚡ TOP NAVIGATION (Vercel Style) */}
      <nav className="flex h-14 w-full items-center justify-between border-b border-border bg-background px-4 z-50">
        <div className="flex items-center gap-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-black text-xl">V</div>
          <div className="flex items-center gap-2 text-sm font-medium">
            <span className="text-muted">Projects</span>
            <ChevronRight className="h-4 w-4 text-muted" />
            <span className="text-primary font-semibold">Vander-Workout-Tracker</span>
            <span className="flex items-center gap-1 rounded px-1.5 py-0.5 text-[10px] font-bold bg-primary/10 text-accent uppercase tracking-wider">Production</span>
          </div>
        </div>
        
        <div className="flex items-center gap-1.5">
            <div className="flex bg-secondary rounded-lg p-0.5 mr-4">
                <button onClick={() => setView('editor')} className={`flex items-center gap-2 px-3 py-1 text-xs font-semibold rounded-md transition-all ${view === 'editor' ? 'bg-background shadow-sm text-primary' : 'text-muted'}`}>
                    <Code2 className="h-3 w-3" /> Code
                </button>
                <button onClick={() => setView('visual')} className={`flex items-center gap-2 px-3 py-1 text-xs font-semibold rounded-md transition-all ${view === 'visual' ? 'bg-background shadow-sm text-primary' : 'text-muted'}`}>
                    <LayoutGrid className="h-3 w-3" /> Visual
                </button>
                <button onClick={() => setView('preview')} className={`flex items-center gap-2 px-3 py-1 text-xs font-semibold rounded-md transition-all ${view === 'preview' ? 'bg-background shadow-sm text-primary' : 'text-muted'}`}>
                    <ExternalLink className="h-3 w-3" /> Preview
                </button>
            </div>
          
          <button 
            onClick={handleDeploy}
            disabled={isDeploying}
            className="flex items-center gap-2 rounded-lg bg-primary px-4 py-1.5 text-xs font-bold text-background hover:opacity-90 transition-all disabled:opacity-50"
          >
            {isDeploying ? <div className="h-3 w-3 animate-spin border-2 border-background/20 border-t-background rounded-full" /> : <Zap className="h-3 w-3 fill-current" />}
            {isDeploying ? "Deploying..." : "Deploy"}
          </button>
          
          <div className="h-8 w-8 rounded-full bg-secondary border border-border ml-2" />
        </div>
      </nav>

      {/* 🚀 MAIN THREE-PANE IDE WORKSPACE */}
      <div className="flex flex-1 w-full overflow-hidden">
        
        {/* PANE 1: AI ARCHITECT & FILE EXPLORER (Left) */}
        <aside className={`${isSidebarOpen ? 'w-80' : 'w-12'} flex flex-col border-r border-border bg-background transition-all duration-300`}>
          <div className="flex h-12 w-full items-center justify-between border-b border-border px-4">
             {isSidebarOpen && <span className="text-[10px] font-black uppercase tracking-widest text-muted">Architect Dashboard</span>}
             <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="rounded p-1 hover:bg-secondary">
                <Menu className="h-4 w-4" />
             </button>
          </div>
          
          {isSidebarOpen && (
            <div className="flex flex-col flex-1 overflow-auto">
                <div className="flex flex-col border-b border-border p-4 gap-4">
                    <div className="flex items-center gap-2 text-xs font-black text-muted uppercase tracking-tighter">
                        <Sparkles className="h-3 w-3 text-accent animate-pulse" /> Multi-Agent Core
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-3 p-3 rounded-xl bg-background border border-border shadow-sm hover:border-accent transition-all cursor-pointer group">
                            <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-accent/10 text-accent group-hover:scale-110 transition-transform">
                                <Zap className="h-5 w-5 fill-current" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs font-bold text-primary">Builder Agent</span>
                                <span className="text-[10px] text-muted">Generates App Structure</span>
                            </div>
                            <ChevronRight className="ml-auto h-4 w-4 text-muted" />
                        </div>
                        <div className="flex items-center gap-3 p-3 rounded-xl bg-background border border-border shadow-sm hover:border-pink-500 transition-all cursor-pointer group op">
                            <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-pink-500/10 text-pink-500 group-hover:scale-110 transition-transform">
                                <Sparkles className="h-5 w-5" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs font-bold text-primary">Designer Agent</span>
                                <span className="text-[10px] text-muted">Crafts Specialized UI</span>
                            </div>
                            <ChevronRight className="ml-auto h-4 w-4 text-muted" />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col p-4 flex-1">
                    <span className="text-[10px] font-black uppercase tracking-widest text-muted mb-4">Explorer</span>
                    <div className="flex flex-col gap-1">
                        {mockFiles.map(file => (
                            <button 
                                key={file}
                                onClick={() => setActiveTab(file)}
                                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${activeTab === file ? 'bg-secondary text-primary font-bold shadow-inner' : 'text-muted hover:bg-secondary/50'}`}
                            >
                                <Code2 className="h-3 w-3" /> {file}
                            </button>
                        ))}
                    </div>
                </div>

                {/* AI ARCHITECT CHAT (The Brain) */}
                <div className="mt-auto border-t border-border p-4 bg-secondary/30">
                    <div className="flex items-center gap-2 mb-3">
                        <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">Architect Online</span>
                    </div>
                    <div className="relative">
                        <textarea 
                            className="w-full bg-background border border-border rounded-xl p-3 text-xs outline-none focus:ring-1 focus:ring-accent min-h-[100px] resize-none shadow-xl"
                            placeholder="Describe your evolution..."
                        />
                        <button className="absolute bottom-3 right-3 h-8 w-8 flex items-center justify-center rounded-lg bg-primary text-background hover:scale-110 transition-transform shadow-lg">
                            <Sparkles className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            </div>
          )}
        </aside>

        {/* PANE 2: THE TERMINAL + CODE (Center) */}
        <section className="flex flex-1 flex-col bg-background relative overflow-hidden">
            <div className="flex h-12 w-full items-center justify-between border-b border-border bg-secondary/20 px-4">
                <div className="flex gap-4 overflow-x-auto no-scrollbar">
                   {mockFiles.map(file => (
                       <button onClick={() => setActiveTab(file)} key={file} className={`flex items-center gap-2 text-[10px] font-bold py-3 transition-colors ${activeTab === file ? 'text-primary border-b-2 border-primary' : 'text-muted'}`}>
                            {file}
                       </button>
                   ))}
                </div>
                <div className="flex items-center gap-2">
                    <button className="rounded p-1 hover:bg-secondary">
                        <Copy className="h-3 w-3 text-muted" />
                    </button>
                    <button className="rounded p-1 hover:bg-secondary">
                        <Check className="h-3 w-3 text-emerald-500" />
                    </button>
                </div>
            </div>
            
            <div className="flex-1 w-full bg-[#0d0d0d]">
                <Editor
                    height="100%"
                    defaultLanguage="typescript"
                    theme="vs-dark"
                    value={`// Vander Architect Logic Initialized\n// Project: Workout Tracker SaaS\n\nimport { createAgent } from "@vander/core";\n\nexport const Builder = createAgent({\n    type: "BUILDER",\n    logic: async (prompt) => {\n        console.log("Analyzing Blueprint...");\n        return await generateApp(prompt);\n    }\n});\n\n// Architecture: Next.js + Tailwind + Prisma\n// Auto-scaling enabled: TRUE\n// Production Sync: Online`}
                    options={{
                        fontSize: 13,
                        minimap: { enabled: false },
                        scrollBeyondLastLine: false,
                        padding: { top: 20 },
                        fontFamily: "JetBrains Mono"
                    }}
                />
            </div>
            
            {/* TERMINAL DRAWER */}
            <div className="h-40 w-full border-t border-border bg-[#0a0a0a] flex flex-col">
                <div className="flex items-center justify-between px-4 py-2 border-b border-border/10 bg-[#0d0d0d]">
                    <div className="flex items-center gap-2 text-[10px] font-bold text-muted uppercase tracking-widest">
                        <Terminal className="h-3 w-3" /> Clinical Console
                    </div>
                </div>
                <div className="flex-1 p-4 overflow-auto font-mono text-[10px] space-y-1">
                    <div className="text-emerald-500 opacity-80">[info] Initializing Vander-Build Pipeline...</div>
                    <div className="text-primary opacity-60">[info] Port 3000 online. Hot-reload active.</div>
                    <div className="text-muted opacity-40">[info] Building architectural kernels...</div>
                    <div className="animate-pulse text-accent">_</div>
                </div>
            </div>
        </section>

        {/* PANE 3: THE LIVE PREVIEW (Right) */}
        <aside className="w-96 flex flex-col border-l border-border bg-secondary/10">
            <div className="flex h-12 w-full items-center justify-between border-b border-border bg-background px-4">
                <span className="text-[10px] font-black uppercase tracking-widest text-muted">Preview Explorer</span>
                {deploymentUrl && (
                    <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 text-[9px] font-black uppercase animate-in fade-in zoom-in">
                        <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> LIVE
                    </div>
                )}
            </div>
            
            <div className="flex-1 p-4 bg-background">
                <div className="h-full w-full rounded-2xl border border-border bg-white shadow-2xl overflow-hidden flex flex-col">
                    <div className="h-8 w-full bg-secondary/30 flex items-center px-4 gap-1.5 border-b border-border">
                        <div className="h-2 w-2 rounded-full bg-red-400" />
                        <div className="h-2 w-2 rounded-full bg-yellow-400" />
                        <div className="h-2 w-2 rounded-full bg-green-400" />
                        <div className="ml-2 flex-1 h-4 rounded bg-white border border-border-secondary flex items-center px-2 text-[8px] text-muted overflow-hidden tabular-nums truncate">
                           {deploymentUrl || "localhost:3000"}
                        </div>
                    </div>
                    
                    {/* SIMULATED WORKOUT APP PREVIEW */}
                    <div className={`flex-1 flex flex-col p-6 items-center justify-center text-center transition-all duration-1000 ${isDeploying ? 'opacity-20 blur-sm' : 'opacity-100'}`}>
                        {deploymentUrl ? (
                            <div className="flex flex-col items-center gap-4">
                                <div className="h-14 w-14 rounded-2xl bg-primary flex items-center justify-center text-background text-3xl font-black italic">V</div>
                                <h2 className="text-2xl font-black tracking-tight text-primary uppercase">Vander Fit</h2>
                                <p className="text-xs text-muted max-w-[180px]">Your personal AI workout evolution system is now live.</p>
                                <button className="w-full rounded-full bg-primary py-3 text-[10px] font-black text-background uppercase tracking-widest mt-4">Start Training</button>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center gap-4 animate-in fade-in">
                                <Zap className="h-10 w-10 text-primary animate-bounce" />
                                <h3 className="text-xs font-black uppercase tracking-widest text-primary">Architecting...</h3>
                                <p className="text-[10px] text-muted max-w-[160px]">The Builder Agent is currently constructing your app noyau.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            
            <div className="p-4 border-t border-border bg-background">
                <div className="flex flex-col gap-3">
                    <span className="text-[10px] font-black uppercase tracking-widest text-muted">DevOps Pipeline</span>
                    <div className="flex flex-col gap-1.5">
                        <div className="flex items-center justify-between p-2 rounded-lg bg-secondary text-[9px] font-bold">
                            <span className="text-muted">Hosting</span>
                            <div className="flex items-center gap-1"><Zap className="h-2.5 w-2.5 fill-current" /> Vercel Edge</div>
                        </div>
                        <div className="flex items-center justify-between p-2 rounded-lg bg-secondary text-[9px] font-bold">
                            <span className="text-muted">Auth</span>
                            <div className="flex items-center gap-1"><ShieldCheck className="h-2.5 w-2.5" /> NextAuth Core</div>
                        </div>
                        <div className="flex items-center justify-between p-2 rounded-lg bg-secondary text-[9px] font-bold">
                            <span className="text-muted">Data</span>
                            <div className="flex items-center gap-1"><Database className="h-2.5 w-2.5" /> PostgreSQL Sync</div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
      </div>

      {/* 🔮 ARCHITECT OVERLAY (AI Evolution Status) */}
      <AnimatePresence>
        {isDeploying && (
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-md"
            >
                <div className="flex flex-col items-center gap-6">
                    <motion.div 
                        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 180, 270, 360] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-background shadow-[0_0_50px_rgba(0,0,0,0.5)]"
                    >
                        <Zap className="h-8 w-8 fill-current text-background" />
                    </motion.div>
                    <div className="flex flex-col items-center gap-1">
                        <h1 className="text-xl font-black tracking-widest uppercase">Evolving Project</h1>
                        <p className="text-xs text-muted font-mono">SYNCHRONIZING PRODUCTION KERNELS...</p>
                    </div>
                    <div className="h-1 w-64 rounded-full bg-secondary overflow-hidden">
                        <motion.div 
                            initial={{ x: "-100%" }}
                            animate={{ x: "0%" }}
                            transition={{ duration: 2.5 }}
                            className="h-full w-full bg-primary"
                        />
                    </div>
                </div>
            </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
