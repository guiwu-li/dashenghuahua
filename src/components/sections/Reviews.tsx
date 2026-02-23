'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const REVIEWS = [
  {
    name: '张女士',
    child: '女儿 6 岁',
    avatar: '👩',
    rating: 5,
    text: '孩子原来不爱画画，上了两节课之后每天主动要求画画，老师非常有耐心，很会引导孩子表达自己。',
  },
  {
    name: '李先生',
    child: '儿子 9 岁',
    avatar: '👨',
    rating: 5,
    text: '课程内容丰富，不只是临摹，更注重创意和想象力的培养。孩子的作品让我每次都很惊喜！',
  },
  {
    name: '王女士',
    child: '女儿 11 岁',
    avatar: '👩',
    rating: 5,
    text: '老师专业，课后点评详细有建设性。孩子参加了市里的绘画比赛，获得了优秀奖，非常感谢老师！',
  },
];

export default function Reviews() {
  const [current, setCurrent] = useState(0);

  function prev() { setCurrent((c) => (c - 1 + REVIEWS.length) % REVIEWS.length); }
  function next() { setCurrent((c) => (c + 1) % REVIEWS.length); }

  const review = REVIEWS[current];

  return (
    <section className="bg-white py-20" id="reviews">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-3">家长评价</h2>
          <p className="text-[#666666]">来自真实学员家长的反馈</p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
              className="bg-[#FFFBF2] rounded-[16px] p-8 text-center"
            >
              <div className="text-5xl mb-4">{review.avatar}</div>
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span key={i} className="text-[#FFB020] text-lg">★</span>
                ))}
              </div>
              <p className="text-[#1A1A1A] text-base leading-relaxed mb-6 italic">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="font-bold text-[#1A1A1A]">{review.name}</div>
              <div className="text-sm text-[#666666]">{review.child}</div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#666666] hover:border-[#FFB020] hover:text-[#FFB020] transition-colors"
              aria-label="上一条"
            >
              ‹
            </button>
            <div className="flex gap-2">
              {REVIEWS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === current ? 'bg-[#FFB020] scale-125' : 'bg-gray-200'
                  }`}
                  aria-label={`第 ${i + 1} 条评价`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#666666] hover:border-[#FFB020] hover:text-[#FFB020] transition-colors"
              aria-label="下一条"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
