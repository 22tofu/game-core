import { useState } from "react";

interface Items {
  id: number;
  name: string;
}
interface ListProps {
  items: Items[];
  header: string;
  onSelectItem: (name: string) => void;
}

function ListGroup({ items, header, onSelectItem }: ListProps) {
  let [selectedItem, setSelectedItem] = useState<number>(-1);

  return (
    <>
      <h1>{header}</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item) => {
          return (
            <li
              className={
                selectedItem === item.id
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={item.id}
              onClick={() => {
                setSelectedItem(item.id);
                onSelectItem(item.name);
              }}
            >
              {item.name}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ListGroup;
