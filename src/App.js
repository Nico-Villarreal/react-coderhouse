import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <header className="App-header">
        <NavBar/>
      </header>

        <Home/>
 
      <Footer />

    </BrowserRouter>
  );
}

export default App;
