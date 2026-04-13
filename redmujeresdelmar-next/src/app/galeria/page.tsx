import HeroSection from "@/components/ui/HeroSection";
import WPGalleryContent from "@/components/wp/WPGalleryContent";

export const metadata = {
  title: "Galería — Red Mujeres del Mar",
  description: "Galería fotográfica y videoteca de la Red Nacional de Mujeres del Mar.",
};

export default function GaleriaPage() {
  return (
    <>
      <HeroSection
        title="Galería"
        subtitle="Red Nacional Mujeres del Mar"
        imageUrl="https://redmujeresdelmar.cl/wp-content/uploads/2025/06/IMG_2678-scaled.jpg"
        height="h-[50vh]"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <WPGalleryContent />
        </div>
      </section>
    </>
  );
}
