import React, { useState } from "react";
import { Scanner } from "@yudiel/react-qr-scanner";
import { Link } from "react-router-dom";
import HamburgerMenu from "../components/HamburgerMenu";
import UserHeader from "../components/UserHeader";

export default function ScanQR() {
    const [showScanner, setShowScanner] = useState(false);
    const [qrResult, setQrResult] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-white flex flex-col items-center pt-3 px-0">
            <UserHeader onMenu={() => setMenuOpen(true)} />
            <HamburgerMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
            <h2 className="text-2xl font-bold text-center mb-2 mt-25">Recolecta y Recicla</h2>
            <p className="text-center text-[#444] text-base mb-6 max-w-md">
                Escanea el código QR de un contenedor y sube una foto de tu reciclaje para ganar CleanPoints.
            </p>

            <div className="w-full max-w-xs mx-auto flex flex-col items-center">
                <div className="border border-[#C3C3C3] rounded-xl px-4 py-6 w-full bg-white shadow-sm flex flex-col items-center">
                    {!showScanner ? (
                        <>
                            <div className="mb-6 flex items-center justify-center">
                                <i className="bi bi-qr-code-scan" style={{ fontSize: 64, color: "#199A61" }}></i>
                            </div>
                            <div className="text-center mb-5">
                                <div className="font-bold text-base text-[#222]">Escanea el Código QR</div>
                                <div className="text-[#666] text-[14px] leading-tight">Coloca el código QR del contenedor de reciclaje</div>
                            </div>
                            <button
                                onClick={() => setShowScanner(true)}
                                className="flex items-center gap-2 border border-[#ddd] px-4 py-2 rounded-xl bg-green-600 font-semibold active:bg-gray-50 transition text-white"
                                style={{ minHeight: 40 }}
                            >
                                <i className="bi bi-qr-code-scan text-lg text-[#199A61]"></i>
                                Activar Escáner
                            </button>
                        </>
                    ) : (
                        <div className="flex flex-col items-center w-full">
                            <div className="w-full rounded-lg overflow-hidden mb-2" style={{ aspectRatio: '1/1', maxHeight: 280 }}>
                                <QrReader
                                    constraints={{ facingMode: "environment" }}
                                    onResult={(result, error) => {
                                        if (!!result) {
                                            setQrResult(result?.text);
                                            setShowScanner(false);
                                        }
                                    }}
                                    videoStyle={{ width: '100%', height: '100%' }}
                                />
                            </div>
                            <button
                                onClick={() => setShowScanner(false)}
                                className="flex items-center gap-2 border border-[#888] px-3 py-2 rounded-lg bg-white font-normal text-[15px] hover:bg-gray-100 transition mb-2"
                            >
                                Cancelar
                            </button>
                        </div>
                    )}
                    {qrResult && (
                        <div className="mt-3 w-full text-center">
                            <div className="text-green-700 font-bold mb-1">¡Código detectado!</div>
                            <div className="break-words text-xs text-gray-600">{qrResult}</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}