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
import Form from "./components/Form";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import { set } from "react-hook-form";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";

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

  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 550, category: "Utilities" },
    { id: 2, description: "bbb", amount: 150, category: "Entertainment" },
    { id: 3, description: "ccc", amount: 450, category: "Groceries" },
    { id: 4, description: "ddd", amount: 350, category: "Utilities" },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("");
  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <>
      {/* <Alert text="Hello World" />
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
      <Form></Form> */}

      <div className="container-small">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
        <ExpenseList
          expenses={visibleExpenses}
          onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
        ></ExpenseList>
      </div>
    </>
  );
}

export default App;
