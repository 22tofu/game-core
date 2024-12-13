import { useState } from "react";
import Message from "./Message";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup"; //import the ListGroup using index.ts
import "./App.css";
import { BsFillCalendarFill } from "react-icons/bs";
import Like from "./components/Like/Like";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart/Cart";
import produce from "immer";

function App() {
  const [cartItems, setCartItems] = useState([
    "Product1",
    "Product2",
    "Product3",
  ]);

  const handleCart = () => {
    setCartItems([...cartItems, "wew"]);
  };

  const handleSelectItem = (name: string) => {
    console.log(name);
  };
  let listItems = [
    { id: 1, name: "New York" },
    { id: 2, name: "San Francisco" },
    { id: 3, name: "Tokyo" },
    { id: 4, name: "London" },
    { id: 5, name: "Paris" },
  ];

  const [message, showMessage] = useState(false);

  return (
    <>
      {/* <Alert text="Hello World" /> */}
      <ListGroup
        items={listItems}
        header="Cities"
        onSelectItem={handleSelectItem}
      />
      {message && (
        <Alert onClose={() => showMessage(false)} text="Button Clicked"></Alert>
      )}
      <Button
        text="Click Me"
        color="primary"
        onClickEvent={() => showMessage(true)}
      />
      <br />
      <Like onClickEvent={() => console.log("liked")} />

      <NavBar cartItemsCount={cartItems.length} />
      <Cart
        cartItems={cartItems}
        // addCartItem={() => setCartItems([...cartItems, "New Product"])}
        addCartItem={handleCart}
        onClear={() => setCartItems([])}
      />
    </>
  );
}

export default App;
