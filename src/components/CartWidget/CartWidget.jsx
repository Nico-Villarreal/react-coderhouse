import { useContext, useEffect, useState } from "react";
import { CartContext } from "../Context/CartContext";

const CartWidget = () =>{
    const {cart} = useContext(CartContext)

    const[total, setTotal] = useState(0)
    useEffect(() =>{
        setTotal(
            cart?.reduce((prev, curr) =>{
                return prev + curr.quantity;
            }, 0)
        )
    }, [cart])
    return(
        <div className="bg-white px-2 py-1 rounded-2" >
            <img src="https://raw.githubusercontent.com/Nico-Villarreal/JavaScript-Coderhosue/main/img/carrito.webp" alt="logo-carrito" />
            <span >
                {total}
            </span>
        </div>

    );
};

export default CartWidget;