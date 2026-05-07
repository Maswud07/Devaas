import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Quote, Sparkles, Lightbulb, Zap, Send } from 'lucide-react';

export default function CEO({ onBack }: { onBack: () => void }) {
  const thoughts = [
    {
      title: "The Alchemist's Protocol",
      content: "We don't just build software; we transmute raw digital energy into human experiences. The goal isn't 'working code'—it's 'meaningful impact'.",
      date: "Oct 2023",
      category: "Vision"
    },
    {
      title: "Simplicity is a Feature",
      content: "Developers often equate complexity with power. Real power is the ability to hide complexity behind intuition. If users have to think, we haven't finished our job.",
      date: "Nov 2023",
      category: "Philosophy"
    },
    {
      title: "Scaling with Soul",
      content: "As we grow, we must avoid the 'corporate fog'. Every line of code should feel like it was written by someone who cares. Personal craftsmanship at enterprise scale.",
      date: "Jan 2024",
      category: "Growth"
    }
  ];

  const smoothEase = [0.22, 1, 0.36, 1];

  return (
    <div className="bg-[#F8F8F8] min-h-screen text-black font-sans selection:bg-[#EE3344]/20 relative overflow-hidden">
      {/* Hand-drawn accents */}
      <div className="absolute top-40 right-20 w-32 h-32 opacity-10 pointer-events-none rotate-12">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M10,50 Q30,10 50,50 T90,50" />
          <path d="M30,70 Q50,90 70,70" />
        </svg>
      </div>

      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 group text-sm font-bold uppercase tracking-widest hover:text-[#EE3344] transition-colors"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Back to Team
          </button>
          <div className="text-xs font-mono font-bold uppercase tracking-[0.3em]">
            Founder & CEO / <span className="text-[#EE3344]">Thoughts</span>
          </div>
        </div>
      </nav>

      <div className="pt-32 pb-40 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          {/* Left Column: The "Sketched" Hero */}
          <div className="lg:w-1/2 sticky lg:top-32">
            <div className="relative">
              {/* Profile Card styled like the shared image */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: smoothEase }}
                className="bg-white rounded-[40px] p-8 md:p-12 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] relative z-10"
              >
                <div className="flex items-center gap-6 mb-12">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden bg-gray-100 flex-shrink-0">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Abdullah" alt="CEO" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h1 className="text-3xl font-black uppercase tracking-tight">Abdullah Al Maswud</h1>
                    <p className="text-[#EE3344] font-bold text-xs uppercase tracking-widest">Founder & CEO</p>
                  </div>
                </div>

                <div className="relative mb-12">
                  <Quote className="absolute -top-6 -left-6 text-gray-100 w-16 h-16 -z-10" />
                  <p className="text-2xl md:text-3xl font-serif italic text-gray-800 leading-snug">
                    "We needed a strong foundation and a clearer funnel to connect users. Our team stepped in, fixed the flow, and helped us launch with confidence — <span className="font-bold underline decoration-[#EE3344]/30">everything started working the way it should.</span>"
                  </p>
                </div>

                <div className="flex items-center justify-between pt-8 border-t border-gray-100">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white cursor-pointer hover:bg-[#EE3344] transition-colors">
                      <Zap size={18} />
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest mb-1">Impact Delivered</p>
                    <p className="text-2xl font-black">+45M Users</p>
                  </div>
                </div>
              </motion.div>

              {/* Hand-drawn annotations around the card */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="absolute -top-10 -right-10 bg-white p-4 rounded-2xl shadow-xl rotate-6 hidden md:block"
              >
                <p className="font-hand text-xl text-[#EE3344] leading-none">
                  "Cut build time <br /> by 40%"
                </p>
                <svg className="absolute top-10 -left-12 text-[#EE3344] w-12 h-12" viewBox="0 0 50 50">
                  <path d="M40,10 Q25,25 10,40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M10,32 L10,40 L18,40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, rotate: -5 }}
                animate={{ opacity: 1, rotate: -5 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-10 -left-10 hidden lg:block"
              >
                <div className="font-hand text-2xl text-gray-400 max-w-[180px]">
                  Innovating since 2014. Always pushing the limit.
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Thoughts Feed */}
          <div className="lg:w-1/2 w-full">
            <div className="max-w-2xl">
              <div className="inline-block px-4 py-1.5 bg-black text-white rounded-lg text-[10px] font-bold uppercase tracking-widest mb-8">
                Innovative Ideas
              </div>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-16">
                Thoughts from the <br /> <span className="text-[#EE3344]">Laboratory.</span>
              </h2>

              <div className="space-y-12">
                {thoughts.map((thought, i) => (
                  <motion.article 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.8, ease: smoothEase }}
                    className="group border-b border-black/5 pb-12 last:border-0"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest">{thought.date}</span>
                      <div className="w-1 h-1 bg-[#EE3344] rounded-full" />
                      <span className="text-[10px] font-mono font-bold text-[#EE3344] uppercase tracking-widest">{thought.category}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-6 group-hover:text-[#EE3344] transition-colors cursor-pointer">
                      {thought.title}
                    </h3>
                    <p className="text-lg text-gray-600 font-light leading-relaxed">
                      {thought.content}
                    </p>
                  </motion.article>
                ))}
              </div>

              {/* Newsletter / Contact form in the thoughts section */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-20 p-8 md:p-12 bg-black rounded-[60px] text-white"
              >
                <Sparkles className="text-[#EE3344] mb-6" size={32} />
                <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">Let's discuss innovation.</h3>
                <p className="text-gray-400 font-light mb-8">Have a vision that needs an alchemist? Drop me a line directly.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="flex-grow bg-white/10 border border-white/10 rounded-full px-6 py-4 outline-none focus:border-[#EE3344] transition-colors"
                  />
                  <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-[#EE3344] hover:text-white transition-all flex items-center justify-center gap-2">
                    Send <Send size={18} />
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
