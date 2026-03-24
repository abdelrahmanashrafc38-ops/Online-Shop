import { useContext } from "react";
import { CartContext } from "../Context/cart-context";

function Cart() {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
  } = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h1>Cart</h1>

      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} style={{ marginBottom: "20px" }}>
              <h3>{item.title}</h3>
              <p>${item.price}</p>

              <div>
                <button onClick={() => decreaseQuantity(item.id)}>
                  -
                </button>

                <span style={{ margin: "0 10px" }}>
                  {item.quantity}
                </span>

                <button onClick={() => increaseQuantity(item.id)}>
                  +
                </button>
              </div>

              <button onClick={() => removeItem(item.id)}>
                Remove
              </button>
            </div>
          ))}

          <h2>Total: ${totalPrice.toFixed(2)}</h2>
        </>
      )}
    </div>
  );
}

export default Cart;