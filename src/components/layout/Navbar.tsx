'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS, SITE } from '@/lib/constants';
import Button from '@/components/ui/Button';

interface NavbarProps {
  onCtaClick: () => void;
}

export default function Navbar({ onCtaClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 10);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="text-xl font-bold text-[#1A1A1A] shrink-0">
            {SITE.name}
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#666666] hover:text-[#1A1A1A] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button size="sm" onClick={onCtaClick}>
              {SITE.ctaPrimary}
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-[#1A1A1A]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="菜单"
          >
            <span className="block w-5 h-0.5 bg-current mb-1.5 transition-all" />
            <span className="block w-5 h-0.5 bg-current mb-1.5 transition-all" />
            <span className="block w-5 h-0.5 bg-current transition-all" />
          </button>
        </div>
      </header>

      {/* Mobile full-screen drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/40 z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />
            <motion.div
              className="fixed top-0 right-0 bottom-0 w-72 bg-white z-50 md:hidden flex flex-col p-8 pt-20"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.25 }}
            >
              <button
                onClick={closeMenu}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
                aria-label="关闭"
              >
                ×
              </button>

              <nav className="flex flex-col gap-6">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="text-lg font-medium text-[#1A1A1A] hover:text-[#FFB020] transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <Button
                className="mt-8 w-full"
                size="lg"
                onClick={() => {
                  closeMenu();
                  onCtaClick();
                }}
              >
                {SITE.ctaPrimary}
              </Button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
