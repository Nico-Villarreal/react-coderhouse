import { useContext } from "react";
import { CartContext } from "../components/Context/CartContext";

const Cart = () => {
  const { cart, deleteItem } = useContext(CartContext);
  console.log(cart);
  return (
    <div>
      {cart.map((product) => (
        <div className="m-5 p-5 border-top border-dark">
          <div
            key={product.id}
            className="d-flex justify-content-between align-items-center"
          >
            <div className="d-flex border border-dark p-3 rounded">
              <img src={product.image} alt={product.id} width="150px" />
            </div>
            <div className="d-flex">
              <h1 className="text-center">{product.name}</h1>
            </div>
            <div className="d-flex">
              <h2>{product.quantity} </h2>
            </div>
            <div className="d-flex">
              <h2>{product.price} </h2>
            </div>
            <div className="d-flex">
              <button
                onClick={() => deleteItem(product.id)}
                className="rounded fw-bolder h-50 p-2"
              >
                Eliminar producto
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
