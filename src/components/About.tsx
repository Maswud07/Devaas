/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from 'motion/react';
import { Zap, ShieldCheck, Microscope, Code2, Users2, Sparkles, ArrowRight, ArrowLeft } from 'lucide-react';
import React, { useRef } from 'react';

const team = [
  {
    name: 'Abdullah Al Maswud',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop'
  },
  {
    name: 'Kawshar Ahmed',
    role: 'Chief Technology Officer',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2574&auto=format&fit=crop'
  },
  {
    name: 'Jakir Hossen',
    role: 'Senior Vice President (SVP) of Engineering',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2570&auto=format&fit=crop'
  },
  {
    name: 'Zareen Tasnim',
    role: 'Head of Content',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop'
  },
  {
    name: 'Sohan Zakaria',
    role: 'VP of Product',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2574&auto=format&fit=crop'
  },
  {
    name: 'Showkot Shawon',
    role: 'VP of Design',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2574&auto=format&fit=crop'
  }
];

const timeline = [
  { year: '2020', title: 'Strategic Planning', desc: 'Laying the groundwork and planning for a worldwide vision.' },
  { year: '2021', title: 'The Build Phase', desc: 'Started building our core infrastructure and assembling the initial team.' },
  { year: '2022', title: 'Innovation Streak', desc: 'Still building, working, and innovating across multiple software domains.' },
  { year: '2023', title: 'The Rebuild', desc: 'Rebuilding and refining our vision for deeper impact and better performance.' },
  { year: '2024', title: 'Architectural Pivot', desc: 'Changed our architecture to handle next-gen scale and global complexity.' },
  { year: '2025', title: 'Outstanding Growth', desc: 'Developed something truly outstanding that redefined enterprise standards.' },
  { year: '2026', title: 'Global Improvement', desc: 'Improving and planning something much bigger worldwide.' }
];

export default function About({ setView }: { setView: (view: any) => void }) {
  const containerRef = useRef(null);
  const heroImageRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroImageY = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
  const heroImageScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);

  const smoothEase = [0.22, 1, 0.36, 1];

  return (
    <div className="bg-white min-h-screen text-black font-sans overflow-x-hidden" ref={containerRef}>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 container mx-auto relative">
        <div className="flex flex-col items-center justify-center mb-24 relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center"
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#EE3344]/10 text-[#EE3344] rounded-lg text-[10px] font-bold uppercase tracking-widest mb-10 border border-[#EE3344]/20"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EE3344] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#EE3344]"></span>
              </span>
              Growing Every Day
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] uppercase tracking-tighter mb-4 flex flex-col items-center">
              <div className="overflow-hidden py-2">
                <motion.span 
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.2, ease: smoothEase }}
                  className="block"
                >
                  WE ARE
                </motion.span>
              </div>
              <div className="overflow-hidden py-2">
                <motion.span 
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.2, delay: 0.15, ease: smoothEase }}
                  className="block text-[#EE3344]"
                >
                  DEVAAS
                </motion.span>
              </div>
            </h1>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-40">
          <motion.div 
            style={{ y: heroImageY, scale: heroImageScale }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: smoothEase }}
            className="rounded-[60px] overflow-hidden aspect-[4/5] md:aspect-square relative group"
          >
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2670&auto=format&fit=crop" 
              className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
              alt="Team Work"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.2, ease: smoothEase }}
            className="flex flex-col justify-center p-6 md:p-12 lg:p-20"
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
              We believe good tools come from good thinking.
            </h2>
            <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed max-w-xl">
              DEVAAS started with a simple idea: build software that solves real problems without making work harder. Along the way, we've grown into a global team building carefully, learning constantly, and shipping with responsibility.
            </p>
            <motion.button 
              onClick={() => setView('Careers')}
              whileHover={{ x: 10 }}
              className="flex items-center gap-4 mt-12 text-[#EE3344] font-bold text-lg group"
            >
              Explore open positions <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-32 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16">
          {[
            { label: 'Years of Excellence', value: '05+' },
            { label: 'Team Members', value: '150+' },
            { label: 'Clients & Partners', value: '250+' }
          ].map((stat, i) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.15, ease: smoothEase }}
              className="text-center md:text-left"
            >
              <span className="text-gray-400 font-mono text-[10px] uppercase tracking-widest block mb-4">{stat.label}</span>
              <div className="text-5xl md:text-7xl font-black">{stat.value}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-6 mb-20 text-center">
          <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter mb-4 leading-tight">
            An endless <br /> evolution
          </h2>
          <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto font-light px-4">
            Serving millions of users across different products while maintaining stable systems, clear design, and dependable performance at scale.
          </p>
        </div>

        <div className="overflow-x-auto pb-20 modern-scroll modern-scroll-light">
          <div className="flex gap-20 px-6 min-w-max border-t border-gray-200 pt-16">
            {timeline.map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: smoothEase }}
                className="w-80 group relative"
              >
                <div className="absolute -top-[50px] left-0">
                   <div className="w-16 h-16 bg-black border-4 border-white rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:bg-[#EE3344] group-hover:scale-110 transition-all duration-500 shadow-xl">
                     {item.year}
                   </div>
                </div>
                <div className="pt-24">
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-500 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Step Inside Hero (Ollyo style) */}
      <section className="bg-[#EE3344] py-32 md:py-48 px-6 rounded-[40px] md:rounded-[80px] mx-4 md:mx-10 mb-40 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-white">
            <path d="M44.7,-76.4C58.2,-69.2,70.1,-58.5,80.1,-45.4C90.1,-32.3,98.2,-16.9,98.1,-1.2C98,14.5,89.7,30.3,79.5,44C69.3,57.7,57.1,69.2,43.2,77.2C29.4,85.2,13.8,89.6,-2.4,93.8C-18.7,98,-37.4,102.1,-52.1,95.1C-66.8,88.1,-77.6,70,-84.9,51.8C-92.2,33.5,-96.1,15.1,-94.1,-2.7C-92,-20.5,-84.1,-37.8,-72.6,-51.7C-61.1,-65.7,-46,-76.3,-31.2,-82.3C-16.3,-88.4,-1.8,-90,13.8,-83.4C29.4,-76.9,44.7,-76.4Z" transform="translate(100 100)" />
          </svg>
        </div>
        <div className="container mx-auto relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl text-white font-black leading-[1.1] uppercase tracking-tighter mb-12">
            Inside the <br /> alchemist's lab <br /> where ideas ignite.
          </h2>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="px-12 py-5 bg-black text-white font-bold rounded-full text-lg hover:bg-gray-900 transition-all font-mono tracking-widest text-xs uppercase"
          >
            Discover our culture
          </motion.button>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-40 bg-[#F4F4F4]">
        <div className="container mx-auto px-6">
          <div className="mb-24">
            <div className="inline-block px-4 py-1.5 bg-black text-white rounded-lg text-[10px] font-bold uppercase tracking-widest mb-6">
              Leadership
            </div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-6">
              The Alchemists.
            </h2>
          </div>
          <div className="flex overflow-x-auto no-scrollbar gap-10 pb-10">
            {team.map((member, i) => {
              const infoAbove = i % 2 === 0;
              return (
                <motion.div 
                  key={member.name}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.8, delay: i * 0.1, ease: smoothEase }}
                  className="flex-shrink-0 w-80 group flex flex-col cursor-pointer"
                  onClick={() => member.name === "Abdullah Al Maswud" && setView('CEO')}
                >
                  {infoAbove && (
                    <div className="mb-6 h-20">
                      <h3 className="text-2xl font-bold leading-tight group-hover:text-[#EE3344] transition-colors">{member.name}</h3>
                      <p className="text-gray-500 text-sm mt-1">{member.role}</p>
                    </div>
                  )}
                  <div className="aspect-[4/5] rounded-lg overflow-hidden relative">
                    <img 
                      src={member.image} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      alt={member.name}
                      referrerPolicy="no-referrer"
                    />
                    {member.name === "Abdullah Al Maswud" && (
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                        <div className="bg-white text-black px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform">
                          Read Thoughts
                        </div>
                      </div>
                    )}
                  </div>
                  {!infoAbove && (
                    <div className="mt-6 h-20">
                      <h3 className="text-2xl font-bold leading-tight group-hover:text-[#EE3344] transition-colors">{member.name}</h3>
                      <p className="text-gray-500 text-sm mt-1">{member.role}</p>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Celebrate Harder Section */}
      <section className="py-40 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.2, ease: smoothEase }}
            >
              <div className="inline-block px-4 py-1.5 bg-black text-white rounded-lg text-[10px] font-bold uppercase tracking-widest mb-8">
                Culture & Energy
              </div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[1.1] mb-8">
                Work hard. <br />
                Celebrate <span className="text-[#EE3344]">Harder.</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed mb-10 max-w-lg px-4">
                We believe in the power of shared experiences. From rooftop parties to global tours and immersive gaming nights, we build bonds that go beyond the code.
              </p>
              
              <div className="grid grid-cols-2 gap-10">
                <div>
                  <div className="text-4xl font-black mb-2">24+</div>
                  <div className="text-gray-400 uppercase text-[10px] tracking-widest font-bold">Annual Events</div>
                </div>
                <div>
                  <div className="text-4xl font-black mb-2">08</div>
                  <div className="text-gray-400 uppercase text-[10px] tracking-widest font-bold">Global Retreats</div>
                </div>
              </div>
            </motion.div>

            <div className="relative">
              {/* Stacked Images Grid */}
              <div className="grid grid-cols-2 gap-6">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: smoothEase }}
                  className="rounded-[40px] overflow-hidden aspect-[3/4] shadow-2xl relative group"
                >
                  <img src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2670&auto=format&fit=crop" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Party" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9, y: 60 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2, ease: smoothEase }}
                  className="rounded-[40px] overflow-hidden aspect-square shadow-2xl mt-12 relative group"
                >
                  <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2670&auto=format&fit=crop" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Event" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9, y: -20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.4, ease: smoothEase }}
                  className="rounded-[40px] overflow-hidden aspect-square shadow-2xl mt-[-40px] relative group"
                >
                  <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2670&auto=format&fit=crop" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Team" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.6, ease: smoothEase }}
                  className="rounded-[40px] overflow-hidden aspect-[3/4] shadow-2xl relative group"
                >
                  <img src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2670&auto=format&fit=crop" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Music" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Lifestyle Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
             <motion.div 
               whileHover={{ y: -10 }}
               className="md:col-span-2 bg-white rounded-[40px] p-10 border border-gray-100 shadow-sm flex flex-col justify-between"
             >
               <div>
                 <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center text-white mb-6">
                   <Zap size={24} />
                 </div>
                 <h3 className="text-3xl font-bold mb-4">Gaming Arena</h3>
                 <p className="text-gray-500 font-light">From e-sports tournaments to VR explorations, we keep the competitive spirit alive.</p>
               </div>
               <div className="mt-10 rounded-2xl overflow-hidden h-48">
                 <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2670&auto=format&fit=crop" className="w-full h-full object-cover" alt="Gaming" referrerPolicy="no-referrer" />
               </div>
             </motion.div>

             <motion.div 
               whileHover={{ y: -10 }}
               className="bg-[#EE3344] rounded-[40px] p-10 text-white flex flex-col justify-between"
             >
               <h3 className="text-3xl font-bold mb-6 italic uppercase tracking-tighter">Annual <br /> Tours</h3>
               <div className="text-6xl font-black mb-6">01.</div>
               <p className="font-light opacity-80">Every year, the tribe moves to a new geography to reset and rethink.</p>
             </motion.div>

             <motion.div 
               whileHover={{ y: -10 }}
               className="bg-black rounded-[40px] p-10 text-white flex flex-col justify-between"
             >
               <h3 className="text-3xl font-bold mb-6">Music & <br /> Vibes</h3>
               <div className="w-16 h-16 bg-[#EE3344] rounded-full flex items-center justify-center mb-6">
                 <Sparkles size={32} />
               </div>
               <p className="font-light opacity-60">Curated playlists and live sessions are part of our rhythm.</p>
             </motion.div>
          </div>
        </div>
      </section>

      {/* Global Momentum / Growing Section */}
      <section className="py-40 bg-black text-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-end mb-32">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.2, ease: smoothEase }}
            >
              <div className="flex items-center gap-3 text-[#EE3344] font-bold text-[10px] uppercase tracking-widest mb-10">
                <span className="w-12 h-[1px] bg-[#EE3344]" />
                GLOBAL MOMENTUM
              </div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[1.1] mb-10">
                Scaling <br /> <span className="text-[#EE3344]">Up.</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-400 font-light max-w-lg mb-12 px-4">
                We're not just existing; we're accelerating. Our footprint is expanding across borders as we redefine what engineering excellence looks like globally.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-8 w-full">
              <div className="p-6 md:p-10 bg-white/5 rounded-[32px] md:rounded-[40px] border border-white/10 hover:border-[#EE3344]/50 transition-colors group">
                <div className="text-3xl md:text-5xl font-black mb-2 group-hover:text-[#EE3344] transition-colors">40%</div>
                <div className="text-gray-500 uppercase text-[10px] tracking-widest font-bold">YoY Growth</div>
              </div>
              <div className="p-6 md:p-10 bg-white/5 rounded-[32px] md:rounded-[40px] border border-white/10 hover:border-[#EE3344]/50 transition-colors group">
                <div className="text-3xl md:text-5xl font-black mb-2 group-hover:text-[#EE3344] transition-colors">200+</div>
                <div className="text-gray-500 uppercase text-[10px] tracking-widest font-bold">New Alchemists</div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-20">
            <div className="flex flex-wrap gap-x-20 gap-y-10 items-center justify-center opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
               {['SINGAPORE', 'DHAKA', 'LONDON', 'NEW YORK', 'BERLIN', 'TOKYO'].map((city) => (
                 <span key={city} className="text-3xl font-black italic tracking-tighter">{city}</span>
               ))}
            </div>
          </div>
        </div>
        
        {/* Background Decorative Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#EE3344] rounded-full blur-[200px] animate-pulse" />
        </div>
      </section>

      {/* Culture Strip */}
      <div className="py-20 border-y border-gray-100 overflow-hidden whitespace-nowrap mb-40">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex gap-20 items-center"
        >
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-6xl md:text-9xl font-black text-gray-100 uppercase tracking-tighter mix-blend-multiply">
              ENGINEERING EXCELLENCE • CRAFTING THE FUTURE • SCALING POSSIBILITIES •
            </span>
          ))}
        </motion.div>
      </div>

      {/* CTA Section */}
      <section className="pb-40 container mx-auto px-6 text-center">
        <p className="text-lg md:text-2xl text-gray-600 font-light mb-12 max-w-3xl mx-auto px-4">
          We don't build tools to impress. We build engines to empower. Precision engineering creates impact that lasts.
        </p>
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter mb-16 leading-tight">
          Ready to join <br /> the mission?
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          <motion.button 
            onClick={() => setView('Careers')}
            whileHover={{ scale: 1.05 }}
            className="px-12 py-5 bg-[#EE3344] text-white font-bold rounded-full text-lg shadow-xl"
          >
            Open Roles
          </motion.button>
          <motion.button 
            onClick={() => setView('Contact')}
            whileHover={{ scale: 1.05 }}
            className="px-12 py-5 bg-black text-white font-bold rounded-full text-lg"
          >
            Talk to us
          </motion.button>
        </div>
      </section>
    </div>
  );
}
