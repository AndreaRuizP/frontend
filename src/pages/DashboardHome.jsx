import { useState } from "react";
import HamburgerMenu from "../components/HamburgerMenu";
import  UserHeader from "../components/UserHeader";

export default function DashboardHome() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center pt-3 px-0">
      <UserHeader onMenu={() => setMenuOpen(true)} />
      <div className="w-full max-w-md mx-auto pl-4 pr-4 mt-2 mb-3">
        <div>
          <div
            className="text-base font-semibold text-[#222] leading-snug"
            style={{ fontSize: 16, lineHeight: 1.5 }}
          >
            Buenas noches
          </div>
          <span
            className="block text-2xl font-bold leading-snug mt-0"
            style={{ fontSize: 28, lineHeight: 1.25 }}
          >
            Nombre_Usuario
          </span>
        </div>
      </div>
      <HamburgerMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <main className="w-full max-w-md mx-auto pt-0 pb-6 px-4">
        <div className="bg-white rounded-2xl shadow-sm border border-[#E0E5EB] px-5 py-4 flex items-center justify-between mb-4">
          <div>
            <span className="text-[#12B76A] font-bold text-xl" style={{ fontSize: 20 }}>
              150
            </span>
            <span className="ml-2 text-[#666] text-base" style={{ fontSize: 16 }}>
              CleanPoints
            </span>
            <div className="text-xs text-[#7D8797] mt-1" style={{ fontSize: 12, lineHeight: 1.5 }}>
              350 pts para el nivel 2
            </div>
          </div>
          <span className="bg-[#E4F9ED] text-[#199A61] font-semibold text-xs px-3 py-1 rounded-full border" style={{ fontSize: 13 }}>
            Nivel 1
          </span>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <button className="flex flex-col bg-white rounded-2xl border border-[#E0E5EB] shadow-sm items-center py-4 px-0 min-h-[80px] justify-center active:bg-gray-50 transition" style={{ minWidth: 0 }}>
            <i className="fi fi-rr-marker text-lg mb-1"></i>
            <span className="text-[15px] font-semibold mb-0" style={{ fontSize: 15 }}>
              Contenedores
            </span>
            <span className="text-xs text-[#7D8797]" style={{ fontSize: 12 }}>
              cercanos
            </span>
          </button>
          <button className="flex flex-col bg-white rounded-2xl border border-[#E0E5EB] shadow-sm items-center py-4 px-0 min-h-[80px] justify-center active:bg-gray-50 transition" style={{ minWidth: 0 }}>
            <i className="fi fi-rr-scan text-lg mb-1"></i>
            <span className="text-[15px] font-semibold mb-0" style={{ fontSize: 15 }}>
              Escanear QR
            </span>
            <span className="text-xs text-[#7D8797]" style={{ fontSize: 12 }}>
              Valida acción
            </span>
          </button>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-[#E0E5EB] px-5 py-4 mb-4 flex gap-3 items-start">
          <i className="fi fi-rr-lightbulb text-lg text-[#FFD300] mt-1 shrink-0"></i>
          <div>
            <span className="inline-block font-semibold text-sm bg-[#E4F2FF] text-[#256E3A] px-2 py-[2px] mb-1 rounded-full" style={{ fontSize: 13 }}>
              Tip del día
            </span>
            <p className="text-sm text-[#7D8797] leading-snug mt-1" style={{ fontSize: 16, lineHeight: 1.5 }}>
              Separa el cartón del plástico antes de depositarlo.<br />
              Mejora la tasa de reciclaje hasta un 30%.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-[#E0E5EB] p-5 mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="font-bold text-[17px] text-[#141B21]" style={{ fontSize: 17 }}>
              Recolecta 5 botellas plásticas
            </span>
            <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-bold" style={{ fontSize: 13 }}>
              Fácil
            </span>
          </div>
          <p className="text-[#7D8797] text-sm mb-3" style={{ fontSize: 15, lineHeight: 1.5 }}>
            Encuentra y deposita 5 botellas de plástico en los contenedores designados.
          </p>
          <div className="flex items-center mb-2">
            <span className="text-xs font-semibold mr-2 text-[#141B21]" style={{ fontSize: 12 }}>
              Progreso: 3/5
            </span>
            <span className="ml-auto text-xs text-[#7D8797]" style={{ fontSize: 12 }}>
              60%
            </span>
          </div>
          <div className="w-full bg-gray-200 h-2 rounded mb-2">
            <div className="bg-green-500 h-2 rounded transition-all duration-300" style={{ width: "60%" }} />
          </div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-[#7D8797] flex items-center gap-1" style={{ fontSize: 12 }}>
              <i className="fi fi-rr-clock-three text-xs"></i> 1 día restante
            </span>
            <span className="flex items-center gap-1 text-lg font-bold text-[#FFC400]" style={{ fontSize: 18 }}>
              <i className="fi fi-rr-shopping-bag"></i> 50
            </span>
          </div>
          <button className="w-full py-3 mt-1 rounded-lg bg-green-600 text-white font-semibold text-base transition hover:bg-green-700 active:scale-95" style={{ minHeight: 44, fontSize: 16 }}>
            Continuar Reto
          </button>
        </div>
        <div className="pb-2">
          <span className="pl-1 font-semibold text-sm text-[#222]" style={{ fontSize: 15 }}>
            Actividad reciente
          </span>
          <div className="flex flex-col gap-3 mt-2">
            <div className="bg-white border border-[#E0E5EB] rounded-2xl shadow-sm p-4 flex items-center justify-between min-h-[52px]">
              <div className="flex items-center gap-2">
                <i className="fi fi-rr-check-circle text-lg text-green-500"></i>
                <span className="text-sm" style={{ fontSize: 15 }}>Botella plástica validada</span>
              </div>
              <span className="text-gray-700 font-bold text-sm" style={{ fontSize: 15 }}>+10</span>
            </div>
            <div className="bg-white border border-[#E0E5EB] rounded-2xl shadow-sm p-4 flex items-center justify-between min-h-[52px]">
              <div className="flex items-center gap-2">
                <i className="fi fi-rr-star text-lg text-yellow-500"></i>
                <span className="text-sm" style={{ fontSize: 15 }}>Reto completado</span>
              </div>
              <span className="text-gray-700 font-bold text-sm" style={{ fontSize: 15 }}>+50</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}