import HeroSection from "@/components/ui/HeroSection";
import WPPageContent from "@/components/wp/WPPageContent";

export const metadata = {
  title: "Nuestra Red — Red Mujeres del Mar",
  description: "Mapa de organizaciones aliadas de la Red Nacional de Mujeres del Mar a lo largo de Chile.",
};

export default function NuestraRedPage() {
  return (
    <>
      <HeroSection
        title="Nuestra Red"
        subtitle="Organizaciones asociadas a lo largo del borde costero de Chile"
        height="h-[40vh]"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <WPPageContent slug="organizaciones-asociadas" fallbackMessage="No se pudo cargar la información de la red." />
        </div>
      </section>
    </>
  );
}
