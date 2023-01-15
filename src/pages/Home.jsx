import { useEffect, useState } from "react";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import "./Home.css"

const Home = () => {
  const [productList, setProductList] = useState([]);

  const getProduct = fetch("https://fakestoreapi.com/products", {
    method: "GET",
  });
  useEffect(() => {
    getProduct
      .then((resp) => resp.json())
      .then((data) => {
        setProductList(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="home my-5">
      {productList.map((product) => (
        <ItemListContainer key={product.id} productItem={product} />
      ))}
    </div>
  );
};

export default Home;
