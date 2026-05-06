import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between px-4 py-2 bg-white shadow-[0_1px_0_#EDF7F2]">
      <button>
        <img src={logo} alt="Logo" className="h-8" />
      </button>
      <button>
        <i class="fi fi-rr-sun text-xl"></i>
      </button>
    </header>
  );
}