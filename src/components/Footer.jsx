import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="w-full max-w-md mx-auto px-4 py-8 text-[#141B21]">
      <div className="flex items-center mb-2">
        <img src={logo} alt="Logo CleanPoints" className="h-6 mr-2" />
        <span className="font-bold text-lg">CleanPoints</span>
      </div>
      <p className="text-[#7D8797] text-sm mb-6">
        Educando para un manejo adecuado de residuos sólidos y promoviendo un planeta más limpio.
      </p>
      <div>
        <span className="font-semibold text-base">Síguenos</span>
        <div className="flex gap-4 mt-2">
          <a href="#" aria-label="Facebook" className="transition hover:opacity-70">
            <i className="bi bi-facebook text-xl"></i>
          </a>
          <a href="#" aria-label="Twitter" className="transition hover:opacity-70">
            <i className="bi bi-twitter text-xl"></i>
          </a>
          <a href="#" aria-label="Instagram" className="transition hover:opacity-70">
            <i className="bi bi-instagram text-xl"></i>
          </a>
        </div>
      </div>
      <hr className="my-6 border-[#E0E5EB]" />
      <div className="flex flex-col items-center text-[#7D8797] text-sm gap-1">
        <span>© 2025 CleanPoints. Todos los derechos reservados.</span>
        <div className="flex gap-6 mt-1">
          <a href="#" className="hover:underline">Términos de Servicio</a>
          <a href="#" className="hover:underline">Política de Privacidad</a>
        </div>
      </div>
    </footer>
  );
}