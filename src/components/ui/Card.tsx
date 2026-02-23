import { HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export default function Card({ hover = true, className = '', children, ...props }: CardProps) {
  return (
    <div
      className={`bg-white rounded-[16px] shadow-sm p-6 ${
        hover ? 'transition-shadow hover:shadow-md' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
