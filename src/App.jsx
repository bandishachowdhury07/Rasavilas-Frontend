import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Navbar from "./Shared/NavBar/Navbar";
import Dashboard from "./pages/Dashboard/Dashboard";
import Cart from "./pages/Dashboard/Cart";
import History from "./pages/Dashboard/History";
import Gethelp from "./pages/Dashboard/Gethelp";
import Setting from "./pages/Dashboard/Setting";
import Footer from "./Shared/Footer/Footer";
import Recipe from "./pages/Dashboard/Recipe/Recipe";

function App() { 
  return (
    <div className="min-h-screen flex flex-col bg-secondary">
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="cart" element={<Cart />} />
            <Route path="history" element={<History />} />
            <Route path="gethelp" element={<Gethelp />} />
            <Route path="setting" element={<Setting />} />
          </Route>
          <Route path="/recipe" element={<Recipe />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
