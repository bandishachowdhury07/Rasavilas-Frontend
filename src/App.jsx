import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Navbar from "./Shared/NavBar/Navbar";
import Dashboard from "./pages/Dashboard/Dashboard";
import Cart from "./pages/Dashboard/Cart";
import History from "./pages/Dashboard/History";
import Gethelp from "./pages/Dashboard/Gethelp";
import Setting from "./pages/Dashboard/Setting";
import Login from "./pages/Login/Login";
import Footer from "./Shared/Footer/Footer";
import Recipe from "./pages/Dashboard/Recipe/Recipe";

function App() { 
  return (
    <div className=" ">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}>
          <Route path="/dashboard/cart" element={<Cart></Cart>}></Route>
          <Route
            path="/dashboard/history"
            element={<History></History>}
          ></Route>
          <Route
            path="/dashboard/gethelp"
            element={<Gethelp></Gethelp>}
          ></Route>
          <Route
            path="/dashboard/setting"
            element={<Setting></Setting>}
          ></Route>
        </Route>
        <Route path="/recipe" element={<Recipe />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
