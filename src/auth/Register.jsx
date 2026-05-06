import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Register() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [pass2, setPass2] = useState("");
  const navigate = useNavigate();
  
  function handleSubmit(e) {
    e.preventDefault();
    navigate("/dashboard");
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f3fcf7] px-4">
      <form
        className="bg-white max-w-sm w-full rounded-xl p-8 shadow border border-[#E0E5EB]"
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold text-center text-green-600 mb-1">
          Clean Point
        </h1>
        <p className="text-center text-[#7D8797] text-sm mb-8">
          Crea tu cuenta para comenzar
        </p>
        <label className="block text-black text-sm mb-1" htmlFor="nombre">
          Nombre completo
        </label>
        <input
          className="w-full mb-4 px-4 py-2 border border-[#E0E5EB] rounded-lg bg-[#F9FAFB] focus:outline-none focus:ring-2 focus:ring-green-400 text-base placeholder-[#ADB5BD]"
          id="nombre"
          type="text"
          placeholder="Tu nombre completo"
          value={nombre}
          onChange={e => setNombre(e.target.value)}
        />
        <label className="block text-black text-sm mb-1" htmlFor="email">
          Correo electrónico
        </label>
        <input
          className="w-full mb-4 px-4 py-2 border border-[#E0E5EB] rounded-lg bg-[#F9FAFB] focus:outline-none focus:ring-2 focus:ring-green-400 text-base placeholder-[#ADB5BD]"
          id="email"
          type="email"
          placeholder="tu@email.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <label className="block text-black text-sm mb-1" htmlFor="password">
          Contraseña
        </label>
        <input
          className="w-full mb-4 px-4 py-2 border border-[#E0E5EB] rounded-lg bg-[#F9FAFB] focus:outline-none focus:ring-2 focus:ring-green-400 text-base"
          id="password"
          type="password"
          placeholder="••••••••"
          value={pass}
          onChange={e => setPass(e.target.value)}
        />
        <label className="block text-black text-sm mb-1" htmlFor="password2">
          Confirmar contraseña
        </label>
        <input
          className="w-full mb-6 px-4 py-2 border border-[#E0E5EB] rounded-lg bg-[#F9FAFB] focus:outline-none focus:ring-2 focus:ring-green-400 text-base"
          id="password2"
          type="password"
          placeholder="••••••••"
          value={pass2}
          onChange={e => setPass2(e.target.value)}
        />
        <button
          type="submit"
          className="w-full h-11 bg-green-600 text-white font-semibold rounded-lg transition hover:bg-green-700 mb-2"
        >
          Crear Cuenta
        </button>
        <div className="text-center text-sm">
          ¿Ya tienes cuenta?{" "}
          <Link to="/login" className="text-green-600 font-semibold hover:underline">
            Inicia sesión aquí
          </Link>
        </div>
      </form>
    </div>
  );
}