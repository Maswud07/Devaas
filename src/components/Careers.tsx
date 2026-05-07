
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Gamepad2, 
  MapPin, 
  Palmtree, 
  Dribbble, 
  Film, 
  Coffee, 
  ArrowRight, 
  Search,
  Briefcase,
  Globe,
  Clock
} from 'lucide-react';

const perks = [
  {
    title: 'Hybrid Freedom',
    description: 'Work from our elite hubs or your private sanctuary. We value output over seat time.',
    icon: Globe
  },
  {
    title: 'Global Retreats',
    description: 'Annual week-long expeditions to exotic locations to recharge and realign our vision.',
    icon: Palmtree
  },
  {
    title: 'Gourmet Fuel',
    description: 'In-house precision coffee bars and chef-curated meals to keep the neurons firing.',
    icon: Coffee
  }
];

const jobs = [
  {
    id: 1,
    title: 'SQA Engineer',
    department: 'Quality Assurance',
    location: 'Remote / Dubai',
    type: 'Full-time',
    salary: '$100k - $150k'
  },
  {
    id: 2,
    title: 'Web Developer',
    department: 'Engineering',
    location: 'Remote / Hybrid',
    type: 'Full-time',
    salary: '$120k - $180k'
  },
  {
    id: 3,
    title: 'WordPress Developer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    salary: '$80k - $130k'
  },
  {
    id: 4,
    title: 'UI UX Designer',
    department: 'Design',
    location: 'London / Hybrid',
    type: 'Full-time',
    salary: '$110k - $170k'
  },
  {
    id: 5,
    title: 'Video Editor',
    department: 'Multimedia',
    location: 'Remote',
    type: 'Full-time',
    salary: '$90k - $140k'
  },
  {
    id: 6,
    title: 'Digital Marketer',
    department: 'Growth',
    location: 'London / Hybrid',
    type: 'Full-time',
    salary: '$100k - $150k'
  },
  {
    id: 7,
    title: 'App Developer',
    department: 'Native Engineering',
    location: 'Dubai / Remote',
    type: 'Full-time',
    salary: '$130k - $190k'
  },
  {
    id: 8,
    title: 'Finance Manager',
    department: 'Business Operations',
    location: 'Dubai Office',
    type: 'Full-time',
    salary: '$110k - $160k'
  },
  {
    id: 9,
    title: 'HR Specialist',
    department: 'People & Culture',
    location: 'Dubai / Hybrid',
    type: 'Full-time',
    salary: '$85k - $120k'
  }
];

export default function Careers() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredJobs = jobs.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-black min-h-screen text-white font-sans pt-32 selection:bg-[#EE3344]/30 selection:text-white">
      {/* Hand-drawn decorative elements */}
      <div className="absolute top-20 right-[10%] w-64 h-64 opacity-5 pointer-events-none">
        <svg viewBox="0 0 200 200" fill="none" stroke="#EE3344" strokeWidth="1" strokeLinecap="round">
          <path d="M20,100 C60,20 140,180 180,100" />
          <path d="M50,50 L150,150 M150,50 L50,150" />
        </svg>
      </div>

      {/* Hero */}
      <section className="container mx-auto px-6 mb-40 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-block px-4 py-1.5 bg-[#EE3344] text-white rounded-lg text-[10px] font-bold uppercase tracking-widest mb-10">
            Join the Vanguard
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-black leading-[1.1] uppercase tracking-tighter mb-12">
            Build the <br /> <span className="text-transparent font-serif italic" style={{ WebkitTextStroke: '1px #EE3344' }}>Unthinkable.</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-400 font-light leading-relaxed max-w-2xl px-4">
            We aren't looking for employees. We're looking for architects who treat code like <span className="text-white font-bold underline decoration-[#EE3344]/40 decoration-2">poetry</span> and engineering like alchemy.
          </p>
        </motion.div>
      </section>

      {/* Perks / Culture Section */}
      <section className="py-40 bg-[#0A0A0A] border-y border-white/5 mb-40 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {perks.map((perk, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="relative"
              >
                <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center mb-8 group overflow-hidden">
                  <perk.icon className="text-[#EE3344] group-hover:scale-110 transition-transform" size={32} />
                </div>
                <h3 className="text-3xl font-black mb-4 uppercase tracking-tight">{perk.title}</h3>
                <p className="text-gray-400 font-light leading-relaxed text-lg">{perk.description}</p>
                {i === 1 && (
                  <div className="absolute -top-6 -right-6 font-hand text-[#EE3344] text-xl rotate-12 hidden md:block">
                    "Total freedom"
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Grid with Overlay text */}
      <section className="container mx-auto px-6 mb-40">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-[600px] md:h-[800px]">
          <div className="md:col-span-7 rounded-[60px] overflow-hidden relative group border border-white/5">
            <img 
               src="https://images.unsplash.com/photo-1593077382501-67848e029272?q=80&w=2670&auto=format&fit=crop" 
               className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
               alt="Gaming"
               referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent p-12 flex flex-col justify-end text-white">
               <h4 className="text-4xl font-black mb-2 uppercase tracking-tight">The Rec Center</h4>
               <p className="text-gray-400 max-w-sm font-light">Where strategies are born outside the IDE. High-performance gaming meets high-performance culture.</p>
            </div>
          </div>
          <div className="md:col-span-5 rounded-[60px] overflow-hidden relative group h-full border border-white/5">
            <img 
               src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop" 
               className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
               alt="Team"
               referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Job Board - Redesigned with Sketch Style Cards */}
      <section className="py-40 bg-black">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <div>
              <h2 className="text-3xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
                Open roles
              </h2>
              <p className="text-lg md:text-xl text-gray-500 font-light font-hand">The alchemist lab is looking for new elements.</p>
            </div>
            <div className="relative w-full md:w-96">
              <input 
                type="text" 
                placeholder="Search roles"
                className="w-full border-b-2 border-white/10 py-4 px-2 focus:border-[#EE3344] outline-none transition-colors text-lg font-bold bg-transparent text-white placeholder:text-gray-700"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-700" size={20} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <AnimatePresence mode="popLayout">
              {filteredJobs.map((job, idx) => (
                <motion.div 
                  key={job.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, delay: idx * 0.05 }}
                  className="group relative bg-white rounded-[40px] p-10 md:p-12 text-black cursor-pointer shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] transition-transform hover:-translate-y-2"
                >
                  {/* Decorative sketch labels for specific jobs */}
                  {idx === 0 && (
                    <div className="absolute -top-4 -right-4 bg-black text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest rotate-6">
                      Priority Role
                    </div>
                  )}

                  <div className="flex items-center gap-4 mb-8">
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] font-bold text-gray-400">{job.department}</span>
                    <div className="w-1 h-1 bg-[#EE3344] rounded-full" />
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] font-bold text-[#EE3344]">{job.salary}</span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-tight mb-8 group-hover:text-[#EE3344] transition-colors">{job.title}</h3>
                  
                  <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-gray-500 font-light border-t border-gray-100 pt-8 mb-10">
                    <span className="flex items-center gap-2"><MapPin size={16} /> {job.location}</span>
                    <span className="flex items-center gap-2"><Clock size={16} /> {job.type}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex -space-x-4">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 overflow-hidden">
                          <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${job.id + i}`} alt="Team" />
                        </div>
                      ))}
                      <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-50 flex items-center justify-center text-[10px] font-bold">
                        +5
                      </div>
                    </div>
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-[#EE3344] text-white rounded-full font-bold text-sm tracking-widest uppercase hover:bg-black transition-all flex items-center gap-3 shadow-lg shadow-[#EE3344]/20"
                    >
                      Apply Now <ArrowRight size={16} />
                    </motion.button>
                  </div>

                  {/* Hand-drawn underline decoration if active */}
                  <div className="absolute bottom-10 left-12 right-12 h-[2px] bg-[#EE3344]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Referral CTA */}
      <section className="bg-black py-40 rounded-[60px] md:rounded-[100px] mx-4 md:mx-10 mb-40 overflow-hidden relative">
        <div className="container mx-auto px-6 text-center relative z-10 text-white">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-12 leading-none">
            Know a perfect <br /> alchemist?
          </h2>
          <p className="text-lg md:text-2xl text-gray-400 font-light max-w-2xl mx-auto mb-16 leading-relaxed px-4">
            We reward talent spotting. Refer a candidate who gets hired and receive a premium hardware kit or a travel voucher.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="px-12 py-5 bg-[#EE3344] text-white font-bold rounded-full text-lg shadow-2xl"
          >
            Refer a candidate
          </motion.button>
        </div>
      </section>
    </div>
  );
}
