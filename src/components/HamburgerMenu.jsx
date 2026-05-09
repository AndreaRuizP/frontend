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
        >×</button>
        <MenuLink to="/dashboard" label="Home" iconClass="fi fi-rr-home" onClick={onClose} />
        <MenuLink to="/map" label="Mapa" iconClass="fi fi-rr-map-marker" onClick={onClose} />
        <MenuLink to="/retos" label="Retos" iconClass="fi fi-rr-flame" onClick={onClose} />
        <MenuLink to="/marketplace" label="Marketplace" iconClass="fi fi-rr-shopping-cart" onClick={onClose} />
      </nav>
    </div>
  );
}

function MenuLink({ to, label, iconClass, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="flex items-center gap-3 font-medium text-lg text-[#141B21] transition hover:text-green-600"
      style={{ minHeight: 44 }}
    >
      <i className={iconClass + " text-xl"}></i>
      {label}
    </Link>
  );
}