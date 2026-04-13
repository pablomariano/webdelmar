import Link from "next/link";
import HeroSection from "@/components/ui/HeroSection";
import SectionHeading from "@/components/ui/SectionHeading";
import WPLatestPosts from "@/components/wp/WPLatestPosts";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        title="Red Nacional de Mujeres del Mar"
        subtitle="Mujeres de la Pesca Artesanal, el Borde Costero y las Aguas Continentales de Chile"
        imageUrl="https://redmujeresdelmar.cl/wp-content/uploads/2025/06/IMG_2678-scaled.jpg"
        height="h-screen"
      >
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
          <Link
            href="/despensa-del-mar"
            className="px-8 py-3 bg-primary hover:bg-primary/90 text-white font-bold rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Despensa del Mar
          </Link>
          <Link
            href="/noticias"
            className="px-8 py-3 bg-white/20 hover:bg-white/30 text-white font-bold rounded-full backdrop-blur-sm transition-all border border-white/30"
          >
            Noticias
          </Link>
        </div>
      </HeroSection>

      {/* Misión */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Nuestra Misión"
            subtitle="Visibilizar, proteger y empoderar a las mujeres del borde costero de Chile"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {[
              {
                icon: "🌊",
                title: "Pesca Artesanal",
                desc: "Promovemos prácticas de pesca sustentable y el reconocimiento del trabajo de las mujeres en el sector pesquero artesanal.",
              },
              {
                icon: "🤝",
                title: "Red Nacional",
                desc: "Conectamos a mujeres del borde costero desde Atacama hasta Los Lagos, creando una red de apoyo y colaboración.",
              },
              {
                icon: "📣",
                title: "Incidencia Política",
                desc: "Trabajamos por políticas públicas con enfoque de género que visibilicen y protejan los derechos de las pescadoras.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-ocean-light/20 to-white border border-ocean-light/30 smooth-hover hover:shadow-lg hover:-translate-y-1"
              >
                <span className="text-5xl block mb-4 animate-float">{item.icon}</span>
                <h3 className="font-sansita text-xl font-bold text-ocean-dark mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Despensa del Mar CTA */}
      <section className="py-20 bg-gradient-to-br from-ocean-light/10 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            title="Despensa del Mar"
            subtitle="Conoce a nuestras emprendedoras y sus productos del mar"
          />
          <Link
            href="/despensa-del-mar"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white font-bold rounded-full transition-all shadow-md hover:shadow-lg"
          >
            Ver emprendedoras
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Noticias */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Noticias"
            subtitle="Últimas novedades de la Red de Mujeres del Mar"
          />
          <WPLatestPosts count={6} />
          <div className="text-center mt-10">
            <Link
              href="/noticias"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold rounded-full transition-all"
            >
              Ver todas las noticias
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Contacto */}
      <section className="py-20 wave-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-sansita text-4xl md:text-5xl font-bold text-white mb-4">
            ¿Quieres ser parte de la Red?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Únete a la Red Nacional de Mujeres del Mar y juntas fortalezcamos el rol de la mujer en la pesca artesanal.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary hover:bg-ocean-light font-bold rounded-full transition-all shadow-lg hover:shadow-xl text-lg"
          >
            Contáctanos
          </Link>
        </div>
      </section>
    </>
  );
}
