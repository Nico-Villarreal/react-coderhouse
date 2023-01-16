import { useEffect, useState } from "react";
import "./ItemListContainer.css";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";

const Home = () => {
  const [productList, setProductList] = useState([]);

  const getProducts = fetch("https://fakestoreapi.com/products", {
    method: "GET",
  });
  useEffect(() => {
    getProducts
      .then((resp) => resp.json())
      .then((data) => {
        setProductList(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="home m-5">
      {productList.map((product) => (
        <ItemDetailContainer key={product.id} productItem={product} />
      ))}
    </div>
  );
};

export default Home;
