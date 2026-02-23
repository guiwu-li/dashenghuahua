'use client';

import { motion } from 'framer-motion';
import { TEACHING_STEPS } from '@/lib/constants';

export default function TeachingMethod() {
  return (
    <section className="bg-white py-20" id="method">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-3">教学方法</h2>
          <p className="text-[#666666]">三步教学法，让学习自然发生</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-10 left-1/6 right-1/6 h-0.5 bg-[#FFB020]/20 pointer-events-none" />

          {TEACHING_STEPS.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative text-center"
            >
              {/* Step circle */}
              <div className="w-20 h-20 bg-[#FFB020] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-5 shadow-md">
                {step.step}
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">{step.title}</h3>
              <p className="text-[#666666] leading-relaxed text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
