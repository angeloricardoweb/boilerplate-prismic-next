import React from 'react';

export default function ButtonOutline(
  props: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) {
  return (
    <button
      {...props}
      className="btn btn-outline"
    />
  );
}
