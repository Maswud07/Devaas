/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { GlassCard } from './Common';

const cases = [
  {
    id: 'web-dev',
    type: 'logo',
    title: 'Web Dev',
    text: 'dv',
    sub: '01',
    bg: 'bg-[#EE3344]',
    textColor: 'text-white',
    brand: 'Devaas Solutions'
  },
  {
    id: 'abdullah',
    type: 'info',
    name: 'Abdullah Al Maswud',
    role: 'Lead Architect, Web Systems',
    email: 'contact@devaas.com',
    location: 'Sylhet, Bangladesh',
    bg: 'bg-[#1A1A1A]',
    title: 'Enterprise Portals'
  },
  {
    id: 'app-dev',
    type: 'logo',
    title: 'App Dev',
    text: 'dv',
    sub: '02',
    bg: 'bg-[#0A0A0A]',
    textColor: 'text-white',
    brand: 'Mobile Labs'
  },
  {
    id: 'thorne',
    type: 'info',
    name: 'M. Thorne',
    role: 'Product Lead, Mobile Labs',
    email: 'labs@devaas.com',
    location: 'Silicon Valley, CA',
    bg: 'bg-[#111111]',
    title: 'iOS & Android'
  },
  {
    id: 'uiux-design',
    type: 'logo',
    title: 'UIUX Design',
    text: 'dv',
    sub: 'UX',
    bg: 'bg-[#EE3344]',
    textColor: 'text-white',
    brand: 'Aesthetic Resonance'
  },
  {
    id: 'sumuner',
    type: 'info',
    name: 'Sumuner',
    role: 'Creative Director, Devaas',
    email: 'design@devaas.com',
    location: 'Dubai, UAE',
    bg: 'bg-[#1A1A1A]',
    title: 'Interface Mastery'
  },
  {
    id: 'graphic-design',
    type: 'logo',
    title: 'Graphic Design',
    text: 'gd',
    sub: '04',
    bg: 'bg-[#22C55E]',
    textColor: 'text-white',
    brand: 'Visual Systems'
  },
  {
    id: 'video-edit',
    type: 'logo',
    title: 'Video Editing',
    text: 've',
    sub: '05',
    bg: 'bg-[#F97316]',
    textColor: 'text-white',
    brand: 'Motion Labs'
  },
  {
    id: 'wp-solutions',
    type: 'logo',
    title: 'WP Solutions',
    text: 'wp',
    sub: '06',
    bg: 'bg-[#06B6D4]',
    textColor: 'text-white',
    brand: 'Architecture'
  }
];

export default function CaseStudies({ setView, selectedCategory }: { setView: (view: any, cat?: string | null) => void, selectedCategory?: string | null }) {
  const filteredCases = selectedCategory 
    ? cases.filter(cs => {
        const cat = selectedCategory.toLowerCase().trim();
        const title = cs.title.toLowerCase().trim();
        return title === cat || 
               (cat.includes('web') && title.includes('web')) ||
               (cat.includes('app') && title.includes('app')) ||
               (cat.includes('design') && title.includes('design')) ||
               (cat.includes('identity') && title.includes('identity')) ||
               (cat.includes('video') && title.includes('video'));
      })
    : cases;

  return (
    <div className="pt-20 bg-zinc-950 min-h-screen">
      <section className="py-24 container mx-auto px-6 relative">
        <div className="text-center mb-24 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="font-display text-4xl md:text-7xl lg:text-9xl text-white font-black uppercase tracking-tighter"
          >
            {selectedCategory ? selectedCategory : 'OUR WORKS'}
          </motion.h1>
          <p className="text-gray-500 font-medium tracking-[0.2em] mt-4 uppercase text-sm">Industrial Identity & Digital Craft</p>
          
          {selectedCategory && (
            <button 
              onClick={() => setView('Case Studies', null)}
              className="mt-8 text-[#EE3344] font-black uppercase tracking-widest text-[10px] hover:scale-105 transition-transform"
            >
              ← View All Archive
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCases.map((work, i) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className={`${(work as any).bg || 'bg-[#1A1A1A]'} aspect-[1.6/1] p-8 md:p-10 flex flex-col justify-between relative group overflow-hidden cursor-pointer border border-white/5 hover:border-white/20 transition-all duration-500 shadow-2xl`}
              onClick={() => setView('Case Studies', work.title)}
            >
              {(work as any).type === 'logo' ? (
                <>
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-white/60">{(work as any).brand}</p>
                      <h4 className="text-white font-display text-sm font-medium">{work.title}</h4>
                    </div>
                    <ArrowRight size={20} className="text-white/40 group-hover:text-white group-hover:scale-110 group-hover:rotate-[-45deg] transition-all" />
                  </div>
                  
                  <div className="flex items-baseline justify-center select-none">
                    <span className={`text-[80px] md:text-[120px] lg:text-[140px] font-display font-black leading-none tracking-tighter ${(work as any).textColor}`}>
                      {(work as any).text}
                    </span>
                    <span className={`text-[24px] md:text-[40px] lg:text-[50px] font-display font-black leading-none ml-1 ${(work as any).textColor} opacity-40`}>
                      {(work as any).sub}
                    </span>
                  </div>

                  <div className="flex justify-end">
                    <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <h3 className="text-white font-display text-xl font-black uppercase tracking-tight">{(work as any).name}</h3>
                      <p className="text-[9px] font-bold text-[#EE3344] uppercase tracking-widest leading-none">{(work as any).role}</p>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-[24px] font-display font-black text-white/10 italic">dv</span>
                      <span className="text-[8px] font-mono text-white/30 tracking-widest uppercase">system.dev</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="space-y-4">
                      <div>
                        <label className="text-[7px] font-bold uppercase tracking-widest text-white/30 block mb-1">Email</label>
                        <p className="text-[9px] text-white/70 font-mono">{(work as any).email}</p>
                      </div>
                      <div>
                        <label className="text-[7px] font-bold uppercase tracking-widest text-white/30 block mb-1">Location</label>
                        <p className="text-[9px] text-white/70 font-mono">{(work as any).location}</p>
                      </div>
                    </div>
                    <div className="flex flex-col justify-end items-end">
                       <div className="text-right">
                         <label className="text-[7px] font-bold uppercase tracking-widest text-[#EE3344] block mb-1">Project</label>
                         <p className="text-[12px] text-white font-display font-bold uppercase tracking-tight">{work.title}</p>
                       </div>
                    </div>
                  </div>

                  {/* Decorative bottom line */}
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#EE3344] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                </>
              )}
            </motion.div>
          ))}
        </div>

        {/* Interaction Hint */}
        <div className="text-center mt-20">
          <p className="text-gray-400 font-mono text-[10px] uppercase tracking-[0.4em] animate-pulse">Drag cards to explore masterpieces</p>
        </div>
      </section>

      {/* Metrics Banner */}
      <section className="py-20 bg-zinc-900/50 border-y border-white/5 mt-20">
        <div className="container mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-16">
           {[
             { label: 'Uptime Guarantee', value: '99.9%', color: 'text-[#EE3344]' },
             { label: 'Client Satisfaction', value: '100%', color: 'text-white' },
             { label: 'Growth Generated', value: '8.4x', color: 'text-[#EE3344]' },
             { label: 'Projects Shipped', value: '250+', color: 'text-white' }
           ].map((metric, i) => (
             <div key={i} className="text-center space-y-2">
               <div className={`font-display text-3xl md:text-5xl font-black ${metric.color}`}>{metric.value}</div>
               <div className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">{metric.label}</div>
             </div>
           ))}
        </div>
      </section>
    </div>
  );
}
