import React from 'react';

type Props = {
  children: React.ReactNode;
  variant: 'primaryGreen' | 'primaryViolet' | 'primaryPink' | 'secondary' | 'outlinedWhite';
  color?: string;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
};

export function Button({
  children,
  variant = 'primaryGreen',
  disabled = false,
  onClick,
}: Props) {
  const primaryGreen = 'bg-brand-green text-white';
  const primaryViolet = 'bg-brand-violet text-white';
  const primaryPink = 'bg-brand-pink text-white';
  const outlinedWhite = 'bg-transparent border border-white text-white';

  return (
    <button
      className={`flex items-center justify-center gap-2 rounded-full transition-all hover:opacity-75 px-4 py-2 mt-3
        ${variant === 'primaryGreen' && primaryGreen}
        ${variant === 'primaryViolet' && primaryViolet}
        ${variant === 'primaryPink' && primaryPink}
        ${variant === 'outlinedWhite' && outlinedWhite}
      `}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
