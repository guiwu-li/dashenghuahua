'use client';

import { motion } from 'framer-motion';

const PLACEHOLDER_WORKS = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  color: ['#FFB020', '#4DBEFF', '#52C41A', '#FF4D4D', '#A78BFA', '#F97316', '#EC4899', '#14B8A6'][i % 8],
  emoji: ['🌻', '🐠', '🦋', '🌈', '🐉', '🌙', '🦊', '🏔️'][i % 8],
  label: `学员作品 ${i + 1}`,
}));

export default function Gallery() {
  return (
    <section className="bg-[#FFFBF2] py-20" id="gallery">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-3">学员作品</h2>
          <p className="text-[#666666]">每一幅画，都是孩子内心世界的窗口</p>
        </motion.div>

        {/* Horizontally scrollable gallery */}
        <div className="overflow-x-auto -mx-4 px-4 pb-4">
          <div className="flex gap-4" style={{ width: 'max-content' }}>
            {PLACEHOLDER_WORKS.map((work, i) => (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="w-52 h-52 rounded-[16px] flex flex-col items-center justify-center shrink-0 shadow-sm"
                style={{ backgroundColor: work.color + '22', border: `2px solid ${work.color}33` }}
              >
                <div className="text-5xl mb-2">{work.emoji}</div>
                <p className="text-xs text-[#666666]">{work.label}</p>
                <p className="text-xs text-[#999999] mt-0.5">（待上传真实作品）</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
