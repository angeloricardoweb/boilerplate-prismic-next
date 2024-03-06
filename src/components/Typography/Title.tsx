type Props = {
  name: string;
  variant: 'center' | 'left' | 'right';
};

export function Title({ name, variant = 'left' }: Props) {
  return (
    <h2
      className={`
        text-2xl
        font-bold
        ${variant === 'center' ? 'text-center' : ''}
        ${variant === 'left' ? 'text-left' : ''}
        ${variant === 'right' ? 'text-right' : ''}
    `}
    >
      {name}
    </h2>
  );
}
