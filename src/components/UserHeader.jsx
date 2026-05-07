export default function UserHeader({
  onMenu,
  onMoon,
  onBell,
  onUser,
  showMoon = true,
  showBell = true,
  showUser = true,
  className = "",
}) {
  return (
    <header
      className={`w-full max-w-md mx-auto flex items-center justify-between pl-3 pr-4 mb-0 ${className}`}
      style={{ minHeight: 48 }}
    >
      <button
        aria-label="Menú"
        onClick={onMenu}
        className="flex items-center justify-center p-0 m-0"
        style={{ minWidth: 44, minHeight: 44 }}
      >
        <i className="fi fi-rr-menu-burger text-xl"></i>
      </button>
      <div className="flex items-center gap-3">
        {showMoon && (
          <button
            aria-label="Modo oscuro"
            onClick={onMoon}
            className="bg-transparent border-0 p-0 m-0"
            style={{ minWidth: 44, minHeight: 44 }}
          >
            <i className="fi fi-rr-moon text-xl"></i>
          </button>
        )}
        {showBell && (
          <button
            aria-label="Notificaciones"
            onClick={onBell}
            className="bg-transparent border-0 p-0 m-0"
            style={{ minWidth: 44, minHeight: 44 }}
          >
            <i className="fi fi-rr-bell text-xl"></i>
          </button>
        )}
        {showUser && (
          <button
            aria-label="Cuenta"
            onClick={onUser}
            className="bg-transparent border-0 p-0 m-0"
            style={{ minWidth: 44, minHeight: 44 }}
          >
            <i className="fi fi-rr-user text-xl"></i>
          </button>
        )}
      </div>
    </header>
  );
}