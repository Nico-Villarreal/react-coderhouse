import { useEffect, useState } from "react";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";

const ItemListContainer = () => {
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
    <div className="m-5">
      <ItemDetailContainer productos={productList} />
    </div>
  );
};

export default ItemListContainer;
