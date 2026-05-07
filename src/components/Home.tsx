/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { LucideIcon, Target, Database, Layers, Zap, MessageSquare, ArrowRight, ArrowLeft, Sparkles, Lightbulb, Monitor, Smartphone, PenTool, Video, Palette, FileText, Server, Globe, Check, X } from 'lucide-react';
import { GlassCard, SectionHeader } from './Common';

const metrics = [
  { label: 'Lines of Code', value: '45M+', description: 'Robust architectures built with precision.', progress: 80, color: 'text-surface-tint' },
  { label: 'Custom Apps', value: '120+', description: 'Deployed for enterprises worldwide.', progress: 60, color: 'text-secondary' },
  { label: 'Uptime', value: '99.9%', description: 'Guaranteed reliability for critical systems.', progress: 95, color: 'text-surface-tint' },
  { label: 'Team Size', value: '250+', description: 'Engineers, designers, and AI experts.', progress: 40, color: 'text-secondary' },
];

const testimonials = [
  {
    quote: "Devaas didn't just build us a tool; they redefined our entire digital workflow. The AI integration saved us 40 hours of manual labor per week.",
    author: "Marcus Thorne",
    role: "CEO, Zenith Systems",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCWX2ThtxpO2TcJW16kLJiH_xHGKPmfZAUHQqwi7Q_ltZHOzcYc-m13h0dA5dobGcqRZ7HwzDzC0ResQK3i_JyRqq_fuaiwL64BLNzCPOca4_WgJxmUH4rX6vvAV-z__icE0wJwVKpDQxXoWq86mdW7Qn9wvHZaPUdOi9vlXE_5gj422qT-KKunq-nLep7f-kdcIxJuNLIqm18NKJFklTXMmYhQTi0Xq3nWDvgTao2DljF1psck_owEJEgyFExiGe1lRPm3vZYK1jg"
  }
];

function FAQItem({ question, answer }: { question: string, answer: string, key?: React.Key }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <motion.div 
      initial={false}
      className={`bg-gray-50/50 border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'shadow-xl bg-white' : 'hover:bg-white hover:shadow-lg'}`}
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-8 py-6 flex items-center justify-between text-left group"
      >
        <span className={`text-sm md:text-base font-bold uppercase tracking-tight transition-colors ${isOpen ? 'text-[#EE3344]' : 'text-gray-700'}`}>
          {question}
        </span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-[#EE3344] rotate-45' : 'bg-gray-200 group-hover:bg-[#EE3344]/10'}`}>
          <X size={16} className={isOpen ? 'text-white' : 'text-gray-400 group-hover:text-[#EE3344]'} style={{ transform: isOpen ? 'none' : 'rotate(-45deg)' }} />
        </div>
      </button>
      <motion.div
        initial="collapsed"
        animate={isOpen ? "open" : "collapsed"}
        variants={{
          open: { opacity: 1, height: "auto", marginBottom: 24, marginTop: 8 },
          collapsed: { opacity: 0, height: 0, marginBottom: 0, marginTop: 0 }
        }}
        transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
      >
        <div className="px-8 pb-6 text-gray-500 text-sm leading-relaxed max-w-2xl">
          {answer}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Home({ setView }: { setView: (view: any, category?: string | null) => void }) {
  return (
    <div>
      {/* Cinematic Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-40 px-6 overflow-hidden bg-black">
        {/* Background Atmosphere */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(238,51,68,0.08)_0%,_transparent_70%)]" />
          <div 
            className="absolute bottom-0 left-0 w-full h-[60%] bg-gradient-to-t from-[#EE3344]/10 via-transparent to-transparent opacity-40 blur-3xl translate-y-1/2 scale-150"
            style={{ borderRadius: '100% 100% 0 0' }}
          />
        </div>

        <div className="container mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-display text-4xl md:text-6xl lg:text-8xl text-white font-bold tracking-tight leading-[1.1] mb-8">
              Engineering the <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)' }}>digital</span> <br />
              <span className="text-white">frontier with precision</span>
            </h1>

            <p className="text-gray-400 text-xs md:text-base max-w-2xl mx-auto font-light tracking-wide mb-12 leading-relaxed px-4">
              A global engineering powerhouse crafting high-performance software architectures <br className="hidden md:block" />
              that fuel the world's most ambitious digital ecosystems.
            </p>

            {/* Achievement / Awards Section */}
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 mb-20 grayscale hover:grayscale-0 transition-all duration-700">
              {[
                { title1: 'Tech Lead', title2: 'Of The Year 2024', label: 'Global Software Excellence' },
                { title1: 'Best AI', title2: 'Architecture', label: 'Silicon Valley Awards 2024' },
                { title1: 'UX Design', title2: 'Excellence Award', label: 'Awwwards Studio 2024' }
              ].map((award, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-4 h-[1px] bg-white/40" />
                    <div className="text-[10px] text-white font-black uppercase tracking-tighter text-center leading-tight">
                      {award.title1} <br /> {award.title2}
                    </div>
                    <span className="w-4 h-[1px] bg-white/40" />
                  </div>
                  <div className="text-[7px] text-gray-500 uppercase tracking-widest">{award.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Hero Featured Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="container mx-auto px-6 mt-10 relative z-20"
        >
          <div className="max-w-6xl mx-auto rounded-[40px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-white/5">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline 
              poster="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop"
              className="w-full aspect-[21/9] object-cover"
            >
              <source src="https://player.vimeo.com/external/370364119.sd.mp4?s=d010d866a2e4fe9b0b14777d079d854B74afb654&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>
      </section>

      {/* What is Devaas Section - Dashboard Mockup */}
      <section className="py-40 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[#EE3344] font-mono text-[10px] uppercase tracking-[0.4em] block mb-6">The Identity</span>
              <h2 className="font-display text-3xl md:text-5xl lg:text-7xl text-black font-black uppercase tracking-tighter leading-tight mb-8">
                What is <span className="text-transparent font-serif italic" style={{ WebkitTextStroke: '1px #EE3344' }}>Devaas?</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto font-light leading-relaxed px-4">
                Devaas is a premier digital solutions lab where technical mastery meets aesthetic resonance. We architect enterprise-grade software, cinematic visuals, and high-fidelity experiences that define the next generation of global brands.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-w-6xl mx-auto"
          >
            {/* The Main Dashboard Frame */}
            <div className="bg-[#FAFAFA] rounded-[32px] md:rounded-[40px] border border-gray-100 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.05)] overflow-hidden aspect-[4/5] md:aspect-[16/9] relative">
              
              {/* Header / Nav Bar */}
              <div className="bg-white border-b border-gray-100 px-8 py-4 flex items-center justify-between">
                <div className="flex items-center gap-8">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#EE3344] rounded-lg flex items-center justify-center">
                      <Zap size={18} className="text-white fill-white" />
                    </div>
                    <span className="font-black uppercase tracking-tighter text-lg">Devaas Studio</span>
                  </div>
                  <div className="hidden lg:flex items-center gap-6">
                    {['Studio', 'Creative', 'Solutions', 'Inventory', 'Settings'].map((tab) => (
                      <span key={tab} className={`text-[10px] font-bold uppercase tracking-widest cursor-pointer ${tab === 'Solutions' ? 'text-[#EE3344]' : 'text-gray-400 hover:text-black transition-colors'}`}>
                        {tab}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-gray-400 rounded-full" />
                  </div>
                  <button className="bg-black text-white px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                    <ArrowRight size={14} className="rotate-[-45deg]" /> Export
                  </button>
                </div>
              </div>

              {/* Canvas Area */}
              <div className="absolute inset-0 top-[68px] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] flex items-center justify-center">
                
                {/* Workflow Nodes */}
                <div className="relative w-full h-full flex items-center justify-center">
                  
                  {/* Connection Lines (SVG) */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    <path d="M 540 300 Q 540 380 540 400" stroke="#E5E7EB" strokeWidth="2" fill="none" strokeDasharray="4 4" />
                    <path d="M 540 460 Q 540 500 540 540" stroke="#EE3344" strokeWidth="2" fill="none" strokeDasharray="4 4" />
                    <path d="M 400 620 L 520 620" stroke="#E5E7EB" strokeWidth="2" fill="none" />
                    <path d="M 560 620 L 680 620" stroke="#E5E7EB" strokeWidth="2" fill="none" />
                  </svg>

                  {/* Nodes Staggered Animation */}
                  <div className="flex flex-col items-center gap-16 relative z-10">
                    {/* Start Point */}
                    <div className="bg-[#00FFBB]/10 border border-[#00FFBB]/20 px-8 py-3 rounded-full flex items-center gap-3 shadow-sm">
                      <div className="w-3 h-3 bg-[#00FFBB] rounded-full animate-pulse" />
                      <span className="text-[10px] font-bold uppercase tracking-widest">Start Point</span>
                    </div>

                    {/* Trigger Card */}
                    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-xl w-64">
                      <div className="flex items-center gap-3 mb-4">
                        <Zap size={16} className="text-gray-400" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Phase 01</span>
                      </div>
                      <h4 className="font-bold text-sm mb-1">Architecture Design</h4>
                      <p className="text-[10px] text-gray-400 font-light">System blueprint finalized</p>
                    </div>

                    {/* Ai Assistant Node */}
                    <div className="bg-[#EE3344] text-white px-10 py-5 rounded-3xl shadow-[0_20px_40px_rgba(238,51,68,0.3)] flex items-center gap-4 relative">
                      <Sparkles size={24} />
                      <div className="text-left">
                        <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">Node Type</span>
                        <h4 className="text-lg font-black uppercase tracking-tighter">AI Assistant</h4>
                      </div>
                      <div className="absolute -top-3 -right-3 w-6 h-6 bg-white border border-gray-100 rounded-full flex items-center justify-center text-black shadow-lg">
                        <div className="w-2 h-2 bg-black rounded-full" />
                      </div>
                    </div>

                    {/* Responses Row */}
                    <div className="flex gap-20">
                      <div className="bg-white border border-gray-100 p-4 rounded-2xl shadow-lg flex items-center gap-4">
                        <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                          <div className="w-3 h-3 bg-orange-500 rounded-full" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-widest">Error</span>
                      </div>
                      <div className="bg-white border border-gray-100 p-5 rounded-2xl shadow-xl w-72">
                         <div className="flex justify-between items-center mb-4">
                           <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Messages</span>
                           <div className="w-2 h-2 bg-orange-500 rounded-full" />
                         </div>
                         <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                           <p className="text-[10px] font-medium italic">"Integrating C# .NET core with high-fidelity React components..."</p>
                         </div>
                      </div>
                      <div className="bg-white border border-gray-100 p-4 rounded-2xl shadow-lg flex items-center gap-4">
                        <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                          <div className="w-3 h-3 bg-orange-500 rounded-full" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-widest">Error</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Side Panels */}
              
              {/* Left Panel: Builder */}
              <div className="absolute top-24 left-12 w-72 bg-white border border-gray-100 rounded-[32px] shadow-2xl p-8 z-30">
                <div className="flex items-center gap-4 mb-8">
                   <div className="w-8 h-8 bg-gray-50 rounded-xl flex items-center justify-center">
                     <Layers size={16} className="text-black" />
                   </div>
                   <h3 className="font-black uppercase tracking-tighter">Builder</h3>
                </div>
                
                <div className="space-y-4">
                  {[
                    { label: 'Code', icon: Zap, desc: 'Enterprise C# .NET logic' },
                    { label: 'UX Flow', icon: MessageSquare, desc: 'Psychology-driven paths' },
                    { label: 'Schema', icon: Database, desc: 'Relational data structures' },
                    { label: 'Cloud', icon: Target, desc: 'Global orchestration' }
                  ].map((item, i) => (
                    <div key={i} className={`p-4 rounded-2xl border transition-all cursor-pointer ${i === 0 ? 'bg-white border-gray-100 shadow-sm' : 'border-transparent opacity-60 hover:opacity-100'}`}>
                      <div className="flex items-center gap-3 mb-2">
                        <item.icon size={14} className={i === 0 ? 'text-[#EE3344] fill-[#EE3344]/10' : 'text-gray-400'} />
                        <span className="text-[10px] font-bold uppercase tracking-widest">{item.label}</span>
                      </div>
                      <p className="text-[10px] text-gray-400 font-light">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Panel: Function */}
              <div className="absolute top-24 right-12 w-80 bg-white border border-gray-100 rounded-[32px] shadow-2xl p-8 z-30 hidden xl:block">
                <div className="flex items-center gap-4 mb-8">
                   <div className="w-8 h-8 bg-gray-50 rounded-xl flex items-center justify-center">
                     <Lightbulb size={16} className="text-black" />
                   </div>
                   <h3 className="font-black uppercase tracking-tighter">Inspector</h3>
                </div>

                <div className="space-y-8">
                  <div className="flex bg-gray-50 rounded-full p-1">
                    <button className="flex-1 py-2 text-[8px] font-bold uppercase tracking-widest bg-white rounded-full shadow-sm text-black">Mastery</button>
                    <button className="flex-1 py-2 text-[8px] font-bold uppercase tracking-widest text-gray-400">Quality</button>
                  </div>

                  <div>
                    <label className="text-[8px] font-bold uppercase tracking-widest text-gray-400 block mb-4">Architecture</label>
                    <div className="bg-white border border-gray-100 rounded-xl p-3 flex items-center justify-between">
                       <div className="flex items-center gap-3">
                         <div className="w-2.5 h-2.5 bg-[#EE3344]/20 rounded-full border border-[#EE3344]/40" />
                         <span className="text-[10px] font-bold">CLEAN CODE</span>
                       </div>
                    </div>
                  </div>

                  <div>
                     <label className="text-[8px] font-bold uppercase tracking-widest text-gray-400 block mb-4">Repo URL</label>
                     <div className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                        <span className="text-[10px] font-mono text-gray-400">github.com/devaas/core</span>
                     </div>
                  </div>

                  <div className="bg-orange-50 border border-orange-100 p-4 rounded-xl flex items-center gap-3">
                     <div className="w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center text-white text-[8px] font-bold">!</div>
                     <span className="text-[9px] text-orange-600 font-medium italic">Authentication failing please check...</span>
                  </div>

                  <div>
                     <div className="flex justify-between items-center mb-4">
                       <label className="text-[8px] font-bold uppercase tracking-widest text-gray-400">Query</label>
                       <button className="text-[8px] font-bold text-[#EE3344] uppercase tracking-widest">+ Add Value</button>
                     </div>
                     <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center gap-3 shadow-sm">
                        <Database size={12} className="text-gray-400" />
                        <span className="text-[10px] font-medium text-gray-800">insert data</span>
                     </div>
                  </div>
                </div>
              </div>

              {/* Cursor Mockup */}
              <motion.div 
                animate={{ 
                  x: [400, 540, 540, 700, 400], 
                  y: [300, 420, 550, 400, 300] 
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="absolute z-50 pointer-events-none"
              >
                <div className="w-6 h-6 border-2 border-white drop-shadow-lg relative">
                  <svg viewBox="0 0 24 24" className="w-full h-full text-black fill-black">
                    <path d="M2.5 1.5l19 9.5-19 9.5z" />
                  </svg>
                  <div className="absolute left-6 top-6 bg-black text-white text-[8px] font-bold px-2 py-1 rounded shadow-lg whitespace-nowrap">
                    Sumuner
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative background circle */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#EE3344]/5 blur-[100px] rounded-full -z-10" />
            <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-gray-100/50 blur-[120px] rounded-full -z-10" />
          </motion.div>
        </div>
      </section>

      {/* Vision, Mission, Core Values Section (Shared Pic Match) */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          {/* Top Wide Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12"
          >
            <div className="bg-[#FAFAFA] rounded-[32px] md:rounded-[48px] p-8 md:p-20 text-center border border-gray-100 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.03)] relative overflow-hidden group">
              <div className="max-w-3xl mx-auto relative z-10">
                <h3 className="font-display text-2xl md:text-4xl lg:text-5xl text-black font-bold tracking-tight mb-8 leading-[1.1]">
                  Architecting the future through technical mastery and aesthetic resonance
                </h3>
                <p className="text-gray-400 text-xs md:text-base font-medium max-w-xl mx-auto leading-relaxed px-4">
                  We build high-fidelity digital experiences that define the next generation of global brands. Our solutions bridge the gap between complex engineering and human-centric design.
                </p>
              </div>
              {/* Decorative perspective background element */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none group-hover:opacity-[0.05] transition-opacity duration-1000">
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_#000_1px,_transparent_1px)] bg-[size:40px_40px]" />
              </div>
            </div>
          </motion.div>

          {/* Grid of 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="bg-[#FAFAFA] rounded-[48px] p-10 flex flex-col h-full border border-gray-100 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.02)] hover:shadow-xl transition-all duration-500 group"
            >
              <div className="h-64 mb-10 relative flex items-center justify-center overflow-hidden rounded-3xl bg-white">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop" 
                  alt="Mission"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
                  <div className="w-12 h-1 bg-black rounded-full" />
                </div>
              </div>
              <div className="px-4">
                <div className="w-10 h-1 bg-black mb-6 rounded-full" />
                <h4 className="font-display text-3xl font-bold text-black mb-6">Mission</h4>
                <p className="text-gray-500 text-sm leading-relaxed font-light">
                  Our mission is to be the primary architect of high-fidelity digital infrastructure and cinematic experiences for global visionaries.
                </p>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="bg-[#FAFAFA] rounded-[48px] p-10 flex flex-col h-full border border-gray-100 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.02)] hover:shadow-xl transition-all duration-500 group"
            >
              <div className="h-64 mb-10 relative flex items-center justify-center overflow-hidden rounded-3xl bg-white">
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop" 
                  alt="Vision"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                   <div className="w-24 h-24 rounded-full border-[10px] border-black/10 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-black/20" />
                   </div>
                </div>
              </div>
              <div className="px-4">
                <div className="w-10 h-1 bg-black mb-6 rounded-full" />
                <h4 className="font-display text-3xl font-bold text-black mb-6">vision</h4>
                <p className="text-gray-500 text-sm leading-relaxed font-light">
                  Our vision is to redefine the boundary between technical reality and creative imagination through the art of digital alchemy.
                </p>
              </div>
            </motion.div>

            {/* Core Value Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="bg-[#FAFAFA] rounded-[48px] p-10 flex flex-col h-full border border-gray-100 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.02)] hover:shadow-xl transition-all duration-500 group"
            >
              <div className="h-64 mb-10 relative flex items-center justify-center overflow-hidden rounded-3xl bg-white">
                <img 
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2680&auto=format&fit=crop" 
                  alt="Core Value"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                   <div className="w-32 h-32 bg-[#EE3344] rotate-45 rounded-2xl shadow-2xl opacity-80" />
                </div>
              </div>
              <div className="px-4">
                <div className="w-10 h-1 bg-black mb-6 rounded-full" />
                <h4 className="font-display text-3xl font-bold text-black mb-6">Core value</h4>
                <p className="text-gray-500 text-sm leading-relaxed font-light">
                  Our core values are rooted in technical precision, aesthetic resonance, and the relentless pursuit of digital excellence in every line of code.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Types Of Work We Do Section (Redesigned) */}
      <section className="py-40 bg-black relative overflow-hidden">
        <div className="container mx-auto px-6 mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#EE3344] font-mono text-[10px] uppercase tracking-[0.4em] block mb-6">Core Services</span>
            <h2 className="font-display text-3xl md:text-6xl lg:text-8xl text-white font-black uppercase tracking-tighter leading-tight">
              Types Of Work <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)' }}>We Do</span>
            </h2>
          </motion.div>
        </div>

        {/* Infinite Marquee Container */}
        <div className="relative flex overflow-hidden py-10 select-none">
          <motion.div 
            className="flex flex-nowrap gap-6 min-w-full"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              duration: 40, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {/* Doubling the items for a seamless loop */}
            {[...new Array(2)].map((_, listIdx) => (
              <React.Fragment key={listIdx}>
                {[
                  { title: 'Custom Web Dev', desc: 'Enterprise-grade web systems built with C# .NET and React mastery.', icon: Monitor },
                  { title: 'App Development', desc: 'High-performance iOS and Android applications with native fluid motion.', icon: Smartphone },
                  { title: 'UI/UX Design', desc: 'Psychology-driven interfaces that convert and engage through spatial depth.', icon: PenTool },
                  { title: 'Video Editing', desc: 'Cinematic storytelling and high-impact visual production for modern brands.', icon: Video },
                  { title: 'Graphic Design', desc: 'Distinctive brand identities and visual assets that command attention.', icon: Palette },
                  { title: 'Landing Pages', desc: 'Conversion-optimized entry points built with high-frequency design principles.', icon: FileText },
                  { title: 'Vibe Coding', desc: 'Next-generation AI-assisted development for aesthetic and rapid iterations.', icon: Sparkles },
                  { title: 'WP Solutions', desc: 'Custom WordPress architectures designed for speed and security.', icon: Globe },
                ].map((service, i) => (
                    <div
                      key={i}
                      onClick={() => setView('Case Studies', service.title)}
                      className="flex-shrink-0 w-[300px] md:w-[400px] group p-8 md:p-12 rounded-[32px] md:rounded-[40px] bg-[#0A0A0A] border border-white/5 hover:border-[#EE3344]/40 hover:bg-[#111111] transition-all duration-500 flex flex-col items-center text-center justify-center h-[350px] md:h-[450px] cursor-pointer"
                    >
                    <div className="relative mb-8 md:mb-12">
                      {/* 3D-like Icon Effect */}
                      <div className="absolute inset-0 bg-[#EE3344] blur-[40px] opacity-0 group-hover:opacity-20 transition-opacity" />
                      <div className="w-16 h-16 md:w-24 md:h-24 rounded-2xl md:rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center relative z-10 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                        <service.icon className="text-[#EE3344]" size={32} />
                      </div>
                    </div>
                    
                    <h3 className="font-display text-2xl md:text-3xl text-white font-bold mb-4 md:mb-6 uppercase tracking-tight">{service.title}</h3>
                    <p className="text-gray-500 font-light leading-relaxed text-sm md:text-base max-w-[280px]">
                      {service.desc}
                    </p>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </motion.div>
        </div>

        <div className="container mx-auto px-6 mt-20 flex justify-center">
          <button 
            onClick={() => setView('Case Studies', null)}
            className="group flex items-center gap-3 text-white font-bold uppercase tracking-widest text-[10px] hover:text-[#EE3344] transition-colors bg-white/5 px-8 py-4 rounded-full border border-white/10"
          >
            Explore All Masterpieces <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Why Devaas Different Section (Screenshot Match) */}
      <section className="py-40 bg-black relative overflow-hidden">
        {/* Glowing background effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#EE3344] opacity-[0.05] blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[#EE3344] font-mono text-[10px] uppercase tracking-[0.4em] block mb-6">Why Choose Us</span>
              <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-gray-500 font-bold mb-4">Know What</h2>
              <h3 className="font-display text-4xl md:text-6xl lg:text-8xl text-white font-black uppercase tracking-tighter leading-tight">
                We Do <span className="text-[#EE3344]">Differently</span>
              </h3>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Our Mastery Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-[#0A0A0A] border border-white/10 rounded-[40px] p-10 md:p-16 relative overflow-hidden group hover:border-[#EE3344]/30 transition-colors"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#EE3344] opacity-[0.03] blur-[80px] rounded-full -mr-32 -mt-32" />
              
              <div className="flex items-center gap-4 mb-14">
                <div className="w-16 h-16 bg-[#EE3344] rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(238,51,68,0.3)]">
                  <Zap size={32} className="text-white fill-white" />
                </div>
                <h4 className="font-display text-3xl font-black text-white uppercase tracking-tighter">DEVAAS MASTERY</h4>
              </div>

              <div className="space-y-6 mb-16">
                {[
                  "Mastery in C# .NET & modern React architectures",
                  "Aesthetic-first 'Vibe Coding' for high-fidelity UI",
                  "Full-spectrum Creative Lab (Video, UI, Graphics)",
                  "Result-driven architecture built for speed & SEO",
                  "Direct architectural leadership (no junior middlemen)",
                  "24/7 Priority Support for mission-critical systems"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-white text-lg font-light">
                    <div className="w-6 h-6 rounded-full bg-[#EE3344]/10 border border-[#EE3344]/30 flex items-center justify-center flex-shrink-0">
                      <Check size={14} className="text-[#EE3344]" />
                    </div>
                    {item}
                  </div>
                ))}
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                <p className="text-[#EE3344] font-mono text-[10px] uppercase tracking-[0.4em] mb-6">Mastery Bonuses:</p>
                <div className="space-y-4">
                  {[
                    "Free Cloud Architecture & Performance Audit",
                    "1-on-1 Strategy Session with Abdullah Al Maswud",
                    "6 Months of Complimentary Priority Maintenance"
                  ].map((bonus, i) => (
                    <div key={i} className="flex items-center gap-4 text-white font-medium text-sm">
                      <div className="w-5 h-5 rounded-full bg-[#EE3344] flex items-center justify-center flex-shrink-0">
                        <Check size={12} className="text-white" />
                      </div>
                      {bonus}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Other Agencies Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-black border border-white/5 rounded-[40px] p-10 md:p-16 flex flex-col"
            >
              <h4 className="font-display text-4xl font-bold text-white mb-14 uppercase tracking-tighter">Legacy Companies</h4>
              
              <div className="space-y-8">
                {[
                  "Generic slow themes that fail Core Web Vitals",
                  "Outsourced junior devs with no architectural depth",
                  "Weak visual storytelling that fails to convert",
                  "Hidden fees for simple hosting or maintenance",
                  "No AI-integration strategy for modern efficiency",
                  "Generic one-size-fits-all 'ready-made' solutions",
                  "Delayed response cycles and poor tech communication",
                  "UI that looks clean but lacks aesthetic soul"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 text-gray-500 text-lg font-light">
                    <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                      <X size={18} className="text-gray-700" />
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-40 bg-white overflow-hidden relative">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-24 relative z-10">
          <div className="lg:w-1/2">
            <span className="text-[#EE3344] font-mono text-[10px] uppercase tracking-[0.4em] block mb-6">The Arsenal</span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-7xl text-black font-black uppercase tracking-tighter leading-tight mb-8">
              Forged with <br /> <span className="text-transparent font-serif italic" style={{ WebkitTextStroke: '1px #EE3344' }}>Mastery.</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-500 mb-12 font-light leading-relaxed max-w-lg px-4">              We don't just use tools; we master them. From enterprise C# .NET architectures to aesthetic Vibe Coding, our stack is curated for durability.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { label: 'C# .NET', icon: Server },
                { label: 'React', icon: Zap },
                { label: 'WordPress', icon: Globe },
                { label: 'PHP / Laravel', icon: Layers },
                { label: 'Vibe Coding', icon: Sparkles },
                { label: 'Modern UI', icon: Palette },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-gray-50 border border-gray-100 px-4 py-3 rounded-xl group hover:border-[#EE3344]/20 transition-colors">
                  <item.icon className="text-[#EE3344]/40 group-hover:text-[#EE3344] transition-colors" size={16} />
                  <span className="font-bold text-xs uppercase tracking-widest">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 relative h-[500px] flex items-center justify-center">
             <div className="absolute w-[400px] h-[400px] border border-gray-100 rounded-full animate-[spin_60s_linear_infinite]" />
             <div className="absolute w-[250px] h-[250px] border border-gray-100 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
             
             <div className="w-32 h-32 bg-white border border-gray-100 rounded-[32px] shadow-2xl flex items-center justify-center relative z-20">
               <Zap size={40} className="text-[#EE3344]" />
             </div>

             {[
               { icon: Server, label: '.NET', delay: 0 },
               { icon: Zap, label: 'React', delay: 0.1 },
               { icon: Globe, label: 'WP', delay: 0.2 },
               { icon: Layers, label: 'Laravel', delay: 0.3 },
               { icon: Sparkles, label: 'Vibe', delay: 0.4 },
               { icon: Palette, label: 'UI', delay: 0.5 },
             ].map((item, i) => (
               <motion.div
                 key={i}
                 className="absolute"
                 animate={{
                   rotate: 360,
                 }}
                 transition={{
                   duration: 30,
                   repeat: Infinity,
                   ease: "linear",
                   delay: -i * 5
                 }}
                 style={{ width: '100%', height: '100%' }}
               >
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center" style={{ transform: `rotate(${i * 60}deg) translateY(-180px)` }}>
                    <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-100 hover:scale-110 transition-transform cursor-pointer" style={{ transform: `rotate(-${i * 60}deg)` }}>
                      <item.icon size={20} className="text-black" />
                    </div>
                 </div>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="py-40 relative bg-black overflow-hidden min-h-[600px] flex items-center">
        {/* Dotted Pattern Map - Using a high-quality CSS dotted pattern overlaid on a world map image */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              filter: 'invert(1) brightness(2)',
              maskImage: 'radial-gradient(circle, white 0.5px, transparent 1px)',
              WebkitMaskImage: 'radial-gradient(circle, white 0.5px, transparent 1px)',
              maskSize: '6px 6px',
              WebkitMaskSize: '6px 6px'
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-xl">
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
             >
               <span className="text-secondary font-display text-sm uppercase tracking-[0.4em] block mb-4">At a Glance</span>
               <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-white font-bold leading-tight">
                 DEVAAS is a global <span className="text-surface-tint">digital alchemy</span> group.
               </h2>
             </motion.div>
          </div>
        </div>

        {/* Pulsating Points */}
        <div className="absolute inset-0 pointer-events-none">
          {[
            { x: '48%', y: '32%', name: 'London' },
            { x: '64%', y: '42%', name: 'Dubai' },
            { x: '75%', y: '58%', name: 'Bangalore' },
            { x: '82%', y: '68%', name: 'Singapore' },
            { x: '88%', y: '35%', name: 'Tokyo' },
          ].map((point, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              className="absolute"
              style={{ left: point.x, top: point.y }}
            >
              <div className="relative flex items-center justify-center">
                {/* Outer Pulse */}
                <motion.div
                  animate={{ scale: [1, 2, 1], opacity: [0.6, 0, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute w-8 h-8 rounded-full bg-[#EE3344]/30"
                />
                {/* Inner Glow */}
                <div className="w-2.5 h-2.5 rounded-full bg-[#EE3344] shadow-[0_0_15px_rgba(238,51,68,0.8)]" />
                
                {/* Tooltip-like label */}
                <div className="absolute top-4 whitespace-nowrap text-[10px] text-white font-bold uppercase tracking-widest opacity-50">
                  {point.name}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Universe Section - Redesigned as requested */}
      <section className="py-40 relative bg-black overflow-hidden min-h-screen">
        {/* Subtle Star Field Background */}
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[size:40px_40px]" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Top Heading */}
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-4xl md:text-6xl text-white font-bold text-center mb-40 leading-tight"
          >
            Building a complete ecosystem <br /> for modern businesses worldwide
          </motion.h2>

          <div className="relative mt-20 h-[800px]">
            {/* Central Large Globe */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full lg:w-[120%] aspect-square max-w-[1200px] pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="w-full h-full relative"
              >
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop"
                  alt="Globe"
                  className="w-full h-full object-contain rounded-full opacity-60 mix-blend-screen"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent opacity-40" />
              </motion.div>
            </div>

            {/* Left Content Column */}
            <div className="absolute top-0 left-0 max-w-sm z-20">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-[#EE3344] font-mono text-[10px] uppercase tracking-[0.4em] block mb-10">
                  DEVAAS SOLUTIONS, UP CLOSE
                </span>
                <p className="text-gray-400 text-sm leading-relaxed mb-40">
                  Revolutionizing digital infrastructure was just the start. <br />
                  We also built a culture that inspires <br />
                  innovation, scalability, and excellence on a <br />
                  global scale.
                </p>
                <h3 className="font-display text-6xl md:text-8xl text-white font-bold leading-[0.9]">
                  Empowering <br />
                  the digital <br />
                  economy
                </h3>
              </motion.div>
            </div>

            {/* Right Content / Cards Column */}
            <div className="absolute top-0 right-0 z-20 hidden lg:flex flex-col items-end gap-10">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-[#EE3344] font-mono text-[10px] uppercase tracking-[0.4em] flex items-center gap-2 mb-10"
              >
                OUR ECOSYSTEM <ArrowRight size={14} className="rotate-90" />
              </motion.div>

              {/* Card 1: WE ARE DEVAAS */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 w-80"
              >
                <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500 block mb-2">WE ARE</span>
                <h4 className="text-4xl font-display font-bold text-white mb-6" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)', color: 'transparent' }}>DEVAAS</h4>
                <p className="text-xs text-gray-300 leading-relaxed">
                  With our cutting-edge AI and SaaS products, we provide businesses the best technological foundation possible.
                </p>
              </motion.div>

              {/* Card 2: 250+ Engineers */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 w-80"
              >
                <h4 className="text-xl font-display font-bold text-white mb-6">250+ Engineers</h4>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Simplifying challenges, innovating solutions, and crafting the best high-performance code for our clients.
                </p>
              </motion.div>

              {/* Card 3: Red Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-[#EE3344] p-8 rounded-2xl w-80"
              >
                <h4 className="text-xl font-display font-bold text-white mb-6">Scaling <br /> 500+ Clients</h4>
                <p className="text-xs text-white/90 leading-relaxed">
                  Establishing the most robust digital platforms for enterprises across the globe.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Bottom Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pt-20 border-t border-white/10 mt-20">
            <div>
              <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-gray-500 block mb-6">UPTIME GUARANTEE</span>
              <div className="font-display text-5xl text-white font-bold">99.9<span className="text-gray-600 text-3xl align-top">%</span></div>
            </div>
            <div>
              <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-gray-500 block mb-6">PROJECTS DELIVERED</span>
              <div className="font-display text-5xl text-white font-bold">1.2 K<span className="text-gray-600 text-3xl align-top">+</span></div>
            </div>
            <div>
              <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-gray-500 block mb-6">GLOBAL HUB LOCATIONS</span>
              <div className="font-display text-5xl text-white font-bold">12</div>
            </div>
            <div className="md:col-span-1">
              <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-gray-500 block mb-6">MISSION & VISION</span>
              <p className="text-gray-300 text-sm leading-relaxed">
                To revolutionize global software development with cutting-edge AI and seamless user experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section - Added as requested */}
      <section className="py-40 relative bg-black overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-[#EE3344]/10 blur-[150px] rounded-full" />
        <div className="absolute -bottom-20 -right-20 w-[600px] h-[600px] bg-purple-900/20 blur-[150px] rounded-full" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto mb-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 text-gray-500 font-mono text-[10px] uppercase tracking-[0.4em] mb-8">
                DEVAAS JOURNEY <span className="w-8 h-[1px] bg-gray-700" />
              </div>
              <h2 className="font-display text-5xl md:text-6xl text-white font-bold leading-tight">
                Forging foundations, <br /> scaling the infinite
              </h2>
            </motion.div>
          </div>

          <div className="relative pt-12 pb-24 overflow-x-auto modern-scroll modern-scroll-dark">
            {/* Timeline Line */}
            <div className="absolute top-[60px] left-0 min-w-full h-[1px] bg-white/10" />

            {/* Timeline Items */}
            <div className="flex gap-12 md:gap-24 px-4 min-w-max">
              {[
                { year: '2020', description: 'Planning and laying the groundwork for a new digital era.' },
                { year: '2021', description: 'Started building our core infrastructure and assembling the tribe.' },
                { year: '2022', description: 'Still building, working, and innovating across multiple domains.' },
                { year: '2023', description: 'Rebuilding and refining our vision for deeper impact.' },
                { year: '2024', description: 'Pivoted our architecture to handle next-gen scale and complexity.' },
                { year: '2025', description: 'Developed something outstanding that redefined our standards.' },
                { year: '2026', description: 'Improving and planning something bigger worldwide.' }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="relative pt-8 w-60 md:w-72"
                >
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00FFBB] shadow-[0_0_10px_#00FFBB]" />
                    <span className="text-[#00FFBB] font-mono text-xs font-bold leading-none">{item.year}</span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Worldwide Community Section - As requested by user */}
      <section className="py-40 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl md:text-5xl text-black font-bold mb-8"
          >
            A Worldwide Network of Innovation
          </motion.h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-20 font-light">
            We've deployed digital solutions for industries on every continent, providing the high-frequency infrastructure needed to lead in the digital age.
          </p>

          <div className="relative max-w-5xl mx-auto h-[400px]">
            {[
              { id: 'de', name: 'Germany', x: '10%', y: '10%', rotate: -8 },
              { id: 'ar', name: 'Argentina', x: '25%', y: '25%', rotate: 12 },
              { id: 'es', name: 'Spain', x: '12%', y: '45%', rotate: -5 },
              { id: 'fr', name: 'France', x: '28%', y: '58%', rotate: 8 },
              { id: 'br', name: 'Brazil', x: '45%', y: '48%', rotate: -2 },
              { id: 'ca', name: 'Canada', x: '62%', y: '45%', rotate: 6 },
              { id: 'ng', name: 'Nigeria', x: '78%', y: '30%', rotate: 15 },
              { id: 'gb', name: 'United Kingdom', x: '22%', y: '80%', rotate: -10 },
              { id: 'nl', name: 'Netherlands', x: '48%', y: '75%', rotate: 4 },
              { id: 'tr', name: 'Türkiye', x: '68%', y: '78%', rotate: -6 },
              { id: 'ae', name: 'UAE', x: '82%', y: '75%', rotate: 10 },
              { id: 'it', name: 'Italy', x: '40%', y: '90%', rotate: -3 },
              { id: 'za', name: 'South Africa', x: '58%', y: '92%', rotate: 7 },
              { id: 'sg', name: 'Singapore', x: '76%', y: '90%', rotate: -2 },
            ].map((country, i) => (
              <motion.div
                key={country.id}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="absolute bg-white px-5 py-3 rounded-full flex items-center gap-3 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 hover:shadow-xl transition-shadow cursor-default"
                style={{ 
                  left: country.x, 
                  top: country.y,
                  transform: `rotate(${country.rotate}deg)`
                }}
              >
                <img 
                  src={`https://flagcdn.com/w40/${country.id}.png`} 
                  alt={country.name}
                  className="w-8 h-8 object-cover rounded-full shadow-sm"
                  referrerPolicy="no-referrer"
                />
                <span className="font-mono text-sm font-semibold text-black tracking-tight">{country.name}</span>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute left-[8%] bottom-[5%] bg-black text-white px-8 py-4 rounded-full font-bold text-sm shadow-2xl z-20"
            >
              156+ more
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Engagement Section - As requested by user */}
      <section className="py-40 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-black font-display text-xs uppercase tracking-[0.4em] flex items-center gap-4 mb-6">
                EXPLORE EVENTS <span className="w-12 h-[1px] bg-black" />
              </span>
              <h2 className="font-display text-5xl md:text-7xl text-black font-bold leading-tight">
                Going global – <br /> engage & connect
              </h2>
            </div>
            <div className="lg:text-right flex flex-col items-start lg:items-end gap-8 pt-4">
              <p className="text-gray-600 text-lg max-w-xs">
                Building and investing in sustainable communities, cultures, and growth.
              </p>
              <button className="px-8 py-3 bg-[#EE3344] text-white font-bold rounded-full flex items-center gap-2 hover:bg-black transition-all group">
                Read more <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-3 h-[600px]">
            {/* Main large visual - Diving */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="col-span-12 lg:col-span-7 rounded-[32px] overflow-hidden relative group"
            >
              <img 
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2670&auto=format&fit=crop" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                alt="Community Event"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </motion.div>

            {/* Vertical panels */}
            {[
              "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2670&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2670&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2532&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2670&auto=format&fit=crop"
            ].map((img, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + (i * 0.1), duration: 0.8 }}
                className="hidden lg:block lg:col-span-1 plus-card rounded-[24px] overflow-hidden relative group"
              >
                <img 
                   src={img} 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
                   alt="Community Moment"
                   referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
              </motion.div>
            ))}
            
            {/* The final dark contrast panel */}
            <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.6, duration: 0.8 }}
               className="hidden lg:block lg:col-span-1 rounded-[24px] bg-[#050505] flex items-center justify-center p-4 border border-white/10"
            >
              <div className="rotate-90 whitespace-nowrap text-[10px] text-white/40 font-bold uppercase tracking-[0.5em]">
                GLOBAL REACH — SINCE 2024
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-surface-container-low overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-secondary font-display text-xs uppercase tracking-[0.3em]">Proof of Concept</span>
              <h2 className="font-display text-5xl text-white mt-4">Voices of Alchemy</h2>
            </div>
            <div className="flex gap-4">
              <button className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center hover:bg-white/5 transition-all">
                <ArrowLeft size={20} />
              </button>
              <button className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center bg-surface-tint text-on-primary">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <GlassCard key={i} className="flex flex-col h-full">
                <div className="text-surface-tint text-4xl mb-6">"</div>
                <p className="text-white text-lg mb-8 italic flex-grow">"{t.quote}"</p>
                <div className="flex items-center gap-4">
                  <img src={t.avatar} alt={t.author} className="w-12 h-12 rounded-full object-cover" referrerPolicy="no-referrer" />
                  <div>
                    <h4 className="font-display text-white font-bold">{t.author}</h4>
                    <p className="text-on-surface-variant text-xs uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-40 bg-white relative overflow-hidden">
        {/* Background Decorative Element */}
        <div className="absolute top-20 right-[-100px] opacity-10 pointer-events-none">
          <svg width="600" height="600" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 100 Q 300 50 500 300 T 100 500" stroke="#EE3344" strokeWidth="2" fill="none" strokeDasharray="10 10" />
            <path d="M50 150 Q 250 100 450 350 T 50 550" stroke="#EE3344" strokeWidth="1" fill="none" strokeDasharray="5 5" />
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <motion.h2 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="font-display text-7xl md:text-9xl text-black font-black uppercase tracking-tighter"
            >
              FAQ's
            </motion.h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {[
              { q: 'How long does a typical full-stack project take?', a: 'Timeline varies by complexity, but most enterprise-grade MVPs are delivered within 8-12 weeks using our agile "Vibe Coding" framework.' },
              { q: 'Do you provide post-launch maintenance?', a: 'Yes, we offer comprehensive 24/7 priority support and cloud maintenance packages to ensure 99.9% uptime for your mission-critical systems.' },
              { q: 'Can you work with our existing technical team?', a: 'Absolutely. We often act as a high-fidelity creative lab or technical extension, integrating seamlessly with your internal architects.' },
              { q: 'What industries do you specialize in?', a: 'We specialize in Fintech, E-commerce, AI SaaS, and Digital Entertainment, but our architectural principles apply to any high-scale digital product.' },
              { q: 'How do I start a project with Devaas?', a: 'Simply reach out via our contact page. We’ll schedule a technical strategy session within 24 hours to blueprint your vision.' }
            ].map((faq, i) => (
              <FAQItem key={i} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>

        {/* Decorative Redish shape to match the original image design elements */}
        <div className="absolute bottom-[-100px] left-[-150px] w-80 h-80 bg-[#EE3344] rounded-full flex items-center justify-center opacity-90 hidden md:flex">
          <div className="w-40 h-40 bg-white rounded-full opacity-20" />
        </div>
      </section>

      {/* CTA section */}
      <section className="py-40 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-surface-tint/10 to-transparent" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <SectionHeader title="Ready to build your next digital product?" />
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto mb-12">
            Stop dreaming and start deploying. Let's create the future of your industry together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button 
              onClick={() => setView('About')}
              className="px-12 py-5 bg-white text-black font-bold rounded-full hover:bg-surface-tint hover:text-white transition-all"
            >
              Start Your Project
            </button>
            <button 
              onClick={() => setView('Services')}
              className="px-12 py-5 border border-white/20 text-white font-bold rounded-full hover:bg-white/5 transition-all"
            >
              View Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
