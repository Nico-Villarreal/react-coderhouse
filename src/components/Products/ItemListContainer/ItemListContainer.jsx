import { useEffect, useState } from "react";
import "./ItemListContainer.css";
import AllProducts from "../../Products/ItemListContainer/AllProducts/AllProducts";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [productList, setProductList] = useState([]);
  const [productFilter, setproductFilter] = useState([]);
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

  //useEffect para poder filtrar por categoria utilizando el API
  useEffect(() => {
    if (category) {
      const removeCharterts = category?.includes("%20")
        ? category.replace("%20", " ")
        : category;
      const filterProducts = productList.filter(
        (productList) => productList.category === removeCharterts
      );
      setproductFilter(filterProducts);
    }
  }, [category]);

  return (
    <div className=" m-5 bg-secondary bg-opacity-50 rounded p-3">
      <h1 className="text-center m-5">Catalogo de Productos</h1>
      <div className="detail">
        {(category ? productFilter : productList).map((allProducts) => (
          <AllProducts key={allProducts.id} allProducts={allProducts} />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
