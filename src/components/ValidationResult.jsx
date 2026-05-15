import { useNavigate } from "react-router-dom";

export default function ValidationResult({ points = 46, title = "¡Reciclaje Validado!", message = "Material reciclable detectado correctamente" }) {
    const navigate = useNavigate();

    const handleNewScan = () => {
        navigate("/scan");
    };

    const handleBackHome = () => {
        navigate("/dashboard");
    };

    return (
        <div className="space-y-4 lg:space-y-6">
            <div className="bg-white rounded-3xl shadow-sm border border-[#E0E5EB] p-8 lg:p-10 text-center">
                <h2 className="text-3xl lg:text-4xl font-bold text-green-600 mb-2">
                    Resultado de Validación
                </h2>
                <p className="text-lg text-[#6B7280] mb-6">¡Felicitaciones!</p>
                <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="50" cy="50" r="45" stroke="#16a34a" strokeWidth="3" />
                        <path d="M35 50L45 60L65 40" stroke="#16a34a" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold text-[#141B21] mb-6">
                    {title}
                </h3>
                <div className="bg-emerald-50 rounded-2xl border border-emerald-100 px-4 py-4 mb-6 inline-block">
                    <p className="text-emerald-700 font-semibold text-lg">
                        <i className="bi bi-trophy mr-2"></i>
                        +{points} CleanPoints
                    </p>
                </div>

                <p className="text-[#6B7280] mb-8">{message}</p>

                <button
                    onClick={handleNewScan}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl transition active:scale-95 flex items-center justify-center gap-2"
                >
                    <i className="bi bi-arrow-repeat"></i>
                    Escanear Otro
                </button>
                <button
                    onClick={handleBackHome}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-[5px] transition active:scale-95 flex items-center justify-center gap-2 mt-3"
                >
                    <i className="bi bi-house"></i>
                    Volver al Inicio
                </button>
            </div>
        </div>
    );
}