import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./App.css";
import Home from "./pages/Home";
import Path from "./pages/Path";
import Portafolio from "./pages/Portafolio";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-path" element={<Path />} />
        <Route path="/portafolio" element={<Portafolio />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
