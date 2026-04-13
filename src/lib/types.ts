export interface Emprendedora {
  slug: string;
  name: string;
  role: string;
  category: string;
  region: string;
  location: string;
  description: string;
  products: string;
  image: string;
  heroImage: string;
  phone?: string;
  email?: string;
  instagram?: string;
  facebook?: string;
}

export interface WPPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  categories: string[];
  tags: string[];
  thumbnailUrl: string;
}

export interface WPPage {
  id: number;
  slug: string;
  title: string;
  content: string;
}

export interface DirectorioMember {
  name: string;
  role: string;
  location: string;
  image: string;
}

export interface GalleryItem {
  title: string;
  description: string;
  slug: string;
  images: string[];
}

export interface BibliotecaItem {
  title: string;
  url: string;
  type: "pdf" | "video" | "external";
}
