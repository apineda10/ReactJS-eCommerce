import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/*COMPONENTS*/
import NavBar from './components/navbar';
import Home from './pages/Home';
import CardDetail from './components/card-detail';
import ItemListContainer from './components/itemListContainer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">    
        
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categoria/:categoria" element={<ItemListContainer />} />
          <Route path="/Detalle/:id" element={<CardDetail />} />       
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
