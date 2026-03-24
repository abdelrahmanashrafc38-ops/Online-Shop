import { useState, useContext } from "react";
import { CartContext } from "../Context/cart-context";

function ProductCard({ product }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);

  function increase() {
    setQuantity((prev) => prev + 1);
  }

function decrease() {
  setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
}

 function handleChange(e) {
  const value = Number(e.target.value);
  if (isNaN(value)) return;    
  if (value < 1) return;      
  if (value > 99) return;      
  setQuantity(value);
}

  function handleAddToCart() {
    addToCart(product, quantity);
  }

  return (
    <div className="card">
      <h3>{product.title}</h3>
      <img src={product.image} width="100" />
      <p>${product.price}</p>

      <div>
        <button onClick={decrease}>-</button>
        <input type="number" value={quantity} onChange={handleChange} />
        <button onClick={increase}>+</button>
      </div>

      <button onClick={handleAddToCart}>Add To Cart</button>
    </div>
  );
}

export default ProductCard;