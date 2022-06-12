import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/ItemListContainer" element={<ItemListContainer />} />
          <Route
            path="/ItemDetailContainer/:id"
            element={<ItemDetailContainer />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
