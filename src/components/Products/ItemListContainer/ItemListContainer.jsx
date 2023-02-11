import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import AllProducts from "../../Products/ItemListContainer/AllProducts/AllProducts";
import { useParams } from "react-router-dom";
import {  getFirestore,  getDocs,  collection,  query,  where} from "firebase/firestore";

const ItemListContainer = () => {
  const [productList, setProductList] = useState([]);
  const { category } = useParams();

  //Llamando a Firebase para poder ver la info de los items

  const getProducts = () => {
    const dataBase = getFirestore();
    const querySnapshot = collection(dataBase, "products");

    if (category) {
      const newQuery = query(
        querySnapshot,
        where("categoryId", "==", category)
      );

      getDocs(newQuery)
        .then((response) => {
          const data = response.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          });
          setProductList(data);
        })
        .catch((error) => console.log(error));
    } else {
      getDocs(querySnapshot)
        .then((response) => {
          const data = response.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          });
          setProductList(data);
        })
        .catch((error) => console.log(error));
    }
  };

  useEffect(() => { 
    getProducts();
  }, [category]);

  
  return (
    <div className=" m-5 bg-secondary bg-opacity-50 rounded p-3 border border-dark border-3">
      <h1 className="text-center m-5">Catalogo de Productos</h1>
      <div className="detail ">
        {productList.map((allProducts) => (
          <AllProducts key={allProducts.id} allProducts={allProducts} />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
