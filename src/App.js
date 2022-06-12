//@ts-check
import Navbar from "./components/Navbar";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tienda from './components/Tienda';
import Shop from "./components/Shop/Shop";
import Home from "./components/Home";



export default function App() {
  return (<>
  <BrowserRouter>
  <Navbar />
    <Routes>
    <Route path="/home" element={<Home />} />
      <Route path="/tienda" element={<Tienda />} />
      <Route path="/shop/shop" element={<Shop />} />

    </Routes>
  </ BrowserRouter>
  </>
  );
}
