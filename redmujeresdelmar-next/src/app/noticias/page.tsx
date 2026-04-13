import WPNoticiasRouter from "@/components/wp/WPNoticiasRouter";

export const metadata = {
  title: "Noticias — Red Mujeres del Mar",
  description: "Últimas noticias y novedades de la Red Nacional de Mujeres del Mar.",
};

export default function NoticiasPage() {
  return <WPNoticiasRouter />;
}
