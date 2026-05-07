/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { GraduationCap, HeartPulse, Truck, Landmark, Diamond, Factory, ArrowRight, ShieldCheck, ShoppingCart, Video } from 'lucide-react';
import { GlassCard, SectionHeader } from './Common';

const sectors = [
  {
    title: 'E-Commerce',
    icon: ShoppingCart,
    description: 'Scaling digital marketplaces with ultra-fast architectures and conversion-optimized funnels.',
    features: ['GMV Acceleration', 'Multi-channel Sync', 'Secure Checkout'],
    color: 'text-[#EE3344]'
  },
  {
    title: 'Creative Media',
    icon: Video,
    description: 'Powering high-impact brands with cinematic video production and distinctive visual identities.',
    features: ['Viral Content', 'Motion Graphics', 'Brand Systems'],
    color: 'text-white'
  },
  {
    title: 'Fintech',
    icon: Landmark,
    description: 'Zero-trust banking interfaces and high-frequency trading platforms built for security.',
    features: ['Vault Storage', 'Low-latency APIs', 'Identity Systems'],
    color: 'text-[#EE3344]'
  },
  {
    title: 'SaaS Platforms',
    icon: Factory,
    description: 'Precision-engineered software ecosystems designed for multi-tenant orchestration and scale.',
    features: ['Workflow Auto', 'Cloud Orchestration', 'API Mastery'],
    color: 'text-white'
  },
  {
    title: 'Logistics',
    icon: Truck,
    description: 'Real-time supply chain transparency through predictive modeling and automated warehousing.',
    features: ['Inventory Mastery', 'Inven Pro Sync', 'Route Optimization'],
    color: 'text-[#EE3344]'
  },
  {
    title: 'Education AI',
    icon: GraduationCap,
    description: 'Revolutionizing learning through neural modeling and adaptive individual educational paths.',
    features: ['TakeUUp Integration', 'Cognitive Feedback', 'Smart Pedagogy'],
    color: 'text-white'
  }
];

export default function Industries({ setView }: { setView: (view: any) => void }) {
  return (
    <div className="pt-20 bg-black min-h-screen selection:bg-[#EE3344]/30">
      <section className="py-24 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 text-[#EE3344] font-mono text-[10px] uppercase tracking-[0.4em] mb-8">
              SECTOR MASTERY <span className="w-8 h-[1px] bg-[#EE3344]/30" />
            </div>
            <h1 className="font-display text-4xl md:text-6xl lg:text-8xl text-white font-black uppercase tracking-tighter leading-tight">
              Built for <br />
              <span className="text-transparent font-serif italic" style={{ WebkitTextStroke: '1px #EE3344' }}>Precision.</span>
            </h1>
          </div>
          <p className="text-gray-500 text-lg max-w-sm font-light leading-relaxed mb-4">
            We apply DEVAAS engineering to specific sectors where aesthetic resonance and technical performance are non-negotiable.
          </p>
        </div>
      </section>

      <section className="py-20 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((sector, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <GlassCard className="group h-full flex flex-col bg-[#0A0A0A] border-white/5 hover:border-[#EE3344]/40 transition-all duration-500 p-12">
                <div className="w-20 h-20 rounded-[24px] bg-white/[0.03] mb-10 flex items-center justify-center border border-white/5 transition-all group-hover:scale-110 group-hover:border-[#EE3344]/20 group-hover:bg-[#EE3344]/5">
                  <sector.icon className={sector.color} size={36} />
                </div>
                <h3 className="font-display text-4xl text-white font-bold mb-6 tracking-tight group-hover:text-[#EE3344] transition-colors uppercase">{sector.title}</h3>
                <p className="text-gray-500 text-lg mb-10 flex-grow font-light leading-relaxed">{sector.description}</p>
                
                <div className="space-y-4 mb-12">
                  {sector.features.map(f => (
                    <div key={f} className="flex items-center gap-4 text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                      <div className={`w-1.5 h-1.5 rounded-full ${sector.color.includes('EE3344') ? 'bg-[#EE3344]' : 'bg-gray-700'}`} />
                      {f}
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => setView('Services')}
                  className="group flex items-center gap-3 text-white font-bold uppercase tracking-widest text-[10px] bg-white/5 px-8 py-4 rounded-full border border-white/10 hover:bg-[#EE3344] transition-all mt-auto w-fit"
                >
                  Our Solutions <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trust section */}
      <section className="py-40 container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto py-24 bg-white/[0.02] rounded-[60px] border border-white/5 relative overflow-hidden group">
           <div className="absolute inset-0 bg-[#EE3344]/5 opacity-0 group-hover:opacity-100 transition-opacity blur-3xl" />
           <span className="text-[#EE3344] font-mono text-[10px] uppercase tracking-[0.4em] block mb-12">Global Footprint</span>
           <h2 className="font-display text-3xl md:text-5xl text-white font-black mb-16 uppercase tracking-tighter px-4">Trusted by Industry Leaders</h2>
           <div className="flex flex-wrap justify-center gap-16 px-12">
              {['FORTUNE', 'NEXUS', 'SYNERGY', 'INFRA', 'FORGE'].map(name => (
                <span key={name} className="text-4xl md:text-6xl font-black tracking-tighter text-white/10 hover:text-white/40 transition-colors cursor-default select-none">{name}</span>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
}
