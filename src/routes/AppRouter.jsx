import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Paintings from "../pages/Paintings/Paintings";
import History from "../pages/History/History";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="obras" element={<Paintings />} />
      <Route path="historia" element={<History />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
