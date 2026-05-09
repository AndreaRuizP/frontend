import { Link } from "react-router-dom";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  return (
    <main className="w-full min-h-[calc(100vh-60px)] flex flex-col items-center bg-white">
      <Header />
      <section className="w-full bg-[#f0fdf4] py-10">
        <div className="w-full max-w-md mx-auto px-4">
          <h1 className="text-[1.75rem] leading-tight font-bold text-center text-[#141B21] mb-4">
            Recicla, Aprende y Gana<br />con CleanPoints
          </h1>
          <p className="text-base leading-[1.5] text-center text-[#333] mb-6">
            Únete a la comunidad que está transformando la forma en que manejamos los residuos. Aprende, actúa y recibe recompensas por tus acciones positivas para el medio ambiente.
          </p>
          <Link
            to="/login"
            className="w-full h-12 bg-green-600 text-white font-semibold rounded-lg transition active:bg-green-700 mb-3 flex items-center justify-center text-base"
          >
            Empieza a Recolectar
          </Link>
        </div>
      </section>
      <section className="w-full max-w-md mx-auto bg-white pt-7 pb-6 px-0 mb-4">
        <h2 className="text-[1.6rem] font-bold text-center text-[#141B21] mb-2 leading-snug">
          Características Principales
        </h2>
        <p className="text-[1rem] text-center text-[#666] leading-[1.5] px-2">
          CleanPoints ofrece una experiencia completa para fomentar el manejo adecuado de residuos sólidos.
        </p>
      </section>
      <Cards />
      <Footer />
    </main>
  );
}