import HeroSection from "@/components/ui/HeroSection";
import WPPageContent from "@/components/wp/WPPageContent";

export const metadata = {
  title: "Directorio — Red Mujeres del Mar",
  description: "Conoce al directorio de la Red Nacional de Mujeres del Mar.",
};

export default function DirectorioPage() {
  return (
    <>
      <HeroSection
        title="Directorio"
        subtitle="Conoce a las líderes que guían nuestra Red Nacional"
        height="h-[40vh]"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <WPPageContent slug="directorio" fallbackMessage="No se pudo cargar el contenido del directorio." />
        </div>
      </section>
    </>
  );
}
