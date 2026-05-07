import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { 
  CheckCircle2, 
  Lightbulb, 
  Target, 
  TrendingUp, 
  Puzzle, 
  Zap, 
  ArrowLeft,
  Layout,
  Smartphone,
  Globe,
  Sparkles
} from 'lucide-react';
import { GlassCard } from './Common';

interface TakeUUpProps {
  onBack: () => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 12 }
  }
};

const MotionGlassCard = motion(GlassCard);

export default function TakeUUp({ onBack }: TakeUUpProps) {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"]
  });

  const heroImageScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);
  const heroImageOpacity = useTransform(scrollYProgress, [0, 0.5], [0.6, 1]);

  const galleryImages = [
    "https://images.unsplash.com/photo-1523050335456-4bb832048aa7?q=80&w=2670&auto=format&fit=crop", // Student with laptop
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2670&auto=format&fit=crop", // Students studying
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2670&auto=format&fit=crop", // Collaborative UI feel
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2670&auto=format&fit=crop", // Youthful energy
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2670&auto=format&fit=crop", // Digital tools
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2670&auto=format&fit=crop"  // Classroom tech
  ];

  return (
    <div className="pt-24 pb-32 bg-black min-h-screen overflow-x-hidden" ref={scrollRef}>
      <div className="container mx-auto px-6">
        {/* Back Button */}
        <motion.button 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={onBack}
          className="flex items-center gap-2 text-gray-400 hover:text-[#EE3344] transition-colors mb-12 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-mono text-[10px] uppercase tracking-widest font-bold">Back to Products</span>
        </motion.button>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.span 
              variants={itemVariants}
              className="bg-[#EE3344]/10 text-[#EE3344] px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] inline-block mb-6"
            >
              FLAGSHIP PRODUCT
            </motion.span>
            <motion.h1 
              variants={itemVariants}
              className="font-display text-7xl md:text-9xl text-white font-bold leading-none mb-8"
            >
              Take<span className="text-[#EE3344]">U</span>Up
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-gray-400 text-xl md:text-2xl font-light leading-relaxed mb-10 max-w-xl"
            >
              Transforming the rigid educational landscape into a fluid, AI-driven ecosystem that evolves with every student.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-wrap gap-6">
              {[
                { icon: Globe, label: 'Web Platform' },
                { icon: Smartphone, label: 'Mobile App' },
                { icon: Layout, label: 'LMS Integration' }
              ].map((item, id) => (
                <div key={id} className="flex items-center gap-3 text-white/40 font-mono text-[10px] tracking-widest uppercase hover:text-white transition-colors cursor-default">
                  <item.icon size={16} className="text-[#EE3344]" /> {item.label}
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[40px] overflow-hidden aspect-square md:aspect-video relative group border border-white/5"
          >
            <motion.img 
              style={{ scale: heroImageScale, opacity: heroImageOpacity }}
              src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2574&auto=format&fit=crop" 
              className="w-full h-full object-cover grayscale active:grayscale-0 transition-all duration-1000"
              alt="TakeUUp Showcase"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-10 left-10 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/20">
                <Sparkles size={20} className="text-[#EE3344]" />
              </div>
              <div className="text-white font-mono text-[10px] tracking-widest uppercase">AI-Engine Enabled</div>
            </div>
          </motion.div>
        </div>

        {/* Scrolling Ticker */}
        <div className="py-20 border-y border-white/5 mb-32 relative overflow-hidden whitespace-nowrap">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            className="flex gap-20 items-center"
          >
            {[...Array(10)].map((_, i) => (
              <span key={i} className="text-4xl md:text-6xl font-display font-bold text-white/5 uppercase tracking-tighter">
                Next-Gen Education • Personalized Mastery • Fluid Pedagogy • AI Mentorship • 
              </span>
            ))}
          </motion.div>
        </div>

        {/* Pillar Architecture Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="flex flex-wrap justify-center gap-10 mb-64"
        >
          {[
            {
              icon: Lightbulb,
              title: "What is",
              span: "TakeUUp?",
              desc: "A cognitive learning partner that evolves. We transcend standard LMS boundaries by creating an ecosystem that synchronizes with the student's neural rhythm and pace.",
              color: "#EE3344",
              h: "min-h-[600px]"
            },
            {
              icon: Zap,
              title: "Our",
              span: "Offerings",
              list: [
                { icon: CheckCircle2, text: "Neural Mapping" },
                { icon: Sparkles, text: "AI Curriculums" },
                { icon: Target, text: "24/7 AI Tutors" },
                { icon: Globe, text: "VR Learning" }
              ],
              color: "#EE3344",
              h: "min-h-[700px]",
              offset: "md:-translate-y-20"
            },
            {
              icon: Puzzle,
              title: "Why",
              span: "Different?",
              desc: "We don't just track progress; we predict breakthroughs. Our Fluid UI morphs based on cognitive load, ensuring students stay in the \"Flow Zone\".",
              color: "#EE3344",
              h: "min-h-[600px]"
            }
          ].map((pillar, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className={`w-full md:w-[350px] ${pillar.h} relative group ${pillar.offset || ''}`}
            >
              <div className="absolute inset-0 bg-[#EE3344]/5 rounded-[60px] blur-2xl group-hover:bg-[#EE3344]/15 transition-all duration-700" />
              <div className="relative h-full bg-white/[0.03] border border-white/10 rounded-[60px] p-12 flex flex-col items-center text-center backdrop-blur-3xl overflow-hidden group-hover:border-[#EE3344]/30 transition-all duration-1000 hover:-translate-y-4">
                <motion.div 
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-12"
                >
                  <pillar.icon className="text-[#EE3344]" size={32} />
                </motion.div>
                <h2 className="font-display text-4xl text-white font-bold mb-8 leading-tight">
                  {pillar.title} <br /> <span className="text-[#EE3344]">{pillar.span}</span>
                </h2>
                <div className="flex-grow w-full">
                  {pillar.desc && (
                    <p className="text-gray-400 font-light leading-relaxed text-lg">
                      {pillar.desc}
                    </p>
                  )}
                  {pillar.list && (
                    <ul className="space-y-6 text-left w-full">
                      {pillar.list.map((item, i) => (
                        <motion.li 
                          key={i}
                          whileHover={{ x: 10 }}
                          className="flex items-center gap-4 text-gray-300 font-light"
                        >
                          <item.icon className="text-[#EE3344]" size={18} />
                          <span className="text-lg">{item.text}</span>
                        </motion.li>
                      ))}
                    </ul>
                  )}
                </div>
                {idx === 1 ? (
                  <div className="mt-auto pt-12">
                    <div className="w-24 h-24 rounded-full border border-dashed border-white/10 flex items-center justify-center group-hover:rotate-180 transition-all duration-[2000ms]">
                      <TrendingUp className="text-white/20" size={24} />
                    </div>
                  </div>
                ) : (
                  <div className="mt-12 w-1 h-20 bg-gradient-to-b from-[#EE3344] to-transparent rounded-full opacity-20 group-hover:opacity-100 transition-opacity duration-700" />
                )}
                {idx === 2 && (
                  <div className="grid grid-cols-2 gap-4 w-full mt-auto">
                    <div className="h-20 bg-white/5 rounded-3xl" />
                    <div className="h-20 bg-[#EE3344]/20 rounded-3xl" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Success Stories / Impact Section with Smoother Entrance */}
        <section className="mb-64">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4 text-gray-500 font-mono text-[10px] uppercase tracking-[0.4em] mb-24"
          >
            IMPACT METRICS <span className="w-8 h-[1px] bg-gray-700" />
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-20">
            {[
              {
                label: "Problem Solved",
                title: 'Eliminating the "One Size Fits All" stagnation.',
                desc: "TakeUUp has successfully reduced dropout rates by 40% in pilot programs by identifying at-risk behaviors weeks before they manifest.",
                gradient: "bg-gradient-to-br"
              },
              {
                label: "Our Goal",
                title: "Democratizing elite private mentorship.",
                desc: "Every student deserves an AI mentor as capable as the world's best professors, accessible from any device, anywhere.",
                gradient: "bg-gradient-to-bl"
              }
            ].map((card, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 100, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 1.5, 
                  delay: i * 0.3,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className={`p-16 rounded-[60px] ${card.gradient} from-white/[0.05] to-transparent border border-white/10 backdrop-blur-md group relative overflow-hidden`}
              >
                {/* Decorative background glow that follows mouse/animates */}
                <motion.div 
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                    x: [0, 20, 0],
                    y: [0, -20, 0]
                  }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-20 -right-20 w-64 h-64 bg-[#EE3344]/10 blur-[100px] rounded-full pointer-events-none" 
                />

                <div className="relative z-10">
                  <motion.h3 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + (i * 0.3), duration: 0.8 }}
                    className="text-[#EE3344] font-mono text-sm mb-6 uppercase tracking-widest font-bold"
                  >
                    {card.label}
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + (i * 0.3), duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-4xl md:text-5xl text-white font-display font-bold leading-tight mb-8"
                  >
                    {card.title}
                  </motion.p>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1.3 + (i * 0.3), duration: 1 }}
                    className="text-xl text-gray-400 font-light leading-relaxed"
                  >
                    {card.desc}
                  </motion.p>
                </div>
                
                {/* Reveal border on hover */}
                <div className="absolute inset-0 border-2 border-[#EE3344]/0 group-hover:border-[#EE3344]/20 rounded-[60px] transition-all duration-700 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Gallery / Mockups */}
        <section className="mb-48">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4 text-gray-500 font-mono text-[10px] uppercase tracking-[0.4em] mb-16"
          >
            DESIGN ECOSYSTEM <span className="w-8 h-[1px] bg-gray-700" />
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 0.98, transition: { duration: 0.4 } }}
                transition={{ 
                  delay: i * 0.1, 
                  duration: 1.2, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
                className={`rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 cursor-zoom-in border border-white/5 ${
                  i === 0 ? 'col-span-2 row-span-2 h-[500px]' : 'h-[240px]'
                }`}
              >
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                  src={img} 
                  className="w-full h-full object-cover" 
                  alt={`TakeUUp Scene ${i}`} 
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Big Text CTA */}
        <section className="py-40 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="font-display text-5xl md:text-8xl text-white font-bold mb-12 tracking-tighter">
              Ready to <span className="text-[#EE3344]">revolutionize</span> <br /> your campus?
            </h2>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-16 py-6 bg-[#EE3344] text-white font-bold rounded-full text-xl shadow-[0_0_60px_rgba(238,51,68,0.5)] group overflow-hidden relative"
            >
              <span className="relative z-10">Schedule a Demo</span>
              <motion.div 
                className="absolute inset-0 bg-white"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
                style={{ opacity: 0.1 }}
              />
            </motion.button>
          </motion.div>
          {/* Background Decoration */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#EE3344]/5 blur-[120px] rounded-full -z-10" />
        </section>
      </div>
    </div>
  );
}
