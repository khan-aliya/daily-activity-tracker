import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Activities from "./pages/Activities";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />

        <div className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/activities" element={<Activities />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
