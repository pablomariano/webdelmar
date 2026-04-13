interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

export default function SectionHeading({ title, subtitle, light = false }: SectionHeadingProps) {
  return (
    <div className="text-center mb-12">
      <h2 className={`font-sansita text-3xl sm:text-4xl md:text-5xl font-bold ${light ? "text-white" : "text-ocean-dark"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-lg max-w-2xl mx-auto ${light ? "text-white/80" : "text-gray-600"}`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-4 mx-auto w-24 h-1 rounded-full ${light ? "bg-white/40" : "bg-primary"}`} />
    </div>
  );
}
