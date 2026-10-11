// Reusable button component supporting primary (orange) and secondary (outline royal blue) variants.
// Renders as a semantic <a> link when an href prop is provided, or a <button> otherwise.

export default function Button({
  children,
  variant = 'primary',
  inverse = false,
  href,
  external = false,
  type = 'button',
  onClick,
  className = '',
}) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF8C00] whitespace-nowrap shrink-0 cursor-pointer';

  const variants = {
    primary:
      'bg-[#FF8C00] text-white hover:bg-[#E67E00] shadow-sm hover:shadow',
    secondary: inverse
      ? 'border-2 border-white/85 text-white hover:bg-white hover:text-[#2A4BB8]'
      : 'border-2 border-[#4169E1] text-[#4169E1] hover:bg-[#2A4BB8] hover:border-[#2A4BB8] hover:text-white',
  };

  const combinedClassName = `${baseStyles} ${variants[variant] || variants.primary} ${className}`;

  if (href) {
    const isExternal = external || href.startsWith('http');
    return (
      <a
        href={href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        onClick={onClick}
        className={combinedClassName}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  );
}
