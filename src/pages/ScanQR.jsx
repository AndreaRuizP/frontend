import React, { useState } from "react";
import { Scanner } from "@yudiel/react-qr-scanner";
import UserHeader from "../components/UserHeader";
import HamburgerMenu from "../components/HamburgerMenu";

export default function ScanQR() {

    const [showScanner, setShowScanner] = useState(false);
    const [qrResult, setQrResult] = useState("");

    return (
        <div className="min-h-screen bg-[#F8FAFC]">

            {/* Header fijo */}
            <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
                <UserHeader />
                <HamburgerMenu />
            </div>

            {/* Contenido principal */}
            <div className="flex flex-col items-center justify-center px-4 pt-32 pb-10">

                {/* Título */}
                <h2 className="text-2xl font-bold text-center mb-2 text-[#222]">
                    Recolecta y Recicla
                </h2>

                {/* Descripción */}
                <p className="text-center text-[#444] text-base mb-6 max-w-md">
                    Escanea el código QR de un contenedor y sube una foto de tu
                    reciclaje para ganar CleanPoints.
                </p>

                {/* Tarjeta */}
                <div className="w-full max-w-sm mx-auto">

                    <div className="border border-[#C3C3C3] rounded-2xl px-5 py-6 bg-white shadow-sm flex flex-col items-center">

                        {!showScanner ? (
                            <>
                                {/* Icono */}
                                <div className="mb-6 flex items-center justify-center">
                                    <i
                                        className="bi bi-qr-code-scan"
                                        style={{
                                            fontSize: 70,
                                            color: "#212121",
                                        }}
                                    ></i>
                                </div>

                                {/* Texto */}
                                <div className="text-center mb-5">
                                    <div className="font-bold text-lg text-[#222] mb-1">
                                        Escanea el Código QR
                                    </div>

                                    <div className="text-[#666] text-sm leading-relaxed">
                                        Coloca el código QR del contenedor de reciclaje
                                    </div>
                                </div>

                                {/* Botón */}
                                <button
                                    onClick={() => setShowScanner(true)}
                                    className="flex items-center gap-2 border border-[#222] px-5 py-2 rounded-lg bg-white font-semibold text-[15px] hover:bg-gray-50 transition"
                                >
                                    <i className="bi bi-qr-code-scan text-lg"></i>
                                    Activar Escáner
                                </button>
                            </>
                        ) : (
                            <div className="flex flex-col items-center w-full">

                                {/* Scanner */}
                                <div
                                    className="w-full rounded-xl overflow-hidden border border-gray-200 mb-4"
                                    style={{
                                        aspectRatio: "1/1",
                                        maxHeight: 320,
                                    }}
                                >
                                    <Scanner
                                        constraints={{
                                            facingMode: "environment",
                                        }}
                                        onScan={(result) => {
                                            if (result && result.length > 0) {
                                                setQrResult(result[0].rawValue);
                                                setShowScanner(false);
                                            }
                                        }}
                                        onError={(error) => {
                                            console.log(error);
                                        }}
                                    />
                                </div>

                                {/* Botón cancelar */}
                                <button
                                    onClick={() => setShowScanner(false)}
                                    className="flex items-center gap-2 border border-[#888] px-4 py-2 rounded-lg bg-white text-[15px] hover:bg-gray-100 transition"
                                >
                                    Cancelar
                                </button>
                            </div>
                        )}

                        {/* Resultado */}
                        {qrResult && (
                            <div className="mt-5 w-full text-center border-t pt-4">

                                <div className="text-green-700 font-bold mb-2">
                                    ¡Código detectado!
                                </div>

                                <div className="break-words text-sm text-gray-600 bg-gray-50 p-2 rounded-lg">
                                    {qrResult}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}