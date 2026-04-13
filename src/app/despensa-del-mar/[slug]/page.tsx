import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import emprendedoras from "@/data/emprendedoras.json";
import type { Emprendedora } from "@/lib/types";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return (emprendedoras as Emprendedora[]).map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const emp = (emprendedoras as Emprendedora[]).find((e) => e.slug === slug);
  if (!emp) return { title: "No encontrado" };
  return {
    title: `${emp.name} — Despensa del Mar`,
    description: emp.description,
  };
}

export default async function EmprendedoraPage({ params }: PageProps) {
  const { slug } = await params;
  const emp = (emprendedoras as Emprendedora[]).find((e) => e.slug === slug);
  if (!emp) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <Image
          src={emp.heroImage}
          alt={emp.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <Link
            href="/despensa-del-mar"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver a Despensa del Mar
          </Link>
          <span className="inline-block px-3 py-1 bg-primary/90 text-white rounded-full text-sm font-semibold mb-3">
            {emp.region}
          </span>
          <h1 className="font-sansita text-4xl sm:text-5xl md:text-6xl font-bold text-white text-shadow-strong">
            {emp.name}
          </h1>
          <p className="text-xl text-white/90 mt-2">{emp.role} · {emp.location}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Main info */}
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="font-sansita text-2xl font-bold text-ocean-dark mb-4">
                  Sobre {emp.name.split(" ")[0]}
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {emp.description}
                </p>
              </div>

              <div>
                <h2 className="font-sansita text-2xl font-bold text-ocean-dark mb-4">
                  Productos
                </h2>
                <div className="bg-gradient-to-br from-ocean-light/20 to-white p-6 rounded-2xl border border-ocean-light/30">
                  <p className="text-gray-700 leading-relaxed">{emp.products}</p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-6 rounded-2xl border border-ocean-light/20">
                <h3 className="font-sansita text-lg font-bold text-ocean-dark mb-4">
                  Información
                </h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <span className="text-gray-500 block">Ubicación</span>
                      <span className="text-gray-800 font-medium">{emp.location}, {emp.region}</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <span className="text-gray-500 block">Actividad</span>
                      <span className="text-gray-800 font-medium">{emp.role}</span>
                    </div>
                  </li>
                </ul>
              </div>

              <Link
                href="/contacto"
                className="block w-full text-center px-6 py-3 bg-primary hover:bg-primary/90 text-white font-bold rounded-full transition-all shadow-md"
              >
                Contactar
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
