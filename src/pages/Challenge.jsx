import { useState } from "react";
import UserHeader from "../components/UserHeader";
import HamburgerMenu from "../components/HamburgerMenu";

const challenges = [
  {
    titulo: "Recolecta 5 botellas plásticas",
    descripcion: "Encuentra y deposita 5 botellas de plástico en los contenedores designados.",
    dificultad: "Fácil",
    progreso: 3,
    total: 5,
    diasRestantes: 1,
    puntos: 50,
    tipo: "Individuales",
  },
  {
    titulo: "Recicla papel durante una semana",
    descripcion: "Deposita papel para reciclar durante 7 días consecutivos.",
    dificultad: "Media",
    progreso: 3,
    total: 7,
    diasRestantes: 4,
    puntos: 100,
    tipo: "Grupales",
  },
  {
    titulo: "Recolectar residuos electrónicos",
    descripcion: "Deposita al menos 2 residuos electrónicos en puntos especiales.",
    dificultad: "Difícil",
    progreso: 0,
    total: 2,
    diasRestantes: 5,
    puntos: 150,
    tipo: "Referidos",
  },
];

const difficultyStyle = {
  Fácil: "bg-green-100 text-green-700",
  Media: "bg-yellow-100 text-yellow-700",
  Difícil: "bg-red-100 text-red-700",
};

export default function Challenge() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filtro, setFiltro] = useState("Todos");

  const resultado = challenges.filter((r) =>
    filtro === "Todos" || r.tipo === filtro
  );

  return (
    <div className="min-h-screen bg-white flex flex-col items-center pt-3 px-0">
      <UserHeader onMenu={() => setMenuOpen(true)} />
      <HamburgerMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* Cambia px-2 por px-4 aquí para mayor espacio a los lados */}
      <div className={menuOpen ? "hidden" : "w-full max-w-md mx-auto px-4"}>

        <div className="bg-white rounded-2xl border border-[#E0E5EB] px-5 py-3 mb-4">
          <span className="font-semibold text-[#141B21]" style={{ fontSize: 15 }}>
            Nivel 3: Reciclador Activo
          </span>
        </div>

        <div className="flex items-center gap-2 mb-4">
          {["Todos", "Individuales", "Grupales", "Referidos"].map((tab) => (
            <button
              key={tab}
              onClick={() => setFiltro(tab)}
              className={`flex-1 py-2 rounded-xl border text-xs font-semibold transition
                ${filtro === tab
                  ? "bg-[#199A61] text-white border-[#199A61]"
                  : "bg-white text-[#141B21] border-[#E0E5EB]"
                }`}
              style={{ fontSize: 13, minHeight: 36 }}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-4 pb-6">
          {resultado.map((r, i) => {
            const porcentaje = Math.round((r.progreso / r.total) * 100);
            return (
              <div
                key={i}
                // Cambié px-5 a px-3 para mejor ajuste en mobile
                className="bg-white rounded-2xl shadow-sm border border-[#E0E5EB] p-5"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-[#141B21]" style={{ fontSize: 17 }}>
                    {r.titulo}
                  </span>
                  <span
                    className={`text-xs px-3 py-1 rounded-full font-bold shrink-0 ${difficultyStyle[r.dificultad]}`}
                    style={{ fontSize: 13 }}
                  >
                    {r.dificultad}
                  </span>
                </div>

                <p className="text-[#7D8797] text-sm mb-3" style={{ fontSize: 15, lineHeight: 1.5 }}>
                  {r.descripcion}
                </p>

                <div className="flex items-center mb-2">
                  <span className="text-xs font-semibold mr-2 text-[#141B21]" style={{ fontSize: 12 }}>
                    Progreso: {r.progreso}/{r.total}
                  </span>
                  <span className="ml-auto text-xs text-[#7D8797]" style={{ fontSize: 12 }}>
                    {porcentaje}%
                  </span>
                </div>

                <div className="w-full bg-gray-200 h-2 rounded mb-2">
                  <div
                    className="bg-green-500 h-2 rounded transition-all duration-300"
                    style={{ width: `${porcentaje}%` }}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#7D8797] flex items-center gap-1" style={{ fontSize: 12 }}>
                    <i className="fi fi-rr-clock-three text-xs"></i>
                    {r.diasRestantes} día{r.diasRestantes !== 1 ? "s" : ""} restante{r.diasRestantes !== 1 ? "s" : ""}
                  </span>
                  <span className="flex items-center gap-1 text-lg font-bold text-[#FFC400]" style={{ fontSize: 18 }}>
                    <i className="bi bi-award" style={{ fontSize: 22 }}></i>
                    +{r.puntos} pts
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}