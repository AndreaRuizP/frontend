import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header"
import Home from "./pages/Home";
import DashboardHome from "./pages/DashboardHome";
import Login from "./auth/Login";
import Registre from "./auth/Register";
import Footer from "./components/Footer";
import Map from "./pages/Map";
import Challenge from "./pages/Challenge";
import Marketplace from "./pages/Marketplace";
import DarkMode from "./components/DarkMode";
import ScanQR from "./pages/ScanQR";
import Profile from "./pages/Profile";
import CapturePhoto from "./pages/CapturePhoto";

function App() {
  const location = useLocation();
  const hideFooter = ["/login", "/register"].includes(location.pathname);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registre />} />
        <Route path="/dashboard" element={<DashboardHome />} />
        <Route path="/map" element={<Map />} />
        <Route path="/retos" element={<Challenge />}></Route>
        <Route path="/marketplace" element={<Marketplace />}></Route>
        <Route path="/scan" element={<ScanQR />}></Route>
        <Route path="/capture-photo" element={<CapturePhoto />} />
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </>
  );
}

export default App;