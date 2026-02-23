'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import Button from './Button';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({ isOpen, onClose }: ModalProps) {
  const [form, setForm] = useState({ name: '', phone: '', age: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: integrate with 腾讯文档 / 飞书多维表格
    setSubmitted(true);
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Dialog */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="报名表单"
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.25 }}
          >
            <div
              className="bg-white rounded-[16px] shadow-xl w-full max-w-md p-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl leading-none"
                aria-label="关闭"
              >
                ×
              </button>

              {submitted ? (
                <div className="text-center py-4">
                  <div className="text-5xl mb-4">🎉</div>
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">报名成功！</h3>
                  <p className="text-[#666666]">老师将在 24 小时内与您联系，安排试课时间。</p>
                  <Button className="mt-6 w-full" onClick={onClose}>
                    好的，期待上课！
                  </Button>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-1">预约免费试课</h3>
                  <p className="text-[#666666] text-sm mb-6">填写信息，老师 24 小时内联系您</p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-[#1A1A1A] mb-1">
                        家长姓名 <span className="text-[#FF4D4D]">*</span>
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="请输入姓名"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFB020] focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#1A1A1A] mb-1">
                        手机号码 <span className="text-[#FF4D4D]">*</span>
                      </label>
                      <input
                        required
                        type="tel"
                        placeholder="请输入手机号"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFB020] focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#1A1A1A] mb-1">
                        孩子年龄 <span className="text-[#FF4D4D]">*</span>
                      </label>
                      <select
                        required
                        value={form.age}
                        onChange={(e) => setForm({ ...form, age: e.target.value })}
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFB020] focus:border-transparent bg-white"
                      >
                        <option value="">请选择年龄</option>
                        {Array.from({ length: 10 }, (_, i) => i + 3).map((age) => (
                          <option key={age} value={age}>
                            {age} 岁
                          </option>
                        ))}
                      </select>
                    </div>

                    <Button type="submit" className="w-full mt-2" size="lg">
                      立即预约免费试课
                    </Button>

                    <p className="text-center text-xs text-[#666666]">
                      我们承诺保护您的隐私，不会分享您的信息
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
