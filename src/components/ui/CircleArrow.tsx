import React from 'react';
import Link from 'next/link';

interface CircleArrowProps {
  href?: string;
  onClick?: () => void;
  className?: string;
  iconClassName?: string;
}

export const CircleArrow: React.FC<CircleArrowProps> = ({ 
  href, 
  onClick, 
  className = "", 
  iconClassName = "" 
}) => {
  const inner = (
    <svg
      className={`w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${iconClassName}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
    </svg>
  );

  const baseClass = `group w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ease-out hover:scale-105 cursor-pointer ${className}`;

  if (href) {
    return (
      <Link href={href} onClick={onClick} className={baseClass}>
        {inner}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={baseClass}>
      {inner}
    </button>
  );
};
