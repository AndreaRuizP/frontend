import { Link } from "react-router-dom";

export default function HamburgerMenu({ open, onClose }) {
  return (
    <div className={`fixed inset-0 z-40 ${open ? "" : "pointer-events-none"}`}>
      <div
        className={`absolute inset-0 bg-black/30 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
        onClick={onClose}
      />
      <nav
        className={`
          absolute top-0 left-0 h-full bg-white w-[70vw] max-w-xs shadow-lg p-7 z-50 flex flex-col gap-5
          transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
        aria-label="Menú principal"
      >
        <button
          className="absolute top-2 right-3 text-2xl"
          onClick={onClose}
          aria-label="Cerrar menú"
        >
          ×
        </button>
        <MenuLink to="/inicio" label="Inicio" onClick={onClose} />
        <MenuLink to="/mapa" label="Mapa" onClick={onClose} />
        <MenuLink to="/retos" label="Retos" onClick={onClose} />
        <MenuLink to="/marketplace" label="Marketplace" onClick={onClose} />
      </nav>
    </div>
  );
}

function MenuLink({ to, label, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="font-medium text-lg text-[#141B21] transition hover:underline"
    >
      {label}
    </Link>
  );
}