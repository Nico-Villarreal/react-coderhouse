import ProductDetail from "../ProductDetail/ProductDetail";
import "./ItemDetailContainer.css";

function CardItem({ productos }) {
  return (
    <div className="detail">
      {productos.map((products) => (
        <ProductDetail key={products.id} products={products} />
      ))}
    </div>
  );
}
export default CardItem;
