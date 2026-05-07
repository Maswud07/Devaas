
import React from 'react';
import { motion } from 'motion/react';
import { Send, Mail, MapPin, Phone, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20 relative overflow-hidden">
      {/* Modern Dotted Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.4]" 
           style={{ 
             backgroundImage: 'radial-gradient(#d1d5db 1px, transparent 1px)', 
             backgroundSize: '24px 24px' 
           }} 
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          {/* Left Side: Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#EE3344] font-mono text-[10px] uppercase tracking-[0.4em] block mb-8 font-bold">GET IN TOUCH</span>
            <h1 className="font-display text-6xl md:text-8xl text-black font-bold leading-tight mb-8">
              Let's build <br /> 
              something <span className="text-[#EE3344]">limitless</span>.
            </h1>
            
            <p className="text-gray-500 text-xl font-light leading-relaxed max-w-md mb-12">
              Have a complex challenge? Our collective of engineers is ready to help you forge the next generation of technology.
            </p>

            <div className="space-y-8">
              <a href="mailto:hello@devaas.io" className="group flex items-center gap-6">
                <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-[#EE3344] group-hover:bg-[#EE3344]/5 transition-all">
                  <Mail className="text-gray-400 group-hover:text-[#EE3344]" size={20} />
                </div>
                <div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Email us</div>
                  <div className="text-xl text-black font-medium group-hover:text-[#EE3344] transition-colors">hello@devaas.io</div>
                </div>
              </a>

              <div className="group flex items-center gap-6">
                <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-[#EE3344] group-hover:bg-[#EE3344]/5 transition-all">
                  <MapPin className="text-gray-400 group-hover:text-[#EE3344]" size={20} />
                </div>
                <div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Global Hub</div>
                  <div className="text-xl text-black font-medium">Dubai / London / Singapore</div>
                </div>
              </div>
            </div>

            {/* Aesthetic spinning element or badge */}
            <div className="mt-20 hidden md:block">
              <div className="w-32 h-32 relative group">
                <svg className="w-full h-full animate-[spin_10s_linear_infinite]" viewBox="0 0 100 100">
                  <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                  <text className="text-[8px] uppercase tracking-[0.2em] fill-gray-300 font-bold">
                    <textPath xlinkHref="#circlePath">
                      Collaborate • Innovate • Scale • Engineering • Mastery • 
                    </textPath>
                  </text>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <ArrowRight className="text-[#EE3344] group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white rounded-[40px] p-10 md:p-14 shadow-[0_40px_100px_rgba(0,0,0,0.05)] border border-gray-100 relative">
              <h2 className="text-3xl text-black font-bold mb-2">Say hello! 👋</h2>
              <p className="text-gray-400 font-light mb-10">We usually respond within 2-4 business hours.</p>

              <form className="space-y-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="Enter name"
                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 text-black focus:outline-none focus:ring-2 focus:ring-[#EE3344]/10 focus:border-[#EE3344] transition-all placeholder:text-gray-300"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="Enter contact number"
                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 text-black focus:outline-none focus:ring-2 focus:ring-[#EE3344]/10 focus:border-[#EE3344] transition-all placeholder:text-gray-300"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Enter email address"
                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 text-black focus:outline-none focus:ring-2 focus:ring-[#EE3344]/10 focus:border-[#EE3344] transition-all placeholder:text-gray-300"
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    placeholder="Subject / Project interest"
                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 text-black focus:outline-none focus:ring-2 focus:ring-[#EE3344]/10 focus:border-[#EE3344] transition-all placeholder:text-gray-300"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Tell us about your project"
                    rows={4}
                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 text-black focus:outline-none focus:ring-2 focus:ring-[#EE3344]/10 focus:border-[#EE3344] transition-all placeholder:text-gray-300 resize-none"
                  />
                </div>
                
                <div className="pt-4">
                  <button className="w-full md:w-auto px-12 py-5 bg-[#EE3344] text-white font-bold rounded-full hover:scale-105 transition-all shadow-[0_20px_40px_rgba(238,51,68,0.2)] flex items-center justify-center gap-3">
                    Submit Project <ArrowRight size={20} />
                  </button>
                </div>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
