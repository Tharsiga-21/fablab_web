// Reusable section heading component with a signature orange underline bar and optional subtitle.

export default function SectionTitle({ title, subtitle, align = 'left' }) {
  const isCentered = align === 'center';

  return (
    <div className={`mb-10 sm:mb-12 ${isCentered ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'}`}>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#1A1F36]">
        {title}
      </h2>
      <div
        className={`mt-3 h-1.5 w-16 rounded-full bg-[#FF8C00] ${
          isCentered ? 'mx-auto' : ''
        }`}
        aria-hidden="true"
      />
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#1A1F36]/75">
          {subtitle}
        </p>
      )}
    </div>
  );
}
