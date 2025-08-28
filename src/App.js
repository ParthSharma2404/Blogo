import "./App.css";
import Navigation from "./Navigation.js";
import Footer from "./Footer.js";
import Home from "./Home.js";
import Aboutblogo from "./Aboutblogo.js";
import Login from "./Login.js";
import Dashboard from "./Dashboard.js";
import Registeration from "./Registeration.js";
import AllBlogs from "./AllBlogs.js"; // Import the new component
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const isAuthenticated = () => !!localStorage.getItem("token");

  return (
    <div className="text-[#1c2e35] dark:bg-[#1c2e35] dark:text-white min-h-screen">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Aboutblogo />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={isAuthenticated() ? <Dashboard /> : <Navigate to="/login" />}
          />
          <Route path="/register" element={<Registeration />} />
          <Route path="/all-blogs" element={<AllBlogs />} /> {/* New route */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;