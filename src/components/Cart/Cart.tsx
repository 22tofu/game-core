import React from "react";

interface Props {
  cartItems: string[];
  onClear: () => void;
  addCartItem: () => void;
}

function Cart({ cartItems, onClear, addCartItem }: Props) {
  return (
    <>
      <div>Cart</div>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={addCartItem}>Add Item</button>
      <br />
      <button onClick={onClear}>Clear</button>
    </>
  );
}

export default Cart;
