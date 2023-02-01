import './App.css';
import { useState } from 'react';/*hook - permite modificar el estado de un componente*/
import NavBar from './components/navbar';
import Modal from './components/modal';
import ItemListContainer from './components/itemListContainer';

function App() {
  const [modalOpen, setModalOpen]= useState(true)
  const eventoClickModal = () =>{setModalOpen(false)} 
  

  /******NAVBAR******/
  const itemsNavBar=['Vinos','Whiskies','Spirits','Cervezas','Promociones']
  return (
    <div className="App">
      <header className="App-header">
        <Modal child="Sos mayor de 18 años?" isOpen={modalOpen} actionModal={eventoClickModal} />
        <NavBar items={itemsNavBar}/>
      </header>
      <body>
        <ItemListContainer tittle={"BIENVENIDOS"}/>
      </body>
    </div>
  );
}

export default App;
