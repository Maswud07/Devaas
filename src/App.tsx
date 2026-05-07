/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import Home from './components/Home';
import Services from './components/Services';
import Products from './components/Products';
import Industries from './components/Industries';
import CaseStudies from './components/CaseStudies';
import About from './components/About';
import Careers from './components/Careers';
import CEO from './components/CEO';
import Contact from './components/Contact';
import TakeUUp from './components/TakeUUp';
import { GlowingSphere } from './components/Common';

type View = 'Home' | 'Services' | 'Products' | 'Industries' | 'Case Studies' | 'About' | 'Careers' | 'Contact' | 'TakeUUp' | 'CEO';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('Home');
  const [currentCategory, setCurrentCategory] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Products', view: 'Products' },
    { label: 'Our Works', view: 'Case Studies' },
    { label: 'Careers', view: 'Careers' },
    { label: 'Life at DEVAAS', view: 'About' },
    { label: 'Solutions', view: 'Services' },
    { label: 'Sectors', view: 'Industries' },
    { label: 'Contact', view: 'Contact' },
  ];

  const handleNav = (view: View, category: string | null = null) => {
    setCurrentView(view);
    setCurrentCategory(category);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen selection:bg-surface-tint/30 text-on-surface">
      <div className="fixed inset-0 noise z-50 pointer-events-none" />
      
      {/* Ambient background spheres */}
      <GlowingSphere className="bg-[#EE3344] w-[500px] h-[500px] -top-[10%] -left-[10%] opacity-20" />
      <GlowingSphere className="bg-[#5a0000] w-[600px] h-[600px] -bottom-[20%] -right-[10%] opacity-10" />

      {/* Navigation */}
      <header className="fixed top-0 w-full z-[100] bg-black/60 backdrop-blur-xl border-b border-white/10">
        <nav className="container mx-auto px-6 py-5 flex justify-between items-center">
          <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => handleNav('Home')}
          >
            <div className="relative w-10 h-10 bg-[#001529] rounded-xl flex items-center justify-center">
              <div className="absolute top-[20%] left-[20%] w-2.5 h-2.5 bg-[#EE3344] rounded-sm" />
              <div className="absolute bottom-[20%] right-[15%] w-7 h-8 border-l-[7px] border-b-[7px] border-white rounded-bl-[10px] transform -skew-x-[20deg]" />
            </div>
            <span className="text-2xl font-black tracking-tighter text-white">DEVAAS</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNav(item.view as View)}
                className={`font-display text-sm tracking-wide transition-all ${
                  currentView === item.view 
                    ? 'text-surface-tint font-bold' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => handleNav('Careers')}
              className="hidden sm:block px-6 py-2.5 bg-[#EE3344] text-white font-bold rounded-full hover:scale-105 transition-transform font-display text-sm shadow-[0_0_20px_rgba(238,51,68,0.3)]"
            >
              Join us
            </button>
            <button 
              className="md:hidden text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black/95 border-b border-white/10 overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-6">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleNav(item.view as View)}
                    className={`text-left font-display text-lg tracking-wide ${
                      currentView === item.view ? 'text-surface-tint font-bold' : 'text-gray-400'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <button 
                  onClick={() => handleNav('Careers')}
                  className="w-full py-4 bg-[#EE3344] text-white font-bold rounded-xl mt-4"
                >
                  Join us
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {currentView === 'Home' && <Home setView={handleNav} />}
            {currentView === 'Services' && <Services setView={handleNav} />}
            {currentView === 'Products' && <Products setView={handleNav} />}
            {currentView === 'Industries' && <Industries setView={handleNav} />}
            {currentView === 'Case Studies' && <CaseStudies setView={handleNav} selectedCategory={currentCategory} />}
            {currentView === 'About' && <About setView={handleNav} />}
            {currentView === 'Careers' && <Careers />}
            {currentView === 'CEO' && <CEO onBack={() => handleNav('About')} />}
            {currentView === 'Contact' && <Contact />}
            {currentView === 'TakeUUp' && <TakeUUp onBack={() => handleNav('Products')} />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-[#050505] w-full py-16 border-t border-white/5 mt-32 relative overflow-hidden">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="space-y-4 text-center md:text-left">
            <div className="text-lg font-bold text-white tracking-widest font-display">DEVAAS</div>
            <p className="text-gray-600 font-display text-xs uppercase tracking-widest">
              © 2024 DEVAAS DIGITAL ALCHEMY. ALL RIGHTS RESERVED.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-10">
            {['LinkedIn', 'Twitter', 'Instagram'].map(link => (
              <a key={link} href="#" className="text-gray-600 hover:text-white transition-all uppercase tracking-widest text-xs font-display">
                {link}
              </a>
            ))}
            <button 
              onClick={() => handleNav('Contact')}
              className="text-gray-600 hover:text-white transition-all uppercase tracking-widest text-xs font-display"
            >
              Contact
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
