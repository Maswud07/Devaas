/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  GraduationCap, 
  Package, 
  Utensils, 
  Hourglass, 
  ArrowUpRight, 
  ArrowRight, 
  Zap, 
  Boxes, 
  ShoppingCart, 
  Smartphone, 
  PenTool, 
  Video, 
  Palette, 
  FileText,
  Sparkles,
  Lock
} from 'lucide-react';
import { GlassCard, SectionHeader } from './Common';

const products = [
  {
    id: 'takeuup',
    title: 'TakeUUp',
    category: 'AI Education',
    description: 'Personalized neural learning journeys with real-time cognitive feedback systems.',
    icon: GraduationCap,
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2574&auto=format&fit=crop",
    status: 'Upcoming'
  },
  {
    id: 'invenpro',
    title: 'Inven Pro',
    category: 'Inventory Mastery',
    description: 'High-precision orchestration for modern warehouses with predictive forecasting.',
    icon: Boxes,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2670&auto=format&fit=crop",
    status: 'Upcoming'
  },
  {
    id: 'catering-connects',
    title: 'Catering Connects',
    category: 'Logistics',
    description: 'End-to-end food service synchronization for enterprise events.',
    icon: Utensils,
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2670&auto=format&fit=crop",
    status: 'Upcoming'
  }
];

export default function Products({ setView }: { setView: (view: any) => void }) {
  return (
    <div className="pt-20 bg-black min-h-screen selection:bg-[#EE3344]/30">
      <section className="py-24 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 text-[#EE3344] font-mono text-[10px] uppercase tracking-[0.4em] mb-8">
              THE LABORATORY <span className="w-8 h-[1px] bg-[#EE3344]/30" />
            </div>
            <h1 className="font-display text-4xl md:text-6xl lg:text-8xl text-white font-black uppercase tracking-tighter leading-tight">
              Future <br />
              <span className="text-transparent font-serif italic" style={{ WebkitTextStroke: '1px #EE3344' }}>Innovations.</span>
            </h1>
          </div>
          <p className="text-gray-500 text-lg max-w-sm font-light leading-relaxed mb-4">
            Our engineers are currently perfecting these high-performance tools. Coming soon to redefine industry standards.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group relative cursor-wait"
            >
              <GlassCard className="h-full border-white/5 bg-[#0A0A0A] p-0 overflow-hidden flex flex-col hover:border-[#EE3344]/30 transition-all duration-500">
                <div className="relative h-64 w-full overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover grayscale opacity-40 group-hover:scale-110 group-hover:opacity-60 transition-all duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
                  
                  {/* Upcoming Badge */}
                  <div className="absolute top-6 right-6 px-4 py-1.5 bg-[#EE3344] text-white rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 shadow-xl">
                    <Hourglass size={12} className="animate-spin-slow" />
                    Upcoming
                  </div>

                  <div className="absolute top-6 left-6 w-12 h-12 bg-white/5 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-[#EE3344]/40 transition-colors">
                    <product.icon className="text-[#EE3344]" size={24} />
                  </div>
                </div>

                <div className="p-10 flex flex-col flex-grow">
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.3em] mb-4 block">
                    {product.category}
                  </span>
                  <h3 className="font-display text-3xl text-white font-bold mb-4 uppercase tracking-tight group-hover:text-[#EE3344] transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gray-400 font-light text-sm leading-relaxed mb-8">
                    {product.description}
                  </p>
                  
                  <div className="mt-auto flex items-center justify-between pt-8 border-t border-white/5">
                    <div className="flex gap-2">
                       <div className="w-2 h-2 rounded-full bg-[#EE3344] animate-pulse" />
                       <div className="w-2 h-2 rounded-full bg-[#EE3344]/20" />
                       <div className="w-2 h-2 rounded-full bg-[#EE3344]/20" />
                    </div>
                    <div className="text-[10px] font-bold text-gray-600 uppercase tracking-widest flex items-center gap-2">
                      <Lock size={12} /> Stealth Mode
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}

          {/* Laboratory Call to Action */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="h-full bg-white/[0.02] rounded-[40px] border-dashed border-2 border-white/10 p-12 flex flex-col items-center justify-center text-center group hover:bg-[#EE3344]/5 hover:border-[#EE3344]/20 transition-all duration-700">
               <div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center mb-8 bg-black relative group-hover:rotate-[360deg] transition-transform duration-1000">
                  <Sparkles className="text-[#EE3344]" size={40} />
                  <div className="absolute inset-0 bg-[#EE3344] blur-[30px] opacity-0 group-hover:opacity-20 transition-opacity" />
               </div>
               <h4 className="font-display text-2xl text-white font-black mb-4 uppercase tracking-widest">
                 Project Stealth
               </h4>
               <p className="text-gray-500 font-light text-sm leading-relaxed mb-10 max-w-[200px]">
                 Building the next logic leap in automated intelligence.
               </p>
               <button 
                 onClick={() => setView('Contact')}
                 className="group flex items-center gap-3 text-white font-bold uppercase tracking-widest text-[10px] bg-white/5 px-8 py-4 rounded-full border border-white/10 hover:bg-white/10 transition-all"
               >
                 Inquire Early <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
               </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

