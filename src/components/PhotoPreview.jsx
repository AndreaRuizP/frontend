import { useState } from "react";

export default function PhotoPreview({ photo, qrCode, onRetake, onValidate, isValidating }) {
    return (
        <div className="space-y-4 lg:space-y-6">
            <div className="bg-white rounded-3xl shadow-sm border border-[#E0E5EB] p-5 lg:p-6">
                <div className="mb-4">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-600">Vista Previa</p>
                    <h2 className="text-xl lg:text-2xl font-black text-[#141B21] mt-1">Tu Foto</h2>
                    <p className="text-sm text-[#6B7280] mt-2">QR: <strong>{qrCode}</strong></p>
                </div>
                <div className="rounded-2xl border border-[#E0E5EB] overflow-hidden mb-5 bg-gray-100 flex items-center justify-center h-64 lg:h-80">
                    <img src={photo} alt="Captura" className="w-full h-full object-cover" />
                </div>
                <div className="flex gap-3 mb-4">
                    <button
                        onClick={onRetake}
                        className="flex-1 border border-[#D0D7DE] bg-white text-[#374151] font-semibold py-3 rounded-xl hover:bg-gray-50 transition"
                    >
                        Retomar Foto
                    </button>
                    <button
                        onClick={onValidate}
                        disabled={isValidating}
                        className="flex-1 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-semibold py-3 rounded-xl transition active:scale-95 flex items-center justify-center gap-2"
                    >
                        {isValidating ? (
                            <>
                                <i className="bi bi-hourglass-split animate-spin"></i>
                                Validando...
                            </>
                        ) : (
                            <>
                                <i className="bi bi-check-lg"></i>
                                Validar Reciclaje
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}