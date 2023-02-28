import React from 'react';

export default function ButtonPrimary(
  props: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) {
  return (
    <button
      {...props}
      className="btn btn-primary"
    />
  );
}
