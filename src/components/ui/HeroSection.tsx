import Image from "next/image";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  imageUrl?: string;
  overlay?: boolean;
  height?: string;
  children?: React.ReactNode;
}

export default function HeroSection({
  title,
  subtitle,
  imageUrl,
  overlay = true,
  height = "h-[60vh]",
  children,
}: HeroSectionProps) {
  return (
    <section className={`relative ${height} flex items-center justify-center overflow-hidden`}>
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      )}
      {!imageUrl && (
        <div className="absolute inset-0 wave-bg" />
      )}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-dark/60 via-ocean-dark/40 to-ocean-dark/70" />
      )}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-sansita text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white text-shadow-strong animate-fade-in">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg sm:text-xl text-white/90 max-w-2xl mx-auto animate-slide-up">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
