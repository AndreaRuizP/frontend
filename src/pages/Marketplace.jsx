import { useState } from "react";
import UserHeader from "../components/UserHeader";
import HamburgerMenu from "../components/HamburgerMenu";

const productos = [
    {
        nombre: "Bolsa reutilizable de fique", 
        origen: "Artesanal · Santa Marta",
        puntos: 80,
        categoria: "Hogar",
    },
    {
        nombre: "Miel orgánica local", 
        origen: "Apicultura · Magdalena",
        puntos: 120,
        categoria: "Comida",
    },
    {
        nombre: "Cuaderno de papel reciclado", 
        origen: "Papelería · Colombia",
        puntos: 60,
        categoria: "Hogar",
    },
    {
        nombre: "Vela artesanal de seda", 
        origen: "Hecho a mano · Barranquilla",
        puntos: 90,
        categoria: "Hogar",
    }
]

export default function Marketplace(){
    const [menuOpen, setMenuOpen] = useState(false);
    const [filtro, setFiltro] = useState("Todos");
    const [search, setSearch] = useState("");
    const resultado = productos.filter(p =>
    (filtro === "Todos" || p.categoria === filtro) &&
    p.nombre.toLowerCase().includes(search.toLowerCase())
    );
    return(
        <div className="min-h-screen bg-white flex flex-col items-center pt-3 px-0">
            <UserHeader onMenu={() => setMenuOpen(true)} />
            <HamburgerMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
            <div className={menuOpen ? "hidden" : "w-full max-w-md mx-auto px-2"}>
                <div className="bg-white rounded-2xl shadow-sm border border-[#E0E5EB] px-5 py-4 flex items-center justify-between mb-4"> 
                    <div>
                        <div className="text-[#666] text-base" style={{ fontSize: 16 }}>
                            Tu saldo disponible
                        </div>
                        <div className="flex items-baseline gap-2 mt-0">
                            <span className="text-[#12B76A] font-bold text-xl" style={{ fontSize: 25 }}>
                                350 
                            </span>
                            <span className="text-[#666] text-base" style={{ fontSize: 16 }}>
                                ClenPoints
                            </span>
                        </div>
                    </div>
                    <div>
                        <div className="text-[#666] text-base" style={{ fontSize: 16 }}>
                            Canjeados
                        </div>                   
                        <span className="text-[#666] font-bold text-xl" style={{ fontSize: 16, lineHeight: 1.5 }}>
                            120
                        </span>
                        <span className="ml-2 text-[#666] text-base" style={{ fontSize: 16, lineHeight: 1.5 }}>
                            pts
                        </span>
                    </div>
                </div>
            
                <div className="mb-2">
                    <input
                        type="text"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        placeholder="Buscar producto..."
                        className="w-full bg-[#FAFAFA] border border-[#E0E5EB] rounded-xl px-4 py-2 text-base"
                    />
                </div>

                <div className="flex items-center gap-2 mb-4">
                    {["Todos", "Hogar", "Comida", "Moda"].map((tab) => (
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

                <div className="grid grid-cols-2 gap-4 pb-6">
                  {resultado.map((p, i) => (
                    <div key={i} className="bg-white rounded-2xl shadow-sm border border-[#E0E5EB] p-3 flex flex-col">
                    <div className="w-full bg-gray-100 rounded-xl mb-2 flex items-center justify-center" style={{ height: 110 }}>
                        <i className="fi fi-rr-picture text-3xl text-gray-300"></i>
                    </div>
                    <span className="font-semibold text-[#222] leading-snug mb-1" style={{ fontSize: 15 }}>
                        {p.nombre}
                    </span>
                    <span className="text-[#757575] mb-2" style={{ fontSize: 13 }}>
                        {p.origen}
                    </span>
                    <span className="font-bold text-[#FFC400] mb-3" style={{ fontSize: 15 }}>
                        {p.puntos} pts
                    </span>
                    <button
                        className="w-full py-2 rounded-lg bg-green-600 text-white font-semibold transition hover:bg-green-700 active:scale-95 mt-auto"
                        style={{ minHeight: 36, fontSize: 14 }}
                    >
                        Canjear
                    </button>
                </div>
                ))}
            </div>
        </div>
    </div>
    )
}