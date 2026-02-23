'use client';

import { useState, useEffect } from 'react';
import Button from '@/components/ui/Button';
import { SITE } from '@/lib/constants';

interface StickyBarProps {
  onCtaClick: () => void;
}

export default function StickyBar({ onCtaClick }: StickyBarProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 200);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-100 px-4 py-3 safe-area-inset-bottom shadow-lg">
      <Button className="w-full" size="lg" onClick={onCtaClick}>
        {SITE.ctaPrimary} — 限时免费
      </Button>
    </div>
  );
}
