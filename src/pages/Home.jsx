import { useEffect, useState } from "react";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";

const Home = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const getProducts = fetch("https://fakestoreapi.com/products", {
      method: "GET",
    });
    getProducts
      .then((resp) => resp.json())
      .then((data) => {
        setProductList(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="m-5 bg-secondary bg-opacity-50 rounded p-3">
      {productList.map((producto) => (
        <ItemListContainer key={producto.name} producto={producto} />
      ))}
    </div>
  );
};

export default Home;
