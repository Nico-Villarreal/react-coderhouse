import { useContext } from "react";
import { CartContext } from "../components/Context/CartContext";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { useState } from "react";

const Cart = () => {
  const { cart, deleteItem } = useContext(CartContext);
  const [ order, setOrder ] = useState({});

  if (cart.length === 0) {
    return (
      <h1 className="m-5 p-5 text-center"> No hay elementos en el carrito </h1>
    );
  }

  const createOrder = () => {
    console.log("hola");
    const dataBase = getFirestore();
    const querySnapshot = collection(dataBase, "orders");

    const newOrder ={
      buyer: {
        name: "diego",
        phone: "+541132556",
        email: "test@test.com",
      },
      item: cart.map((product) => {
        const { name, price, id} = product;
        return {
          name,
          price,
          id
        }
      }),
      total: cart.reduce((productPass, productNow) => productPass + productNow.price * productNow.quantity, 0),
    }
    setOrder(newOrder);

    addDoc(querySnapshot, order)
      .then((response) => {
        console.log(response.id);
        alert("orden creada con exito, id " + response.id);
      })
      .catch((error) => console.log(error));
  };

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
                className="rounded fw-bolder h-50 p-2 m-2"
              >
                Eliminar producto
              </button>
            </div>
          </div>
        </div>
      ))}
      <div>
        <button
          onClick={createOrder}
          className="rounded fw-bolder h-50 p-2 m-2"
        >
          Crear Compra
        </button>
      </div>
    </div>
  );
};

export default Cart;
