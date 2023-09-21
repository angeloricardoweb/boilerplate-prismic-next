import React from 'react';

type Props = {
  children: React.ReactNode;
  variant:
    | 'primaryGreen'
    | 'primaryViolet'
    | 'primaryPink'
    | 'secondary'
    | 'outlinedWhite';
  color?: string;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  full?: boolean;
};

export function Button({
  children,
  variant = 'primaryGreen',
  disabled = false,
  onClick,
  type = 'button',
  full = false,
}: Props) {
  const primaryGreen = 'bg-brand-green text-white';
  const primaryViolet = 'bg-brand-violet text-white';
  const primaryPink = 'bg-brand-pink text-white';
  const outlinedWhite = 'bg-transparent border border-white text-white';

  return (
    <button
      className={`mt-3 flex items-center justify-center gap-2 rounded-full px-4 py-2 transition-all hover:opacity-75
        ${variant === 'primaryGreen' && primaryGreen}
        ${variant === 'primaryViolet' && primaryViolet}
        ${variant === 'primaryPink' && primaryPink}
        ${variant === 'outlinedWhite' && outlinedWhite}
        ${full ? 'w-full' : 'w-fit'}
      `}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
}
