import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import HamburgerMenu from "../components/HamburgerMenu";
import UserHeader from "../components/UserHeader";
import Sidebar from "../components/Sidebar";
import ValidationResult from "../components/ValidationResult";
import PhotoPreview from "../components/PhotoPreview";
import CameraCapture from "../components/CameraCapture";
import QRDetectedPrompt from "../components/QRDetectedPrompt";

export default function CapturePhoto() {
    const [searchParams] = useSearchParams();
    const qrCode = searchParams.get("qr") || "CONTENEDOR-DESCONOCIDO";

    const [menuOpen, setMenuOpen] = useState(false);
    const [showCamera, setShowCamera] = useState(false);
    const [photoCapture, setPhotoCapture] = useState(null);
    const [validationResult, setValidationResult] = useState(null);
    const [isValidating, setIsValidating] = useState(false);
    const [cameraError, setCameraError] = useState(null);

    const handleValidatePhoto = async () => {
        setIsValidating(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        setValidationResult({
            success: true,
            title: "¡Reciclaje Validado!",
            points: 46,
            message: "Material reciclable detectado correctamente"
        });
        setIsValidating(false);
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
                    {validationResult && <ValidationResult {...validationResult} />}

                    {photoCapture && !validationResult && (
                        <PhotoPreview
                            photo={photoCapture}
                            qrCode={qrCode}
                            onRetake={() => setPhotoCapture(null)}
                            onValidate={handleValidatePhoto}
                            isValidating={isValidating}
                        />
                    )}

                    {showCamera && !photoCapture && (
                        <CameraCapture
                            onCapture={(photo) => {
                                setPhotoCapture(photo);
                                setShowCamera(false);
                            }}
                            onCancel={() => setShowCamera(false)}
                            cameraError={cameraError}
                            setCameraError={setCameraError}
                        />
                    )}

                    {!showCamera && !photoCapture && !validationResult && (
                        <QRDetectedPrompt
                            qrCode={qrCode}
                            onOpenCamera={() => setShowCamera(true)}
                        />
                    )}
                </main>
            </div>
        </div>
    );
}