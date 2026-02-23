'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { COURSE_TIERS } from '@/lib/constants';

export default function CourseSystem() {
  const [active, setActive] = useState(0);
  const tier = COURSE_TIERS[active];

  return (
    <section className="bg-[#FFFBF2] py-20" id="courses">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-3">课程体系</h2>
          <p className="text-[#666666]">按年龄段定制，循序渐进成长</p>
        </motion.div>

        {/* Tab switcher */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-white rounded-full p-1 shadow-sm gap-1">
            {COURSE_TIERS.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setActive(i)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  active === i
                    ? 'bg-[#FFB020] text-white shadow-sm'
                    : 'text-[#666666] hover:text-[#1A1A1A]'
                }`}
              >
                {t.age}
              </button>
            ))}
          </div>
        </div>

        {/* Content panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tier.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="bg-white rounded-[16px] p-8 shadow-sm max-w-2xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl font-bold text-[#FFB020]">{tier.age}</span>
              <span className="bg-[#FFB020]/10 text-[#E09010] text-sm font-medium px-3 py-1 rounded-full">
                {tier.label}
              </span>
            </div>
            <p className="text-[#666666] mb-6 leading-relaxed">{tier.desc}</p>
            <div className="grid grid-cols-2 gap-3">
              {tier.courses.map((c) => (
                <div
                  key={c}
                  className="flex items-center gap-2 text-sm text-[#1A1A1A] bg-[#FFFBF2] px-4 py-2.5 rounded-lg"
                >
                  <span className="text-[#FFB020]">✓</span>
                  {c}
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
