import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import ItemListContainer from "./components/Products/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/Products/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <BrowserRouter>
      <header className='App-header'>
        <NavBar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="catalogo" element ={<ItemListContainer/> }/>
        <Route path="catalogo/item/:id" element ={<ItemDetailContainer/> }/>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
