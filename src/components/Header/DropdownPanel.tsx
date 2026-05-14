"use client";

import { useEffect, useRef } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onMouseEnter?: () => void;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function DropdownPanel({
  isOpen,
  onClose,
  onMouseEnter,
  children,
  className,
  style,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const onCloseRef = useRef(onClose);
  useEffect(() => { onCloseRef.current = onClose; });

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onCloseRef.current();
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isOpen]);

  return (
    <div ref={ref} className={className} style={style} onMouseEnter={onMouseEnter}>
      {children}
    </div>
  );
}
