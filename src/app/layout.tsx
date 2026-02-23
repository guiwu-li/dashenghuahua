import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '大声画画的孩子 — 让每个孩子都爱上画画',
  description:
    '专注 3–12 岁儿童美术在线教育。专业师资，趣味互动，全程直播，0 基础即可报名。免费体验课，立即预约。',
  keywords: ['儿童美术', '在线画画课', '少儿美术', '儿童绘画', '艺术启蒙'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
