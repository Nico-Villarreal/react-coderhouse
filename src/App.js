//data CSS
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

//components this proyect
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/Products/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/Products/ItemDetailContainer/ItemDetailContainer";
import CartProvider from "./components/Context/CartProvider";

//pages
import Home from "./pages/Home";
import Catalogo from "./pages/Catalogo";
import Contacto from "./pages/Contacto";
import Ayuda from "./pages/Ayuda";
import Encontranos from "./pages/Encontranos";
import Error from "./pages/Error";
import Cart from "./pages/Cart";

//react router from pages
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <header className="App-header">
          <NavBar />
        </header>
        <Routes>
          <Route path="*" element={<Error />} />
          <Route path="/" element={<Home />} />
          <Route path="catalogo" element={<Catalogo />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="ayuda" element={<Ayuda />} />
          <Route path="encontranos" element={<Encontranos />} />
          <Route path="catalogo/:category" element={<ItemListContainer />} />
          <Route path="catalogo/item/:id" element={<ItemDetailContainer />} />
          <Route path="cart" element={<Cart/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
