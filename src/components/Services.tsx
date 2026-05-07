/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Smartphone, Cloud, BrainCircuit, Layout, Lightbulb, PenTool, Code, CheckCircle, Rocket, TrendingUp, Mail, Send, GraduationCap, HeartPulse, Truck, Landmark, Diamond, Factory, ArrowRight, ShieldCheck, Zap, Monitor, Video, Palette, FileText, Server, Globe, Sparkles } from 'lucide-react';
import { GlassCard, SectionHeader } from './Common';

const services = [
  { 
    title: 'Custom Web Dev', 
    description: 'Bespoke web architectures built with C# .NET, PHP, Laravel, and React for enterprise-scale performance.', 
    icon: Monitor, 
    color: 'text-[#EE3344]',
    borderColor: 'border-[#EE3344]/30'
  },
  { 
    title: 'App Development', 
    description: 'High-performance iOS and Android applications crafted with native precision and fluid user experiences.', 
    icon: Smartphone, 
    color: 'text-white',
    borderColor: 'border-white/30'
  },
  { 
    title: 'UI/UX Designer', 
    description: 'Psychology-driven design systems that prioritize human intuition, accessibility, and high-end aesthetics.', 
    icon: PenTool, 
    color: 'text-[#EE3344]',
    borderColor: 'border-[#EE3344]/30'
  },
  { 
    title: 'Video Editor', 
    description: 'Professional-grade cinematic production, motion graphics, and storytelling for digital brands.', 
    icon: Video, 
    color: 'text-white',
    borderColor: 'border-white/30'
  },
  { 
    title: 'Graphic Designer', 
    description: 'Distinctive visual identities, marketing assets, and brand language that command authority in any industry.', 
    icon: Palette, 
    color: 'text-[#EE3344]',
    borderColor: 'border-[#EE3344]/30'
  },
  { 
    title: 'Landing Pages', 
    description: 'Conversion-optimized entry points built with WordPress, React, or custom PHP for maximum impact.', 
    icon: FileText, 
    color: 'text-white',
    borderColor: 'border-white/30'
  },
  { 
    title: 'Vibe Coding', 
    description: 'Next-generation AI-assisted development that focuses on aesthetic harmony and rapid iteration cycles.', 
    icon: Sparkles, 
    color: 'text-[#EE3344]',
    borderColor: 'border-[#EE3344]/30'
  },
  { 
    title: 'WordPress Experts', 
    description: 'Custom themes and high-performance WP architectures designed for speed, security, and scalability.', 
    icon: Globe, 
    color: 'text-white',
    borderColor: 'border-white/30'
  },
];

const steps = [
  { title: 'Discovery', subtitle: 'Conceptualization', icon: Lightbulb },
  { title: 'Strategy', subtitle: 'Architecture', icon: PenTool },
  { title: 'Design', subtitle: 'Prototyping', icon: PenTool },
  { title: 'Engineering', subtitle: 'Build Phase', icon: Code },
  { title: 'Optimization', subtitle: 'Refinement', icon: CheckCircle },
  { title: 'Deployment', subtitle: 'Scale-out', icon: Rocket },
  { title: 'Evolution', subtitle: 'Maintenance', icon: TrendingUp },
];

const industries = [
  { label: 'Fintech', icon: Landmark },
  { label: 'Cloud Infrastructure', icon: Cloud },
  { label: 'Cybersecurity', icon: ShieldCheck },
  { label: 'Enterprise AI', icon: BrainCircuit },
  { label: 'E-commerce', icon: Smartphone },
  { label: 'Web3 & Blockchain', icon: Zap },
];

export default function Services({ setView }: { setView: (view: any) => void }) {
  return (
    <div className="pt-20 bg-black min-h-screen">
      {/* Header */}
      <section className="py-24 text-center px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-[#EE3344] font-mono text-[10px] uppercase tracking-[0.4em] block mb-6">OUR SOLUTIONS</span>
          <h1 className="font-display text-4xl md:text-6xl lg:text-8xl text-white font-bold mb-8">Engineering the <br /><span className="text-[#EE3344]">limitless</span></h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Precision-engineered digital experiences for those who demand excellence. We transform complexity into high-end refined software.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-32 container mx-auto px-6">
        <div className="flex items-center gap-4 text-gray-500 font-mono text-[10px] uppercase tracking-[0.4em] mb-12">
            CORE CAPABILITIES <span className="w-8 h-[1px] bg-gray-700" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <GlassCard key={i} className="group overflow-hidden bg-white/5 border-white/5">
               <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#EE3344] to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
               <service.icon className={`${service.color} mb-8`} size={48} />
               <h3 className="font-display text-2xl text-white font-bold mb-4">{service.title}</h3>
               <p className="text-gray-400 font-light leading-relaxed mb-6">{service.description}</p>
               <button 
                onClick={() => setView('Case Studies')}
                className={`${service.color} text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity`}
               >
                 Explore <ArrowRight size={14} />
               </button>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Client Journey */}
      <section className="py-32 container mx-auto px-6">
        <GlassCard className="py-16 px-12 relative overflow-hidden bg-white/5 border-white/5" tilt={false}>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />
          <div className="relative z-10">
            <div className="flex items-center gap-4 text-gray-500 font-mono text-[10px] uppercase tracking-[0.4em] mb-12">
                THE DEVAAS PROCESS <span className="w-8 h-[1px] bg-gray-700" />
            </div>
            <div className="relative flex flex-col md:flex-row justify-between items-center gap-12 pt-10">
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10 hidden md:block" />
              {steps.map((step, i) => (
                <div key={i} className="relative z-10 flex flex-col items-center group text-center">
                  <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center mb-4 transition-all group-hover:border-[#EE3344] border border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                    <step.icon className="text-white group-hover:text-[#EE3344] transition-colors" size={18} />
                  </div>
                  <h4 className="font-display text-white font-bold text-sm">{step.title}</h4>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-2">{step.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </GlassCard>
      </section>

      {/* Industries */}
      <section className="py-32 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl text-white font-bold">Target Sectors</h2>
          <p className="text-gray-400 text-base md:text-lg mt-4 font-light">Where we apply our technological mastery.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {industries.map((ind, i) => (
            <GlassCard 
              key={i} 
              className="p-8 flex flex-col items-center group hover:bg-[#EE3344]/5 cursor-pointer bg-white/5 border-white/5"
              onClick={() => setView('Industries')}
            >
              <ind.icon className="text-gray-500 group-hover:text-[#EE3344] mb-4 transition-colors" size={32} />
              <span className="font-display text-xs font-bold uppercase tracking-widest text-white">{ind.label}</span>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* CTA & Newsletter */}
      <section className="py-32 container mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <GlassCard className="lg:col-span-2 p-12 flex flex-col justify-between group h-[400px] border-white/5 bg-white/5" tilt={false}>
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop" 
            alt="Futuristic landscape" 
            className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-110 transition-transform duration-[2000ms]"
          />
          <div className="relative z-10">
            <h2 className="font-display text-3xl md:text-5xl text-white font-bold mb-6">Ready to scale?</h2>
            <p className="text-gray-400 text-base md:text-lg max-w-md font-light leading-relaxed">Our collective of engineers is ready to transform your vision into a high-performance reality.</p>
          </div>
          <div className="relative z-10 mt-12">
            <button 
              onClick={() => setView('About')}
              className="bg-[#EE3344] text-white px-10 py-4 rounded-full font-bold hover:scale-105 transition-all shadow-[0_0_30px_rgba(238,51,68,0.3)]"
            >
              Start Your Project
            </button>
          </div>
        </GlassCard>
        
        <div className="bg-[#EE3344]/5 border border-[#EE3344]/20 p-12 rounded-[40px] flex flex-col justify-center items-center text-center">
          <Mail className="text-[#EE3344] mb-6" size={48} />
          <h3 className="font-display text-2xl text-white font-bold mb-4">Newsletter</h3>
          <p className="text-gray-400 mb-8 font-light text-sm">Get engineering insights directly to your inbox.</p>
          <div className="w-full relative">
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full bg-black/40 border border-white/10 rounded-full px-6 py-4 text-white focus:outline-none focus:border-[#EE3344] text-sm"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#EE3344] text-white p-2.5 rounded-full hover:scale-110 transition-transform">
              <Send size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
