import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"
import "./ItemListContainer.css";

const ItemListContainer = (productos) => {
  <div className="detail">
    {productos.map((productos) => (
      <ItemDetailContainer key={productos.id} products={productos} />
    ))}
  </div>;
};

export default ItemListContainer;

