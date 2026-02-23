'use client';

import { motion } from 'framer-motion';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-semibold rounded-[50px] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FFB020]';

  const variants = {
    primary:
      'bg-[#FFB020] text-white hover:bg-[#E09010] active:bg-[#C07000]',
    secondary:
      'bg-white text-[#FFB020] border-2 border-[#FFB020] hover:bg-[#FFF8E8] active:bg-[#FFF0CC]',
    ghost:
      'bg-transparent text-[#1A1A1A] hover:bg-black/5',
  };

  const sizes = {
    sm:  'px-4 py-2 text-sm',
    md:  'px-6 py-3 text-base',
    lg:  'px-8 py-4 text-lg',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...(props as object)}
    >
      {children}
    </motion.button>
  );
}
