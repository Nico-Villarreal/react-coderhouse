import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const CartWidget = () =>{
    const {cart} = useContext(CartContext)
    
    return(
        <div className="bg-white px-2 py-1 rounded-2" >
            <img src="https://raw.githubusercontent.com/Nico-Villarreal/JavaScript-Coderhosue/main/img/carrito.webp" alt="logo-carrito" />
            <span >
                {cart.length}
            </span>
        </div>

    );
};

export default CartWidget;