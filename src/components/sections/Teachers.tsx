'use client';

import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';

const TEACHERS = [
  { name: '小林老师', title: '中国美术学院', exp: '9 年教龄', specialty: '水彩 · 儿童画', emoji: '👩‍🎨' },
  { name: '陈老师', title: '清华美院', exp: '7 年教龄', specialty: '素描 · 创意画', emoji: '🧑‍🎨' },
  { name: '王老师', title: '中央美术学院', exp: '11 年教龄', specialty: '国画 · 综合材料', emoji: '👨‍🎨' },
  { name: '李老师', title: '四川美术学院', exp: '6 年教龄', specialty: '色彩 · 插画', emoji: '👩‍🎨' },
];

export default function Teachers() {
  return (
    <section className="bg-white py-20" id="teachers">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-3">师资团队</h2>
          <p className="text-[#666666]">全国美院毕业，专业认证，用心陪伴每一个孩子</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEACHERS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Card className="text-center">
                {/* Avatar placeholder */}
                <div className="w-20 h-20 bg-[#FFB020]/10 rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                  {t.emoji}
                </div>
                <h3 className="text-base font-bold text-[#1A1A1A] mb-1">{t.name}</h3>
                <p className="text-xs text-[#4DBEFF] font-medium mb-1">{t.title}</p>
                <p className="text-xs text-[#666666] mb-2">{t.exp}</p>
                <span className="inline-block bg-[#FFB020]/10 text-[#E09010] text-xs px-3 py-1 rounded-full">
                  {t.specialty}
                </span>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
