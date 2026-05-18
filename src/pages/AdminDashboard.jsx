import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminStats from "../components/Admin/AdminStats";
import UsersList from "../components/Admin/UsersList";
import ReportsList from "../components/Admin/ReportsList";

export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState("overview");
    const navigate = useNavigate();

    const handleLogout = () => {
        console.log("Cerrando sesión...");
        localStorage.clear();
        navigate("/login");
    };

    return (
        <div className="min-h-screen bg-[#F9FAFB]">
            <div className="bg-white border-b border-[#E0E5EB] sticky top-0 z-50">
                <div className="w-full px-8">
                    <div className="flex items-center justify-between py-4 border-b border-[#E0E5EB]">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                                <img src="../src/assets/logo.png" alt="" />
                            </div>
                            <h1 className="text-2xl font-bold text-[#141B21]">CleanPoints</h1>
                            <span className="ml-2 px-3 py-1 bg-[#199A61] text-white text-xs font-bold rounded-full">
                                ADMIN
                            </span>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="flex items-center gap-2 px-4 py-2 bg-red-50 hover:bg-red-100 text-red-600 font-semibold rounded-lg transition"
                        >
                            <i className="bi bi-box-arrow-right"></i>
                            Cerrar Sesión
                        </button>
                    </div>
                    <div className="py-6">
                        <h2 className="text-3xl font-bold text-[#141B21]">Panel de Administración</h2>
                        <p className="text-[#6B7280] text-sm mt-1">Gestiona usuarios, reportes y estadísticas de CleanPoints</p>
                    </div>

                    <div className="flex gap-4 border-t border-[#E0E5EB] -mx-8 px-8 overflow-x-auto">
                        <button
                            onClick={() => setActiveTab("overview")}
                            className={`px-6 py-3 font-semibold border-b-2 transition whitespace-nowrap ${
                                activeTab === "overview"
                                    ? "border-[#199A61] text-[#199A61]"
                                    : "border-transparent text-[#6B7280] hover:text-[#141B21]"
                            }`}
                        >
                            <i className="bi bi-bar-chart mr-2"></i>
                            Resumen
                        </button>
                        <button
                            onClick={() => setActiveTab("users")}
                            className={`px-6 py-3 font-semibold border-b-2 transition whitespace-nowrap ${
                                activeTab === "users"
                                    ? "border-[#199A61] text-[#199A61]"
                                    : "border-transparent text-[#6B7280] hover:text-[#141B21]"
                            }`}
                        >
                            <i className="bi bi-people mr-2"></i>
                            Usuarios
                        </button>
                        <button
                            onClick={() => setActiveTab("reports")}
                            className={`px-6 py-3 font-semibold border-b-2 transition whitespace-nowrap ${
                                activeTab === "reports"
                                    ? "border-[#199A61] text-[#199A61]"
                                    : "border-transparent text-[#6B7280] hover:text-[#141B21]"
                            }`}
                        >
                            <i className="bi bi-flag mr-2"></i>
                            Reportes
                        </button>
                    </div>
                </div>
            </div>
            <main className="w-full px-8 py-8">
                {activeTab === "overview" && <AdminStats />}
                {activeTab === "users" && <UsersList />}
                {activeTab === "reports" && <ReportsList />}
            </main>

        </div>
    );
}