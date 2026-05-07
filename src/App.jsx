import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header"
import Home from "./pages/Home";
import DashboardHome from "./pages/DashboardHome";
import Login from "./auth/Login";
import Registre from "./auth/Register";
import Footer from "./components/Footer";
import Map from "./pages/Map";


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
      </Routes>
    </>
  );
}

export default App;