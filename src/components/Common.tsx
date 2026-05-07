/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import React from 'react';

export function GlassCard({ children, className = "", tilt = true, onClick }: { children: React.ReactNode, className?: string, tilt?: boolean, onClick?: () => void, key?: React.Key }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tilt) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{
        rotateX: tilt ? rotateX : 0,
        rotateY: tilt ? rotateY : 0,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`glass rounded-3xl p-8 relative overflow-hidden transition-colors hover:border-surface-tint/50 ${className}`}
    >
      <div style={{ transform: "translateZ(50px)" }}>
        {children}
      </div>
    </motion.div>
  );
}

export function GlowingSphere({ className = "" }: { className?: string }) {
  return (
    <div className={`fixed -z-10 rounded-full blur-[120px] opacity-15 pointer-events-none animate-pulse ${className}`} />
  );
}

export function SectionHeader({ title, subtitle, align = 'center' }: { title: string, subtitle?: string, align?: 'left' | 'center' }) {
  return (
    <div className={`mb-16 md:mb-24 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      {subtitle && (
        <span className="text-surface-tint font-display text-xs uppercase tracking-[0.3em] block mb-4">
          {subtitle}
        </span>
      )}
      <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-white font-semibold">
        {title}
      </h2>
    </div>
  );
}
