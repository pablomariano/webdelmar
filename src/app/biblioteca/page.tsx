import HeroSection from "@/components/ui/HeroSection";
import WPPageContent from "@/components/wp/WPPageContent";

export const metadata = {
  title: "Biblioteca — Red Mujeres del Mar",
  description: "Biblioteca de material descargable: estudios, leyes, informes y recursos sobre mujeres en la pesca artesanal.",
};

export default function BibliotecaPage() {
  return (
    <>
      <HeroSection
        title="Biblioteca"
        subtitle="Material descargable sobre mujeres en la pesca artesanal"
        height="h-[40vh]"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <WPPageContent slug="ley-no21-370" fallbackMessage="No se pudo cargar la biblioteca." />
        </div>
      </section>
    </>
  );
}
