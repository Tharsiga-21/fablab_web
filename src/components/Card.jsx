// Reusable card wrapper with rounded corners, soft shadow, and smooth hover transition.

export default function Card({ children, className = '', onClick, as: Component = 'div' }) {
  return (
    <Component
      onClick={onClick}
      className={`rounded-2xl bg-white border border-[#4169E1]/12 shadow-sm hover:shadow-md transition-all duration-200 ${className}`}
    >
      {children}
    </Component>
  );
}
