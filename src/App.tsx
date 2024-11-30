import { useState } from "react";
import Message from "./Message";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup"; //import the ListGroup using index.ts
import "./App.css";
import { BsFillCalendarFill } from "react-icons/bs";
import Like from "./components/Like/Like";

function App() {
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
    </>
  );
}

export default App;
