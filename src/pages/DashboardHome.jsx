import { useState } from "react";
import HamburgerMenu from "../components/HamburgerMenu";
import { FiMenu, FiMoon, FiBell, FiUser } from "react-icons/fi";
import { MdOutlineMap, MdQrCodeScanner, MdTipsAndUpdates } from "react-icons/md";
import { BsCheckCircle, BsAward } from "react-icons/bs";

export default function DashboardHome() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center pt-3 px-0">
      {/* HEADER + MENÚ */}
      <div className="w-full max-w-md mx-auto flex items-center justify-between px-4 mb-1">
        <button
          aria-label="Menú"
          className="text-[1.75rem] w-12 h-12 flex items-center justify-center"
          onClick={() => setMenuOpen(true)}
        >
          <FiMenu size={28} />
        </button>
        <div className="flex items-center gap-5">
          <FiMoon size={16} className="w-10 h-10" />
          <FiBell size={16} className="w-10 h-10" />
          <FiUser size={16} className="w-10 h-10" />
        </div>
      </div>
      <HamburgerMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

      <main className="w-full max-w-md mx-auto pt-1 pb-6 px-4">
        {/* Nombre de usuario + puntos/level */}
        <div className="pb-2">
          <h2 className="text-base font-semibold text-[#222]" style={{ lineHeight: 1.5 }}>Buenas noches</h2>
          <span className="block text-2xl font-bold leading-snug">Nombre_Usuario</span>
        </div>

        {/* Card: Puntos */}
        <div className="bg-white rounded-2xl shadow-sm border border-[#F0F0F0] px-5 py-4 flex items-center justify-between mb-4">
          <div>
            <span className="text-[#12B76A] font-bold text-xl">150</span>
            <span className="ml-2 text-[#666] text-sm font-semibold">CleanPoints</span>
            <div className="text-xs text-[#7D8797] mt-1">350 pts para el nivel 2</div>
          </div>
          <span className="bg-[#F4FFF7] text-[#199A61] font-semibold text-xs px-3 py-1 rounded-full border">Nivel 1</span>
        </div>

        {/* Accesos rápidos grid, cada uno ocupa 2 columnas */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <button className="flex flex-col bg-white rounded-2xl border border-[#F0F0F0] shadow-sm items-center py-5 px-2 focus:outline-none active:scale-95 transition min-h-[96px]" style={{ minWidth: 0 }}>
            <MdOutlineMap size={28} className="mb-1 text-[#19A5EA]" />
            <span className="text-[15px] font-semibold mb-0">Contenedores</span>
            <span className="text-xs text-[#7D8797]">cercanos</span>
          </button>
          <button className="flex flex-col bg-white rounded-2xl border border-[#F0F0F0] shadow-sm items-center py-5 px-2 focus:outline-none active:scale-95 transition min-h-[96px]" style={{ minWidth: 0 }}>
            <MdQrCodeScanner size={28} className="mb-1 text-[#845EF7]" />
            <span className="text-[15px] font-semibold mb-0">Escanear QR</span>
            <span className="text-xs text-[#7D8797]">Valida acción</span>
          </button>
        </div>

        {/* Tip del día */}
        <div className="bg-white rounded-2xl shadow-sm border border-[#F0F0F0] px-5 py-4 mb-4 flex gap-3 items-start">
          <MdTipsAndUpdates size={28} className="text-[#FFD300] mt-1 shrink-0" />
          <div>
            <span className="inline-block font-semibold text-sm bg-[#F3F8FD] text-[#256E3A] px-2 py-[2px] mb-1 rounded-full">Tip del día</span>
            <p className="text-sm text-[#7D8797] leading-[1.5] mt-1">
              Separa el cartón del plástico antes de depositarlo. Mejora la tasa de reciclaje hasta un 30%.
            </p>
          </div>
        </div>

        {/* Reto del día */}
        <div className="bg-white rounded-2xl shadow-sm border border-[#F0F0F0] p-5 mb-4">
          <div className="flex items-center justify-between mb-1">
            <span className="font-bold text-[17px] text-[#141B21]">Recolecta 5 botellas plásticas</span>
            <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-bold">Fácil</span>
          </div>
          <p className="text-[#7D8797] text-sm mb-4">
            Encuentra y deposita 5 botellas de plástico en los contenedores designados.
          </p>
          <div className="flex items-center mb-1">
            <span className="text-xs font-semibold mr-2 text-[#141B21]">Progreso: 3/5</span>
            <span className="ml-auto text-xs text-[#7D8797]">60%</span>
          </div>
          <div className="w-full bg-gray-200 h-2 rounded mb-2">
            <div className="bg-green-500 h-2 rounded transition-all duration-300" style={{ width: "60%" }} />
          </div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-[#7D8797] flex items-center gap-1">
              <i className="fi fi-rr-clock-three text-xs" /> 1 día restante
            </span>
            <span className="flex items-center gap-1 text-lg font-bold text-[#333]">
              <BsAward size={28} className="text-yellow-500" /> 50
            </span>
          </div>
          <button
            className="w-full py-3 mt-2 rounded-lg bg-green-600 text-white font-semibold text-base transition hover:bg-green-700 active:scale-95"
            style={{ minHeight: 48 }}>
            Continuar Reto
          </button>
        </div>

        {/* Actividad reciente */}
        <div className="pb-2">
          <span className="pl-1 font-semibold text-sm text-[#222]">Actividad reciente</span>
          <div className="flex flex-col gap-3 mt-2">
            <div className="bg-white border border-[#F0F0F0] rounded-2xl shadow-sm p-4 flex items-center justify-between min-h-[56px]">
              <div className="flex items-center gap-2">
                <BsCheckCircle size={28} className="text-green-500" />
                <span className="text-sm">Botella plástica validada</span>
              </div>
              <span className="text-gray-700 font-bold text-sm">+10</span>
            </div>
            <div className="bg-white border border-[#F0F0F0] rounded-2xl shadow-sm p-4 flex items-center justify-between min-h-[56px]">
              <div className="flex items-center gap-2">
                <BsAward size={28} className="text-yellow-500" />
                <span className="text-sm">Reto completado</span>
              </div>
              <span className="text-gray-700 font-bold text-sm">+50</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}