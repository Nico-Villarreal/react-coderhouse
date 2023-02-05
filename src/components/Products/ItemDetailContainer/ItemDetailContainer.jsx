import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleProduct from "../ItemDetailContainer/SingleProduct/SingleProduct";
import { getFirestore, getDoc, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [singleProduct, setSingleProduct] = useState({});
  const { id } = useParams();

  //fetch para llamar a un solo producto de la API

  const getProducts = () => {
    const dataBase = getFirestore();
    const querySnapshot = doc(dataBase, "products", id);

    getDoc(querySnapshot)
      .then((response) => {
        console.log(response.data());
        setSingleProduct({ id: response.id, ...response.data() });
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="d-flex justify-content-center bg-opacity-50 bg-secondary">
      <SingleProduct product={singleProduct} />
    </div>
  );
};

export default ItemDetailContainer;
