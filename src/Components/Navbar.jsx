import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Context/cart-context";

function Navbar() {
  const { cartItems } = useContext(CartContext);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav>
      <Link to="/">Home</Link> | 
      <Link to="/shop">Shop</Link> | 
      <Link to="/cart">Cart ({totalItems})</Link>
    </nav>
  );
}

export default Navbar;