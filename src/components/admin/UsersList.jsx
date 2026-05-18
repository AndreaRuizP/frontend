import { useState } from "react";

export default function UsersList() {
    const [searchTerm, setSearchTerm] = useState("");
    const [users] = useState([
        {
            id: 1,
            name: "Juan García",
            email: "juan@email.com",
            qrsScanned: 45,
            pointsEarned: 2250,
            joinDate: "2024-01-15",
            status: "active"
        },
        {
            id: 2,
            name: "María López",
            email: "maria@email.com",
            qrsScanned: 89,
            pointsEarned: 4450,
            joinDate: "2024-01-10",
            status: "active"
        },
        {
            id: 3,
            name: "Carlos Rodríguez",
            email: "carlos@email.com",
            qrsScanned: 23,
            pointsEarned: 1150,
            joinDate: "2024-02-01",
            status: "active"
        },
        {
            id: 4,
            name: "Ana Martínez",
            email: "ana@email.com",
            qrsScanned: 156,
            pointsEarned: 7800,
            joinDate: "2023-12-20",
            status: "active"
        },
        {
            id: 5,
            name: "Pedro Sánchez",
            email: "pedro@email.com",
            qrsScanned: 0,
            pointsEarned: 0,
            joinDate: "2024-02-10",
            status: "inactive"
        }
    ]);

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-6">
            <div className="relative">
                <i className="bi bi-search absolute left-4 top-1/2 transform -translate-y-1/2 text-[#9CA3AF]"></i>
                <input
                    type="text"
                    placeholder="Buscar usuario por nombre o email..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-[#E0E5EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#199A61] focus:border-transparent"
                />
            </div>
            <div className="bg-white rounded-2xl border border-[#E0E5EB] shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-[#F9FAFB] border-b border-[#E0E5EB]">
                            <tr>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-[#6B7280] uppercase">Usuario</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-[#6B7280] uppercase">QR Escaneados</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-[#6B7280] uppercase">Puntos Ganados</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-[#6B7280] uppercase">Fecha de Registro</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-[#6B7280] uppercase">Estado</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-[#6B7280] uppercase">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredUsers.map(user => (
                                <tr key={user.id} className="border-b border-[#E0E5EB] hover:bg-[#F9FAFB] transition">
                                    <td className="px-6 py-4">
                                        <div>
                                            <p className="font-semibold text-[#141B21]">{user.name}</p>
                                            <p className="text-sm text-[#6B7280]">{user.email}</p>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <p className="font-semibold text-[#199A61]">{user.qrsScanned}</p>
                                    </td>
                                    <td className="px-6 py-4">
                                        <p className="font-semibold text-[#141B21]">{user.pointsEarned.toLocaleString()}</p>
                                    </td>
                                    <td className="px-6 py-4 text-[#6B7280]">
                                        {new Date(user.joinDate).toLocaleDateString("es-ES")}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                            user.status === "active"
                                                ? "bg-emerald-50 text-emerald-700"
                                                : "bg-gray-100 text-gray-700"
                                        }`}>
                                            {user.status === "active" ? "Activo" : "Inactivo"}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <button className="text-[#199A61] hover:text-[#178353] font-semibold text-sm transition">
                                            Ver Detalles
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4">
                <p className="text-[#199A61] font-semibold">
                    Mostrando {filteredUsers.length} de {users.length} usuarios
                </p>
            </div>
        </div>
    );
}