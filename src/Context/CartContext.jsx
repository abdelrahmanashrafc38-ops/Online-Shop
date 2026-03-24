import { useState } from "react";
import { CartContext } from "./cart-context";


function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(product, quantity) {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);

      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
  }
  function increaseQuantity(id) {
  setCartItems((prev) =>
    prev.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  );
}
function decreaseQuantity(id) {
  setCartItems((prev) =>
    prev
      .map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0) 
  );
}
function removeItem(id) {
  setCartItems((prev) => prev.filter((item) => item.id !== id));
}

  return (
    <CartContext.Provider value={{ cartItems, addToCart,increaseQuantity,decreaseQuantity,removeItem }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;