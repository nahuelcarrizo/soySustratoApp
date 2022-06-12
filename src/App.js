import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import './App.css';
import ItemDetailContainer from "./components/ItemDetailContainer";
import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  
  const [montarDetails, setMontarDetails] = useState(false)

    console.log(montarDetails);
  
    return (<>
  <BrowserRouter />
    <NavBar />
    
    
    {montarDetails ? <ItemDetailContainer />: <ItemListContainer detalles={setMontarDetails} />}
    <BrowserRouter />
  </>
  );
}

export default App;
  