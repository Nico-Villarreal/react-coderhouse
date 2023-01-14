import "./App.css";
import LogoApp from "./components/LogoApp/LogoApp";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <header className="App-header">
        <LogoApp />
        <NavBar />
      </header>
      <main className="mx-5 my-3 ">
        <h1>E-commerce de Armas de Aire Comprimido</h1>
        <section className="d-flex gap-5 justify-content-center m-5">
          <ItemListContainer
            arma="HK-USP"
            precio="5000"
            imagen="https://raw.githubusercontent.com/Nico-Villarreal/Armas-Airsoft/master/img/HK-USP.webp"
            description="Pistola semiautomatica liviana"
          />
          <ItemListContainer
            arma="DESERT EAGLE"
            precio="6000"
            imagen="https://raw.githubusercontent.com/Nico-Villarreal/Armas-Airsoft/master/img/DESERT-EAGLE.webp"
            description="Psitola semiautomatica de gran calibre"
          />
          <ItemListContainer
            arma="MAGNUM 44."
            precio="7000"
            imagen="https://raw.githubusercontent.com/Nico-Villarreal/Armas-Airsoft/master/img/MAGNUM-44.webp"
            description="Revolver semiautomatico de gran calibre"
          />
          <ItemListContainer
            arma="GLOCK 17"
            precio="5500"
            imagen="https://raw.githubusercontent.com/Nico-Villarreal/Armas-Airsoft/master/img/GLOCK-17.webp"
            description="Pistola semiautomatica liviana de buean precision"
          />
          <ItemListContainer
            arma="AR-15"
            precio="6500"
            imagen="https://raw.githubusercontent.com/Nico-Villarreal/Armas-Airsoft/master/img/AR15.webp"
            description="Fusil de calibre medio, de alta precision"
          />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
