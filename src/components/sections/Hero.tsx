'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { SITE } from '@/lib/constants';

interface HeroProps {
  onCtaClick: () => void;
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, delay },
});

export default function Hero({ onCtaClick }: HeroProps) {
  return (
    <section className="relative bg-[#FFFBF2] min-h-screen flex items-center pt-16">
      {/* Decorative blobs */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-[#FFB020]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-56 h-56 bg-[#4DBEFF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: copy */}
        <div>
          {/* Badge */}
          <motion.div {...fadeUp(0.05)}>
            <span className="inline-block bg-[#FFB020]/15 text-[#E09010] text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              🎨 专注 3–12 岁美术启蒙
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.1)}
            className="text-4xl sm:text-5xl font-bold text-[#1A1A1A] leading-tight mb-4"
          >
            {SITE.tagline}
          </motion.h1>

          <motion.p {...fadeUp(0.15)} className="text-lg text-[#666666] mb-8 max-w-lg">
            专业师资团队，趣味互动课堂，让孩子在画画中发现自信与创造力。
            全程直播，家长放心，0 基础即可报名。
          </motion.p>

          {/* CTAs */}
          <motion.div {...fadeUp(0.2)} className="flex flex-wrap gap-4 mb-10">
            <Button size="lg" onClick={onCtaClick}>
              {SITE.ctaPrimary}
            </Button>
            <Button size="lg" variant="secondary" onClick={() => {
              document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              {SITE.ctaSecondary}
            </Button>
          </motion.div>

          {/* Social proof */}
          <motion.div {...fadeUp(0.25)} className="flex flex-wrap items-center gap-6 text-sm text-[#666666]">
            <div className="flex items-center gap-1.5">
              <span className="text-[#FFB020] font-bold text-xl">10,000+</span>
              <span>学员信任</span>
            </div>
            <div className="w-px h-5 bg-gray-200" />
            <div className="flex items-center gap-1.5">
              <span className="text-[#FFB020] font-bold text-xl">98%</span>
              <span>家长满意</span>
            </div>
            <div className="w-px h-5 bg-gray-200" />
            <div className="flex items-center gap-1.5">
              <span className="text-[#FFB020] font-bold text-xl">50+</span>
              <span>专业老师</span>
            </div>
          </motion.div>
        </div>

        {/* Right: illustration placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="w-full max-w-md aspect-square bg-gradient-to-br from-[#FFB020]/20 via-[#4DBEFF]/10 to-[#52C41A]/10 rounded-3xl flex flex-col items-center justify-center text-center p-8 border-2 border-dashed border-[#FFB020]/30">
            <div className="text-7xl mb-4">🖌️</div>
            <p className="text-[#666666] font-medium">品牌主视觉插图</p>
            <p className="text-sm text-[#999999] mt-1">（待设计师提供）</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
