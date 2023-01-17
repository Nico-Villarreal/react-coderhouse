import { useEffect, useState } from "react";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";

const Home = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const getProducts = fetch("https://fakestoreapi.com/products");
    getProducts
      .then((resp) => resp.json())
      .then((data) => {
        setProductList(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="m-5 bg-secondary bg-opacity-50 rounded p-3">
      <ItemDetailContainer productos={productList} />
    </div>
  );
};

export default Home;
