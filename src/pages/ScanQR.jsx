import { useState } from "react";
import { Scanner } from "@yudiel/react-qr-scanner";
import { useNavigate } from "react-router-dom";
import HamburgerMenu from "../components/HamburgerMenu";
import UserHeader from "../components/UserHeader";
import Sidebar from "../components/Sidebar";

export default function ScanQR() {
    const [showScanner, setShowScanner] = useState(false);
    const [qrResult, setQrResult] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleQRDetected = (qrValue) => {
        if (!qrValue) return;
        
        setQrResult(qrValue);
        setShowScanner(false);
        setTimeout(() => {
            navigate(`/capture-photo?qr=${encodeURIComponent(qrValue)}`);
        }, 1000);
    };

    const handleReset = () => {
        setQrResult(null);
        setShowScanner(false);
    };

    return (
        <div className="min-h-screen bg-white flex flex-col lg:flex-row">
            <Sidebar />

            <div className="flex-1 flex flex-col lg:ml-64">
                <div className="flex justify-between items-center pt-3 px-0 lg:hidden">
                    <UserHeader onMenu={() => setMenuOpen(true)} />
                </div>
                <div className="hidden lg:flex items-center justify-end px-6 py-4 border-b border-[#E0E5EB] bg-white/80 backdrop-blur">
                    <UserHeader onMenu={() => setMenuOpen(true)} showMenu={false} showDarkMode={false} />
                </div>

                <HamburgerMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

                <main className="w-full max-w-md lg:max-w-4xl mx-auto px-4 lg:px-8 py-4 lg:py-6 flex-1">
                    <div className="space-y-4 lg:space-y-6">
                        <div className="bg-white rounded-3xl shadow-sm border border-[#E0E5EB] p-5 lg:p-6">
                            <div className="flex items-start justify-between gap-4 mb-4">
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-600">Lector QR</p>
                                    <h2 className="text-xl lg:text-2xl font-black text-[#141B21] mt-1">Escanea el Código QR</h2>
                                    <p className="text-sm lg:text-base text-[#6B7280] mt-2 leading-6 max-w-xl">
                                        Coloca el QR del contenedor dentro del marco para detectarlo automáticamente.
                                    </p>
                                </div>
                                <div className="hidden sm:flex w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 items-center justify-center shrink-0">
                                    <i className="bi bi-qr-code-scan text-2xl text-emerald-600"></i>
                                </div>
                            </div>

                            {!showScanner ? (
                                <div className="rounded-3xl border border-dashed border-[#C9D3DD] bg-[#f8fafc] px-5 py-8 lg:py-10 flex flex-col items-center text-center">
                                    <div className="w-20 h-20 rounded-full bg-white border border-emerald-100 shadow-sm flex items-center justify-center mb-4">
                                        <i className="bi bi-qr-code-scan text-4xl text-emerald-600"></i>
                                    </div>
                                    <p className="font-bold text-[#141B21] text-base lg:text-lg">Prepara tu cámara</p>
                                    <p className="text-sm text-[#6B7280] mt-2 max-w-md leading-6">
                                        Toca el botón para abrir el lector y apuntar al código QR del contenedor.
                                    </p>

                                    <button
                                        onClick={() => setShowScanner(true)}
                                        className="mt-5 inline-flex items-center gap-2 rounded-xl bg-green-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-green-700 active:scale-95"
                                        style={{ minHeight: 44 }}
                                    >
                                        <i className="bi bi-qr-code-scan text-lg"></i>
                                        Activar Escáner
                                    </button>
                                </div>
                            ) : (
                                <div className="flex flex-col items-center w-full">
                                    <div
                                        className="w-full rounded-3xl overflow-hidden border border-gray-200 mb-4 shadow-sm bg-black"
                                        style={{
                                            aspectRatio: "1/1",
                                            maxHeight: 420,
                                        }}
                                    >
                                        <Scanner
                                            constraints={{
                                                facingMode: "environment",
                                            }}
                                            onScan={(result) => {
                                                console.log("QR detectado:", result);
                                                if (result && result.length > 0) {
                                                    const qrText = result[0]?.rawValue || result[0];
                                                    console.log("Valor QR:", qrText);
                                                    handleQRDetected(qrText);
                                                }
                                            }}
                                            onError={(error) => {
                                                console.error("Error en escáner:", error);
                                            }}
                                        />
                                    </div>

                                    <div className="flex flex-wrap items-center justify-center gap-3">
                                        <button
                                            onClick={() => setShowScanner(false)}
                                            className="inline-flex items-center gap-2 rounded-xl border border-[#D0D7DE] bg-white px-4 py-2.5 text-sm font-semibold text-[#374151] transition hover:bg-gray-50"
                                        >
                                            Cancelar
                                        </button>
                                        <button
                                            onClick={() => handleQRDetected("CONTENEDOR-12345")}
                                            className="inline-flex items-center gap-2 rounded-xl bg-[#141B21] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-black"
                                        >
                                            Simular lectura
                                        </button>
                                    </div>
                                </div>
                            )}

                            {qrResult && (
                                <div className="mt-5 rounded-2xl border border-emerald-100 bg-emerald-50 px-4 py-4">
                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-white border border-emerald-100 flex items-center justify-center shrink-0">
                                            <i className="bi bi-patch-check text-emerald-600 text-lg"></i>
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <p className="font-bold text-emerald-800">¡Código detectado!</p>
                                            <p className="text-sm text-emerald-700 mt-1 break-words">{qrResult}</p>
                                            <p className="text-xs text-emerald-600 mt-2">Redirigiendo a captura de foto...</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}