import { useEffect, useState } from "react";
import "./ItemListContainer.css";
import AllProducts from "../../Products/ItemListContainer/AllProducts/AllProducts";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [productList, setProductList] = useState([]);
  const { category } = useParams();

  //fecth para llamar a todos los productos de la API
  useEffect(() => {
    const getProducts = fetch("https://fakestoreapi.com/products", {
      method: "GET",
      headers: {
        "content-type": "json",
      },
    });
    getProducts
      .then((resp) => resp.json())
      .then((data) => {
        setProductList(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    const removeCharterts = category?.includes('%20')
      ? category.replace('%20', ' ')
      : category;
    const filterProducts = productList.filter(
      (productList) => productList.category === removeCharterts
    );
    setProductList(filterProducts);
  }, [category]);

  return (
    <div className="detail m-5 bg-secondary bg-opacity-50 rounded p-3">
      {productList.map((allProducts) => (
        <AllProducts key={allProducts.id} allProducts={allProducts} />
      ))}
    </div>
  );
};

export default ItemListContainer;
