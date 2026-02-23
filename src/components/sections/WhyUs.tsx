'use client';

import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';
import { WHY_US_ITEMS } from '@/lib/constants';

export default function WhyUs() {
  return (
    <section className="bg-white py-20" id="why-us">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-3">
            为什么选择我们
          </h2>
          <p className="text-[#666666] max-w-xl mx-auto">
            我们用专业与热情，陪伴孩子走过最美好的创作时光
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_US_ITEMS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Card className="text-center h-full">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">{item.title}</h3>
                <p className="text-sm text-[#666666] leading-relaxed">{item.desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
