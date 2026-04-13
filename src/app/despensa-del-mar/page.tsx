import HeroSection from "@/components/ui/HeroSection";
import WPPageContent from "@/components/wp/WPPageContent";

export const metadata = {
  title: "Despensa del Mar — Red Mujeres del Mar",
  description: "Conoce a nuestras emprendedoras del mar y sus productos artesanales frescos del borde costero de Chile.",
};

export default function DespensaDelMarPage() {
  return (
    <>
      <HeroSection
        title="Despensa del Mar"
        subtitle="Productos frescos y artesanales directamente desde nuestras emprendedoras del borde costero"
        imageUrl="https://redmujeresdelmar.cl/wp-content/uploads/2022/02/Mujer-orilla-de-Maule-scaled-1.jpg"
        height="h-[50vh]"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <WPPageContent slug="despensadelmar" fallbackMessage="No se pudo cargar la Despensa del Mar." />
        </div>
      </section>
    </>
  );
}
