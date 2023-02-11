import { useState } from "react";
import { CartContext } from "./CartContext";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {

    let newCart;
    let product = cart.find((prod) => prod.id === item.id);
    if (product) {
      product.quantity += quantity;
      if(product.quantity > product.stock){
        alert("No contamos con stock suficiente")
        return;
      }
      newCart = [...cart];
    } else {
      product = {
        id: item.id,
        name: item.title,
        price: item.price,
        description: item.description,
        quantity: quantity,
        image: item.imageId,
        category: item.categoryId,
        stock: item.stock
      };
      newCart = [...cart, product];
      console.log(cart);
    }
    setCart(newCart);
  };

  const clear = () => {
    setCart([]);
  };

  const deleteItem = (id) => {
    setCart(cart.filter((product) => product.id !== id));
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, clear, deleteItem }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
