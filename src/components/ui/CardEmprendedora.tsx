import Image from "next/image";
import Link from "next/link";
import type { Emprendedora } from "@/lib/types";

interface CardEmprendedoraProps {
  emprendedora: Emprendedora;
}

export default function CardEmprendedora({ emprendedora }: CardEmprendedoraProps) {
  return (
    <Link
      href={`/despensa-del-mar/${emprendedora.slug}`}
      className="group block"
    >
      <div className="card-3d smooth-hover bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl">
        <div className="relative h-64 overflow-hidden">
          <Image
            src={emprendedora.image}
            alt={emprendedora.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary/90 text-white rounded-full backdrop-blur-sm">
              {emprendedora.region}
            </span>
          </div>
        </div>
        <div className="p-5">
          <h3 className="font-sansita text-xl font-bold text-ocean-dark group-hover:text-primary transition-colors">
            {emprendedora.name}
          </h3>
          <p className="text-sm text-secondary font-semibold mt-1">
            {emprendedora.role}
          </p>
          <p className="text-sm text-gray-500 mt-1">
            {emprendedora.location}
          </p>
          <p className="text-sm text-gray-600 mt-3 line-clamp-2">
            {emprendedora.products}
          </p>
          <div className="mt-4 flex items-center text-primary font-semibold text-sm group-hover:gap-2 transition-all">
            Ver perfil
            <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
