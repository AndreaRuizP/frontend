import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import UserHeader from "../components/UserHeader";
import HamburgerMenu from "../components/HamburgerMenu";

const contenedores = [
  {
    nombre: "Centro Histórico",
    lat: 11.241210, lng: -74.211022, km: 0.8, estado: "Disponible"
  },
  {
    nombre: "El Rodadero",
    lat: 11.198950, lng: -74.227040, km: 5.6, estado: "Lleno"
  },
  {
    nombre: "Taganga",
    lat: 11.264350, lng: -74.205510, km: 8.9, estado: "Disponible"
  },
  {
    nombre: "Universidad del Magdalena",
    lat: 11.233672, lng: -74.190423, km: 2.5, estado: "Disponible"
  },
  {
    nombre: "C.C. Buenavista",
    lat: 11.247978, lng: -74.207328, km: 4.1, estado: "Lleno"
  },
  {
    nombre: "Mamatoco",
    lat: 11.244529, lng: -74.169703, km: 7.2, estado: "Disponible"
  },
  {
    nombre: "Aeropuerto Simón Bolívar",
    lat: 11.119650, lng: -74.230646, km: 16, estado: "Disponible"
  },
];

export default function Map() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filtro, setFiltro] = useState("Todos");
  const [search, setSearch] = useState("");
  const resultado = contenedores.filter(c =>
    (filtro === "Todos" || c.estado === filtro) &&
    c.nombre.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white flex flex-col items-center pt-3 px-0">
      <UserHeader onMenu={() => setMenuOpen(true)} />
      <HamburgerMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <div className={menuOpen ? "hidden" : "w-full max-w-md mx-auto px-2"}>
        <div className="mb-2">
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Buscar contenedor..."
            className="w-full bg-[#FAFAFA] border border-[#E0E5EB] rounded-xl px-4 py-2 text-base"
          />
        </div>
        <div
          className="rounded-xl overflow-hidden w-full mb-2"
          style={{ height: 220 }}
        >
          <MapContainer
            center={[11.2408, -74.1990]}
            zoom={13}
            scrollWheelZoom={false}
            style={{ width: "100%", height: "100%" }}
          >
            <TileLayer
              attribution='© OpenStreetMap contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {contenedores.map((c, i) => (
              <Marker position={[c.lat, c.lng]} key={i}>
                <Popup>
                  <b>{c.nombre}</b><br />
                  {c.km} km — <span style={{ color: c.estado === "Disponible" ? "green" : "red" }}>
                    {c.estado}
                  </span>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
        <div className="flex items-center justify-center gap-5 my-2">
          <label className="flex items-center gap-1 cursor-pointer">
            <input
              type="radio"
              name="estado"
              checked={filtro === "Todos"}
              onChange={() => setFiltro("Todos")}
            />
            <span>Todos</span>
          </label>
          <label className="flex items-center gap-1 cursor-pointer">
            <input
              type="radio"
              name="estado"
              checked={filtro === "Disponible"}
              onChange={() => setFiltro("Disponible")}
            />
            <span>Disponible</span>
          </label>
          <label className="flex items-center gap-1 cursor-pointer">
            <input
              type="radio"
              name="estado"
              checked={filtro === "Lleno"}
              onChange={() => setFiltro("Lleno")}
            />
            <span>Lleno</span>
          </label>
        </div>
        <div
          className="bg-white border border-[#E0E5EB] rounded-2xl shadow-sm overflow-y-auto px-2 py-2 mb-4"
          style={{ minHeight: 100, maxHeight: 320 }}
        >
          {resultado.length > 0 ? resultado.map((c, i) => (
            <div
              key={i}
              className="flex items-center justify-between border border-[#D4D4D4] rounded-lg px-2 py-2 mb-2 last:mb-0 bg-[#F9F9F9]"
            >
              <div className="flex items-center gap-3">
                <i className="fi fi-rr-map-marker text-xl text-[#78716c]"></i>
                <div>
                  <div className="font-semibold text-[#222]" style={{ fontSize: 15 }}>{c.nombre}</div>
                  <div className="text-xs text-[#757575]" style={{ fontSize: 13 }}>{c.km} km</div>
                </div>
              </div>
              <span
                className={`rounded-lg border px-3 py-1 font-semibold text-xs ${
                  c.estado === "Disponible"
                    ? "bg-[#E4F9ED] border-[#A7F3D0] text-[#199A61]"
                    : "bg-[#FDF6F2] border-[#FECACA] text-[#D92D20]"
                }`}
              >
                {c.estado}
              </span>
            </div>
          )) : (
            <div className="text-center text-gray-400 py-4">Sin resultados</div>
          )}
        </div>
        <div className="flex justify-center mb-2">
          <button
            className="flex items-center gap-2 border border-[#DDD] px-4 py-2 rounded-xl bg-white shadow-sm font-semibold active:bg-gray-50 transition text-base"
            style={{ minHeight:44 }}
          >
            <i className="bi bi-qr-code-scan" style={{ fontSize: 20, color: "#845EF7" }}></i>
            Escanear QR
          </button>
        </div>
      </div>
    </div>
  );
}