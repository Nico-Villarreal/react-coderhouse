import { useContext, useState, useEffect } from "react";
import { CartContext } from "../components/Context/CartContext";
import {  collection,  addDoc,  getFirestore,  doc,  updateDoc} from "firebase/firestore";
import CarritoVacio from "../components/CarritoVacio/CarritoVacio";
import Swal from "sweetalert2";

const Cart = () => {
  const { cart, deleteItem, clear } = useContext(CartContext);
  const [order, setOrder] = useState({});
  const [formValue, setFormValue] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const dataBase = getFirestore();

  useEffect(() => {
    setOrder({
      buyer: {
        name: "",
        phone: "",
        email: "",
      },
      item: cart.map((product) => {
        const { name, price, id } = product;
        return { name, price, id };
      }),
      total: cart.reduce(
        (productPass, productNow) =>
          productPass + productNow.price * productNow.quantity,
        0
      ),
    });
  }, [cart]);

  if (cart.length === 0) {
    return (
      <CarritoVacio/>
    );
  }

  const createOrder = (event) => {
    event.preventDefault();
    console.log(formValue);
    const querySnapshot = collection(dataBase, "orders");

    const currentOrder = {
      ...order,
      buyer: formValue,
    };

    addDoc(querySnapshot, currentOrder)
      .then((response) => {
        if( formValue.name === "" || formValue.phone === "" || formValue.email === "" ){
          Swal.fire("Rellena el Formulario", "Debes completar los campos vacios", "error");
        }else{
        Swal.fire(
          'Compra realziada con exito',
          ('Tu id de compra es: '+ response.id),
          'success',
          setTimeout (() => {
            updateStock();
        }, 3500)
        )};

      })
      .catch((error) => console.log(error));
  };

  const updateStock = () => {
    cart.forEach((product) => {
      const querySnapshot = doc(dataBase, "products", product.id);

      updateDoc(querySnapshot, {
        stock: product.stock - product.quantity,
      })
        .then(() => {
          console.log("Se actualizo el stock");
        })
        .catch((error) => console.log(error));
    });
    clear();
  };
  console.log(cart);

  const inputChange = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="d-flex clomun">
      <div className="border border-3 border-dark rounded-3 m-5 p-5 bg-secondary bg-opacity-25">
        {cart.map((product) => (
          <table key={product.id}>
            
            <tr className="border-bottom border-dark">
              <td>
                <h2 className="text-center m-3">Item</h2>
              </td>
              <td>
                <h2 className="text-center m-3">Detalle</h2>
              </td>
              <td>
                <h2 className="text-center m-3">Cantidad</h2>
              </td>
              <td>
                <h2 className="text-center m-3">Precio</h2>
              </td>
              <td>
                <h2 className="text-center m-3">Total</h2>
              </td>
            </tr>
            <tr className="border-bottom border-dark">
              <td>
                <img src={product.image} alt={product.id} width="150px" className="m-5"/>
              </td>
              <td>
                <h2 className="text-center m-5">{product.name}</h2>
              </td>
              <td>
                <h2 className="m-5 text-center">{product.quantity} </h2>
              </td>
              <td>
                <h2 className="m-5 text-center">{"$"+ product.price} </h2>
              </td>
              <td>
                <h2 className="m-5 text-center">{"$"+ product.price * product.quantity}</h2>
              </td>
              <td>
                <button onClick={() => 
                  Swal.fire({
                    title: 'Esta Seguro',
                    text: "Deberas agregarlo nuevamente si deseas comprarlo",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Si, eliminar'
                  }).then((result) => {
                    if (result.isConfirmed) {
                      Swal.fire(
                        'Eliminado!',
                        'Tu carrito se encuentra vacio',
                        'success'
                      )
                      deleteItem(product.id)}
                  })} 
                  
                  className="rounded fw-bolder h-50 p-3 m-5 bg-danger text-white">
                  Eliminar
                </button>
              </td>
            </tr>
          </table>
        ))}
        <div className="d-flex justify-content-center">
          <div>
            <button onClick={ clear} className="rounded fw-bolder mt-3 p-3 bg-warning text-dark">
              Vaciar Carrito
            </button>
          </div>
        </div>
      </div>
      <div className="m-5 d-flex">
        <form className="border border-3 p-3 border-dark rounded-3 justify-content-center d-flex row bg-secondary bg-opacity-25">
        <h2 className="text-center p-3">Debes completar los datos para finalizar tu Compra</h2>
          <input
            name="name"
            type="text"
            placeholder="name"
            className="m-3 rounded w-75"
            value={formValue.name}
            onChange={inputChange}
          ></input>
          <input
            name="phone"
            type="number"
            placeholder="phone"
            className="m-3 rounded w-75"
            value={formValue.phone}
            onChange={inputChange}
          ></input>
          <input
            name="email"
            type="email"
            placeholder="email"
            className="m-3 rounded w-75"
            value={formValue.email}
            onChange={inputChange}
          ></input>
          <div className="d-flex justify-content-center">
            <button
              onClick={createOrder}
              className="rounded fw-bolder h-50 p-2 m-3 bg-success text-white"
            >
              Finalizar Compra
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Cart;
//
