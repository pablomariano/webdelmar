import HeroSection from "@/components/ui/HeroSection";
import WPPageContent from "@/components/wp/WPPageContent";

export const metadata = {
  title: "Contacto — Red Mujeres del Mar",
  description: "Contáctanos para ser parte de la Red Nacional de Mujeres del Mar.",
};

export default function ContactoPage() {
  return (
    <>
      <HeroSection
        title="Contacto"
        subtitle="Escríbenos y sé parte de la Red"
        height="h-[40vh]"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <WPPageContent slug="contacto" fallbackMessage="No se pudo cargar la página de contacto." />
        </div>
      </section>
    </>
  );
}
