const history = [
  { icon: "fi fi-rr-recycle", label: "Botella plástica validada", time: "Hace 2 horas", points: "+10" },
  { icon: "fi fi-rr-box-alt", label: "Cartón depositado", time: "Ayer", points: "+8" },
  { icon: "fi fi-rr-trophy", label: "Reto completado: 5 latas", time: "Hace 3 días", points: "+50" },
];

const stats = [
  { value: "350", label: "CleanPoints" },
  { value: "24", label: "Acciones" },
  { value: "5", label: "Retos logrados" },
];

export default function Profile() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="flex items-center justify-between px-5 pt-6 pb-2">
        <h1 className="text-2xl font-black text-gray-800">Mi Perfil</h1>
        <button className="w-10 h-10 bg-white rounded-full shadow flex items-center justify-center border border-gray-100">
          <i className="fi fi-rr-settings text-gray-500 text-lg"></i>
        </button>
      </div>
      <div className="mx-4 mt-2 mb-4">
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col items-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-3 border-4 border-green-200">
            <i className="fi fi-rr-user text-green-600" style={{ fontSize: 36 }}></i>
          </div>
          <h2 className="font-black text-gray-800 text-lg">Nombre_Usuario</h2>
          <p className="text-gray-400 text-xs mb-3">tu@gmail.com</p>
          <span className="bg-green-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-sm">
            Nivel 3: Reciclador Activo
          </span>
        </div>
      </div>
      <div className="mx-4 mb-4 grid grid-cols-3 gap-3">
        {stats.map(({ value, label, icon }) => (
          <div key={label} className="bg-white rounded-2xl p-3 shadow-sm border border-gray-100 flex flex-col items-center gap-1">
            <i className={`${icon} text-green-500 text-xl`}></i>
            <span className="text-xl font-black text-gray-900">{value}</span>
            <span className="text-[10px] text-gray-400 text-center font-semibold leading-tight">{label}</span>
          </div>
        ))}
      </div>
      <div className="mx-4 mb-4">
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-bold text-gray-800 text-sm">Progreso al siguiente nivel</h3>
            <i className="fi fi-rr-angle-right text-gray-400"></i>
          </div>
          <p className="text-xs text-gray-400 mb-3">Nivel 4: Reciclador Experto — faltan 150 pts</p>
          <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden mb-2">
            <div
              className="h-full bg-gradient-to-r from-green-400 to-green-500 rounded-full"
              style={{ width: "70%" }}
            />
          </div>
          <div className="flex justify-between">
            <span className="text-[10px] text-gray-400 font-semibold">350 pts</span>
            <span className="text-[10px] text-gray-400 font-semibold">500 pts</span>
          </div>
        </div>
      </div>
      <div className="mx-4 mb-4">
        <h3 className="font-bold text-gray-700 text-sm mb-2 px-1">Historial reciente</h3>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 divide-y divide-gray-50">
          {history.map(({ icon, label, time, points }, i) => (
            <div key={i} className="flex items-center gap-3 px-4 py-3">
              <div className="w-9 h-9 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <i className={`${icon} text-green-500 text-lg`}></i>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-gray-800 truncate">{label}</p>
                <p className="text-[10px] text-gray-400">{time}</p>
              </div>
              <span className="text-green-600 font-black text-sm whitespace-nowrap">{points} pts</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-4 mb-8">
        <button className="w-full bg-white border border-gray-200 text-gray-600 font-bold py-3.5 rounded-2xl text-sm flex items-center justify-center gap-2 hover:bg-red-50 hover:text-red-500 hover:border-red-200 transition-colors">
          <i className="fi fi-rr-sign-out text-lg"></i>
          Cerrar Sesión
        </button>
      </div>

    </div>
  );
}