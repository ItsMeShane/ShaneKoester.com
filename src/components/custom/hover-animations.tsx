import { cn } from '@/lib/utils';
import React from 'react';

export default function UnderlineAnimation({
  children,
  className,
  underlineColor = 'currentColor',
  offsetY = '-0.25rem',
  thickness = '2px',
  durationMs = 300,
}: {
  children: React.ReactNode;
  className?: string,
  underlineColor?: string;
  offsetY?: string;
  thickness?: string;
  durationMs?: number;
}) {
  const transitionDuration = `${durationMs}ms`;

  return (
    <div className={cn("relative group/underline-animation inline-block", className)}>
      {children}
      <span
        className="absolute left-0 w-full transform scale-x-0 origin-right transition-transform group-hover/underline-animation:origin-left group-hover/underline-animation:scale-x-100"
        style={{
          bottom: offsetY,
          height: thickness,
          backgroundColor: underlineColor,
          transitionDuration,
        }}
      />
    </div>
  );
}




export function TranslateOnHover({
  children,
  translateX = '0',
  translateY = '-1rem',
  durationMs = 300,
  easing = 'ease-out',
}: {
  children: React.ReactNode;
  translateX?: string;
  translateY?: string;
  durationMs?: number;
  easing?: string;
}) {
  return (
    <div
      className={`inline-block group/translate-animation transition-transform duration-[${durationMs}ms] ${easing} group-hover/translate-animation:translate-x-[${translateX}] group-hover/translate-animation:translate-y-[${translateY}]`}
    >
      {children}
    </div>
  );
}

// Usage examples:
// <TranslateOnHover>Default move up</TranslateOnHover>
// <TranslateOnHover translateY="1rem">Move down</TranslateOnHover>
// <TranslateOnHover translateX="2rem" durationMs={500} easing="ease-in">Slide right</TranslateOnHover>
