import './App.css';
import LogoApp from './components/LogoApp';
import Navigation from './components/Navigation';
import Checkout from './components/Checkout';

function App() {
  return (
    <body>
      <header className="App-header">
        <LogoApp />
        <Navigation />
        <Checkout />
      </header>
      <main>
        <h1>
          E-commerce de Armas de Aire Comprimido
        </h1>
        <p>
            El proyecto final de este curso sera crear un E-commerce de armas de airsoft como asi tambien ofrecer distintos campos de juego para poder elegir a la hora de jugar, asimismo se tratara de crear un carrito de compra para cuando se logren elegir los articulos se pueda proceder al pago de los productos. 
        </p>
      </main>
      <footer>  
        
      </footer>
    </body>
  );
}

export default App;
