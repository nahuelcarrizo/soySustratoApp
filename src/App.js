import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import './App.css';
import ItemDetailContainer from "./components/ItemDetailContainer";
import React, {useState} from 'react';


function App() {
  
  const [montarDetails, setMontarDetails] = useState(false)

    console.log(montarDetails);
  
    return (<>

    <NavBar />
    
    
    {montarDetails ? <ItemDetailContainer />: <ItemListContainer detalles={setMontarDetails} />}
    
  </>
  );
}

export default App;
  