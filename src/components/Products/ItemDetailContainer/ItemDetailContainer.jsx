import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleProduct from "../ItemDetailContainer/SingleProduct/SingleProduct";

const ItemDetailContainer = () => {
  const [singleProduct, setSingleProduct] = useState({});
  const {id} = useParams();
 
  //fetch para llamar a un solo producto de la API

  useEffect(() => {
    const getProduct = fetch(
      `https://fakestoreapi.com/products/${id}`,
      {
        method: "GET",
      }
    );

    getProduct
      .then((resp) => resp.json())
      .then((data) => {
        setSingleProduct(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
  return (
    <div className="d-flex justify-content-center bg-opacity-50 bg-secondary">
      <SingleProduct  product={singleProduct} />
    </div>
  );
};

export default ItemDetailContainer;
