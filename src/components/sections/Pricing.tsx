'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { PRICING_PLANS } from '@/lib/constants';

interface PricingProps {
  onCtaClick: () => void;
}

export default function Pricing({ onCtaClick }: PricingProps) {
  return (
    <section className="bg-[#FFFBF2] py-20" id="pricing">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-3">课程价格</h2>
          <p className="text-[#666666]">透明定价，按需选择，随时升级</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {PRICING_PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div
                className={`rounded-[16px] p-8 h-full flex flex-col relative ${
                  plan.highlight
                    ? 'bg-[#FFB020] text-white shadow-xl scale-105'
                    : 'bg-white shadow-sm'
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FF4D4D] text-white text-xs font-bold px-4 py-1 rounded-full">
                    最受欢迎
                  </span>
                )}

                <div className={`text-sm font-semibold mb-1 ${plan.highlight ? 'text-white/80' : 'text-[#666666]'}`}>
                  {plan.name}
                </div>
                <div className="flex items-end gap-1 mb-1">
                  <span className={`text-4xl font-bold ${plan.highlight ? 'text-white' : 'text-[#1A1A1A]'}`}>
                    {plan.price}
                  </span>
                  {'sub' in plan && (
                    <span className={`text-sm pb-1 ${plan.highlight ? 'text-white/70' : 'text-[#666666]'}`}>
                      {plan.sub}
                    </span>
                  )}
                </div>
                <p className={`text-sm mb-6 ${plan.highlight ? 'text-white/80' : 'text-[#666666]'}`}>
                  {plan.desc}
                </p>

                <ul className="space-y-2 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className={`flex items-center gap-2 text-sm ${plan.highlight ? 'text-white' : 'text-[#1A1A1A]'}`}>
                      <span className={plan.highlight ? 'text-white' : 'text-[#52C41A]'}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.highlight ? 'secondary' : 'primary'}
                  className="w-full"
                  onClick={onCtaClick}
                >
                  {plan.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
